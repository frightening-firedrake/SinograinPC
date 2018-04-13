<template>
    <div class='listpagewrap'>
      <!--面包屑-->
      <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
  	  <!--标题-->
  	  <sinograin-option-title :title="subtitle" v-on:titleEvent="titleEvent"></sinograin-option-title>		
      <!--提示-->
      <!--<sinograin-prompt :alerts="alerts"></sinograin-prompt>-->
      <!--表单-->
      <auth-form :formdatas="formdatas" @submit='submit' @actionAdd="actionAdd" @actionDel='actionDel'></auth-form> 
    </div>
</template>

<style>
	
</style>

<script>

import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import AuthForm  from "@/components/common/action/AuthForm"
import SinograinOptionTitle from "@/components/common/action/OptionTitle"


import "@/assets/style/common/list.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
//本地测试要用下面import代码
import data from '@/util/mock';



export default {
  components: {
    SinograinPrompt,SinograinBreadcrumb,SinograinOptionTitle,AuthForm
  },
  computed:{
	...mapState(["modal_id_number","viewdata","editdata","aultdata","messions","mask"]),
	...mapGetters(["modal_id"]),
  },
  created(){
  	console.log(this.$route.query)
//  获取列表数据（第一页）
//	this.getdata()

  },
  destroy(){

  },
  methods: {
  	...mapMutations(['create_modal_id','is_mask','create_modal','close_modal']),
  	...mapActions(['addAction']),
//	获取列表数据方法
  	getdata(page){
  		this.loading=true;
  		// 获取列表数据（第？页）
		this.$http({
		    method: 'post',
			url: this.datalistURL,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: {
				id:this.$route.query
			}
	    }).then(function (response) {
		  	this.formdatas=response.data.formdatas;
//	  		this.page.total=response.data.total;
		  	
	  		setTimeout(()=>{			  		
		  		this.loading=false;
		  	},1000)
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
//	获取搜索数据
  	searchingfor(searching){
  		console.log(searching);
  		// 获取列表数据（第？页）
		this.$http({
		    method: 'post',
			url: this.searchURL,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//			data: {
//			   
//			}
	    }).then(function (response) {
//		  	this.tabledatas=response.data.rows;
	  		setTimeout(()=>{			  		
		  		this.loading=false;
		  	},1000)
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
	titleEvent(){
  		console.log('titleEvent');
  	},
  	submit(data){
  		console.log(data);
  	},
  	actionAdd(){
  		var lastIndex=this.formdatas.actions.length-1;
  		var lastItem=this.formdatas.actions[lastIndex];
  		for(var key in lastItem){
  			if(!lastItem[key]){
  				this.$notify.error({
		          	title: '错误',
		          	message: '请先完善上一组操作项目'
		        });
		        return
  			}else{
  				
  			}
  		}
      	this.formdatas.actions.push({displayName:'',permission:'',operationRId:'' })
  	},
  	actionDel(){
  		this.$confirm('将删除最后一组操作项, 是否继续?', '提示', {
	      confirmButtonText: '确定',
	      cancelButtonText: '取消',
	      type: 'warning'
	    }).then(() => {
	    	this.formdatas.actions.pop()

	      	this.$message({
	        	type: 'success',
	        	message: '删除成功!'
	      	});
	    }).catch(() => {
	      this.$message({
	        type: 'info',
	        message: '已取消删除'
	      });          
	    });
  	},
  },
  data() {
    return {
      datalistURL:'/liquid/role23/data',
      searchURL:'/liquid/role2/data/search',
      deleteURL:'/liquid/role2/data/delete',
      checkedId:[],
	  createlibVisible:false,
      breadcrumb:{
      	search:false,   
      	searching:'',
      },
      subtitle:{
      	btn:false,
      	btntext:'',
      },
//    弹窗数据
      alerts: [{
        title: '温馨提示：此页面灰色字为不可编辑状态!',
        type: 'info'
      }],
      formdatas: {
      	title:'编辑资源',
      	form:{
      	  resourceName:"扦样登记列表",
      	  resourceType:"菜单",
          resourcePName:"权限管理",
      	},
      	actions:[
      		{displayName:'写点啥？',permission:'不知道',operationRId:'瞎胡写吧' }
      	],
      	labels:[
      		{label:'资源名称：',type:"input",class:'full'},
      		{label:'资源类型：',type:"select",
      			items:[
	      			{label:'菜单',value:'1'},
	      			{label:'菜单2',value:'2'},
	      			{label:'菜单3',value:'3'},
	      		],
      		},
      		{label:'父级资源：',type:"select",
      			items:[
	      			{label:'菜单',value:'1'},
	      			{label:'菜单2',value:'2'},
	      			{label:'菜单3',value:'3'},
	      		],
      		},
//    		{label:'分配角色：',type:"num",},
//    		{label:'备注：',type:"input",class:'full'},
//    		{label:'相关操作：',type:"checkbox",class:'full',
//	      		items:[
//	      			{label:'查看'},
//	      			{label:'增加'},
//	      			{label:'更改'},
//	      		],
//    		},
      	],
	  }
    }
  }
}
</script>

