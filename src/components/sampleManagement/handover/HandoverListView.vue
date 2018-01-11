<template>
  <div class='listpagewrap'>
    <!--面包屑-->
    <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
    <!--标题-->
    <sinograin-option-title></sinograin-option-title>
    <div id="print">
      <div class="handover_view">
        <div class="hand_view_title">
          <span>山西中储粮粮食质检中心</span>
        </div>
        <div class="hand_view_tab">
          <div class="hand_view_tab_title">
            <p>玉米样品领取交接单</p>
          </div>
          <div class="hand_view_tab_num">
            <p>编号:20</p>
          </div>
          <el-row class="hand_view_tab_content">
            <el-col :span="24" class="hand_view_tab_content_font">
              <el-col :span="2">
                <span>检验项目:</span>
              </el-col>
              <el-col :span="20">
                <span>检验质量、品质全项目指标</span>
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
            <el-col :span="6">
              <el-col :span="8">
                <span>01</span>
              </el-col>
              <el-col :span="16">
                <span>监11151658913546168</span>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-col :span="8">
                <span>02</span>
              </el-col>
              <el-col :span="16">
                <span>监11151658913546168</span>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-col :span="8">
                <span>03</span>
              </el-col>
              <el-col :span="16">
                <span>监11151658913546168</span>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-col :span="8">
                <span>04</span>
              </el-col>
              <el-col :span="16">
                <span>监11151658913546168</span>
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
                <span>分两份不完善粒平行小样，其他按国标法分样。</span>
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
            <el-col :span="12">
              <el-col :span="4">
                <span>&nbsp;</span>
              </el-col>
              <el-col :span="20">
                <span> 样品管理员：张海兴 时间： 2017.03.07</span>
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
      //    弹窗数据
      alerts: [{
        title: '温馨提示：此页面灰色字为不可编辑状态!',
        type: 'info'
      }],
      formdatas: {
        title: '中央储备粮襄垣直属库',
        form: {
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
          storageStatus: '',
          sampleInTime: "",
          position: "",
          sampleInSign: "",
        }
      }
    }
  }
}
</script>

