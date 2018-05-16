<template>
	<el-table ref="multipleTable" tooltip-effect="light" style="width: 100%" :data="tabledata" @selection-change="handleSelectionChange" :default-sort="{prop: actions.sort, order: 'ascending'}" v-loading="loading" :row-class-name="row_class_name" element-loading-customClass="table_loading" element-loading-text="loading..." element-loading-spinner="el-icon-loading" element-loading-background="rgba(255,255,255, 0.8)" @row-click="rowClick">
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

			<el-table-column show-overflow-tooltip v-if="!item.status" :width="item.width?item.width:'auto'" :resizable="resizable" align="center" :key="item.id" :label="item.label" :sortable="item.sort" :prop="item.prop" :class-name="item.class">
			</el-table-column>

			<el-table-column show-overflow-tooltip v-if="item.status" :width="item.width?item.width:'auto'" :resizable="resizable" align="center" :key="item.id" :label="item.label" :sortable="item.sort" :prop="item.prop" :class-name="item.class">
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
						<template v-if="scope.row[item.prop]==3">
							<span style="color:#666666;">已入库</span>
						</template>
					</template>
					<template v-if="item.prop=='resourceType'">
						<template v-if="scope.row[item.prop]==1">
							<span style="color:#666666;">菜单</span>
						</template>
						<template v-if="scope.row[item.prop]==2">
							<span style="color:#666666;">元素</span>
						</template>
						<template v-if="scope.row[item.prop]==3">
							<span style="color:#666666;">文件</span>
						</template>
						<template v-if="scope.row[item.prop]==4">
							<span style="color:#666666;">操作</span>
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
					<template v-if="item.prop=='reason'">
						<template v-if="scope.row.regState==-1">
							<span style="color:#fc6500;">等待审核中</span>
						</template>
						<template v-if="scope.row.regState==1">
							<span style="color:#f56c6c;">{{scope.row[item.prop]}}</span>
						</template>
						<template v-if="scope.row.regState==2">
							<span style="color:#58b481;">已通过审核</span>
						</template>
						<template v-if="scope.row.regState==3">
							<span style="color:blue;">未提交审核</span>
						</template>
					</template>
					<template v-if="item.prop=='pLibraryId'">
						{{findPLibraryName(scope.row[item.prop])}}
					</template>
					<template v-if="item.prop=='depot'">
						{{scope.row['depot']+scope.row['counter']}}
					</template>
					<template v-if="item.prop=='checkeds'">
						{{findCheckeds(scope.row[item.prop])}}
					</template>
					<template v-if="item.prop=='sampleNum'">
						监{{scope.row[item.prop]}}
					</template>
					<template v-if="item.prop=='smallSampleNum'">
						监{{scope.row[item.prop]}}
					</template>
					<template v-if="item.prop=='checkPoint'">
						{{findCheckPoint(scope.row)}}
					</template>
					<template v-if="item.prop=='libraryFullName'">
						{{scope.row.pLibraryName}}—{{scope.row.libraryName}}
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
						您有
						<span style="color:#f22054;">{{scope.row.count}}</span>条新申请通知
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
			<el-table-column :resizable="resizable" align="center" label="工作底稿" class-name="tableAction" width="200">
				<template slot-scope="scope">
					<!--已完成工作底稿-->
					<template v-if="scope.row.mId">
						<button class="viewManuscript" @click.stop="handleViewManuscript(scope.$index, scope.row)">中央储备粮实物检查工作底稿</button>
					</template>
					<!--未完成工作底稿-->
					<template v-else>
						<button class="createManuscript" @click.stop="handleCreateManuscript(scope.$index, scope.row)">+新建工作底稿</button>
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
						<button class="viewSafetyReport" @click.stop="handleViewSafetyReport(scope.$index, scope.row)">监督检查</button>
					</template>
					<!--未完成安全报告-->
					<template v-else>
						<button class="createSafetyReport" @click.stop="handleCreateSafetyReport(scope.$index, scope.row)">+新建监督检查</button>
					</template>
				</template>
			</el-table-column>
		</template>

		<el-table-column v-if="actions.show" :resizable="resizable" align="center" label="操作" class-name="tableAction">
			<template slot-scope="scope">
				<!--是否包含查看操作-->
				<template v-if="actions.input">
					<button class="input" @click.stop="handleInput(scope.$index, scope.row,scope)">录入</button>
				</template>
				<!--是否包含查看操作-->
				<template v-if="actions.view1">
					<button class="view" @click.stop="handleView(scope.$index, scope.row,scope)">查看</button>
				</template>
				<!--是否包含编辑操作-->
				<template v-if="actions.edit">
					<!--<button class="edit" @click.stop="handleEdit(scope.$index, scope.row)">编辑</button>-->
					<!--<button v-if="scope.row.checkPoint" class="undele" @click.stop="notAllowed()">编辑</button>-->
					<button v-if="!$_ault_alert('all:edit')" class="undele" @click.stop="notAllowed()">编辑</button>
					<button v-else class="edit" @click.stop="handleEdit(scope.$index, scope.row)">编辑</button>
				</template>
				<!--是否包含删除操作-->
				<template v-if="actions.deleCaogao">
					<button v-if="scope.row.regState==3" class="dele" @click.stop="handleDele(scope.$index, scope.row)">删除</button>
					<button v-else class="undele" @click.stop="notAllowed()">删除</button>
				</template>
				<!--是否包含删除操作-->
				<template v-if="actions.dele">
					<button class="dele" @click.stop="handleDele(scope.$index, scope.row)">删除</button>
				</template>
				<!--是否包含授权操作-->
				<template v-if="actions.auth">
					<button class="auth" @click.stop="handleAuth(scope.$index, scope.row)">授权</button>
				</template>
				<!--是否包含打印操作-->
				<template v-if="actions.print">
					<button class="print" @click.stop="handlePrint(scope.$index, scope.row,scope)">打印小样条码</button>
				</template>
				<template v-if="actions.printSampleIn">
					<button class="print" @click.stop="handlePrintSampleIn(scope.$index, scope.row,scope)">打印检验条码</button>
				</template>
			</template>
		</el-table-column>

		<template slot="empty">
			<!--<i class="iconfont icon-xinjian" @click=emptyCreate></i>
	      		<br />
	      		页面空空如也 快去新建吧！     		-->
			页面空空如也！
		</template>
	</el-table>
