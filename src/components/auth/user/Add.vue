<template>
  <div class="user_add option_title_agg">
    <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
    <!--<lemon-option-title :actions="title_actions" ></lemon-option-title>-->
		<lemon-option-title  :actions="title_actions" v-on:btn_hidden="btn_hid" v-on:btn_scaling="btn_scaling" v-on:btn_close="btn_close"></lemon-option-title>		
    <lemon-form :forms="form"></lemon-form> 
  </div>
</template>

<script>
import LemonForm  from "@/components/common/action/Form"
import LemonOptionTitle from "@/components/common/action/OptionTitle"
import LemonBreadcrumb from '@/components/common/action/Breadcrumb.vue';
export default {
    components:{ LemonForm,LemonOptionTitle,LemonBreadcrumb },
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
	      		hid:false,
	      		scaling:false,
	      		close:true,
	      	},
        form: {
          name: {
            label:"用户名称",
            text:"",
            type:"text",
            default:"请输入用户名称"
          },
          phone: {
            label:"联系电话",
            text:"",
            type:"text",
            default:"请输入用户联系方式"
          },
          emily: {
            label:"邮箱",
            text:"",
            type:"text",
            default:"请输入用户邮箱"
          },
          fath:{
            label:"分配用户",
            text:"",
            type:"select",
            selected:"选择分配用户",
            childrens:[
              {
                label:"用户列表",
                value:1
              },
              {
                label:"首页",
                value:2
              }
            ]
          },
        }
      }
    },
    
}
</script>
