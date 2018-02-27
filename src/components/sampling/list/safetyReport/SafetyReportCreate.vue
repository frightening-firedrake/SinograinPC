<template>
    <div class='listpagewrap'>
      <!--面包屑-->
      <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
  	  <!--标题-->
  	  <sinograin-option-title :title="subtitle" v-on:titleEvent="titleEvent"></sinograin-option-title>		
      <!--提示-->
      <sinograin-prompt :alerts="alerts"></sinograin-prompt>
      <!--表单-->
      <safety-form :formdatas="formdatas" v-on:addproblem="addproblem" @submit="submit" @delproblem="delproblem" @changeProblems="changeProblems"></safety-form> 
    </div>
</template>

<style>
	
</style>

<script>

import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import SafetyForm  from "@/components/common/action/SafetyForm"
import SinograinOptionTitle from "@/components/common/action/OptionTitle"


import "@/assets/style/common/list.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
//本地测试要用下面import代码
import data from '@/util/mock';



export default {
  components: {
    SinograinPrompt,SinograinBreadcrumb,SinograinOptionTitle,SafetyForm
  },
  computed:{
	...mapState(["modal_id_number","viewdata","editdata","aultdata","messions","mask"]),
	...mapGetters(["modal_id"]),
  },
  created(){
  	console.log(this.$route.query)
	this.formdatas.form.libraryName = this.$route.query.libraryName
	this.formdatas.form.position = this.$route.query.position
//  获取列表数据（第一页）
//	this.getlistdata(1)

  },
  destroy(){

  },
  methods: {
  	...mapMutations(['create_modal_id','is_mask','create_modal','close_modal']),
  	...mapActions(['addAction']),
//	获取列表数据方法
  	getlistdata(page){
  		this.loading=true;
  		// 获取列表数据（第？页）
		this.$http({
		    method: 'post',
			url: this.datalistURL,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: {
				sampleId:this.$route.query
			}
	    }).then(function (response) {
		  	this.formdatas=response.data.formdatas;
//		  	this.tabledatas=response.data.rows;
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
//问题加一
	addproblem(){
		var item={
          		problem: '',//问题
          		images: [],//图片
            };
		this.formdatas.form.problems.push(item);
	},
//问题减一
	delproblem(){
		this.formdatas.form.problems.pop();
	},
//	问题监视
	changeProblems(problems){
		this.formdatas.form.problems=problems;
		console.log(this.formdatas.form.problems)
	},
	titleEvent(){
  		console.log('titleEvent');
  	},
  	submit(){
  		console.log(this.formdatas.form.problems);
  	},
  },
  data() {
    return {
      datalistURL:'api/grain/safetyReport/save',
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
      	title:'安全报告',
      	form:{
          libraryName: '沁县库区',//被查库点
          position: '漫水-1',//货位号
          problems:[
          	{
          		problem: '',//问题
          		images: [

          		],//图片
          	}
          
          ],
      	}
	  }
    }
  }
}
</script>

