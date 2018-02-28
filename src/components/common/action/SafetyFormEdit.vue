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
			    <el-input type="textarea" v-model="item.problem"></el-input>
			</el-form-item>
			<el-form-item label="图片：" prop="images" class="images">
				<img v-if="item.state!==-1" src="static/images/sys/over.png" alt="" class="hege"/>
			    <el-upload

				  action="/liquid/images"
				  list-type="picture-card"
				  :on-preview="handlePictureCardPreview"
				  :on-change="imageChange"
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
		 
		<div class="btns">
			<div class="addproblem" @click="addproblem">
				问题加一
			</div>
			<div v-if="delebtn" class="delproblem" @click="delproblem">
				问题减一
			</div>
            <el-button class="yes" type="primary" @click="onSubmit('form')">确认</el-button>
            <el-button class="no" @click="cancel('form')">取消</el-button>
        </div>
		
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
 		delebtn(){
			if(this.formdatas.problems.length>1){
				return true;
			}else{
				return false;
			}
		},
		problems(){
			var problems=[];
			this.$refs.upload.forEach((value,index)=>{
				var obj={};
				obj.problem=value.data.problem;
				obj.images=value.uploadFiles;
				problems.push(obj)
			})
			return problems;
		}
    },
    data() {
    	// 普通文本的验证
            var validateText = ( rule, value, callback ) => {
                var str =/^[^'"#$%&\^*》>,."<《？，。！@#￥%……’”：/；]+$/;
                if(!value){
                     return callback(new Error("请输入内容"));
                }else if(!str.test(value)){
                    return callback(new Error("请不要输入特殊的字符"))
                }else{
                    callback()
                }
            }
            // 下拉框
            var validateSelect = ( rule, value, callback ) => {
                if(!value){
                    return callback(new Error("必须选择"))
                }else{
                    callback()
                }
            }
            // 电话
            var validatePhone = ( rule, value, callback ) => {
                var str = /^1[3|4|5|8][0-9]\d{4,8}$/
                if(!value){
                    return callback(new Error("手机号不能为空"))
                }else if(!str.test(value)){
                    return callback(new Error("手机号不对"))
                }else{
                    callback()
                }
            }
            // 邮箱
            var validateEmily = ( rule, value, callback ) => {
                var str = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ 
                if(!value){
                    return callback(new Error("邮箱不能为空"))
                }else if(str.test(value)){
                    return callback(new Error("邮箱不正确"))
                }else{
                    return callback()
                }
            }
        return {
			problemStatic:'all',
	        dialogImageUrl: '',
	        dialogVisible: false,
	        labelWidth:'2rem',
	        errorinline:false,
	        disabled:true,    
	        rules: {
                text: [
                    {validator:validateText,trigger:'blur'}
                ],
                select:[
                    {validator:validateSelect,trigger:'blur'}
                ],
                ctime:[
                    {validator:validateText,trigger:'blur'}
                ],
	            status: [
                    {validator:validateText,trigger:'blur'}
                ],
	            nid: [
                    {validator:validateText,trigger:'blur'}
                ],
	            checkregion:[
                    {validator:validateSelect,trigger:'blur'}
                ],
	            pnumber:[
                    {validator:validateText,trigger:'blur'}
                ],
	            varieties:[
                    {validator:validateText,trigger:'blur'}
                ],
	            quality:[
                    {validator:validateText,trigger:'blur'}
                ],
	            weight:[
                    {validator:validateText,trigger:'blur'}
                ],
	            region:[
                    {validator:validateSelect,trigger:'blur'}
                ],
//	            harvestdate: '2017',//收货年度
	            samplingdate:[
                    {validator:validateText,trigger:'blur'}
                ],
//	            remarks: '',//备注
                
            }
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
		onSubmit(formname) {
//      	console.log(this.formdatas.form)
            this.$refs[formname].validate((valid) => {
                if (valid) {
//                  alert('submit!');
                    this.$emit('submit')
//					window.history.go(-1)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        cancel(formname) {
            console.log('取消!');
			this.$refs[formname].resetFields();
//          this.$emit('btn_close')
			window.history.go(-1)
        },
//	       问题加一
		addproblem(){
//			formdatas.form.problems.'+index+'.problem
			var flag=true;
			this.formdatas.problems.forEach(function(value,index){
				if(!value.problem){
					flag=false;
				}
			})
			if(flag){
				this.$emit('addproblem');				
			}else{
				 this.$message('请完善问题详情！！！');
			}
//			if(){
//				
//			}else{				
//			}
		},
//		问题减一
		delproblem(){
			this.$emit('delproblem');
		},
		imageChange(file, fileList){
			this.$emit('changeProblems',this.problems);
//	    	console.log(file, fileList);
//	    	console.log(this.$refs.upload[0].data.problem)
//			console.log(this.problems)
//	    	console.log(this.formdatas.form.problems[0].images)
	    },
    }

}
</script>

