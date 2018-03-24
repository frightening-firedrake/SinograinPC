<template>
    <div class='listpagewrap'>
      <!--面包屑-->
      <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
  	  <!--标题-->
  	  <sinograin-option-title :title="subtitle" v-on:titleEvent="titleEvent"></sinograin-option-title>		
      <!--提示-->
      <!--<sinograin-prompt :alerts="alerts"></sinograin-prompt>-->
      <!--表单-->
      <sample-print-list :listdatas="listdatas" :checkAllList="checkAllList" :checkList="checkList" v-on:print="print"></sample-print-list> 
      <!--通知弹框-->
      <sinograin-message v-if="messageShow" :messages="messages" v-on:messageclick="messageclick" v-on:messageClose="messageClose"></sinograin-message>
	  <!--底部按钮-->
      <tfoot-buttons :tfbtns="tfbtns" @tfootEvent="tfootEvent" ></tfoot-buttons>
	  
    </div>
</template>

<style>
	
</style>

<script>

import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import SamplePrintList  from "@/components/common/action/SamplePrintList.vue"
import SinograinOptionTitle from "@/components/common/action/OptionTitle"
import SinograinMessage from "@/components/common/action/Message"
import TfootButtons from '@/components/common/action/TfootButtons.vue';

import "@/assets/style/common/SamplePrintList.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
//本地测试要用下面import代码
//import data from '@/util/mock';



export default {
  components: {
    SinograinPrompt,SinograinBreadcrumb,SinograinOptionTitle,SamplePrintList,SinograinMessage,TfootButtons
  },
  computed:{
	...mapState(["modal_id_number","viewdata","editdata","aultdata","messions","mask"]),
	...mapGetters(["modal_id"]),
//	计算检测项目并排序
	checkList(){
		if(this.checkeds){
			var indexs=this.checkeds.split(',');
			indexs.sort((a,b)=>{return a-b});
			return indexs
		}
	},
  },
  created(){
//	console.log(this.$route.params.code)//这就是扫到的条码
//  获取列表数据（第一页）
//	this.getlistdata(1)
	if(!this.$route.params.code){
		this.$router.push({name:"样品检测/分装小样管理"})		
	}else{
		
	}

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
			transformRequest: [function (data) {
				// Do whatever you want to transform the data
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
			}],
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data:{
    			sampleNum:this.$route.params.code,				
			},
	   }).then(function (response) {	    	
	    	this.checkeds=response.data.checkeds
			console.log(this.checkeds)
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
  	print(checked){
//		console.log('打印'+checked+'检测条码')
  		this.messageShow=true;
  		this.messages.type="loading";
  		this.getPrintCode(checked);		
  	},
  	printAll(){
//		console.log('打印'+checked+'检测条码')
  		this.messageShow=true;
  		this.messages.type="loading";
  		this.getPrintCodeAll();		
  	},
  	getPrintCode(checked){
  		var wind = window.open("",'newwindow', 'height=300, width=700, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no'); 		
  		this.$http({
		    method: 'post',
			url: this.getPrintCodeURL,
			transformRequest: [function (data) {
				// Do whatever you want to transform the data
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
			}],
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data:{
//  			checked:checked,				
    			sampleNum:this.$route.params.code,				
			},
	   }).then(function (response) {	    	
//	    	返回打印需要的条码格式待定
//			假设是图片吧临时的
//			this.imgsrc=response.data
			this.printBar(wind);
			
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
  	getPrintCodeAll(){
		var wind = window.open("",'newwindow', 'height=300, width=700, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no'); 		
  		this.$http({
		    method: 'post',
			url: this.getPrintCodeURL,
			transformRequest: [function (data) {
				// Do whatever you want to transform the data
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
			}],
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data:{
//  			checked:checked,				
    			sampleNum:this.$route.params.code,				
			},
	   }).then(function (response) {	    	
//	    	返回打印需要的条码格式待定
//			假设是图片吧临时的
//			this.imgsrc=response.data
			this.printBarAll(wind);
			
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
  	printBar(wind){
		wind.location.href = this.imgsrc;
		wind.onload=function(){
			wind.print();
			wind.close();			
		};
  	},
  	printBarAll(wind){
		wind.location.href = this.imgsrc;
		wind.onload=function(){
			console.log(123)
			wind.print();
			wind.close();			
		};
  	},
	messageclick(type){
  		if(type=="success"){
  			console.log(type)
  		}else if(type=="error"){
  			console.log(type)  			
  		}
  	},
  	messageClose(){
  		this.messageShow=false;
  	},
  	titleEvent(){
  		console.log('titleEvent');
  	},
    //	表单底部触发事件btnCenterNo btnCenterYes btnLeft btnRight btnOne
	tfootEvent(date){
		console.log(date);
		if(date=='btnCenterL'){

//			this.$router.go(-1)
		}else if(date=='btnCenterR'){

//			this.$router.go(-1)
//			window.history.go(-1)
		}else if(date=='btnLeft'){

		}else if(date=='btnRight'){
			this.printAll()
		}else if(date=='btnOne'){

		}
	},
  },
  data() {
    return {
      datalistURL:this.apiRoot +'/grain/sample/getBySampleNum',
      getPrintCodeURL:this.apiRoot +'/grain/sample/getBySampleNum',
      searchURL:'/liquid/role2/data/search',
      imgsrc:'static/images/test/code.jpg',
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
//    alerts: [{
//      title: '温馨提示：此页面灰色字为不可编辑状态!',
//      type: 'info'
//    }],
	listdatas:{
		titleLabel:'检验编号',
		title:this.$route.params.code,
		label:'检验项目',
		buttonText:false,
	},
	checkeds:this.$route.params.checkeds,
	checkAllList:["不完善颗粒、杂质、生霉粒","水分","硬度","脂肪酸值","品尝评分","卫生","加工品质"],
	  messageShow:false,
	  messages:{
	  	type:'error',
	  	success:{
	  		icon:'el-icon-success',
	  		messageTittle:'打印完成',
	  		messageText:'请收好您的条形码并注意及时粘贴',
	  		buttonText:'完成',
	  	},
	  	error:{
	  		icon:'el-icon-error',
	  		messageTittle:'打印失败',
	  		messageText:'可能由于网络的原因，请检查您的网络',
	  		buttonText:'重新打印',
	  	},
	  	loading:{
	  		icon:'el-icon-printer',
	  		messageTittle:'正在打印中...',
	  		messageText:'请您耐心等待，正在打印中...',
	  	},
	  },
	  tfbtns:{
//    	btnCenter:{
//			btnTextL:'不同意',
//			btnTextR:'同意',
//			doubleColor:true,
//		},
//		btnLeft:{
//			btnText:'打印检验项目条形码',
//		},
		btnRight:{
			btnText:'打印检验项目条形码',
		},
//		btnOne:{
//			btnText:'导出Excel表格',
//		},     	
      },
    }
  },
}
</script>

