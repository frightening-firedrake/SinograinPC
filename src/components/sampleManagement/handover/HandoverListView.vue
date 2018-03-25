<template>
  <div class='listpagewrap'>
    <!--面包屑-->
    <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
    <!--标题-->
    <sinograin-option-title :title="subtitle" v-on:titleEvent="titleEvent"></sinograin-option-title>
    <div id="print">
      <div class="handover_view" style="width:100%;">
        <div class="hand_view_title" style="width:100%;height:0.45rem;text-align:center;line-height:0.45rem;font-size:0.24rem;color:#333333;">
          <span>山西中储粮粮食质检中心</span>
        </div>
        <div class="hand_view_tab" style="">
          <div class="hand_view_tab_title" style="">
            <!--<p>{{formdatas.sort}}样品领取交接单</p>-->
            <p style="">{{formdatas.name}}</p>
          </div>
          <div class="hand_view_tab_num" style="">
            <p style="">编号:{{formdatas.nid}}</p>
          </div>
          <el-row style="" class="hand_view_tab_content">
            <el-col style="" :span="24" class="hand_view_tab_content_font">
              <el-col style="" :span="2">
                <span>检验项目:</span>
              </el-col>
              <el-col style="" :span="20">
                <span>{{formdatas.testList}}</span>
              </el-col>
            </el-col>
          </el-row>
          <el-row style="" class="hand_view_tabbody">
            <el-col style="" :span="6">
              <el-col style="" :span="8">
                <span>序号</span>
              </el-col>
              <el-col style="" :span="16">
                <span>样品编号</span>
              </el-col>
            </el-col>
            <el-col style=""  :span="6">
              <el-col style="" :span="8">
                <span>序号</span>
              </el-col>
              <el-col  style="" :span="16">
                <span>样品编号</span>
              </el-col>
            </el-col>
            <el-col style="" :span="6">
              <el-col style="" :span="8">
                <span>序号</span>
              </el-col>
              <el-col style="" :span="16">
                <span>样品编号</span>
              </el-col>
            </el-col>
            <el-col style="" :span="6">
              <el-col style="" :span="8">
                <span>序号</span>
              </el-col>
              <el-col style="" :span="16">
                <span>样品编号</span>
              </el-col>
            </el-col>
          </el-row>
          <el-row class="hand_view_tabbody" style="border-top:none;">
            <el-col :span="6" v-for="(item,index) in formdatas.testItemList" :key="index" style="border-top:1px solid #dfdfdf;">
              <el-col style="" :span="8">
                <span>{{index+1}}</span>
              </el-col>
              <el-col style="" :span="16">
                <span>{{item}}</span>
              </el-col>
            </el-col>
            <el-col style="" :span="6" v-for="(item,index) in testItemListadd" :key="index+99" style="border-top:1px solid #dfdfdf;">
              <el-col style="" :span="8">
                <span>{{index+formdatas.testItemList.length+1}}</span>
              </el-col>
              <el-col style="" :span="16">
                <span>&nbsp;</span>
              </el-col>
            </el-col>
            
          </el-row>

          <el-row style="" class="hand_view_tabbody">
            <el-col style="" :span="6">
              <el-col style="" :span="8">
                <span>领取人</span>
              </el-col>
              <el-col style="" :span="16">
                <span>&nbsp;</span>
              </el-col>
            </el-col>
            <el-col style="" :span="6">
              <el-col style="" :span="8">
                <span>归还人</span>
              </el-col>
              <el-col style="" :span="16">
                <span>&nbsp;</span>
              </el-col>
            </el-col>
            <el-col style="" :span="12">
              <el-col style="" :span="4">
                <span>备注</span>
              </el-col>
              <el-col style="" :span="20">
                <span>{{formdatas.remarks}}</span>
              </el-col>
            </el-col>
          </el-row>

          <el-row style="" class="hand_view_tabbody date">
            <el-col style="" :span="6">
              <el-col style="" :span="8">
                <span>领取日期</span>
              </el-col>
              <el-col style="" :span="16">
                <span>&nbsp;</span>
              </el-col>
            </el-col>
            <el-col style="" :span="6">
              <el-col style="" :span="8">
                <span>归还日期</span>
              </el-col>
              <el-col style="" :span="16">
                <span>&nbsp;</span>
              </el-col>
            </el-col>
            <el-col style="" :span="12" style="border-left:1px solid #dfdfdf;">
              <el-col style="" :span="4">
                <span>&nbsp;</span>
              </el-col>
              <el-col style="" :span="20">
              	<el-col style="" :span="2">
              	
              	</el-col>
              	<el-col style="" :span="10">
              			样品管理员：
              	</el-col>
              	<el-col style="" :span="2">
              	
              	</el-col>
              	<el-col style="" :span="10">
              			时间：
              	</el-col>
                <!--<span> 样品管理员：{{formdatas.gly}} 时间： {{formdatas.time}}</span>-->
              </el-col>
            </el-col>
          </el-row>
        </div>
      </div>
      </div>
     <div class="leading_out" @click="print()">
     <!--<div class="leading_out" @click="lodopPrint()">-->
        <span>打印样品领取交接单</span>
      </div>
    
  </div>
