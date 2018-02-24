<template>
    <el-form ref="form" :inline-message="errorinline" class="sampling"  :model="formdatas.form" :label-width="labelWidth">
        <template>
            <p>{{formdatas.title}}</p>
        </template>      
       
		<el-form-item label="被查库点：" prop="checkregion"  v-bind:class="{disabled:disabled}">
		    <el-select v-model="formdatas.form.checkregion" placeholder="选择库点" :disabled="disabled">
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
		    <el-input v-model="formdatas.form.pnumber" :disabled="disabled"></el-input>
		</el-form-item>
		<el-form-item label="问题状态：" class="full">
		    <el-radio-group v-model="problemStatic" text-color="white" fill="#1bb45f" @change="problemStatusChange">
				<el-radio-button v-for="item in formdatas.statusItems" :key="item.label" :label="item.label">{{item.text}}</el-radio-button>			    
			</el-radio-group>
		</el-form-item>
		<!--问题组-->
		
		
		<template v-for="(item, index) in formdatas.form.problems">
			<el-form-item label="创建时间：" class="full">
				<p>{{item.createTime}}</p>		    	
		    </el-form-item>
			<el-form-item 
				:label="'问题' + (index+1)+'：'" 
				:prop="'problems.'+index+'.problem'" 
				class="problem" 
				:rules="{
			      required: true, message: '请填写问题详情', trigger: 'blur'
			    }">
			    <el-input type="textarea" v-model="item.problem"></el-input>
			</el-form-item>
			<el-form-item label="图片：" prop="images" class="images">
			    <el-upload
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
			<el-form-item label="" class="full">
		    	<el-button class="yes" type="primary" @click="st('form')">待解决</el-button>
		    </el-form-item>
		</template>
        <div class="clear"></div>
    </el-form>
</template>

<script>
import "@/assets/style/common/Form.css";
export default {
    props: ["formdatas"],
    created(){
    	console.log(this.formdatas)
    },
    mounted: function() {
//		console.log(this.formdatas)
    },
    computed:{
 
    },
    data() {
        return {
			problemStatic:'全部',
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

    }

}
</script>

