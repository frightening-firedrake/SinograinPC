<template>
  <div class="role_adds option_title_agg">
    <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
    <!--<lemon-option-title :actions="title_actions" ></lemon-option-title>-->
		<lemon-option-title  :actions="title_actions" v-on:btn_hidden="btn_hid" v-on:btn_scaling="btn_scaling" v-on:btn_close="btn_close"></lemon-option-title>		
    <lemon-upload-excel :upload="upload"></lemon-upload-excel> 
  </div>
</template>
<script>
import LemonUploadExcel  from "@/components/common/action/UploadExcel"
import LemonOptionTitle from "@/components/common/action/OptionTitle"
import LemonBreadcrumb from '@/components/common/action/Breadcrumb.vue';

export default {
    components:{ LemonUploadExcel,LemonOptionTitle,LemonBreadcrumb },
    methods:{
    	btn_hid:function(){
    	
    	},
    	btn_scaling:function(){
    	
    	},
    	btn_close:function(){
    		
    	},
		},
    data() {
      	return {
      		breadcrumb:{
		      	search:true,
		      	
		    },
	      	title_actions:{
	      		hid:true,
	      		scaling:true,
	      		close:true,
	      	},
	      	upload:{
      	    	action:'',//文件提交地址
      	    	multiple:true,//同时多文件上传
      	    	limit:5,//上传数量限制
      	    	auto:false,//自动上传      	    
      	    	accept:".xla,.xls,.xlc,.xlt,.xlsx,.xlw",//可上传的文件后缀名
      	    	tip:"*仅支持excel文件格式导入；*文件<50KB",//文件提示信息
      	    }
	    }
    }   
}
</script>