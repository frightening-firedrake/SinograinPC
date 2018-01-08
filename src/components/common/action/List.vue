<template>
  <el-table 
  	ref="multipleTable" 
  	tooltip-effect="dark" 
  	style="width: 100%" 
  	:data="tabledata" 
  	@selection-change="handleSelectionChange" 
  	:default-sort = "{prop: 'id', order: 'ascending'}" 
  	v-loading="loading"
  	:row-class-name="row_class_name"
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
	    
		  <!--是否包含工作底稿-->
      <template v-if="actions.manuscript">
			    <el-table-column :resizable="resizable" align="center" label="工作底稿" class-name="tableAction">
		          <template slot-scope="scope">
		      <!--已完成工作底稿-->
		      				<template v-if="scope.row.manuscript">
		            			<button class="viewManuscript" @click="handleViewManuscript(scope.$index, scope.row)">中央储备粮实物检查工作底稿</button>
		      				</template>
		      <!--未完成工作底稿-->
						      <template v-else>
						          <button class="createManuscript" @click="handleCreateManuscript(scope.$index, scope.row)">+新建工作底稿</button>
						      </template> 
		          </template>
		      </el-table-column>
      </template>
	    
	    <!--是否包含安全报告-->
      <template v-if="actions.safetyReport">
			    <el-table-column :resizable="resizable" align="center" label="安全报告" class-name="tableAction">
		          <template slot-scope="scope">
		      <!--已完成安全报告-->
		      				<template v-if="scope.row.safetyReport">
		            			<button class="viewSafetyReport" @click="handleViewSafetyReport(scope.$index, scope.row)">安全报告</button>
		      				</template>
		      <!--未完成安全报告-->
						      <template v-else>
						          <button class="createSafetyReport" @click="handleCreateSafetyReport(scope.$index, scope.row)">+新建安全报告</button>
						      </template> 
		          </template>
		      </el-table-column>
      </template>
	    
      <el-table-column :resizable="resizable" align="center" label="操作" class-name="tableAction">
      <!--是否包含查看操作-->
          <template slot-scope="scope">
      				<template v-if="actions.view">
            			<button class="view" @click="handleView(scope.$index, scope.row)">查看</button>
      				</template>
      <!--是否包含编辑操作-->
				      <template v-if="actions.edit">
				          <button class="edit" @click="handleEdit(scope.$index, scope.row)">编辑</button>
				      </template> 
      <!--是否包含删除操作-->
				      <template v-if="actions.dele">
				          <button class="dele" @click="handleDele(scope.$index, scope.row)">删除</button>
				      </template>
          </template>
      </el-table-column>
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
//			console.log(this.loading)
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      var checkedId=val.map(function(item){
      	return item.id;
      })
			this.$emit('getchecked',checkedId)
    },
//  设置行类名
    row_class_name(scope){
    	return scope.row.row_class_name
    },
//  工作底稿
    handleViewManuscript(index, row){
    	this.$router.push({path: '/index/sampling/samplingList/manuscriptEdit'})
    },
    handleCreateManuscript(index, row){
    	console.log(this.$router)
    	this.$router.push({path: '/index/sampling/samplingList/manuscriptCreate'})
    },
//  安全报告
    handleViewSafetyReport(index, row){
    	this.$router.push({path: '/index/sampling/samplingList/safetyReportEdit'})
    },
    handleCreateSafetyReport(index, row){
    	this.$router.push({path: '/index/sampling/samplingList/safetyReportCreate'})
    },
    handleView(index, row) {
//	  	console.log(index,row);
//		    this.$root.eventHub.$emit('openmodal',row.id,'view',this.list)
		    this.$root.eventHub.$emit('viewlistitem',row.id)
		},
		handleEdit(index, row) {
//	  	console.log(index,row,this.list);
		    this.$root.eventHub.$emit('editlistitem',row.id)
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
	}
}

</script>
