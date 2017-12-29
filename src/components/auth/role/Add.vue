<template>
  <div class="role_add option_title_agg">
    <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
    <!--<lemon-option-title  :actions="title_actions" ></lemon-option-title>-->
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
            label:"角色名称",
            text:"",
            type:"text",
            default:"请输入角色名称"
          },
          fath:{
            label:"父级角色",
            text:"",
            type:"select",
            selected:"选择父级角色",
            childrens:[
              {
                label:"角色列表",
                value:1
              },
              {
                label:"首页",
                value:2
              }
            ]
          },
          rely:{
            label:"依赖角色",
            text:"",
            type:"select",
            selected:"选择依赖角色",
            childrens:[
              {
                label:"依赖角色列表",
                value:"1"
              },
              {
                label:"首页",
                value:"2"
              }
            ]
          },
          num:{
            label:"最大限制用户数",
            type:"number",
            text:1,
            min:1,
            max:10
          },
          remarks:{
            label:"备注",
            text:"",
            type:"remarks",
            default:"请输入备注"
          }
        }
      }
    },
    
}
</script>
