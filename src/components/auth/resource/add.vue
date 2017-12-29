<template>
  <div class="resource_add option_title_agg">
    <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
    <!--<lemon-option-title :actions="title_actions"></lemon-option-title>-->
		<lemon-option-title  :actions="title_actions" v-on:btn_hidden="btn_hid" v-on:btn_scaling="btn_scaling" v-on:btn_close="btn_close"></lemon-option-title>		
    <lemon-form :forms="form"></lemon-form>
  </div>
</template>

<script>
import LemonForm from "@/components/common/action/Form"
import LemonOptionTitle from "@/components/common/action/OptionTitle"
import LemonBreadcrumb from '@/components/common/action/Breadcrumb.vue';

export default {
  components: { LemonForm, LemonOptionTitle,LemonBreadcrumb },
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
      title_actions: {
        hid: false,
        scaling: false,
        close: true,
      },
      form: {
        name: {
          label: "资源名称：",
          text: "",
          type: "text",
          default: "请输入资源名称"
        },
        fath: {
          label: "资源类型：",
          text: "",
          type: "select",
          selected: "选择资源类型",
          childrens: [
            {
              label: "资源列表",
              value: 1
            },
            {
              label: "首页",
              value: 2
            }
          ]
        },
        rely: {
          label: "父级角色：",
          text: "",
          type: "select",
          selected: "依赖父级列表",
          childrens: [
            {
              label: "资源列表",
              value: 1
            },
            {
              label: "首页",
              value: 2
            }
          ]
        },
        option: {
          type: "options",
          arr: [
            [
              {
                btn_look: true,
                readonly: false,
                label: "相关操作：",
                type: "text",
                text: "",
                default: "请输入相关操作",
              },
              {
                readonly: false,
                label: "权限许可：",
                type: "text",
                text: "",
                default: "请输入权限许可",
              },
              {
                readonly: false,
                label: "选择依赖操作：",
                type: 'select',
                text: "",
                selected: "选择资源",
              }
            ]
          ]
        }
      }
    }
  }
}
</script>
