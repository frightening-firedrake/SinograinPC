<template>
    <div class='listpagewrap'>
      <!--面包屑-->
      <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
  	  <!--标题-->
  	  <sinograin-option-title :title="subtitle" v-on:titleEvent="titleEvent"></sinograin-option-title>		
      <!--表单-->
      <handover-list-connect :formdatas="formdatas" @createlib="createlib" @new_sample="new_sample" @sampleIdsDel="sampleIdsDel"></handover-list-connect> 
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
//import data from '@/util/mock';


export default {
  components: {
    SinograinPrompt,SinograinBreadcrumb,SinograinOptionTitle,HandoverListConnect,SinograinModal
  },
  computed:{
	...mapState([]),
	...mapGetters(["libraryId","libraryName","userName","userId"]),
  },
  created(){
//	console.log(this.$route.query)
//	console.log(this.userName,this.userId)
//	this.formdatas.form.manager=this.userName;
//  获取列表数据（第一页）
	if(this.$route.query.id){
		this.getlistdata(1)
	}else if(this.$route.params.formdatas){
		this.formdatas=this.$route.params.formdatas
	}else{
		this.$router.push({name:"样品管理/样品领取交接单"})
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
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
			}],
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: {
  				id:this.$route.query.id
			}
	    }).then(function (response) {
	    	this.formdatas.checkList=response.data.checkeds.split(',');//检测项
			this.formdatas.form.name=response.data.name;//交接单名字
			this.formdatas.form.manager=response.data.sampleAdmin;//管理员
			this.formdatas.form.remarks=response.data.remark;//备注
			this.formdatas.items=response.data.sampleNums.split(',');//待检测样品
			this.formdatas.handoverId=response.data.id//保存交接单ID
			this.sampleIds=response.data.sampleIds//样品id集
			this.formdatas.sampleIds2=response.data.sampleIds//样品id集2
//			this.formdatas.form.items=this.checkList.filter((item)=>{
//				return checkNums.includes(item.sampleNum)
//			})
		  	this.loading=false;
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
//	领取方法
  	handover(){
		var params = {};
		params.checkeds = this.formdatas.checkList.join(',');
		params.name = this.formdatas.form.name;
		params.remark = this.formdatas.form.remarks;
		params.receiptor =this.receiptor;
		params.id =this.formdatas.handoverId;

		params.sampleNums = []
		params.sampleIds = [];
//		通过是否存在id判断数组结构
		if(this.formdatas.items[0].id){
			this.formdatas.items.forEach((val)=>{
				params.sampleNums.push(val.sampleNum)		
				params.sampleIds.push(val.id.toString())
			})	
			params.sampleIds.join(',')
		}else{
			this.formdatas.items.forEach((val)=>{
				params.sampleNums.push(val)			
			})
			params.sampleIds=this.sampleIds.split(',')
		}

		var oldsampleIds=this.formdatas.sampleIds2.split(',');
		
		var newsampleIds=params.sampleIds;
		var deleteIds=oldsampleIds.filter((val)=>{
			return !newsampleIds.includes(val)
		})
//		if(deleteIds.length){
			params.deleteIds=deleteIds
//		}
//		params.sampleNums=params.sampleNums.join(',');

  		this.loading=false;
  		// 获取列表数据（第？页）
		this.$http({
		    method: 'post',
			url: this.handoverURL,
			transformRequest: [function (data) {
				// Do whatever you want to transform the data
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
			}],
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data:params,
	    }).then(function (response) {
	    	if(response.data.success){	    		
	    		this.$router.push({ path: this.viewPath,query:{id:this.formdatas.handoverId} })
	    	}
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
    	//额外验证检查样品组和检查项目组
    	if(!this.formdatas.checkList.length){
    		this.$alert('请添检查项目!!!','提示信息',{});
    		return false;
    	}
    	if(!this.formdatas.items.length){
    		this.$alert('请添加样品!!!','提示信息',{});
    		return false;
    	}
        this.modalVisible = true;
    },
    //	获取填入的新建数据
    createlibitem(form) {
        this.receiptor=form.receiptor;
		this.handover();
    },
    //	关闭新建弹框
    dialogClose() {
        this.modalVisible = false;
    },
    new_sample(){
    	var path=this.$route.name+'/选择样品编号'
		this.$router.push({name: path,params: {formdatas:this.formdatas}})
    },
    //  直接删除检查编号时获取样品id
    sampleIdsDel(sampleNum){
    	console.log(sampleNum)
    	
    	this.$http({
		    method: 'post',
			url: this.getIdURL,
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
    			sampleNum:sampleNum,				
			},
	   }).then(function (response) {	    	
	    	if(response.data.id){	    		
				this.sampleIds=this.sampleIds.split(',');
				this.sampleIds=this.sampleIds.filter((val)=>{
					return (val-0)!==response.data.id
				})
				this.sampleIds=this.sampleIds.join(',')
	    	}
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));	
    },
    
  },
  data() {
    return {
      handoverURL:this.apiRoot +'/grain/handover/edit',
      datalistURL:this.apiRoot +'/grain/handover/get',
      getIdURL:this.apiRoot +'/grain/sample/getBySampleNum',
      searchURL:'/liquid/role2/data/search',
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
	  viewPath:this.$route.path+'/handoverListPrint',
	  
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
	  receiptor:'',
	  sampleIds:'',//编辑时保存获取到的样品id集合
      formdatas: {
      	sampleIds2:'',//编辑时保存获取到的样品id集合2
      	handoverId:'',//编辑时保存获取到的id
  		title:'样品领取交接单',//标题
        form:{            	
        	name:'',//交接单名称
        	manager:this.userName,//管理员名
        	remarks:'',//备注信息
        },
        checkList:[],//检验项目数组
//      检验样品数组
        items:[
        	
        ],
	  }
    }
  }
}
</script>

