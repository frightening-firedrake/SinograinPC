<template>
    <div class='listpagewrap'>
      <!--面包屑-->
      <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
  	  <!--标题-->
  	  <sinograin-option-title :title="subtitle" v-on:titleEvent="titleEvent"></sinograin-option-title>		
      <!--提示-->
      <!--<sinograin-prompt :alerts="alerts"></sinograin-prompt>-->
      <div class="fromwrap" style="background:rgba(241, 241, 241, 1);">  	
	      <!--表单-->
	      <hr>
	      <dscd-check-from :formdatas="formdatas.dscd"></dscd-check-from> 
	      <hr>
	      <ympcpf-check-from :formdatas="formdatas.ympcpf"></ympcpf-check-from>    
	      <hr>
	      <zfsz-check-from :formdatas="formdatas.zfsz"></zfsz-check-from>      
	      <hr>
	      <sfcd-check-from :formdatas="formdatas.sfcd"></sfcd-check-from> 
	      <hr>
	      <pcpf-check-from :formdatas="formdatas.pcpf"></pcpf-check-from> 
	      <hr>
	      <mtbr-check-from :formdatas="formdatas.mtbr"></mtbr-check-from> 
	      <hr>
	      <mtpc-check-from :formdatas="formdatas.mtpc"></mtpc-check-from> 
	      <hr>
	      <cdjl-check-from :formdatas="formdatas.cdjl"></cdjl-check-from> 
	      <hr>
	      <bwsl-check-from :formdatas="formdatas.bwsl"></bwsl-check-from> 
	      <hr>
	      <mjxsl-check-from :formdatas="formdatas.mjxsl"></mjxsl-check-from> 
	      <hr>
      </div>
    </div>
</template>

<style>
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
import data from '@/util/mock';



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
	this.getdata()

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

  },
  data() {
    return {
      datalistURL:'/liquid/role3/data',
      searchURL:'/liquid/role2/data/search',
      deleteURL:'/liquid/role2/data/delete',
      checkedId:[],
	  createlibVisible:false,
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
      	title:'中央储备粮襄垣直属库',
      	form:{
          ctime: '2017-12-12',//创建时间
          status: '未扦样',//状态
          nid: '',//迁样编号
          checkregion: '山西',//被查库点
          pnumber: '',//货位号
          varieties: '',//品种
          quality: '',//性质
          weight: '',//代表数量
          region: '山西',//产地
          harvestdate: '2017',//收货年度
          samplingdate: '',//扦样日期
          remarks: '',//备注
          
      	}
	  }
    }
  }
}
</script>