</template>

<style>
.handover_view{
    width:100%;
    /*border-right:1px solid #dfdfdf;*/
    /*border-bottom:1px solid #dfdfdf; */
    /*padding-bottom:0.2rem;*/
}
.handover_view .hand_view_title{
    width:100%;
    height:0.45rem;
    text-align:center;
    line-height:0.45rem;
    font-size:0.24rem;
    color:#333333;
}
.handover_view .hand_view_tab{
    width:100%;   
    border-bottom:1px solid #dfdfdf;
}
.handover_view .hand_view_tab .hand_view_tab_title{
    width:100%;
    height:0.62rem;
    border:1px solid #dfdfdf;
    border-bottom:none;
    background-color:#eeeeee;
    text-align:center;
    border-right:none;
    line-height:0.62rem;
    border-right:1px solid #dfdfdf;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.handover_view .hand_view_tab .hand_view_tab_title p{
    font-size:0.22rem;
}
.handover_view .hand_view_tab .hand_view_tab_num{
    width:100%;
    line-height:0.4rem;
    height:0.4rem;
    border-top:1px solid #dfdfdf;
    border-left:1px solid #dfdfdf;
    text-align:right;
    border-right:1px solid #dfdfdf;
    padding-right:1rem;
}
.handover_view .hand_view_tab .hand_view_tab_num p{
    font-size:0.18rem;
}
.handover_view .hand_view_tab .hand_view_tab_content{
    width:100%;
    border-right:1px solid #dfdfdf;
    
}
.handover_view .hand_view_tab .hand_view_tab_content .hand_view_tab_content_font{
    width:100%;
    height:0.6rem;
    border-top:1px solid #dfdfdf;
    color:#333333;
    font-size:0.18rem;
    line-height:0.6rem;
    overflow: hidden;
}
.handover_view .hand_view_tab .hand_view_tab_content .hand_view_tab_content_font .el-col-2{
    text-align:right;
    padding-right:0.2rem;
    background-color:#fbfbfb;
    border-left:1px solid #dfdfdf;
    overflow: hidden;
}
.handover_view .hand_view_tab .hand_view_tab_content .hand_view_tab_content_font .el-col-2 span{
    display:block;
    width:100%;
    height:100%;

    text-align:right;
}
.handover_view .hand_view_tab .hand_view_tab_content .hand_view_tab_content_font .el-col-20{
    padding-left:0.88rem;
    border-left:1px solid #dfdfdf;
}
.handover_view .hand_view_tab .hand_view_tabbody{
    width:100%;
    /*height:0.6rem;*/
    line-height:0.6rem;
    border-top:1px solid #dfdfdf;
    overflow: hidden;
    border-right:1px solid #dfdfdf;
    
}
.handover_view .hand_view_tab .hand_view_tabbody .el-col-8,.el-col-4{
    text-align:center;
    background-color:#fbfbfb;
    border-left:1px solid #dfdfdf;
}
.handover_view .hand_view_tab .hand_view_tabbody .el-col-8,.el-col-4,.el-col-16,.el-col-20 span{
    font-size:0.16rem;
}
.handover_view .hand_view_tab .hand_view_tabbody .el-col-16,.handover_view .hand_view_tab .hand_view_tabbody .el-col-20{
    border-left:1px solid #dfdfdf;
    text-align:center;
    background-color:white;
}
.handover_view .hand_view_tab .hand_view_tabbody.date .el-col-4{
    background-color:transparent;
    border:none;
}
.handover_view .hand_view_tab .hand_view_tabbody.date .el-col-20{
    border:none;
}

 .leading_out{
     margin-bottom:0.2rem;
    /*float: left;*/
    height: 0.4rem;
    line-height: 0.33rem;

    font-size: 0.24rem;
    cursor: pointer;
    width:auto;
    display:inline-block;
    margin-top:0.3rem;
    background-color: #58b481;
    border-radius: 0.05rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0.04rem;
    color: #ffffff;
}
 .leading_out span{
   border: 1px solid #FFFFFF;
    border-radius: 0.04rem;
    padding: 0 0.2rem;
    font-weight: 500;
    line-height:0.3rem;
    text-align:center;
    width:100%;
    height:100%;
    display:block;
}
</style>

