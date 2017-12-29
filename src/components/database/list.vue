<template>
  <div class="listpagewrap">
  <!--<div class="list_databa datebaselist">-->
    <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
    <lemon-prompt :alerts="alerts"></lemon-prompt>
    <lemon-list class="datebaselist list" :tabledata="tabledatas" :list="list" :items="items" :actions="actions" v-on:getchecked="getchecked">
    </lemon-list>
    <lemon-pagination :page="page" v-on:paginationEvent="paginationEvent" v-on:getCurrentPage="getCurrentPage"></lemon-pagination>   
		<!--进度条模态框 -->
		<template v-if="actions.import">
			<lemon-import :importdatabase="importdatabase"></lemon-import>
		</template>
  </div>
</template>
<script>
import LemonImport from '@/components/common/action/Modals/import.vue';
import LemonList from '@/components/common/action/List.vue';
import LemonBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import LemonPrompt from '@/components/common/prompt/Prompt.vue';
import LemonPagination from '@/components/common/action/Pagination.vue';
import "@/assets/style/common/list.css"
import "@/assets/style/common/import.css"
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  components: {
    LemonList, LemonBreadcrumb, LemonPagination, LemonPrompt,LemonImport
  },
  created() {
    //	监听列表删除事件
    this.$root.eventHub.$off('delelistitem')
    this.$root.eventHub.$on('delelistitem',function(rowid,list){
    	this.tabledatas=this.tabledatas.filter(function(item){
    		return item.id!==rowid;
    	})
    }.bind(this));
    //	显示进度
    this.$root.eventHub.$off('showimport')
    this.$root.eventHub.$on('showimport',function(rowid,list){
			this.importdatabase.Progress=true;
			var t;
			clearInterval(t);
			this.importdatabase.Percentage=0;
			t=setInterval(()=>{
				this.importdatabase.Percentage++;
				if(this.importdatabase.Percentage==100){
					clearInterval(t);
					this.importdatabase.Message=true;
//					this.importdatabase.Status="success";
					this.importdatabase.Status="exception";
				}
			},100)
    	console.log(rowid,list);
    }.bind(this));
  },
  methods: {
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
	},
  data() {
    return {
      list: "datebaselist",
      importdatabase:{
      	Progress:false,//控制倒入进度显示
      	Message:false,//控制导入结果显示
      	Status:'',//可选参数success，exception，''
      	Percentage:0,      	
      },
      breadcrumb: {
        search: true,
      },
      //    分页数据
      page: {
        size: 10,
        total: 19,
        tfootbtns: {
          btns: false,//是否添加按钮组
          create: false,//新建按钮
          refresh: false,//刷新按钮
          delete: false, //删除按钮      	
        }
      },
      //    弹窗数据
      alerts: [{
        title: '温馨提示：本功能在恢复数据的同时，将全部覆盖原有数据！ 单击右方x号，你可以关闭此条提示语！  ',
        type: 'info'
      }],
      //    表格数据
      tabledatas: [
        {
        	id:1,
          databaseName: 'xxx数据库1',
          date: "2017/01/01",
          size: "823k",
          remarks: "111然则我获得的┞封个S变量却老是少一部分，有人说AsString只能限制在64K以下，但我的S实际上只有33K阁下，并且不是说Delphi3以上的String的理论值已经是4G了吗？我在写一个数据库法度榜样时，须要大大一个表中获得备注字段的内容然后写入另一个表中，我是用：var s :string; s:=Query.FieldByName('MemoField').AsString;如不雅确切有如许的限制的话，我该若何实现上述功能？还请各位大大侠多多指导！！",
          rowType: '数据库'
        },
        {
        	id:2,
          databaseName: 'xxx数据库2',
          date: "2017/01/01",
          size: "823k",
          remarks: "222然则我获得的┞封个S变量却老是少一部分，有人说AsString只能限制在64K以下，但我的S实际上只有33K阁下，并且不是说Delphi3以上的String的理论值已经是4G了吗？我在写一个数据库法度榜样时，须要大大一个表中获得备注字段的内容然后写入另一个表中，我是用：var s :string; s:=Query.FieldByName('MemoField').AsString;如不雅确切有如许的限制的话，我该若何实现上述功能？还请各位大大侠多多指导！！",
          rowType: '数据库'
        },
        {
        	id:3,
          databaseName: 'xxx数据库3',
          date: "2017/01/01",
          size: "823k",
          remarks: "333然则我获得的┞封个S变量却老是少一部分，有人说AsString只能限制在64K以下，但我的S实际上只有33K阁下，并且不是说Delphi3以上的String的理论值已经是4G了吗？我在写一个数据库法度榜样时，须要大大一个表中获得备注字段的内容然后写入另一个表中，我是用：var s :string; s:=Query.FieldByName('MemoField').AsString;如不雅确切有如许的限制的话，我该若何实现上述功能？还请各位大大侠多多指导！！",
          rowType: '数据库'
        },
        {
        	id:4,
          databaseName: 'xxx数据库4',
          date: "2017/01/01",
          size: "823k",
          remarks: "444然则我获得的┞封个S变量却老是少一部分，有人说AsString只能限制在64K以下，但我的S实际上只有33K阁下，并且不是说Delphi3以上的String的理论值已经是4G了吗？我在写一个数据库法度榜样时，须要大大一个表中获得备注字段的内容然后写入另一个表中，我是用：var s :string; s:=Query.FieldByName('MemoField').AsString;如不雅确切有如许的限制的话，我该若何实现上述功能？还请各位大大侠多多指导！！",
          rowType: '数据库'
        },
      ],
      //表头项
      items: [
        {
          id: 1,
          prop: 'databaseName',
          label: "文件名",
          sort: true,
          width: "245"
        },
        {
          id: 2,
          prop: 'date',
          label: "备份时间",
          sort: true,
        },
        {
          id: 3,
          prop: 'size',
          label: "大小",
          sort: true,
        },
      ],
      actions: {
        selection: false,
        view: false,
        edit: false,
        dele: true,
        ault: false,
        import: true,
      }
    }
  }
}
</script>