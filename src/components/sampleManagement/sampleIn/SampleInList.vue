<template>
    <div class='listpagewrap'>
      <!--面包屑-->
      <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
      <!--alert-->
      <!--<sinograin-prompt :alerts="alerts"></sinograin-prompt>-->
      <!--表格上的时间选框以及 创建-->
      <list-header :listHeader="listHeader" v-on:dateChange="dateChange" v-on:statusChange="statusChange" v-on:createSampling="createSampling" v-on:createlib="createlib" v-on:scanCode="scanCode" ></list-header>
      <!--表格-->
      <sinograin-list class="list le" :tabledata="tabledatas" :list="list" :items="items" :actions="actions" v-on:getchecked="getchecked" :loading="loading" v-on:emptyCreate="emptyCreate" > 
      </sinograin-list>
      <!--分页-->
      <sinograin-pagination :page="page" v-on:paginationEvent="paginationEvent" v-on:getCurrentPage="getCurrentPage"></sinograin-pagination>
      <!--新建库典弹框-->
      <sinograin-modal v-if="modalVisible"  :modal="modal" v-on:createlibitem="createlibitem" v-on:dialogClose="dialogClose"></sinograin-modal>      	
      <sinograin-message v-if="messageShow" :messages="messages" v-on:messageclick="messageclick" v-on:messageClose="messageClose" @getScanCode="getScanCode"></sinograin-message>
    </div>
</template>

<style>
	
</style>

<script>
import SinograinList from '@/components/common/action/List.vue';
import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import SinograinPagination from '@/components/common/action/Pagination.vue';
import ListHeader from '@/components/common/action/ListHeader.vue';
import SinograinModal from '@/components/common/action/Modal.vue';
import SinograinMessage from "@/components/common/action/Message"
import "@/assets/style/common/list.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';

//这里是打印控件
import {getLodop} from 'static/lodop/LodopFuncs'
let LODOP
//本地测试要用下面import代码
//import data from '@/util/mock';



