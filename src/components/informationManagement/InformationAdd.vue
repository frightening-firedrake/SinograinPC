<template>
	<div class='listpagewrap'>
      <!--面包屑-->
      <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
  	  <!--alert-->
      <sinograin-prompt :alerts="alerts"></sinograin-prompt>
      <!--表单-->
      <information-set :informations="informations[0]" @addinformation="addinformationLib"></information-set> 
      <information-set :informations="informations[1]" @addinformation="addinformationVarieties"></information-set> 
     <!--输入弹框-->
      <sinograin-modal v-if="modalVisible" :modal="modal" v-on:createlibitem="createlibitem" v-on:dialogClose="dialogClose"></sinograin-modal>      	
	</div>
</template>

<style>
</style>

<script>

import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import SinograinOptionTitle from "@/components/common/action/OptionTitle";
import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
import InformationSet  from "@/components/common/action/InformationSet";
import SinograinModal from '@/components/common/action/Modal.vue';

import "@/assets/style/information/InformationSet.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
//本地测试要用下面import代码
import data from '@/util/mock';

export default {
  components: {
    SinograinBreadcrumb,SinograinOptionTitle,InformationSet,SinograinPrompt,SinograinModal
  },
  computed:{

  },
  created(){
	this.getlistdata(1);
  },
  destroy(){

  },
  methods: {
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
		  	this.informations=response.data.informations;		  
//		  	this.formdatas=response.data.formdatas;		  
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
//	新建库
	addinformationLib(type){
		this.informationType=type;
		this.modal={
	  		title:'新建库点',
			formdatas:[
	  			{
	  				label:"选择地区",
	  				model:"unit",
	  			},
	  			{
	  				label:"添加库点",
	  				model:"lib",
	  			},
	  		],
	  		submitText:'确定',
	  	},
		this.modalVisible=true;
	},
//	新建品种
	addinformationVarieties(type){
		this.informationType=type;
		this.modal={
	  		title:'新建品种',
				formdatas:[
			  		{
			  			label:"添加名称",
			  			model:"unit",
			  		},
			  	],
			  	submitText:'确定',
			},
		this.modalVisible=true;
	},
//	填入新建数据
	createlibitem(data){
		if(this.informationType=="库点"){
			console.log(data);
			this.informations[0].items.push({id:'',sampleNumber:data.unit})
			
		}else if(this.informationType=="品种"){
			console.log(data);
			this.informations[1].items.push({id:'',sampleNumber:data.unit})
		}
	},
//	关闭新建弹框
	dialogClose(){
		this.modalVisible=false;
	},
  },
  data() {
    return {
      datalistURL: '/liquid/role21/data',
      searchURL: this.apiRoot + '/liquid/role2/data/search',
      deleteURL: this.apiRoot + '/liquid/role2/data/delete',
      checkedId:[],
	  createlibVisible:false,
	  modalVisible:false,
	  modal:{
	  	title:'新建库点',
		formdatas:[
	  		{
	  			label:"单位名称",
	  			model:"unit",
	  		},
	  		{
	  			label:"库点名称",
	  			model:"lib",
	  		},
	  	],
	  	submitText:'确定',
	  },
      breadcrumb:{
      	search:false,   
      	searching:'',
      },
      alerts: [{
        title: '温馨提示：可在此页面更改库点与品种项目!',
        type: 'info'
      }],
	  informationType:'',
      informations: [
      	{
  			title:'库点',
  			items:[
  				{},
  			],
  	    },
  	    {
  			title:'品种',
  			items:[
  				{},
  			],
  	    },
      ],
    }
  }
}
</script>
