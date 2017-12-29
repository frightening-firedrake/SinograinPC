<template>
    <div class='listpagewrap'>
      <!--面包屑-->
      <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
      <!--alert-->
      <lemon-prompt :alerts="alerts"></lemon-prompt>
      <!--表格-->
      <lemon-list class="userlist list" :tabledata="tabledatas" :list="list" :items="items" :actions="actions" v-on:getchecked="getchecked"> 
      </lemon-list>
      <!--分页-->
      <lemon-pagination :page="page" v-on:paginationEvent="paginationEvent" v-on:getCurrentPage="getCurrentPage"></lemon-pagination>
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

export default {
  components: {
    LemonList,LemonPrompt,LemonPagination,LemonBreadcrumb,LemonModal
  },
  computed:{
	...mapState(["modal_id_number","viewdata","editdata","aultdata","messions","mask"]),
	...mapGetters(["modal_id"]),
  },
  created(){
    this.$root.eventHub.$off('delelistitem')
    this.$root.eventHub.$off("createmodaling")
//	监听列表删除事件
    this.$root.eventHub.$on('delelistitem',function(rowid,list){
    	this.tabledatas=this.tabledatas.filter(function(item){
    		return item.id!==rowid;
    	})
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
//	获取分页中当前页码
	getCurrentPage(page){
		console.log(page)
	},
//	映射分页触发的事件
  	paginationEvent(actiontype){
  		if(actiontype=='create'){
  			console.log('create')
  		}else if(actiontype=='refresh'){
  			console.log('refresh')			
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
			          '编号': id,		    
			          '用户名称': '马小米',		    
			          '分配用户': '超级管理员',		       
			          '手机号码': '18666666666',		   
			          '邮箱号码': '234892390@qq.com',
			        },
			        open:true,
			        show:true,
			        id:id,
			        lg:false,
			        list:list,
			        title:"查看用户",
			        type:type,
			    };
			break; 
			case "edit": 
				datatype='editdata';
				newdata={
			        list:list,
			        title:"编辑用户",
			        type:type,
				  	datalist:{
			          name: {
			            label:"用户名称",
			            text:"",
			            type:"text",
			            default:"请输入用户名称"
			          },
			          Assigning_users:{
			            label:"分配用户",
			            text:"",
			            type:"select",
			            selected:"选择分配用户",
			            childrens:[
			              {
			                label:"用户列表",
			                value:1
			              },
			              {
			                label:"首页",
			                value:2
			              }
			            ]
			          },
			          phone: {
			            label:"联系电话",
			            text:"",
			            type:"text",
			            default:"请输入联系电话"
			          },
			          email: {
			            label:"邮箱",
			            text:"",
			            type:"text",
			            default:"请输入邮箱"
			          },
			          
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
			        title:"用户授权",
				  	datalist:{
			          name: {
			            label:"用户名称",
			            text:"",
			            type:"text",
			            default:"请输入用户名称"
			          },			       			          
			          ault:{
			            label:"用户授权",
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
					                label: '用户组',
					        		checked:true,
					                children: [
						                {
						                	id: 16,
						                	label: '用户组1',
					        				checked:true,
						                },
						                {
						                	id: 17,
						                	label: '用户组2',
					        				checked:true,
						                },
						                {
						                	id: 18,
						                	label: '用户组3',
					        				checked:true,
						                },
						                {
						                	id: 19,
						                	label: '用户组4',
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
      list:"userlist",
      breadcrumb:{
      	search:true,    	
      },
//    分页数据
      page: {
        size: 10,
        total: 19,
        tfootbtns:{
        	btns:true,//是否添加按钮组
        	create:true,//新建按钮
        	refresh:true,//刷新按钮
        	delete:true, //删除按钮      	
        }
      },
//    弹窗数据
      alerts: [{
        title: '温馨提示：此页面展示用户列表，您可以对用户查看、编辑、删除、授权及批量删除和新建的操作。单击右方x号，可以关闭此条提示语!',
        type: 'info'
      }],
//    表格数据
      tabledatas:[
        {
          id:'01',
          userName: "李佳",
          assignRole: "管理员",
          phone: '15940324325',
          email: '23474@qq.com',
          rowType: '用户'
        },
        {
          id:'02',
          userName: "李佳",
          assignRole: "管理员",
          phone: '15940324325',
          email: '23474@qq.com',
          rowType: '用户'
        },
        {
          id:'03',
          userName: "李佳",
          assignRole: "管理员",
          phone: '15940324325',
          email: '23474@qq.com',
          rowType: '用户'
        },
        {
          id:'04',
          userName: "李佳",
          assignRole: "管理员",
          phone: '15940324325',
          email: '23474@qq.com',
          rowType: '用户'
        },
      ],
      items: [
      {
        id: 1,
        prop:'id',
        label: "编号",
        sort:true,
      },
      {
        id: 2,
        prop:'userName',
        label: "用户名",
        sort:true,
      },
      {
        id:3,
        prop:'assignRole',
        label:"分配用户",
        sort:true,
      },
      {
        id:4,
        prop:'phone',
        label:"手机号码",
        sort:true
      },
      {
        id:5,
        prop:'email',
        type:"",
        label:"邮箱地址",
        sort:true,
      },
      ],
      actions:{
      	selection:true,
      	view:true,
      	edit:true,
      	dele:true,
      	ault:true,
      }
    }
  }
}
</script>