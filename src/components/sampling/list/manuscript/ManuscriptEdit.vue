<template>
    <div class='listpagewrap'>
      <!--面包屑-->
      <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
  	  <!--标题-->
  	  <sinograin-option-title :title="subtitle" v-on:titleEvent="titleEvent"></sinograin-option-title>		
      <!--提示-->
      <sinograin-prompt :alerts="alerts"></sinograin-prompt>
      <!--表单-->
      <manuscript-form :formdatas="formdatas"></manuscript-form> 
    </div>
</template>

<style>
	
</style>

<script>

import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import ManuscriptForm  from "@/components/common/action/ManuscriptForm"
import SinograinOptionTitle from "@/components/common/action/OptionTitle"


import "@/assets/style/common/list.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
//本地测试要用下面import代码
import data from '@/util/mock';



export default {
  components: {
    SinograinPrompt,SinograinBreadcrumb,SinograinOptionTitle,ManuscriptForm
  },
  computed:{
	...mapState(["modal_id_number","viewdata","editdata","aultdata","messions","mask"]),
	...mapGetters(["modal_id"]),
  },
  created(){
  	console.log(this.$route.query)
//  获取列表数据（第一页）
  this.getSample();
	this.getManuscript()

  },
  destroy(){

  },
  methods: {
  	...mapMutations(['create_modal_id','is_mask','create_modal','close_modal']),
  	...mapActions(['addAction']),
//	获取列表数据方法
  	getManuscript(){
  		this.loading=false;
       var params = {
            sampleId: this.$route.query.id,//样品id
       }
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
			data: {
        params: JSON.stringify(params)
			}
	    }).then(function (response) {
        for (var key in response.data.rows[0]){
	    		this.formdatas.form[key]=response.data.rows[0][key];
	    	}
        this.formdatas.form.libraryName = this.$route.query.libraryName
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
    //	获取样品
  	getSample(){
  		this.loading=false;
		this.$http({
      method: 'post',
      url: this.sampleURL,
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
        // params: JSON.stringify(params)
        id:this.$route.query.id
			}
	    }).then(function (response) {
       for (var key in response.data){
	    		this.formdatas.form[key]=response.data[key];
	    	}
        this.formdatas.form.libraryName = this.$route.query.libraryName
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
	titleEvent(){
  		console.log('titleEvent');
  	},
  },
  data() {
    return {
      datalistURL:'api/grain/manuscript/data',
      sampleURL:'api/grain/sample/get',
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
      	title:'中央储备粮实物检查工作底稿',
      	form:{
          checkregion: '',//被检查企业
          checktime: '',//被查时点
          realchecktime: '',//实际查库日
          position: '',//货位号
          sort: '',//品种
          quality: '',//性质
          libraryName:'',//所在库区
          barnType:'',//仓房类型
          gainTime: '',//收货年度
          storge:'',//储存形式
          grainQuality:'',//保管帐数量（kg）
          qualityGrade:'',//质量等级
          //stored_way:['人工入仓'],//入仓方式
          putWay:'',//入仓方式
          //粮食入库质量
          storageCapacity:'',//容重（g/l）  
          storageWater:'',//水分（%）
          storageImpurity:'',//杂质（%）  
          //实测粮食质量
          realCapacity:'',//容重（g/l）  
          realWater:'',//水分（%）
          realImpurity:'',//杂质（%） 
          //粮堆形状及基本尺寸
          length:0,//长（m）：
          wide:0,//宽（m）：
          high:0,//高（m）：
          //1.计算粮堆体积
          measuredVolume:'',//粮堆测量体积(m3)	
          deductVolume:'',//需要扣除体积(m3)	
          realVolume:'',//粮堆实际体积(m3)	
          //2.计算粮堆平均密度	
//          标准容重器法
          // volume_weigh_bz:'',//粮食容重（g/l）
          correctioFactor:1,//校正后修正系数
          aveDensity:'',//粮堆平均密度（kg/m³）
//          特制大容器法
          // unit_volume_weight_tz:'',//单位体积粮食重量（kg/m³）
          correction_factor_tz:1,//校正后修正系数
          // average_density_tz:'',//粮堆平均密度（kg/m³）
          //3.计算粮食数量
            unQuality:'',//测量计算数（kg）	
//          应记粮食损耗(kg)	
          lossWater:'',//水分减量
          lossNature:'',//保管自然损耗
          loss:'',//合计
          checkNum:'',//检查计算数（kg）	
          //4.认定粮食实际数量	
//          检查计算数与保管账数量比较
          difference:'',//差数（kg）
          slip:'',//差率（％）
          // is_same:'',//账实是否相符
          // weight_r:'',//粮食实际数量（kg）
          result:'',//账实不符原因   
          remark: '无',//备注
          rummager:'',//检查人：
          custodian:'',//保管责任人：
          leader:'',//被检查企业负责人：    
      	}
	  }
    }
  }
}
</script>

