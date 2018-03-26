<template>
    <div class='listpagewrap'>
      <!--面包屑-->
      <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
  	  <!--标题-->
  	  <sinograin-option-title :title="subtitle" v-on:titleEvent="titleEvent"></sinograin-option-title>		
      <!--提示-->
      <!--<sinograin-prompt :alerts="alerts"></sinograin-prompt>-->
      <div class="fromwrap"  id="print" style="background:rgba(241, 241, 241, 1);">  	
	      <!--表单-->
	      <!--<hr>-->
	      <bwsl-check-from v-if="checktype=='bwsl'" :formdatas="formdatas.bwsl" @submit="submit"></bwsl-check-from> 

	      <!--<hr>-->
	      <sfcd-check-from v-if="checktype=='sfcd'" :formdatas="formdatas.sfcd" @submit="submit"></sfcd-check-from> 

	      <!--<hr>-->
	      <mjxsl-check-from v-if="checktype=='mjxs'" :formdatas="formdatas.mjxs" @submit="submit"></mjxsl-check-from> 
	      <!--<hr>-->
	      <zfsz-check-from v-if="checktype=='zfsz'" :formdatas="formdatas.zfsz" @submit="submit"></zfsz-check-from>      
	      <!--<hr>-->
	      <ympcpf-check-from v-if="checktype=='ympc'" :formdatas="formdatas.ympc" @submit="submit"></ympcpf-check-from>    
	      <!--<hr>-->
	      <mtpc-check-from v-if="checktype=='mtpc'" :formdatas="formdatas.mtpc" @submit="submit"></mtpc-check-from> 
	      <!--<hr>-->
	      <dscd-check-from v-if="checktype=='dscd'" :formdatas="formdatas.dscd" @submit="submit"></dscd-check-from> 

	      <!--<hr>-->
	      <pcpf-check-from v-if="checktype=='pcpf'" :formdatas="formdatas.pcpf" @submit="submit"></pcpf-check-from> 
	      <!--<hr>-->
	      <cdjl-check-from v-if="checktype=='cdjl'" :formdatas="formdatas.cdjl" @submit="submit"></cdjl-check-from> 
	      <!--<hr>-->
	      <mtbr-check-from v-if="checktype=='mtbr'" :formdatas="formdatas.mtbr" @submit="submit"></mtbr-check-from> 
	      <!--<hr>-->

      </div>
      <div class="checklistsavebtn">
	  	<div @click="footsave">
	  		<span>保存</span>
	  	</div>
	  </div>
    </div>
</template>

<style>
.checklistsavebtn{
	height: 0.55rem;
    line-height: 0.55rem;
    color: #333333;
    position: fixed;
    left:50%;
    bottom:10px;
    margin-left:400px;
    z-index: 6;
    text-align: center;
}
.checklistsavebtn>div{
	/*display: inline-block;*/
	float:right;
	margin:0.07rem auto 0;
	height:0.4rem;
	line-height: 0.33rem;
	/*margin:0 0 0 0.3rem;*/
	font-size: 0.24rem;
	cursor: pointer;
	background-color: #58b481;
	border-radius: 0.05rem;
	box-sizing: border-box;
	padding:0.04rem;
	color:#ffffff;
}
.checklistsavebtn>div>span{
	border:1px solid #FFFFFF;
	border-radius:0.04rem;
	padding:0 0.2rem;
	font-weight: 500;
}
.ui-body-bg{
	background:#ffffff;
	height:1108px;
	padding-top:80px;
}
.check {
	width:100%;
	height:100%;
	line-height:inherit;
	color:inherit;
	font-size:inherit;
	border:none;
	outline: none;
	text-align: center;
}
.check_checkbox{
	margin:0 3px 0 0;
	vertical-align: -2px;
}
.zw-footer .check {
	width:100px;
	height:100%;
	line-height:inherit;
	color:inherit;
	font-size:inherit;
	border:none;
	outline: none;
	text-align: left;
	padding-left:2em;
}
.ui-body-bg{
	width:840px;
	margin:auto;
	padding-bottom:20px;
	position:relative;
}
.code{
	width:150px;
	/*height:130px;*/
	position:absolute;
	top:100px;
	left:116px;
}
.zw-header p{
	display: inline-block;
	width:180px;
}
.zw-header p input{
	width:100px;
}
.zw-header p:last-of-type{
	width:150px;
}
.gongshi{
	height: 40px;
    margin: auto;
    display: block;
}
.zw-footer,.zw-header{
	padding-left:20px;
}
</style>
<script>

