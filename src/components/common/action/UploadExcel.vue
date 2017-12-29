<template>
	<div class="upload">
		<div class="title">
			<img src="static/images/sys/addrolees4.png" alt="">
		</div>
		<form>
			<div class="uploadinput">
				{{upload_filename}}
			</div>
			<div class="uploadhelp">
				<p>
					<i></i>
					<b>温馨小提示：</b>
					{{upload.tip}}
				</p>
			</div>
			
			<el-upload
			    class="upload-excel"
			    ref="upload"
			    :action="upload.action"
			    :on-preview="handlePreview"
			    :on-remove="handleRemove"
			    :multiple="upload.multiple"
			    :limit="upload.limit"
			    :show-file-list="showlist"
			    :file-list="fileList"
			    :accept="upload.accept"
			    :on-change="change"
			    :auto-upload="upload.auto">
			    <el-button slot="trigger" size="small" type="primary" class="selectfile">浏览...</el-button>
			    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload" class="uploadfile">数据导入...</el-button>
			    <div slot="tip" class="el-upload__tip" v-if="showtip">{{upload.tip}}</div>
			</el-upload>
		</form>
		<a href="javascript:;" class="link">下载excel模版</a>
	</div>
</template>

<script>
import "@/assets/style/common/UploadExcel.css"
	
	export default {

		props:['upload'],
	    data() {
	      	return {
	      		fileList: [],
				upload_filename:"",	      		
	      	    showtip:false,
	      	    showlist:false,
		    }
	    },
	    methods: {
		    submitUpload() {
			    this.$refs.upload.submit();
			},
			handleRemove(file, fileList) {
			    console.log(file, fileList);
			},
			handlePreview(file) {
			    console.log(file);
			},
			change(file, fileList){
				this.upload_filename=file.name
			}
	    }
	}
</script>