export default {
  components: {
    SinograinList,SinograinPrompt,SinograinPagination,SinograinBreadcrumb,SinograinModal,ListHeader,SinograinMessage
  },
  computed:{
	...mapState(["modal_id_number","viewdata","editdata","aultdata","messions","mask"]),
	...mapGetters(["userName"]),
	tabledatasFilter(){

		if(this.filterStatus=="全部"){
			return this.tabledatas;
		}else{
			return this.tabledatas.filter((value,index)=>{
				return value.sampleStatus==this.filterStatus
			})
		}
	}
  },
  created(){
  	console.log(this.$route.query)
  	this.modal.formdatas[3].value=this.userName;
//  获取列表数据（第一页）
	this.getlistdata(1)
//	移除监听事件
    this.$root.eventHub.$off('delelistitem')
    this.$root.eventHub.$off("viewlistitem")
    this.$root.eventHub.$off("editlistitem")
    this.$root.eventHub.$off("printlistitem")
//	监听列表删除事件
    this.$root.eventHub.$on('delelistitem',function(rowid,list){
    	this.tabledatas=this.tabledatas.filter(function(item){
    		return item.id!==rowid;
    	})
    	this.sendDeleteId(rowid);
//  	console.log(rowid,list);
    }.bind(this)); 	
//	监听列表点击查看事件
  	this.$root.eventHub.$on("viewlistitem",function(id){  
//		console.log(id)
		this.$router.push({path: '/index/sampleManagement/sampleIn/sampleInEdit',query:{libid:id}})
		
  	}.bind(this));
  	//	监听列表点击编辑事件
  	this.$root.eventHub.$on("editlistitem",function(id){  
//		console.log(id)
		this.$router.push({path: '/index/sampleManagement/sampleIn/sampleInEdit',query:{id:id}})
		
  	}.bind(this));
  	//	监听列表点击打印事件
  	this.$root.eventHub.$on("printlistitem",function(code){  
		this.printitem(code);	
  	}.bind(this));
  },
  destroy(){
  	this.$root.eventHub.$off("viewlistitem")
  	this.$root.eventHub.$off('delelistitem')
  },
  methods: {
  	...mapMutations(['create_modal_id','is_mask','create_modal','close_modal']),
  	...mapActions(['addAction']),
//	列表头触发的事件
	dateChange(data){
		console.log(data);
	},
	statusChange(data){
//		console.log(data)
		this.filterStatus=data
	},
	createSampling(){
//		console.log('createSampling');
		this.$router.push({path: '/index/sampling/samplingList/samplingListCreate'})
	},
	emptyCreate(){
		this.scanCode();
	},
//	打开新建弹框
	createlib(){
		this.modalVisible=true;
	},
//	扫码新建样品
	scanCode(){
		this.messages.type='scaning';
		this.messageShow=true;
//		this.createlib()
	},
//	填入新建数据并点击确认
	createlibitem(form){
		this.$http({
		    method: 'post',
			url: this.editURL,
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
				id: this.dataBySampleNo.id,
				storageTime: form.storageTime,
				depot: form.depot,
				counter: form.counter,
				autograph: form.autograph,
				sampleState: 2
			}
	    }).then(function (response) {
//			console.log(response)
			if(response.data.success) {
				this.getlistdata();
				this.$notify({
		          	title: '入库成功',
		          	message: '该样品已成功入库！！！',
		          	type: 'success'
		        });
//		        this.printCodeBar(this.modal.formdatas[0].value)
			}else{
				this.$notify.error({
		          	title: '入库失败',
		          	message: '请重新核对入库信息！！！',
		        });
			}
		}.bind(this)).catch(function (error) {
//		    console.log(error);
		    this.$notify.error({
	          	title: '入库失败',
	          	message: '请重新核对入库信息！！！',
	        });
		}.bind(this));
		// this.$router.push({path: '/index/sampleManagement/sampleIn/sampleInCreate', params: {'position': form.position,'sampleInName': form.sampleInName} })
		// this.$router.push({name: "样品管理/样品入库列表/新建样品", params: {'yangpinshi': form.yangpinshi,'gui': form.gui,'sampleInSign': form.sampleInSign,'sampleNumber': form.sampleNumber} })
	},
//	关闭新建弹框
	dialogClose(){
		this.modalVisible=false;
		//关闭入库框后打开扫描框
		this.messageShow=true;
	},
//	获取搜索数据
  	searchingfor(searching,page){
  		page?page:1;
  		this.searchText=searching;
  		var params = {};
		params.sampleWordOrsampleNumLike = searching;
		params.sampleState = 2
//		console.log(this.breadcrumb.searching);
  		// 获取列表数据（第？页）
		this.$http({
		    method: 'post',
			url: this.searchURL,
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
			this.tabledatas=response.data.rows;
	  		this.page.total=response.data.total;

		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
  	getsample(){
  		this.loading=false;
  		// 获取列表数据（第？页）
		this.$http({
		    method: 'post',
			url: this.getSampleNoURL,
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
			   sampleNo : this.modal.formdatas[0].value
			}
	    }).then(function (response) {
			this.dataBySampleNo = response.data;
			if(this.dataBySampleNo.sampleState == 2) {

				this.messages.type='success';
				
			} else {
				this.messageShow=false;				
  				this.modalVisible=true;
			}
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
//	获取列表数据方法
  	getlistdata(page){
		var params = {};
		params.sampleState = 2
  		this.loading=false;
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
			    listName: this.list,
			    page:page,
			    rows:this.page.size,
				params:JSON.stringify(params)
			}
	    }).then(function (response) {
			console.log(response.data.rows)
		  	this.tabledatas=response.data.rows;
	  		this.page.total=response.data.total;
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
  	//	发送删除id
  	sendDeleteId(id){
		this.$http({
		    method: 'post',
			url: this.deleteURL,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: {
			    listName: this.list,
			    id:id,
			}
	    }).then(function (response) {
		  	
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
//	获取分页点击事件中及当前页码
    getCurrentPage(currentPage){
		if(this.searchText){			
			this.searchingfor(this.searchText,currentPage)
		}else{			
			this.getlistdata(currentPage)
		}
	},
//	映射分页触发的事件
  	paginationEvent(actiontype){
  		if(actiontype=='leading_out'){
  			console.log('leading_out')
  		}else if(actiontype=='refresh'){
  			// 获取列表数据（第一页）
			this.getlistdata(1)			
  		}
  	},
//	获取多选框选中数据的id(这是一个数组)
  	getchecked(checkedId){
  		this.checkedId=checkedId;
  	},
	titleEvent(){
  		console.log('titleEvent');
  	},
  	messageclick(type){
  		if(type=="success"){
//			console.log("去编辑页面！！！")
  			var editPath=this.$route.path+'/sampleInEdit'
  			this.$router.push({path:editPath})
//			console.log(type)
  		}else if(type=="error"){
  			console.log(type)  			
  		}
  	},
  	messageClose(){
  		this.messageShow=false;
  	},
  	getScanCode(code){
  		if(!code){
  			this.messageShow=false;
  		}else{  			
			this.modal.formdatas[0].value=code;
//			this.modal.formdatas[0].value=6000601005;
//			this.messageShow=false;
			this.getsample();
  		}
  	},
  	getDateNow(){
  		var date1=new Date()
  		return date1.getFullYear()+'-'+(date1.getMonth()+1)+'-'+date1.getDate()
  	},
  	printitem(code){
		this.messageShow=true;
		this.messages.type="loading";
		this.printCodeBar(code)
	},
  	printCodeBar(code){
		LODOP = getLodop();

		LODOP.PRINT_INIT("打印条码");
		LODOP.SET_PRINTER_INDEX("Godex G530");  
		LODOP.SET_PRINT_PAGESIZE(1, 700, 400, "USER");
		LODOP.ADD_PRINT_BARCODE(3,30,232,115,'Codabar',code);
//  			LODOP.PREVIEW(); 
		LODOP.PRINT(); 

	},
  },
  data() {
    return {
      datalistURL: this.apiRoot + '/grain/sample/data',
	  getSampleNoURL: this.apiRoot + '/grain/sample/getBySampleNo',
	  editURL: this.apiRoot + '/grain/sample/edit',
	  searchURL:this.apiRoot + '/grain/sample/data',
      deleteURL:'/liquid/role2/data/delete',
      searchText:'',
      checkedId:[],
	  dataBySampleNo: {},
      list:"samplinglist",
	  modalVisible:false,
	  modal:{
	  	title:'入库',
		formdatas:[
			{
	  			label:"扦样编号:",
	  			model:"sampleNo",
	  			disabled:true,
	  			value:'',
	  			type:'password'
	  		},
			// {
	  		// 	label:"检验编号",
	  		// 	model:"sampleNum",
	  		// 	disabled:true,
	  		// 	value:'',
	  		// },
	  		{
	  			label:"样品入库时间:",
	  			model:"storageTime",
	  			disabled:true,
	  			value:this.getDateNow(),
	  		},
	  		{
	  			label:"存放位置:",
	  			position:true,
				model: "positions",
				value:'',
//	  			model:"position",
	  			modelselect:"depot",
	  			modelinput:"counter",
//	  			value:'朔水-9号仓-1号柜',
	  		},
	  		{
	  			label:"入库签名:",
	  			model:"autograph",
				value: "",
	  			disabled:true,
	  		},
	  	],
	  	addprop:true,
	  	submitText:'入库',
	  },
      breadcrumb:{
      	search:true,   
      	searching:'',
      },
      subtitle:{
      	btn:false,
      	btntext:'',
      },
      loading:true,
      filterStatus:'全部',
//    分页数据
      page: {
        size: 10,
        total: 0,
        currentPage: 1,
        show:true,       
        tfootbtns:{
        	btns:false,//是否添加按钮组
        	leading_out:false,//导出按钮
        	refresh:false,//刷新按钮
        	delete:false, //删除按钮            	
        }
      },
//    弹窗数据
      alerts: [{
        title: '温馨提示：入库前请准备好条码打印机，以便于更换检验编号!',
        type: 'info'
      }],
//    表格数据
      listHeader:{
      	createlib:false,
      	createSampling:false,
      	status:false,
      	date:true,
      	scanCode:true,
      },
      tabledatas:[],
      items: [
      {
        id: 1,
        prop:'sampleNum',
        label: "检验编号",
        status:true,
//      sort:true
      },
      {
        id: 2,
        prop:'sampleWord',
        label: "扦样编号",
//      sort:true
      },
      {
        id: 3,
        prop:'sort',
        label:"品种",
//      sort:true,
      },
      {
        id: 4,
        prop:'depot',
        label: "存放位置",
        status:true,
//      sort:true,
      },
      {
        id: 5,
        prop:'sampleState',
        label:"存放状态",
        status:true,
//      sort:true,
      },
      {
        id: 6,
        prop:'storageTime',
        label:"样品入库时间",
//      sort:true,
      },
      {
        id: 7,
        prop:'autograph',
        label:"入库签名",
//      sort:true,
      },
      ],
      actions:{
      	selection:false,
      	number:false,
      	view:false,
//    	edit:true,
//    	show:true,
      	dele:false,
      	manuscript:false,
      	safetyReport:false,
//    	printSampleIn:true,
      },
      messageShow:false,
	  messages:{
	  	type:'scaning',
	  	scaning:{
	  		icon:'iconfont icon-iconset0255',
	  		messageTittle:'开始扫描',
	  		messageText:'不要点击键盘和鼠标请将扫码枪对准条形码，然后按下扫码枪按钮！',
	  	},
	  	success:{
	  		icon:'el-icon-success',
	  		messageTittle:'该样品已入库',
	  		messageText:'可点击编辑按钮修改入库信息！',
	  		buttonText:'编辑',
	  	},
	  	loading:{
	  		icon:'el-icon-printer',
	  		messageTittle:'正在打印中...',
	  		messageText:'请您耐心等待，正在打印中...',
	  	},
	  },
    }
  }
}
</script>

