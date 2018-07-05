<template>
	<div class='listpagewrap'>
      <!--面包屑-->
      <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
  	  <!--标题-->
  	  <sinograin-option-title :title="subtitle" v-on:titleEvent="titleEvent"></sinograin-option-title>		
      <!--表单-->
      <sample-registert-maker class="registertMaker" :tabledata="tabledatas" :items="items" :actions="actions" :loading="loading" :formdatas="formdatas" @exportExcel='exportExcel' @addRow='addRow' @delRow='delRow' @currentRow='currentRowFun'></sample-registert-maker> 

    </div>
</template>

<style>
</style>

<script>

import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import SinograinOptionTitle from "@/components/common/action/OptionTitle";
import SampleRegistertMaker  from "@/components/common/action/SampleRegistertMaker";

import "@/assets/style/testReport/TestReportMaker.css"
//import "@/assets/style/common/list.css"
import "@/assets/style/sampleRegistration/registertMaker.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
//本地测试要用下面import代码
//import data from '@/util/mock';

export default {
  components: {
    SinograinBreadcrumb,SinograinOptionTitle,SampleRegistertMaker
  },
  computed:{
	...mapGetters(["libraryName","Token"]),
  },
  created(){
//	this.getlistdata(1);
//	console.log(this.$route.params)
	if(this.$route.params.tabledatas){
		this.tabledatas=this.$route.params.tabledatas;
	}
  },
  destroy(){

  },
  methods: {
//	获取数据方法
  	getlistdata(page){
		var params = {};
		params.wpLibraryId = -1
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
			data: {
				params:JSON.stringify(params)
			}
	    }).then(function (response) {
		  	this.tabledatas=response.data;
//	  		this.page.total=response.data.total;		  		
		  	this.loading=false;
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
//	获取搜索数据
  	searchingfor(searching){
  		console.log(searching);
  	},
	titleEvent(){
  		console.log('titleEvent');
    },
    remove(index,id,row){
    	this.$confirm('此操作将删除该'+'样品信息'+', 是否继续?', '提示', {
		      confirmButtonText: '确定',
		      cancelButtonText: '取消',
		      type: 'warning'
		    }).then(() => {
				this.removeItem(index,id,row);
		    }).catch(() => {
		      this.$message({
		        type: 'info',
		        message: '已取消删除'
		      });          
		    });
    },
    removeItem(index,id,row){
		this.tabledatas=this.tabledatas.filter((item,index1)=>{
			return index1!==index
		})
        this.$message({
        	type: 'success',
        	message: '删除成功!'
        });
    },
    addRow(){
		var name=this.$route.name+'/检验样品';
		var params={formdatas:this.formdatas,tabledatas:this.tabledatas}
		if(this.$route.params.searching){
			params.searching=this.$route.params.searching
		}
		this.$router.push({name:name,params})
    },
    delRow(){
    	if(!this.currentRow){
    		return
    	}
		this.$confirm('此操作将删除该'+'样品信息'+', 是否继续?', '提示', {
	      	confirmButtonText: '确定',
	      	cancelButtonText: '取消',
	      	type: 'warning'
	    }).then(() => {
			this.tabledatas=this.tabledatas.filter((item,index)=>{
				return item.id!==this.currentRow.id
			})
	        this.$message({
	        	type: 'success',
	        	message: '删除成功!'
	        });
	    }).catch(() => {
	      	this.$message({
	        	type: 'info',
	        	message: '已取消删除'
	      	});          
	    });
    },
    create(){
    	if(!this.$_ault_alert('sample:dataWheatReport')){
			return
		}
    	if(!this.tabledatas.length){
    		 this.$alert('请先添加样品！！！','提示信息',{});
    		 return;
    	}
    	var ids=[]
    	this.tabledatas.forEach((item)=>{
    		ids.push(item.id)
    	})
    	var sort=this.tabledatas[0].sort
    	ids.sort();
    	ids=ids.join(',');
		var name=this.$route.name+'/样品检测报表详情';
		this.$router.push({name:name,params:{ids:ids,title:this.formdatas.tableName,sort:sort}})
    },
    exportExcel(){
    	if(!this.tabledatas.length){
    		this.$alert('请先添加样品！！！','提示信息',{});
    		return
    	}
    	var arr=[];
    	this.tabledatas.forEach((item,index)=>{
    		arr.push(item.sampleNo)
    	})
    	var sampleNos=arr.join(',')
    	if(!this.$_ault_alert('sample:ExportRegister')){
			return
		}
		var loadiframe=document.getElementById('fordownload');
//		console.log(this.exportExcelURL+'?sampleNos='+sampleNos+'&sessionid='+this.Token)
		loadiframe.src=this.exportExcelURL+'?sampleNos='+sampleNos+'&sessionid='+this.Token;
    },
    currentRowFun(currentRow){
		this.currentRow=currentRow;
	},
  },
  data() {
    return {
      exportExcelURL: this.apiRoot + '/grain/sample/ExportRegister',
      datalistURL:'/liquid/role19/data',
      searchURL:'/liquid/role2/data/search',
      deleteURL:'/liquid/role2/data/delete',
      checkedId:[],
	  createlibVisible:false,
      searchText:'',
      currentRow:'',
      loading:false,
      breadcrumb:{
      	search:false,   
      	searching:'',
      },
      subtitle:{
      	btn:false,
      	btntext:'',
      },
      
      formdatas:{
      	tableName:'',
      	remark:'',
      },
      tabledatas:[
	      
      ],
      items: [
	      {
	        id: 1,
	        label: "检验编号",
	        prop:'sampleNum',
	        status:true,
	        pid:0,
	      },
	      {
	        id: 2,
	        label: "扦样编号",
	        prop:'sampleWord',
	        pid:0,
	      },
	      {
	        id: 3,
	        label: "检验项目",
	        prop:'checkeds',
	        width:'310',
	        status:true,
	        pid:0,
	      },
	      {
	        id: 4,
	        label: "扦样情况",
	        pid:0,
	      },
	      {
	        id: 5,
	        prop:'autograph',
	        label: "扦样人员",
	        pid:4,
	//      sort:true
	      },
	      {
	        id: 6,
	        prop:'sampleTime',
	        label:"时间",
	        status:true,
	        pid:4,
	//      sort:true,
	      },
	      {
	        id: 7,
	        label: "运送、接收样品情况",
	        pid:0,
	//      sort:true,
	      },
	      {
	        id: 8,
	        prop:'null',
	        label:"工作人员",
	        pid:7,
	//      sort:true,
	      },
	      {
	        id: 9,
	        prop:'null',
	        label:"时间",
	        pid:7,
	//      sort:true,
	      },
	      {
	        id: 10,
	        prop:'storage',
	        label:"存放位置",
	        pid:0,
	//      sort:true,
	      },
	      {
	        id: 11,
	        prop:'remark',
	        label:"备注",
	        pid:0,
	        class:'last',
	//      sort:true,
	      },
      ],
      actions:{
      	selection:false,
      	number:false,
      	view:false,
      	edit:false,
      	dele:true,
      	show:true,
      }
    }
  }
}
</script>
