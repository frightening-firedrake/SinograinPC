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
      <el-table-column type="index" :index="1" align="center" label="序号" v-if="actions.number"></el-table-column>
      <!--<el-table-column type="index" :index="indexMethod" v-if="actions.number"></el-table-column>-->
      <!--循环数据-->
   		<template v-for="item in items">
      
	    		<el-table-column show-overflow-tooltip v-if="!item.status" :width="item.width?item.width:'auto'" :resizable="resizable"	 align="center" :key="item.id" :label="item.label" :sortable="item.sort" :prop="item.prop" :class-name="item.class">
	    		</el-table-column>
	    		
	    		<el-table-column show-overflow-tooltip v-if="item.status" :width="item.width?item.width:'auto'" :resizable="resizable"	 align="center" :key="item.id" :label="item.label" :sortable="item.sort" :prop="item.prop" :class-name="item.class">
	    				<template slot-scope="scope">
		      				<template v-if="item.prop=='regState'">
				      				<template v-if="scope.row[item.prop]==-1">
				            			<span style="color:#fc6500;">待审核</span>
				      				</template>
								    	<template v-if="scope.row[item.prop]==1">
				            			<span style="color:#999999;">未同意</span>
				      				</template>
				      				<template v-if="scope.row[item.prop]==2">
				            			<span style="color:#666666;">已同意</span>
				      				</template>
				      				<template v-if="scope.row[item.prop]==3">
				            			<span style="color:blue;">草稿</span>
				      				</template>
		      				</template>
		      				<template v-if="item.prop=='sampleState'">
				      				<template v-if="scope.row[item.prop]==-1">
				            			<span style="color:#fc6500;">未扦样</span>
				      				</template>
								    	<template v-if="scope.row[item.prop]==1">
				            			<span style="color:#999999;">已扦样</span>
				      				</template>
				      				<template v-if="scope.row[item.prop]==2">
				            			<span style="color:#666666;">已入库</span>
				      				</template>
		      				</template>
		      				<template v-if="item.prop=='isDeal'">
				      				<template v-if="scope.row[item.prop]==-1">
				            			<span style="color:#fc6500;">待解决</span>
				      				</template>
								    	<template v-if="scope.row[item.prop]==1">
				            			<span style="color:#999999;">已解决</span>
				      			</template>
		      				</template>
		          </template>
	    		</el-table-column>
   		</template>
	    
	    <!--是否包含通知信息-->
      <template v-if="actions.message">
			    <el-table-column :resizable="resizable" align="center" label="新消息通知" class-name="tableAction">
		          <template slot-scope="scope">
		      <!--有新通知-->
		      				<template v-if="scope.row.count">
		            			您有<span style="color:#f22054;">{{scope.row.count}}</span>条新申请通知
		      				</template>
		      <!--没有新通知-->
						      <template v-else>
						                  本库暂无通知
						      </template> 
		          </template>
		      </el-table-column>
      </template>
		  <!--是否包含工作底稿-->
      <template v-if="actions.manuscript">
			    <el-table-column :resizable="resizable" align="center" label="工作底稿" class-name="tableAction" width="180">
		          <template slot-scope="scope">
		      <!--已完成工作底稿-->
		      				<template v-if="scope.row.mId">
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
			    <el-table-column :resizable="resizable" align="center" label="监督检查" class-name="tableAction">
		          <template slot-scope="scope">
		      <!--已完成安全报告-->
		      				<template v-if="scope.row.srId">
		            			<button class="viewSafetyReport" @click="handleViewSafetyReport(scope.$index, scope.row)">监督检查</button>
		      				</template>
		      <!--未完成安全报告-->
						      <template v-else>
						          <button class="createSafetyReport" @click="handleCreateSafetyReport(scope.$index, scope.row)">+新建监督检查</button>
						      </template> 
		          </template>
		      </el-table-column>
      </template>
	    
      <el-table-column :resizable="resizable" align="center" label="操作" class-name="tableAction">
          <template slot-scope="scope">
      <!--是否包含查看操作-->
      				<template v-if="actions.input">
            			<button class="input" @click="handleInput(scope.$index, scope.row,scope)">录入</button>
      				</template>
      <!--是否包含查看操作-->
      				<template v-if="actions.view">
            			<button class="view" @click="handleView(scope.$index, scope.row,scope)">查看</button>
      				</template>
      <!--是否包含编辑操作-->
				      <template v-if="actions.edit">
				          <button class="edit" @click="handleEdit(scope.$index, scope.row)">编辑</button>
				      </template> 
      <!--是否包含删除操作-->
				      <template v-if="actions.dele">
				          <button class="dele" @click="handleDele(scope.$index, scope.row)">删除</button>
				      </template>
			<!--是否包含授权操作-->
				      <template v-if="actions.auth">
				          <button class="auth" @click="handleAuth(scope.$index, scope.row)">授权</button>
				      </template>
          </template>
      </el-table-column>
      
      <template slot="empty"> 
      		<i class="iconfont icon-xinjian" @click=emptyCreate></i>
      		<br />
      		页面空空如也 快去新建吧！     		
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
//			console.log(this.loading)
  },
  methods: {
//	formatter(row, column, cellValue){
//		if(column.className=='status'){
//			if(cellValue==0){
//				return '待审核';
//			}else if(cellValue==1){
//				return '未同意'; 				
//			}else if(cellValue==2){
//				return '已同意'; 				
//			}
//		}else{
//			return cellValue;
//		}
//	},
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
    	this.$router.push({path: '/index/sampling/sampleLibraryList/libraryList/samplingList/sampleShowList/manuscriptEdit',query:{id:row.id,libraryName:row.libraryName}})
    },
    handleCreateManuscript(index, row){
    	console.log(this.$router)
    	this.$router.push({path: '/index/sampling/sampleLibraryList/libraryList/samplingList/sampleShowList/manuscriptCreate',query:{id:row.id,libraryName:row.libraryName}})
    },
//  安全报告
    handleViewSafetyReport(index, row){
    	this.$router.push({path: '/index/sampling/sampleLibraryList/libraryList/samplingList/sampleShowList/safetyReportEdit',query:{id:row.id,libraryName:row.libraryName,position:row.position}})
    },
    handleCreateSafetyReport(index, row){
    	this.$router.push({path: '/index/sampling/sampleLibraryList/libraryList/samplingList/sampleShowList/safetyReportCreate',query:{id:row.id,libraryName:row.libraryName,position:row.position}})
    },
    handleInput(index, row,scope) {
//	  	console.log(index,row);
//		    this.$root.eventHub.$emit('openmodal',row.id,'view',this.list)
		    this.$root.eventHub.$emit('inputlistitem',row.id)
		},
    handleView(index, row,scope) {
//	  	console.log(index,row);query:{id:row.id,libraryName:row.libraryName,position:row.position}}
//		    this.$root.eventHub.$emit('openmodal',row.id,'view',this.list)
				if(row.sampleState){
					this.$root.eventHub.$emit('viewlistitem',row.id,row.sampleState)										
				}else if(row.regState){
					this.$root.eventHub.$emit('viewlistitem',row.id,row.regState)										
				}else if(row.isDeal){
					this.$root.eventHub.$emit('viewlistitem',row)										
				}else{
					this.$root.eventHub.$emit('viewlistitem',row.id)					
				}
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
	  handleAuth(index, row) {
//	  	console.log(index,row,this.list);
		    this.$root.eventHub.$emit('authlistitem',row.id)
		},
	  emptyCreate(){
	  	this.$emit('emptyCreate');
	  }
	}
}

</script>