<script>

import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import SinograinOptionTitle from "@/components/common/action/OptionTitle"
//这里是打印控件
import {getLodop} from 'static/lodop/LodopFuncs'
let LODOP

import "static/jqprint/jquery.jqprint.js"
import "@/assets/style/common/handoverView.css"
import "@/assets/style/common/list.css"
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
//本地测试要用下面import代码
//import data from '@/util/mock';



export default {
  components: {
    SinograinPrompt, SinograinBreadcrumb, SinograinOptionTitle
  },
  computed: {
    ...mapState(["modal_id_number", "viewdata", "editdata", "aultdata", "messions", "mask"]),
    ...mapGetters(["modal_id"]),
    testItemListadd(){
    	var length=4-this.formdatas.testItemList.length%4;
    	var item={checkNum:undefined}
    	var arr=[]
    	if(length){
		    for (var i=0;i<length;i++){
					arr.push(item)
				}
			  return arr
    		
    	}else{
    		return arr   		
    	}
    	
    }
  },
  created() {
    console.log(this.$route.query)
    //  获取列表数据（第一页）
    this.getlistdata(1)

  },
  destroy() {

  },
  methods: {
    ...mapMutations(['create_modal_id', 'is_mask', 'create_modal', 'close_modal']),
    ...mapActions(['addAction']),
    print() {
      // $("#print").jqprint({
      // 		 debug: false, 
      // 		 importCSS: true, 
      // 		 printContainer: true, 
      // 		 operaSupport: false
      // 		 });
      // alert(0)
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
    lodopPrint() {
    	LODOP = getLodop();

  			LODOP.PRINT_INIT("打印交接单");
//			LODOP.SET_PRINTER_INDEX("Godex G530");  
  			LODOP.SET_PRINT_PAGESIZE(2, 210, 297, "A4");
				LODOP.ADD_PRINT_HTM(88,200,350,600,document.getElementById("print").innerHTML);
    		LODOP.PREVIEW(); 
//			  LODOP.PRINT(); 

    },
    //	获取列表数据方法
    getlistdata(page) {
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
  					id:this.$route.query.id
  			}
      }).then(function(response) {
      	console.log(response.data)
      	this.formdatas.remarks=response.data.remark;//备注
//    	this.formdatas.gly="管理员"
      	this.formdatas.time=response.data.updateTime;//领取时间
      	this.formdatas.testList=this.findCheckeds(response.data.checkeds);//检测项目
      	this.formdatas.nid=response.data.id;//编号
//    	this.formdatas.sort='麦子';//品种
      	this.formdatas.name=response.data.name;//品种
      	this.formdatas.testItemList=response.data.sampleNums.split(',');//检测样品
//      this.formdatas = response.data;
        //		  	this.tabledatas=response.data.rows;
        //	  		this.page.total=response.data.total;

        setTimeout(() => {
          this.loading = false;
        }, 1000)
      }.bind(this)).catch(function(error) {
        console.log(error);
      }.bind(this));
    },
    //	获取搜索数据
    searchingfor(searching) {
      console.log(searching);
      // 获取列表数据（第？页）
      this.$http({
        method: 'post',
        url: this.searchURL,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //			data: {
        //			   
        //			}
      }).then(function(response) {
        //		  	this.tabledatas=response.data.rows;
        setTimeout(() => {
          this.loading = false;
        }, 1000)
      }.bind(this)).catch(function(error) {
        console.log(error);
      }.bind(this));
    },
	titleEvent(){
  		console.log('titleEvent');
  	},
  	findCheckeds(str){
	  	var indexs=str.split(',');
	  	var checkList=["不完善颗粒、杂质、生霉粒","水分","硬度","脂肪酸值","品尝评分","卫生","加工品质"]
	  	var res=[];
	  	indexs.forEach((item)=>{
	  		res.push(checkList[item-1])
	  	})
	  	return res.join('，')
	  },
  },
  data() {
    return {
      datalistURL: this.apiRoot +'/grain/handover/get',
      searchURL: '/liquid/role2/data/search',
      deleteURL: '/liquid/role2/data/delete',
      checkedId: [],
      createlibVisible: false,
      breadcrumb: {
        search: false,
        searching: '',
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
      	name:'',
        sort:'玉米',//品种
        nid:20,//编号
        testList:'检验质量、品质全项目指标',//检测项目
        //检测样品
        testItemList:[
   
        ],
        remarks:'分两份不完善粒平行小样，其他按国标法分样。',
        gly:'张海星',
        time:'2017-03-07',
      }
    }
  }
}
</script>

