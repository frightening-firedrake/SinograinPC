<template>
    <div class='listpagewrap'>
      <!--面包屑-->
      <lemon-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></lemon-breadcrumb>
      <!--alert-->
      <lemon-prompt :alerts="alerts"></lemon-prompt>
      <!--表格-->
      <lemon-list class="rolelist list" :tabledata="tabledatas" :list="list" :items="items" :actions="actions" v-on:getchecked="getchecked" :loading="loading"> 
      </lemon-list>
      <!--分页-->
      <lemon-pagination :page="page" v-on:paginationEvent="paginationEvent" v-on:getCurrentPage="getCurrentPage"></lemon-pagination>
      <!--查看模态框-->
      <!--<template v-if="actions.view">
      	<lemon-modal v-for="(item, index) in viewdata" :list="list" :item="item" :key="index" :ref="item.id" title="查看角色" modal_type="view"></lemon-modal>      	
      </template>-->
      <!--编辑模态框-->
      <!--<template v-if="actions.edit">
      	<lemon-modal v-for="(item, index) in editdata" :list="list" :item="item" :key="index" :ref="item.id" title="编辑角色" modal_type="edit"></lemon-modal>      	
      </template>-->
      <!--授权模态框-->
      <!--<template v-if="actions.ault">
      	<lemon-modal v-for="(item, index) in aultdata" :list="list" :item="item" :key="index" :ref="item.id" title="角色授权" modal_type="ault"></lemon-modal>      	
      </template>-->
    </div>
</template>

<style>
	
</style>

<script>
import LemonList from '@/components/common/action/List.vue';
import LemonPrompt from '@/components/common/prompt/Prompt.vue';
import LemonBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import LemonPagination from '@/components/common/action/Pagination.vue';
import LemonModal from '@/components/common/action/Modal.vue';
import "@/assets/style/common/list.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
//本地测试要用下面import代码
import data from '@/util/mock';



