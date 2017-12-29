<template>
	<!--嵌套的弹框外层作为进度内层为信息提示-->
	<el-dialog title="外层 Dialog" :visible.sync="importdatabase.Progress" custom-class="importProgress" top='25vh' :close-on-click-modal="false" :close-on-press-escape="false">
		<div class="progressbox" v-show="!importdatabase.Message">
			<h3>正在导入...</h3>
			<div class="progress progress-striped active">
				<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width:importPercentageStyle,backgroundColor:importStatusStyle}">
					<span class="pro-text">{{importdatabase.Percentage}}%</span>
				</div>
				<el-progress :text-inside="true" :percentage="importdatabase.Percentage" :status="importdatabase.Status"></el-progress>
			</div>
			<p>*请勿进行其他操作！您的任何操作都可能导致此次导入失败！</p>
		</div>
	    <el-dialog title="提示信息" :visible.sync="importdatabase.Message" custom-class="importMessage" append-to-body @close="closeimport" top='25vh'>
	    	<div class="res-success" v-show="importdatabase.Status=='success'">
					<img src="~IMG/sys/leads.png" alt="">
					<h3>导入成功！</h3>
					<p>您已成功恢复数据库！</p>
				</div>
				<div class="res-error" v-show="importdatabase.Status=='exception'">
					<img src="~IMG/sys/leade.png" alt="">
					<h3>导入失败！</h3>
					<p>您未能成功恢复数据库！</p>
				</div>
	    </el-dialog>
	</el-dialog>
</template>

<script>
export default {
  props: ['importdatabase'],
  methods: {
    closeimport(){
    	this.importdatabase.Progress=false;
    }
  },
  computed:{
  	importPercentageStyle(){
  		return this.importdatabase.Percentage+'%';
  	},
  	importStatusStyle(){
//		if(this.importStatus=="success"){
//			
//			return '#67c23a'
//		}else if(this.importStatus=="exception"){
//			
//			return '#fa5555'
//		}
			return 'rgb(49,126,221)'			
  	}
  },
  data() {
    return {
      false:false,
      true:true,
	}
  },
}
</script>
