<template>
    <el-form ref="form" :inline-message="errorinline" class="sampling"  :model="formdatas.form" :label-width="labelWidth">
        <template>
            <p>{{formdatas.title}}</p>
        </template>      
       
		<el-form-item label="被查库点：" prop="checkregion"  v-bind:class="{disabled:disabled}">
		    <el-select v-model="formdatas.form.libraryName" placeholder="选择库点" :disabled="disabled">
		        <el-option label="本库" value="本库"></el-option>
		        <el-option label="山西屯留国家粮食储备库" value="山西屯留国家粮食储备库"></el-option>
		        <el-option label="山西长治国家粮食储备库" value="山西长治国家粮食储备库"></el-option>
		        <el-option label="山西晋城国家粮食储备库" value="山西晋城国家粮食储备库"></el-option>
		        <el-option label="长子分库" value="长子分库"></el-option>
		        <el-option label="黎城分库" value="黎城分库"></el-option>
		        <el-option label="沁县分库" value="沁县分库"></el-option>	
		    </el-select>
		</el-form-item>
		<el-form-item label="货位号：" prop="pnumber"  v-bind:class="{disabled:disabled}">
		    <el-input v-model="formdatas.form.position" :disabled="disabled"></el-input>
		</el-form-item>
		<el-form-item label="问题状态：" class="full select">
			<div class="status">				
			    <el-radio-group v-model="problemStatic" text-color="white" fill="#1bb45f" @change="problemStatusChange">
					<el-radio-button v-for="item in formdatas.statusItems" :key="item.label" :label="item.label">{{item.text}}</el-radio-button>			    
				</el-radio-group>
			</div>
		</el-form-item>
		<!--问题组-->
		
		
		<template v-for="(item, index) in problemFilter">
			<el-form-item label="创建时间：" class="full disabled">
			    <el-input v-model="item.createTime" disabled></el-input>
			</el-form-item>
			<el-form-item 
				:label="'问题' + (index+1)+'：'" 
				class="problem disabled" 
				:rules="{
			      required: true, message: '请填写问题详情', trigger: 'blur'
			    }">
			    <el-input type="textarea" v-model="item.problem" disabled></el-input>
			</el-form-item>
			<el-form-item label="图片：" prop="images" class="images" disabled>
				<img v-if="item.state!==-1" src="static/images/sys/over.png" alt="" class="hege"/>
			    <el-upload
			      disabled
				  action="/liquid/images"
				  list-type="picture-card"
				  :on-preview="handlePictureCardPreview"
				  name="images1"
				  :file-list="item.images"
				  :on-remove="handleRemove">
				  <i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogVisible" size="tiny">
				  <img width="100%" :src="dialogImageUrl" alt="">
				</el-dialog>
			</el-form-item>	
			<el-form-item label="" class="full button">
				<div class="btn">					
					<el-button class="yes" type="primary" @click="pass(item.problemId)" :disabled="item.state!==-1">{{item.state==-1?'待解决':'已解决'}}</el-button>
				</div>
		    </el-form-item>
		</template>
		
		<template v-if="!problemFilter.length">
			<el-form-item label="" class="full empty">
				<div class="empty">					
					<!--佳敏说空着吧-->
				</div>
		    </el-form-item>
		</template>
		
        <div class="clear"></div>
    </el-form>
</template>
<style>
	.sampling div.status >div{
		float:left;
		/*width:2.85rem;*/
		line-height:0.48rem;
	}
	.sampling div.status >div .el-radio-group{
		float:left;
		margin-top:0.11rem;
	}
	.sampling div.status .el-radio-button{
		height:0.26rem;
		line-height:0.26rem;
		border-radius:0.04rem;
		margin-right:0.15rem;
	}
	.sampling div.status .el-radio-button__inner{
		height:0.26rem;
		line-height:0.24rem;
		border-radius:0.04rem;
		padding:0 0.14rem;
		border: solid 0.01rem #d5d5d5;
		font-size:0.14rem;
		color: #999999;
	}
	form.sampling .el-form-item.select .el-form-item__content .el-radio-group{
		margin-left:0.2rem;
	}
	form.sampling .el-form-item.images .hege{
		position:absolute;
		right:0.4rem;
		top:10%;
		height:80%;
	}
	form.sampling .button{
		height:0.78rem;
		line-height:0.78rem;
	}
	form.sampling .el-form-item.button .el-form-item__content{
		height:0.78rem;
		line-height:0.76rem;
	}
	form.sampling .btn{
		clear:both;
		padding:0;
		text-align: center;
		position:relative;
		background:#ffffff;
	}	
	form.sampling .btn button {
	    font-size: 0.18rem;
	    padding: 0rem;
	    line-height: 0.5rem;
	    border-radius: 0.1rem;
	    width:1.3rem;
	    height:0.5rem;
	    text-align: center;
	}
	form.sampling .btn button.yes {
		background-color: rgb(88,180,129);
		border-color:rgb(88,180,129);
	}
	form.sampling .btn button.yes:hover {
		background-color: rgba(88,180,129,0.8);
		border-color:#58b481;
	}
	form.sampling .btn button.is-disabled {
		background-color: #b9b9b9;
		border-color:#cccccc;
	}
	form.sampling .btn button.is-disabled:hover {
		background-color: #b9b9b9;
		border-color:#cccccc;
	}
	form.sampling .el-form-item.empty{
		height:2rem;
		line-height:2rem;
		border-bottom:1px solid #cccccc;
	}
	form.sampling .el-form-item.empty .el-form-item__content{
		height:2rem;
		line-height:2rem;
		text-align: center;
	}
</style>
<script>
import "@/assets/style/common/Form.css";
export default {
    props: ["formdatas","problemFilter"],
    created(){
//  	console.log(this.problemFilter)
    },
    mounted: function() {
//		console.log(this.formdatas)
    },
    computed:{
 
    },
    data() {
        return {
			problemStatic:'all',
	        dialogImageUrl: '',
	        dialogVisible: false,
	        labelWidth:'2rem',
	        errorinline:false,
	        disabled:true,           
        }
    },
    methods: {  
        problemStatusChange(){
    		this.$emit('problemStatusChange',this.problemStatic);
    	},
//      图片上传查看与删除
	    handleRemove(file, fileList) {
	        console.log(file, fileList);
	    },
	    handlePictureCardPreview(file, fileList) {
	        this.dialogImageUrl = file.url;
	        this.dialogVisible = true;
	    },
	    pass(id){
	    	this.$emit("pass",id)
	    },

    }

}
</script>

