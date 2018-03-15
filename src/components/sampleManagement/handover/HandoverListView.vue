<template>
  <div class='listpagewrap'>
    <!--面包屑-->
    <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
    <!--标题-->
    <sinograin-option-title :title="subtitle" v-on:titleEvent="titleEvent"></sinograin-option-title>
    <div id="print">
      <div class="handover_view">
        <div class="hand_view_title">
          <span>山西中储粮粮食质检中心</span>
        </div>
        <div class="hand_view_tab">
          <div class="hand_view_tab_title">
            <p>{{formdatas.sort}}样品领取交接单</p>
          </div>
          <div class="hand_view_tab_num">
            <p>编号:{{formdatas.nid}}</p>
          </div>
          <el-row class="hand_view_tab_content">
            <el-col :span="24" class="hand_view_tab_content_font">
              <el-col :span="2">
                <span>检验项目:</span>
              </el-col>
              <el-col :span="20">
                <span>{{formdatas.testList}}</span>
              </el-col>
            </el-col>
          </el-row>
          <el-row class="hand_view_tabbody">
            <el-col :span="6">
              <el-col :span="8">
                <span>序号</span>
              </el-col>
              <el-col :span="16">
                <span>样品编号</span>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-col :span="8">
                <span>序号</span>
              </el-col>
              <el-col :span="16">
                <span>样品编号</span>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-col :span="8">
                <span>序号</span>
              </el-col>
              <el-col :span="16">
                <span>样品编号</span>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-col :span="8">
                <span>序号</span>
              </el-col>
              <el-col :span="16">
                <span>样品编号</span>
              </el-col>
            </el-col>
          </el-row>
          <el-row class="hand_view_tabbody">
            <el-col :span="6" v-for="(item,index) in testItemListadd" :key="index" style="border-top:1px solid #dfdfdf;">
              <el-col :span="8">
                <span>{{index+1}}</span>
              </el-col>
              <el-col :span="16">
                <span>{{item.checkNum}}</span>
              </el-col>
            </el-col>
            
          </el-row>

          <el-row class="hand_view_tabbody">
            <el-col :span="6">
              <el-col :span="8">
                <span>领取人</span>
              </el-col>
              <el-col :span="16">
                <span>&nbsp;</span>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-col :span="8">
                <span>归还人</span>
              </el-col>
              <el-col :span="16">
                <span>&nbsp;</span>
              </el-col>
            </el-col>
            <el-col :span="12">
              <el-col :span="4">
                <span>备注</span>
              </el-col>
              <el-col :span="20">
                <span>{{formdatas.remarks}}</span>
              </el-col>
            </el-col>
          </el-row>

          <el-row class="hand_view_tabbody date">
            <el-col :span="6">
              <el-col :span="8">
                <span>领取日期</span>
              </el-col>
              <el-col :span="16">
                <span>&nbsp;</span>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-col :span="8">
                <span>归还日期</span>
              </el-col>
              <el-col :span="16">
                <span>&nbsp;</span>
              </el-col>
            </el-col>
            <el-col :span="12" style="border-left:1px solid #dfdfdf;">
              <el-col :span="4">
                <span>&nbsp;</span>
              </el-col>
              <el-col :span="20">
                <span> 样品管理员：{{formdatas.gly}} 时间： {{formdatas.time}}</span>
              </el-col>
            </el-col>
          </el-row>
        </div>
      </div>
      </div>
     <div class="leading_out" @click="print()">
        <span>打印样品领取交接单</span>
      </div>
    
  </div>
</template>

<style>

</style>

<script>

import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import SinograinOptionTitle from "@/components/common/action/OptionTitle"

import "static/jqprint/jquery.jqprint.js"
import "@/assets/style/common/handoverView.css"
import "@/assets/style/common/list.css"
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
//本地测试要用下面import代码
import data from '@/util/mock';



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
    	if(length){
		    for (var i=0;i<length;i++){
					this.formdatas.testItemList.push(item)
				}
			  return this.formdatas.testItemList
    		
    	}else{
    		return this.formdatas.testItemList    		
    	}
    	
    }
  },
  created() {
    console.log(this.$route.query)
    //  获取列表数据（第一页）
//  this.getlistdata(1)

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
    //	获取列表数据方法
    getlistdata(page) {
      this.loading = true;
      // 获取列表数据（第？页）
      this.$http({
        method: 'post',
        url: this.datalistURL,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //			data: {
        //
        //			}
      }).then(function(response) {
        this.formdatas = response.data.formdatas;
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
  },
  data() {
    return {
      datalistURL: '/liquid/role9/data',
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
        sort:'玉米',//品种
        nid:20,//编号
        testList:'检验质量、品质全项目指标',//检测项目
        //检测样品
        testItemList:[
        	{checkNum:'监20180001'},
        	{checkNum:'监20180002'},
        	{checkNum:'监20180003'},
        	{checkNum:'监20180004'},
        	{checkNum:'监20180005'},
        	{checkNum:'监20180006'},
        ],
        remarks:'分两份不完善粒平行小样，其他按国标法分样。',
        gly:'张海星',
        time:'2017-03-07',
      }
    }
  }
}
</script>

