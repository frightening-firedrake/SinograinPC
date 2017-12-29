<template>
  <el-table 
  	ref="multipleTable" 
  	stripe 
  	tooltip-effect="dark" 
  	style="width: 100%" 
  	border :data="tabledata" 
  	@selection-change="handleSelectionChange" 
  	:default-sort = "{prop: 'id', order: 'ascending'}" 
  	v-loading="loading"
    element-loading-customClass="table_loading"
    element-loading-text="loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255,255,255, 0.8)">
   		<!--是否包含多选框-->
   		<template v-if="actions.selection">
        <el-table-column :resizable="resizable" align="center" type="selection" class-name="tableAction">
        </el-table-column>
      </template>
      <!--是否添加编号-->
      <el-table-column type="index" :index="1" align="center" label="编号" v-if="actions.number"></el-table-column>
      <!--<el-table-column type="index" :index="indexMethod" v-if="actions.number"></el-table-column>-->
      <!--循环数据-->
	    <el-table-column v-for="item in items" :width="item.width?item.width:'auto'" :resizable="resizable"	 align="center" :key="item.id" :label="item.label" :sortable="item.sort" :prop="item.prop" :class-name="item.class">
	    </el-table-column>
      <!--是否包含查看操作-->
      <template v-if="actions.view">
        <el-table-column :resizable="resizable" align="center" label="查看" class-name="tableAction">
          <template slot-scope="scope">
            <i class="icon-eye-open" @click="handleView(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
      </template>
      <!--是否包含编辑操作-->
      <template v-if="actions.edit">
        <el-table-column :resizable="resizable" align="center" label="编辑" class-name="tableAction">
          <template slot-scope="scope">
            <i class="icon-pencil" @click="handleEdit(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
      </template>
       <!--是否包含导入操作-->
      <template v-if="actions.import">
      	<el-table-column  :resizable="resizable" align="center" label="备注" class-name="tableAction">
          <template slot-scope="scope">
            <el-button @click="handleLookremarks(scope.$index, scope.row)" type="text" size="small">查看备注</el-button>
          </template>
        </el-table-column>
        <el-table-column  :resizable="resizable" align="center" label="导入" class-name="tableAction">
          <template slot-scope="scope">
            <!--<i class="icon-signin" @click="handleimport(scope.$index, scope.row)" v-loading.fullscreen.lock="importLoading"></i>-->
            <i class="icon-signin" @click="handleimport(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
      </template>  
      <!--是否包含删除操作-->
      <template v-if="actions.dele">
        <el-table-column :resizable="resizable" align="center" label="删除" class-name="tableAction">
          <template slot-scope="scope">
            <i class="icon-trash" @click="handleDele(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
      </template>
      <!--是否包含授权操作-->
      <template v-if="actions.ault">
        <el-table-column :resizable="resizable" align="center" label="授权" class-name="tableAction">
          <template slot-scope="scope">
            <i class="icon-key" @click="handleAult(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
      </template>
  </el-table>	
</template>
<script>
export default {
  props: ['items', 'tabledata','actions','list','loading'],
  data() {
    return {
//  	importLoading: false,
      multipleSelection: [],
      resizable:false,
    }
  },
  mounted: function() {
//		this.openloading()
			console.log(this.loading)
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      var checkedId=val.map(function(item){
      	return item.id;
      })
			this.$emit('getchecked',checkedId)
    },
    formatter(row, column) {
      return row.address;
    },
    handleView(index, row) {
//	  	console.log(index,row,this.list);
	    this.$root.eventHub.$emit('openmodal',row.id,'view',this.list)
	    //openmodal打开模态框方法有mession组件监控
		},
		handleEdit(index, row) {
//	  	console.log(index,row,this.list);
		    this.$root.eventHub.$emit('openmodal',row.id,'edit',this.list)
		},
	
		handleAult(index, row) {
//	  	console.log(index,row,this.list);
		    this.$root.eventHub.$emit('openmodal',row.id,'ault',this.list)
		},
	  handleDele(index, row) {
	    this.$confirm('此操作将永久删除该'+row.rowType+', 是否继续?', '提示', {
	      confirmButtonText: '确定',
	      cancelButtonText: '取消',
	      type: 'warning'
	    }).then(() => {
	    	this.$root.eventHub.$emit('delelistitem',row.id,this.list);
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
	  handleLookremarks(index,row){
//	  	console.log(index,row,this.list);
	  	  this.$alert(row.remarks, '查看数据库备注信息', {
//        confirmButtonText: '确定',
          showConfirmButton:false,
          customClass:'Lookremarks',
          callback: action => {
            
          }
        });
	  },
	  handleimport(index,row){
//	  	console.log(index,row,this.list);
//				事件传递到了database/list
	    	this.$root.eventHub.$emit('showimport',row.id,this.list);
				
	  },
		  
	}
}

</script>