import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import SinograinOptionTitle from "@/components/common/action/OptionTitle"
//表各种表
import DscdCheckFrom  from "@/components/checklist/DscdCheckFrom"
import YmpcpfCheckFrom  from "@/components/checklist/YmpcpfCheckFrom"
import ZfszCheckFrom  from "@/components/checklist/ZfszCheckFrom"
import SfcdCheckFrom  from "@/components/checklist/SfcdCheckFrom"
import PcpfCheckFrom  from "@/components/checklist/PcpfCheckFrom"
import MtbrCheckFrom  from "@/components/checklist/MtbrCheckFrom"
import MtpcCheckFrom  from "@/components/checklist/MtpcCheckFrom"
import CdjlCheckFrom  from "@/components/checklist/CdjlCheckFrom"
import BwslCheckFrom  from "@/components/checklist/BwslCheckFrom"
import MjxslCheckFrom  from "@/components/checklist/MjxslCheckFrom"


import "@/assets/style/common/list.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
//本地测试要用下面import代码
//import data from '@/util/mock';



export default {
  components: {
    SinograinPrompt,SinograinBreadcrumb,SinograinOptionTitle,DscdCheckFrom,YmpcpfCheckFrom,MjxslCheckFrom,BwslCheckFrom,CdjlCheckFrom,ZfszCheckFrom,MtpcCheckFrom,SfcdCheckFrom,MtbrCheckFrom,PcpfCheckFrom
  },
  computed:{
	...mapState(["modal_id_number","viewdata","editdata","aultdata","messions","mask"]),
	...mapGetters(["modal_id"]),
    
  },
  created(){
  	console.log(this.$route.query)
//  获取列表数据（第一页）

//	this.getlistdata()
	this.setform()

	
  },
  destroy(){

  },
  methods: {
  	...mapMutations(['create_modal_id','is_mask','create_modal','close_modal']),
  	...mapActions(['addAction']),
  	//	获取列表数据方法
		getlistdata() {
			this.loading = true;
			// 获取列表数据（第？页）
			this.$http({
				method: 'post',
				url: this.datalistURL,
				transformRequest: [function (data) {
					let ret = ''
					for (let it in data) {
					ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
					return ret
				}],
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				data: {

				}
			}).then(function(response) {
				this.formdatas[this.checktype] = response.data;
				

			}.bind(this)).catch(function(error) {
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
//		console.log('titleEvent');
		this.printhtml()
  	},
  	footsave(){
  		this.$root.eventHub.$emit('printChecklist')  		
  	},
//	设置表单
	setform(){
		if(this.$route.query.sort=="小麦"){
			if(this.$route.query.checkPoint==1){
				this.checktype='bwsl';

			}else if(this.$route.query.checkPoint==2){
				this.checktype='sfcd';

			}else if(this.$route.query.checkPoint==4){
				this.checktype='mjxs';

			}else if(this.$route.query.checkPoint==5){
				this.checktype='mtpc';

			}else if(this.$route.query.checkPoint==6){
				this.checktype='dscd';

			}			
		}else if(this.$route.query.sort=="玉米"){
			if(this.$route.query.checkPoint==1){
				this.checktype='bwsl';

			}else if(this.$route.query.checkPoint==2){
				this.checktype='sfcd';

			}else if(this.$route.query.checkPoint==4){
				this.checktype='zfsz';

			}else if(this.$route.query.checkPoint==5){
				this.checktype='ympc';

			}else if(this.$route.query.checkPoint==6){
				this.checktype='dscd';

			}	
		}
		this.saveUrlcomputed()
		if(this.$route.query.smallSampleNum){
			this.formdatas[this.checktype]['smallSampleNum']=this.$route.query.smallSampleNum;
			this.formdatas[this.checktype]['smallSamplePic']=this.$route.query.smallSamplePic;
			this.formdatas[this.checktype]['sort']=this.$route.query.sort;
		}
	},
	saveUrlcomputed(){
    	if(this.checktype=='bwsl'){
			this.saveUrlend="/grain/buwanshanli/save"
		}else if(this.checktype=='sfcd'){
			this.saveUrlend="/grain/shuifen/save"
		}else if(this.checktype=='zfsz'){
			this.saveUrlend="/grain/zhifangsuanzhi/save"
		}else if(this.checktype=='mtpc'){
			this.saveUrlend="/grain/mantoupinchang/save"
		}else if(this.checktype=='dscd'){			
			this.saveUrlend="/grain/zhenjundusu/save"			
		}else if(this.checktype=='mjxs'){
			this.saveUrlend="/grain/mianjinxishuiliang/save"
		}else if(this.checktype=='ympc'){
			this.saveUrlend="/grain/yumipinchang/save"
		}
    	this.saveUrl=this.apiRoot + this.saveUrlend;
	},
	submit(jsdjg){
		for(var key in jsdjg){
			this.formdatas[this.checktype][key]=jsdjg[key]
		}	
		this.save()
	},
	save(){
		// 提交保存
		this.formdatas[this.checktype]['smallSampleId']=this.$route.query.id
		this.$http({
		    method: 'post',
			url: this.saveUrl,
			transformRequest: [function (data) {
				// Do whatever you want to transform the data
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
			}],
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data:this.formdatas[this.checktype],
	    }).then(function (response) {

		}.bind(this)).catch(function (error) {

		}.bind(this));
	},
	printhtml(){
		let subOutputRankPrint = document.getElementById('print');
      	console.log(subOutputRankPrint.innerHTML);
      	let newContent = subOutputRankPrint.innerHTML;
      	let oldContent = document.body.innerHTML;
      	document.body.innerHTML = newContent;
      	print.portrait   =  false  
      	window.print();
     	window.location.reload();
     	document.body.innerHTML = oldContent;
     	return false;
	},
	
  },
  data() {
    return {
      saveUrl:'',
      datalistURL:this.apiRoot + '/grain/sample/data',
      searchURL:'/liquid/role2/data/search',
      deleteURL:'/liquid/role2/data/delete',
      checkedId:[],
	  createlibVisible:false,
//	  类型
	  checktype:'bwsl',
	  saveUrlend:'',
      breadcrumb:{
      	search:false,   
      	searching:'',
      },
      subtitle:{
      	btn:true,
      	btntext:'打印样品检验单',
      },
//    弹窗数据
//    alerts: [{
//      title: '温馨提示：此页面灰色字为不可编辑状态!',
//      type: 'info'
//    }],
      formdatas: {
//    	不完善粒
      	bwsl:{
      		table_version:'123',
      		riqi:new Date(),
      		shiwen:'',
      		xiangduishidu:'',
      		jiancefangfa:'',
      		yiqishebei_mingcheng_1:'1',
      		yiqishebei_mingcheng_2:'1',
      		yiqishebei_mingcheng_3:'1',
      		yiqishebei_bianhao_1:'',
      		yiqishebei_bianhao_2:'',
      		yiqishebei_bianhao_3:'',
      		dayangzhiliang_1:'',
      		dayangzhiliang_2:'',
      		dayangzazhizhiliang_1:'',
      		dayangzazhizhiliang_2:'',
      		dayangzazhihanliang_1:'',
      		dayangzazhihanliang_2:'',
      		dayangzazhihanliang_pingjunzhi:'',
      		xiaoyangzhiliang_1:'',
      		xiaoyangzhiliang_2:'',
      		xiaoyangzazhizhiliang_1:'',
      		xiaoyangzazhizhiliang_2:'',
      		xiaoyangzazhihanliang_1:'',
      		xiaoyangzazhihanliang_2:'',
			xiaoyangzazhihanliang_pingjunzhi:'',
			kuangwuzhizhiliang_1:'',
			kuangwuzhizhiliang_2:'',
			kuangwuzhihanliang_1:'',
			kuangwuzhihanliang_2:'',
			kuangwuzhihanliang_pingjunzhi:'',
			zazhizongliang_1:'',
			buwanshanlizhiliang_1:'',
			buwanshanlizhiliang_2:'',
			buwanshanlihanliang_1:'',
			buwanshanlihanliang_2:'',
//			buwanshanlihanliang_pingjunzhi:'678',
			buwanshanlihanliang_pingjunzhi_1:'',
			buwanshanlihanliang_pingjunzhi_2:'',
			shengmeilizhiliang_1:'',
			shengmeilizhiliang_2:'',
			shengmeilihanliang_1:'',
			shengmeilihanliang_2:'',
			shengmeilihanliang_pingjunzhi:'',
			beizhu:'双试验结果M≤0.3    N≤0.3    A≤0.1    C≤1.0或C≤0.5',
			fenyangjiance:'',
			buwanshanli_zazhi_jiance:'',
			jiaohe:'',
			sort:'',
			smallSampleNum:'',
			smallSamplePic:'',
      	},
//    	水分测定
      	sfcd:{
      		table_version:'678',
      		riqi:new Date(),
      		shiwen:'678',
      		xiangduishidu:'678',
      		jiancefangfa:'678',
      		yiqishebei_mingcheng_1:'678',
      		yiqishebei_mingcheng_2:'678',
      		yiqishebei_bianhao_1:'678',
      		yiqishebei_bianhao_2:'678',
      		qimin_bianhao_1:'678',
      		qimin_bianhao_2:'678',
      		hongqianqiminzhiliang_1:'678',
      		hongqianqiminzhiliang_2:'678',
      		hongqianqiminzhiliang_3:'678',
      		hongqianqiminzhiliang_4:'678',
      		shiyangzhiliang_1:'678',
      		shiyangzhiliang_2:'678',
      		hengzhongqiminjishiyang_hengzhonghouzhiliang_1:'678',
      		hengzhongqiminjishiyang_hengzhonghouzhiliang_2:'678',
      		hengzhongqiminjishiyang_hengzhonghouzhiliang_3:'678',
      		hengzhongqiminjishiyang_hengzhonghouzhiliang_4:'678',
      		shuifenhanliang_1:'678',
      		shuifenhanliang_2:'678',
      		pingjunzhi:'678',
//    		pingxingcha:'678',
//    		xiangduicha:'678',
			pingxingcha_xiangduicha:'平行差',
      		pingxingcha_xiangduicha_zhi:'667',
      		beizhu:'678',
      		jiance:'678',
      		jiaohe:'678',
      		sort:'678',
			smallSampleNum:'678',
			smallSamplePic:'',
      	},
//    	面筋吸水
      	mjxs:{
      		table_version:'678',
      		riqi:new Date(),
      		shiwen:'678',
      		xiangduishidu:'678',
      		jiancefangfa:'678',
      		yiqishebei_mingcheng_1:'678',
      		yiqishebei_mingcheng_2:'678',
      		yiqishebei_mingcheng_3:'678',
      		yiqishebei_bianhao_1:'678',
      		yiqishebei_bianhao_2:'678',
      		yiqishebei_bianhao_3:'678',
      		shiyangzhiliang_1:'678',
      		shiyangzhiliang_2:'678',
      		shimianjinzhiliang_1:'678',
      		shimianjinzhiliang_2:'678',
      		ganmianjinzhiliang_1:'678',
      		ganmianjinzhiliang_2:'678',
      		mianjinxishuiliang_1:'678',
      		mianjinxishuiliang_2:'678',
      		pingjunzhiganmianjinzhiliang:'678',
      		beizhu:'678',
      		jiance:'678',
      		jiaohe:'678',
      		sort:'678',
			smallSampleNum:'678',
			smallSamplePic:'',
      	},
//    	脂肪酸值
      	zfsz:{
      		table_version:'SXZCZJ/JL008-2015',
      		riqi:new Date(),
      		shiwen:'678',
      		xiangduishidu:'678',
      		jiancefangfa:'GB/T20569-2006附录A',
      		yiqishebei_mingcheng_1:'1',
      		yiqishebei_mingcheng_2:'2',
      		yiqishebei_bianhao_1:'678',
      		yiqishebei_bianhao_2:'678',
      		shiyangzhiliang_1:'678',
      		shiyangzhiliang_2:'678',
      		shiyangshuifen:'678',
      		koh_rongyenongdu:'678',
      		didingzhongdiandushu_1:'678',
      		didingzhongdiandushu_2:'678',
      		didingqishidushu_1:'678',
      		didingqishidushu_2:'678',
      		koh_rongyeyongliang_1:'678',
      		koh_rongyeyongliang_2:'678',
      		kongbaishiyan_koh_yongliang:'678',
      		zhifangsuanzhi_1:'678',
      		zhifangsuanzhi_2:'678',
//    		pingjunzhi:'',
//    		pingxingcha:'678',
//    		xiangduicha:'678',
      		pingxingcha_xiangduicha:'平行差',
      		pingxingcha_xiangduicha_zhi:'667',
      		beizhu:'平均测定结果差值不超过2mgKOH/100g',
      		jiance:'678',
      		jiaohe:'678',
      		sort:'玉米',
			smallSampleNum:'456561',
			smallSamplePic:'',
      	},
//    	玉米品尝
      	ympc:{
      		table_version:'678',
      		riqi:new Date(),
      		shiwen:'678',
      		xiangduishidu:'678',
      		jiancefangfa:'678',
      		yiqishebei_mingcheng_1:'678',
      		yiqishebei_mingcheng_2:'678',
      		yiqishebei_bianhao_1:'678',
      		yiqishebei_bianhao_2:'678',
      		
      		beizhu:'678',
      		jiance:'678',
      		jiaohe:'678',
      		sort:'678',
			smallSampleNum:'678',
			smallSamplePic:'',
      	},
//    	馒头品尝
      	mtpc:{
      		table_version:'678',
      		riqi:new Date(),
      		shiwen:'678',
      		xiangduishidu:'678',
      		jiancefangfa:'678',
      		yiqishebei_mingcheng_1:'678',
      		yiqishebei_mingcheng_2:'678',
      		yiqishebei_bianhao_1:'678',
      		yiqishebei_bianhao_2:'678',
      		
      		beizhu:'678',
      		jiance:'678',
      		jiaohe:'678',
      		sort:'678',
			smallSampleNum:'678',
			smallSamplePic:'',
      	},
//    	毒素测定
      	dscd:{
      		table_version:'678',
      		riqi:new Date(),
      		shiwen:'678',
      		xiangduishidu:'678',
      		jiancefangfa:'678',
      		yiqishebei_mingcheng_1:'678',
      		yiqishebei_mingcheng_2:'678',
      		yiqishebei_bianhao_1:'678',
      		yiqishebei_bianhao_2:'678',
      		outudushu_1:'678',
      		outudushu_2:'678',
      		outudushu_pingjunzhi:'678',
      		huangqumeidusu_1:'678',
      		huangqumeidusu_2:'678',
      		huangqumeidusu_pingjunzhi:'678',
      		yumichimeixitong_1:'678',
      		yumichimeixitong_2:'678',
      		yumichimeixitong_pingjunzhi:'678',
      		zhequmeidusu_1:'678',
      		zhequmeidusu_2:'678',
      		zhequmeidusu_pingjunzhi:'678',
      		beizhu:'678',
      		jiance:'678',
      		jiaohe:'678',
      		sort:'678',
			smallSampleNum:'678',
			smallSamplePic:'',
      	},
//    	馒头比容
      	mtbr:{
      		table_version:'678',
      		riqi:new Date(),
      		shiwen:'678',
      		xiangduishidu:'678',
      		jiancefangfa:'678',
      		yiqishebei_mingcheng_1:'678',
      		yiqishebei_mingcheng_2:'678',
      		yiqishebei_bianhao_1:'678',
      		yiqishebei_bianhao_2:'678',
      		
      		beizhu:'678',
      		jiance:'678',
      		jiaohe:'678',
      		sort:'678',
			smallSampleNum:'678',
			smallSamplePic:'',
      	},
//    	品尝评分
      	pcpf:{
      		table_version:'678',
      		riqi:new Date(),
      		shiwen:'678',
      		xiangduishidu:'678',
      		jiancefangfa:'678',
      		yiqishebei_mingcheng_1:'678',
      		yiqishebei_mingcheng_2:'678',
      		yiqishebei_bianhao_1:'678',
      		yiqishebei_bianhao_2:'678',
      		
      		beizhu:'678',
      		jiance:'678',
      		jiaohe:'678',
      		sort:'678',
			smallSampleNum:'678',
			smallSamplePic:'',
      	},
//    	测定记录
      	cdjl:{
      		table_version:'678',
      		riqi:new Date(),
      		shiwen:'678',
      		xiangduishidu:'678',
      		jiancefangfa:'678',
      		yiqishebei_mingcheng_1:1,
      		yiqishebei_mingcheng_2:'1',
      		yiqishebei_mingcheng_3:'2',
      		yiqishebei_mingcheng_4:2,
      		yiqishebei_bianhao_1:'678',
      		yiqishebei_bianhao_2:'678',
      		yiqishebei_bianhao_3:'678',
      		yiqishebei_bianhao_4:'678',
      		rongzhong_1:'678',
      		rongzhong_2:'678',
      		rongzhong_pingjunzhi:'678',
      		sezeqiwei_1:'678',
      		sezeqiwei_2:'678',
      		sezeqiwei_pingjunzhi:'678',
      		yingduzhishu_1:'678',
      		yingduzhishu_2:'678',
      		yingduzhishu_pingjunzhi:'678',
      		pise_1:'678',
      		pise_2:'678',
      		pise_pingjunzhi:'678',
      		shuifen_1:'678',
      		shuifen_2:'678',
      		shuifen_pingjunzhi:'678',
      		dainfen_1:'678',
      		dainfen_2:'678',
      		dainfen_pingjunzhi:'678',
      		zhifang_1:'678',
      		zhifang_2:'678',
      		zhifang_pingjunzhi:'678',
      		danbai_1:'678',
      		danbai_2:'678',
      		danbai_pingjunzhi:'678',
      		shimianjin_1:'678',
      		shimianjin_2:'678',
      		shimianjin_pingjunzhi:'678',
      		chenjiangzhi_1:'678',
      		chenjiangzhi_2:'678',
      		chenjiangzhi_pingjunzhi:'678',
      		lashenchangdu_1:'678',
      		lashenchangdu_2:'678',
      		lashenchangdu_pingjunzhi:'678',
      		wendingshijian_1:'678',
      		wendingshijian_2:'678',
      		wendingshijian_pingjunzhi:'678',
      		xishuilv_1:'678',
      		xishuilv_2:'678',
      		xishuilv_pingjunzhi:'678',
      		xingchengshijian_1:'678',
      		xingchengshijian_2:'678',
      		xingchengshijian_pingjunzhi:'678',
      		beizhu:'678',
      		jiance:'678',
      		jiaohe:'678',
      		sort:'678',
			smallSampleNum:'678',
			smallSamplePic:'',
      	},
	  }
    }
  }
}
</script>

