<template>
    <div class='listpagewrap'>
      <!--面包屑-->
      <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
  	  <!--标题-->
  	  <sinograin-option-title :title="subtitle" v-on:titleEvent="titleEvent"></sinograin-option-title>		
      <!--表单-->
      <handover-list-connect :formdatas="formdatas" :viewPath="viewPath" @createlib="createlib"></handover-list-connect> 
	  <!--新建库典弹框-->
      <sinograin-modal :modal="modal" v-if="modalVisible" v-on:createlibitem="createlibitem" v-on:dialogClose="dialogClose"></sinograin-modal>
    </div>
</template>

<style>
	
</style>

<script>

import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import HandoverListConnect  from "@/components/common/action/HandoverListConnect"
import SinograinOptionTitle from "@/components/common/action/OptionTitle"
import SinograinModal from '@/components/common/action/Modal.vue';

import "@/assets/style/common/list.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
//本地测试要用下面import代码
import data from '@/util/mock';


export default {
  components: {
    SinograinPrompt,SinograinBreadcrumb,SinograinOptionTitle,HandoverListConnect,SinograinModal
  },
  computed:{
	...mapState(["modal_id_number","viewdata","editdata","aultdata","messions","mask"]),
	...mapGetters(["modal_id"]),
  },
  created(){
  	console.log(this.$route.query)
//  获取列表数据（第一页）
	// this.getlistdata(1)

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
//			data: {
//
//			}
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
	titleEvent(){
  		console.log('titleEvent');
  	},
  	//	打开新建弹框
    createlib() {
        this.modalVisible = true;
    },
    //	获取填入的新建数据
    createlibitem(form) {
//      console.log(form);
//      console.log(this.formdatas);
        this.$router.push({ path: this.viewPath })
    },
    //	关闭新建弹框
    dialogClose() {
        this.modalVisible = false;
    },
  },
  data() {
    return {
      datalistURL:'/liquid/role11/data',
      searchURL:'/liquid/role2/data/search',
      deleteURL:'/liquid/role2/data/delete',
      checkedId:[],
	  createlibVisible:false,
	  modalVisible: false,
      breadcrumb:{
      	search:false,   
      	searching:'',
      },
      subtitle:{
      	btn:false,
      	btntext:'',
      },
	  viewPath:'/index/sampleManagement/handover/handoverListCreate/handoverListPrint',
	  
	  modal: {
	      title: '新建样品领取交接单',
	      formdatas: [
	          {
	              label: "领取人",
	              model: "receiptor",
	              value:'',
	          },
	      ],
	      submitText: '提交',
	  },
      formdatas: {
  		title:'样品领取交接单',//标题
        form:{            	
        	name:'',//交接单名称
        	manager:'',//管理员名
        	remarks:'',//备注信息
        },
        checkList:[],//检验项目数组
//          检验样品数组
        items:[
        	{checkNumber:'监20170094',depot:'TG-1-2'},
        	{checkNumber:'监20170095',depot:'TG-1-2'},
        	{checkNumber:'监20170096',depot:'TG-1-2'},
        	{checkNumber:'监20170097',depot:'TG-1-2'},
        	{checkNumber:'监20170094',depot:'TG-1-2'},
        	{checkNumber:'监20170095',depot:'TG-1-2'},
        	{checkNumber:'监20170096',depot:'TG-1-2'},
        
        ],
	  }
    }
  }
}
</script>