export default {
  components: {
    LemonList,LemonPrompt,LemonPagination,LemonBreadcrumb,LemonModal
  },
  computed:{
	...mapState(["modal_id_number","viewdata","editdata","aultdata","messions","mask"]),
	...mapGetters(["modal_id"]),
  },
  created(){

//  获取列表数据（第一页）
	this.getlistdata(1)
//	移除监听事件
    this.$root.eventHub.$off('delelistitem')
    this.$root.eventHub.$off("createmodaling")
//	监听列表删除事件
    this.$root.eventHub.$on('delelistitem',function(rowid,list){
    	this.tabledatas=this.tabledatas.filter(function(item){
    		return item.id!==rowid;
    	})
    	this.sendDeleteId(rowid);
//  	console.log(rowid,list);
    }.bind(this)); 	
//	监听列表点击打开模态框事件(先经过了mission的过滤)
  	this.$root.eventHub.$on("createmodaling",function(id,type){  
		this.create_modal_id();
		var list=this.list;
		this.createmodal(id,type,list);
  	}.bind(this));
  },
  destroy(){
  	this.$root.eventHub.$off("createmodaling")
  	this.$root.eventHub.$off('delelistitem')
  },
  methods: {
  	...mapMutations(['create_modal_id','is_mask','create_modal','close_modal']),
  	...mapActions(['addAction']),
//	获取搜索数据
  	searchingfor(searching){
  		console.log(searching);
  		// 获取列表数据（第？页）
		this.$http({
		  method: 'POST',
			url: this.searchURL,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			//格式化表单数据
			transformRequest: [function (data) {
				let ret = ''
				for (let it in data) {
					ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
			}],
			data: {
			    listName: this.list,
			    page:1,
			    pageSize:this.page.size,
			    name_like:searching,
			}
	    }).then(function (response) {
		  	this.tabledatas=response.data.rows;
	  		setTimeout(()=>{			  		
		  		this.loading=false;
		  	},1000)
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
//	获取列表数据方法
  	getlistdata(page){
  		this.loading=true;
  		// 获取列表数据（第？页）
		this.$http({
		  method: 'POST',
			url: this.pagetotalURL,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			//格式化表单数据
			transformRequest: [function (data) {
				let ret = ''
				for (let it in data) {
					ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
			}],
			data: {
			    listName: this.list,
			    page: page,
			    rows: this.page.size,
			}
	    }).then(function (response) {
		  	this.tabledatas=response.data.rows;
		  	this.page.total=response.data.total;
			
	  		setTimeout(()=>{			  		
		  		this.loading=false;
		  	},1000)
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},
  	//	发送删除id
  	sendDeleteId(id){
		this.$http({
		    method: 'POST',
			url: this.deleteURL,
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
//		console.log(currentPage)
		this.getlistdata(currentPage)
	},
//	映射分页触发的事件
  	paginationEvent(actiontype){
  		if(actiontype=='create'){
  			console.log('create')
  		}else if(actiontype=='refresh'){
  			// 获取列表数据（第一页）
			this.getlistdata(1)			
  		}else if(actiontype=='delete'){
  			if(!this.checkedId.length){
	      		this.$confirm('请选中删除项', '提示', {
	//			    confirmButtonText: '确定',
					showConfirmButton:false,
				    cancelButtonText: '取消',
				    type: 'warning'
			    }).then(() => {
			    	
			    }).catch(() => {
			      
			    });
	      	}else{
		      	this.$confirm('此操作将永久删除选中项, 是否继续?', '提示', {
				      confirmButtonText: '确定',
				      cancelButtonText: '取消',
				      type: 'warning'
				}).then(() => {
//					后台传值删除
//					console.log(this.checkedId);
					this.sendDeleteId(this.checkedId);
//					前台过滤
					this.tabledatas=this.tabledatas.filter((item)=>{
			    		return !this.checkedId.includes(item.id);
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
	        }  			
  		}
  	},
//	获取多选框选中数据的id(这是一个数组)
  	getchecked(checkedId){
  		this.checkedId=checkedId;
  	},
//	获取到点击查看的列表id并显示对应模态框
    createmodal:function(id,type,list) {
    	this.is_mask(true);
//获取一组查看模态框数据并插入到查看数组中,以实现新建模态框的效果
		var datatype;
		var newdata;
		switch(type)
			{ 
			case "view": 
				datatype='viewdata';
				newdata={
				  	datalist:{
			          '角色名称': 'UI设计师'+id,		    
			          '父级角色': '首页',		    
			          '依赖角色': '员工',		       
			          '最大限制用户数': '6',		   
			          '备注消息': 'UI设计师为研发部门付出了艰辛的努力',
			        },
			        open:true,
			        show:true,
			        id:id,
			        lg:false,
			        list:list,
			        title:"查看角色",
			        type:type,
			    };
			break; 
			case "edit": 
				datatype='editdata';
				newdata={
			        list:list,
			        title:"编辑角色",
			        type:type,
				  	datalist:{
			          name: {
			            label:"角色名称",
			            text:"",
			            type:"text",
			            default:"请输入角色名称"
			          },
			          fath:{
			            label:"父级角色",
			            text:"",
			            type:"select",
			            selected:"选择父级角色",
			            childrens:[
			              {
			                label:"角色列表",
			                value:1
			              },
			              {
			                label:"首页",
			                value:2
			              }
			            ]
			          },
			          rely:{
			            label:"依赖角色",
			            text:"",
			            type:"select",
			            selected:"选择依赖角色",
			            childrens:[
			              {
			                label:"依赖角色列表",
			                value:"1"
			              },
			              {
			                label:"首页",
			                value:"2"
			              }
			            ]
			          },
			          num:{
			            label:"最大限制用户数",
			            type:"number",
			            text:1,
			            min:1,
			            max:10
			          },
			          remarks:{
			            label:"备注",
			            text:"",
			            type:"remarks",
			            default:"请输入备注"
			          }
			       },
			        open:true,
			        show:true,
			        id:id,
			        lg:false,
			    };
			break; 
			case "ault": 
				datatype='aultdata';
				newdata={
			        list:list,
			        type:type,
			        title:"角色授权",
				  	datalist:{
			          name: {
			            label:"角色名称",
			            text:"",
			            type:"text",
			            default:"请输入角色名称"
			          },			       			          
			          ault:{
			            label:"角色授权",
//			            text:"",
			            type:"tree",
//			            default:"请输入备注"
			          }
			       },
			       tree:{
			//	      	defaultCheckedKeys:[1,2,3,4,5,6,8,15,16,17,18],//默认选中的key id
				      	checkStrictly:true,//分割了上下父子选中关系
				        data: [
				        	{
				            id: 1,
				            label: '插件管理',
					        disabled: true,
					        checked:true,
				            children: [
				            	{
					                id: 2,
					                label: '查看',
					                disabled: true,
					        		checked:true,
				            	},    
				            	{
					                id: 3,
					                label: '添加',          
					                disabled: true,
					       		 	checked:true,
				           		},
					            {
					                id: 4,
					                label: '修改',          
					                disabled: true,
					        		checked:true,
					            },
					            {
					                id: 5,
					                label: '删除',          
					                disabled: true,
					        		checked:true,
					            },
					            {
					                id: 6,
					                label: '本地安装',          
					                disabled: true,
					        		checked:true,
					            },
					            {
					                id: 7,
					                label: '禁用',          
					                disabled: true,
					        		checked:false,
					            },
				            ]
				       		}, {
				            id: 8,
				            label: '权限管理',
					        checked:true,
				            children: [
				            	{
					                id: 9,
					                label: '规则管理',
					        		checked:false,
					                children: [
					                {
					                	id: 10,
					                	label: '规则管理1',
					        			checked:false,
					                },
					                {
					                	id: 11,
					                	label: '规则管理2',
					        			checked:false,
					                },
					                {
					                	id: 12,
					                	label: '规则管理3',
					        			checked:false,
					                },
					                {
					                	id: 13,
					                	label: '规则管理4',
					        			checked:false,
					                },
				               		],
				            	},
				            	{
					                id: 15,
					                label: '角色组',
					        		checked:true,
					                children: [
						                {
						                	id: 16,
						                	label: '角色组1',
					        				checked:true,
						                },
						                {
						                	id: 17,
						                	label: '角色组2',
					        				checked:true,
						                },
						                {
						                	id: 18,
						                	label: '角色组3',
					        				checked:true,
						                },
						                {
						                	id: 19,
						                	label: '角色组4',
					        				checked:true,
						                },
				            		],
				        
				       			},
				            	]},
				        	],
				        defaultProps: {
				            children: 'children',
				            label: 'label'
				        }
				      },
			        open:true,
			        show:true,
			        id:id,
			        lg:false,
			   };
			break; 
			} 		
			var payload={};
				payload.datatype=datatype;
				payload.newdata=newdata;
				console.log('新建完成')
			this.create_modal(payload);
    },    
  },
  data() {
    return {
    //   datalistURL:'/liquid/role/data',
      searchURL:'/liquid/role/search',
      deleteURL:'/liquid/role/delete',
      pagetotalURL:'/liquid/role/data',
      checkedId:[],
      list:"rolelist",
      breadcrumb:{
      	search:true,   
      	searching:'',
      },
      loading:true,
//    分页数据
      page: {
        size: 10,
        total: 0,
        currentPage: 1,
        tfootbtns:{
        	btns:true,//是否添加按钮组
        	create:true,//新建按钮
        	refresh:true,//刷新按钮
        	delete:true, //删除按钮      	
        }
      },
//    弹窗数据
      alerts: [{
        title: '温馨提示：此页面展示角色列表，您可以对角色查看、编辑、删除、授权及批量删除和新建的操作。单击右方x号，可以关闭此条提示语!',
        type: 'info'
      }],
//    表格数据
      tabledatas:[],
      items: [
//    {
//      id: 1,
//      prop:'id',
//      label: "编号",
//      sort:true
//
//    },
      {
        id: 2,
        prop:'displayName',
        label: "名称",
        sort:true,
      },
      {
        id: 3,
        prop:'rolePName',
        label:"父菜单",
        sort:true,
      },
      ],
      actions:{
      	selection:true,
      	number:true,
      	view:true,
      	edit:true,
      	dele:true,
      	ault:true,
      }
    }
  }
}
</script>

