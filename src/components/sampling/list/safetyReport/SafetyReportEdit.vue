<template>
    <div class='listpagewrap'>
      <!--面包屑-->
      <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
  	  <!--标题-->
  	  <sinograin-option-title :title="subtitle" v-on:titleEvent="titleEvent"></sinograin-option-title>		
      <!--提示-->
      <sinograin-prompt :alerts="alerts"></sinograin-prompt>
      <!--表单-->
      <safety-form-edit :formdatas="formdatas" :problemFilter="problemFilter" @problemStatusChange="problemStatusChange" @pass="pass" @addsafety="addsafety"></safety-form-edit> 
      <!--通知弹框-->
      <sinograin-message v-if="messageShow" :messages="messages" v-on:messageclick="messageclick" v-on:messageClose="messageClose"></sinograin-message>
    </div>
</template>

<style>
	
</style>

<script>

import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import SafetyFormEdit  from "@/components/common/action/SafetyFormEdit"
import SinograinOptionTitle from "@/components/common/action/OptionTitle"
import SinograinMessage from "@/components/common/action/Message"

import "@/assets/style/common/list.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
//本地测试要用下面import代码
import data from '@/util/mock';



export default {
  components: {
    SinograinPrompt,SinograinBreadcrumb,SinograinOptionTitle,SafetyFormEdit,SinograinMessage
  },
  computed:{
	...mapState(["modal_id_number","viewdata","editdata","aultdata","messions","mask"]),
	...mapGetters(["modal_id"]),
//	问题筛选
	problemFilter(){
		if(this.problemStatus=="all"){
			return this.formdatas.problems
		}else{			
			return this.formdatas.problems.filter((item)=>{
				return item.state==this.problemStatus;
			})
		}
	}
  },
  created(){
  	console.log(this.$route.query)
//  获取列表数据（第一页）

	this.getdata()
	this.getSafetyData()


  },
  destroy(){

  },
  methods: {
  	...mapMutations(['create_modal_id','is_mask','create_modal','close_modal']),
  	...mapActions(['addAction']),


 //	获取安全报告数据
  	getSafetyData(){
		  var params = {}
		  params.sampleId = this.$route.query.id
  		// 获取列表数据（第？页）
		this.$http({
		    method: 'post',
			url: this.dataSafetyURL,
			transformRequest: [function (data) {
			// Do whatever you want to transform the data
			let ret = ''
			for (let it in data) {
			ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
			}
			return ret
			}],
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: {
				params:JSON.stringify(params)
			}
	    }).then(function (response) {
		  console.log(response)
		  this.formdatas.problems = response.data.rows
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
//	获取样品数据
  	getdata(){

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
	passProblem(id){
		this.$http({
		    method: 'post',
			url: this.passURL,
			transformRequest: [function (data) {
				// Do whatever you want to transform the data
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
			}],
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: {
			    problemId: id,
			}
	    }).then(function (response) {
		  	
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
  	messageclick(type){
  		if(type=="confirm"){

//			this.passProblem(id)
			var id=this.passProblemId;
			console.log(id)
	  		this.formdatas.problems.forEach((value)=>{
	  			if(value.problemId==id){
	  				value.state=1;
	  			}
	  		})
  		}else if(type=="error"){
//			console.log(type)  			
  		}
  	},
  	messageClose(){
  		this.messageShow=false;
  	},
//问题加一
	addproblem(){
		var item={
          		problem: '',//问题
          		images: [],//图片
            };
		this.formdatas.form.problems.push(item);
	},
	titleEvent(){
  		console.log('titleEvent');
  	},
  	problemStatusChange(filterStatus){
  		this.problemStatus=filterStatus;
  	},
//	问题通过处理事件
  	pass(id){
  		this.messageShow=true;
  		this.passProblemId=id;
  	},

//	新建安全报告
  	addsafety(){
    	this.$router.push({path: '/index/sampling/libraryList/samplingList/sampleShowList/safetyReportCreate',query:{id:this.$route.query.id,libraryName:this.$route.query.libraryName,position:this.$route.query.position}})
  	}
  },

  data() {
    return {
      dataURL:'api/grain/sample/get',
	  dataSafetyURL: 'api/grain/safetyReport/data',
	  editURL: 'api/grain/safetyReport/edit',
      searchURL:'/liquid/role2/data/search',
      passURL:'/liquid/role2/data/delete',
      problemStatus:'all',
      passProblemId:'',
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
//    通知弹窗
 	  messageShow:false,
	  messages:{
	  	type:'confirm',
	  	confirm:{
	  		icon:'el-icon-success',
	  		messageTittle:'确认此问题已解决?',
	  		messageText:'此操作不可逆，请慎重操作',
	  		buttonText:'确认',
	  	},
	  },
      formdatas: {
      	title:'安全报告',
      	statusItems:[
      		{label:'all',text:'全部'},
      		{label:-1,text:'待解决'},
      		{label:1,text:'已解决'},
      	],
      	form:{
          checkregion: '沁县库区',//被查库点
          pnumber: '漫水-1',//货位号          
      	},
      	problems:[
      		{
      			problem: '5465435212',//问题
      			images: [
      			{name: 'safty.jpg', url:'static/images/test/safty.jpg'},
      			{name: 'safty.jpg', url:'static/images/test/safty.jpg'},
      			],//图片
      			state:-1,
      			createTime:'2017-9-25',
      			problemId:'01',
      		},
      		{
      			problem: '5465435212',//问题
      			images: [
      			{name: 'safty.jpg', url:'static/images/test/safty.jpg'},
      			{name: 'safty.jpg', url:'static/images/test/safty.jpg'},
      			],//图片
      			state:1,
      			createTime:'2017-9-25',
      			problemId:'02',
      		}
          
      	],
	  }
    }
  }
}
</script>