</template>
<script>
export default {
	props: ['items', 'tabledata', 'actions', 'list', 'loading', 'librarylist', 'rowType'],
	data() {
		return {
			//  	importLoading: false,
			multipleSelection: [],
			resizable: false,
		}
	},
	mounted: function() {

		//		this.openloading()
		//			console.log(this.loading)
	},
	computed:{
		checkPointEdit(){
			return this.$_ault_alert('all:edit')
		}
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
			var checkedId = val.map(function(item) {
				return item.id;
			})
			this.$emit('getchecked', checkedId)
		},
		//  设置行类名
		row_class_name(scope) {
			return scope.row.row_class_name
		},
		//  工作底稿
		handleViewManuscript(index, row) {
			if(!this.$_ault_alert('manuscript:saveMan')){
				return
			}
			this.$router.push({ path: '/index/sampling/libraryList/samplingList/sampleShowList/manuscriptEdit', query: { id: row.id, libraryName: row.libraryName } })
		},
		handleCreateManuscript(index, row) {
			if(!this.$_ault_alert('manuscript:saveMan')){
				return
			}
			this.$router.push({ path: '/index/sampling/libraryList/samplingList/sampleShowList/manuscriptCreate', query: { id: row.id, libraryName: row.libraryName } })
		},
		//  安全报告
		handleViewSafetyReport(index, row) {
			if(!this.$_ault_alert('safety:save')){
				return
			}
			this.$router.push({ path: '/index/sampling/libraryList/samplingList/sampleShowList/safetyReportEdit', query: { id: row.id, libraryName: row.libraryName, position: row.position } })
		},
		handleCreateSafetyReport(index, row) {
			if(!this.$_ault_alert('safety:save')){
				return
			}
			this.$router.push({ path: '/index/sampling/libraryList/samplingList/sampleShowList/safetyReportCreate', query: { id: row.id, libraryName: row.libraryName, position: row.position } })
		},
		handleInput(index, row, scope) {
			//	  	console.log(index,row);
			//		    this.$root.eventHub.$emit('openmodal',row.id,'view',this.list)
			this.$root.eventHub.$emit('inputlistitem', row.id)
		},
		handleView(index, row, scope) {
			//	  	console.log(index,row);query:{id:row.id,libraryName:row.libraryName,position:row.position}}
			//		    this.$root.eventHub.$emit('openmodal',row.id,'view',this.list)
			if (row.sampleState) {
				this.$root.eventHub.$emit('viewlistitem', row.id, row.sampleState)
			} else if (row.regState) {
				this.$root.eventHub.$emit('viewlistitem', row.id, row.regState)
			} else if (row.isDeal) {
				this.$root.eventHub.$emit('viewlistitem', row)
			} else {
				this.$root.eventHub.$emit('viewlistitem', row.id)
			}
		},
		handleEdit(index, row) {
			//	  	console.log(index,row,this.list);
			this.$root.eventHub.$emit('editlistitem', row.id, row)
		},

		handleDele(index, row) {
			this.$confirm('此操作将永久删除该' + this.rowType + ', 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$root.eventHub.$emit('delelistitem', row.id, this.list);
				//	      this.$message({
				//	        type: 'success',
				//	        message: '删除成功!'
				//	      });
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});
			});
		},
		handleAuth(index, row) {
			//	  	console.log(index,row,this.list);
			this.$root.eventHub.$emit('authlistitem', row)
		},
		handlePrint(index, row, scope) {
			this.$root.eventHub.$emit('printlistitem', row.smallSampleNum)
		},
		handlePrintSampleIn(index, row, scope) {
			this.$root.eventHub.$emit('printlistitem', row.sampleNum)
		},
		emptyCreate() {
			this.$emit('emptyCreate');
		},
		findPLibraryName(pid) {
			var pitem = this.librarylist.filter((item) => {
				return item.id == pid
			})
			if (pitem.length) {
				return pitem[0].libraryName;
			}
		},
		findCheckeds(str) {
			var indexs = str.split(',');
			indexs.sort((a, b) => { return a - b; });
			var checkList = ["不完善颗粒", "杂质", "生霉粒", "水分", "硬度（测定记录）", "脂肪酸值（面筋吸水）", "品尝评分", "卫生", "加工品质"]
			var res = [];
			indexs.forEach((item) => {
				res.push(checkList[item - 1])
			})
			return res.join('，')
		},
		findCheckPoint(obj) {
			var checkList1 = ["不完善颗粒", "杂质", "生霉粒", "水分", "测定记录", "脂肪酸值", "品尝评分", "卫生", "加工品质"]
			var checkList2 = ["不完善颗粒", "杂质", "生霉粒", "水分", "硬度", "面筋吸水", "品尝评分", "卫生", "加工品质"]
			var index = obj.checkPoint
			var res;
			if (obj.sort == '玉米') {
				res = checkList1[index - 1];
			} else if (obj.sort == '小麦') {
				res = checkList2[index - 1];
			}
			return res;
		},
		rowClick(row, event, column) {
			if (this.actions.noview) {
				return
			}
			if (row.sampleState) {
				this.$root.eventHub.$emit('viewlistitem', row.id, row.sampleState)
			} else if (row.regState) {
				this.$root.eventHub.$emit('viewlistitem', row.id, row.regState)
			} else if (row.isDeal) {
				this.$root.eventHub.$emit('viewlistitem', row)
			} else {
				this.$root.eventHub.$emit('viewlistitem', row.id, row)
			}
		},
		notAllowed() {
			return false;
		},
	}
}

</script>
