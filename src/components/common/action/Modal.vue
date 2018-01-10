<template>
	<el-dialog :title="modal.title" :visible.sync="modalVisible" custom-class="createlib" :width="dialogWidth" @close="dialogClose">
	  	<el-form :model="form" ref="modalform">
	  		<template v-for="(item, index) in modal.formdatas">
	  			<el-form-item :label="item.label" :label-width="formLabelWidth">
			        <el-input v-model="form[item.model]" auto-complete="off"></el-input>
			    </el-form-item>
	  		</template>
	  		
	  	<!--<el-form :model="createlib" ref="modalform">
		    <el-form-item label="单位名称:" :label-width="formLabelWidth">
		        <el-input v-model="createlib.unit" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="库点名称:" :label-width="formLabelWidth">
		        <el-input v-model="createlib.lib" auto-complete="off"></el-input>
		    </el-form-item>-->
		    
		    <!--<el-form-item label="库点名称" :label-width="formLabelWidth">
		        <el-select v-model="createlib.region" placeholder="请选择活动区域">
			        <el-option label="区域一" value="shanghai"></el-option>
			        <el-option label="区域二" value="beijing"></el-option>
		        </el-select>
		    </el-form-item>-->
		</el-form>
		<div slot="footer" class="dialog-footer center">
		    <el-button class="yes" type="primary" @click="createlibitem">{{modal.submitText?modal.submitText:'确 定'}}</el-button>
		    <el-button class="no" @click="modalVisible = false">取 消</el-button>
	    </div>
	</el-dialog>
</template>

<script>
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';

export default {
    components:{ },
    props: ['modal'],
    computed:{
		...mapState(["modal_id_number","viewdata","editdata","aultdata","messions","mask","isCollapse"]),
		...mapGetters(["modal_id"]),
	},
	created(){

	},
    data() {
        return {
        	dialogWidth:'6.2rem',
        	modalVisible: true,
		    form:{
		       	
		    },
	        formLabelWidth: '1.4rem'
        }
    },
    methods:{
    	...mapMutations(['create_modal_id','is_mask','close_modal','hid_modal']),
  		...mapActions(['addAction']),
    	createlibitem(){
//  		this.modalVisible = false;
    		this.$emit('createlibitem',this.form);
    		this.$emit('dialogClose')
//  		this.$refs['modalform'].resetFields();
    	},
    	dialogClose(){
//  		this.$refs['modalform'].resetFields();
    		this.$emit('dialogClose')
    	}
    },
    mounted:function(){
//		console.log(this.breadcrumb)
    }
    
}
</script>
<style>
.el-dialog{
	overflow: hidden;
    /*width: 10.24rem;*/
    border-radius:0.1rem;
}
/*头部*/
.createlib .el-dialog__header{
	height: 0.6rem;
	line-height: 0.6rem;
	padding:0 0.33rem;
	background-color: rgba(88, 180, 129, 0.8);
	position:relative;	
}
.createlib .el-dialog__title{
	font-size:0.18rem;
	color:rgba(2255,255,255,1);
}
.createlib .el-dialog__title:before{
	position:absolute;
	content:'';
	width:0.04rem;
	height:0.2rem;
	background:rgba(255,255,255, 1);
	left:0.2rem;
	top:0.2rem;
}
.createlib .el-dialog__headerbtn{
	top:50%;
	margin-top:-0.1rem;
	right:0.3rem;
	width:0.2rem;
	height:0.2rem;
}
.createlib .el-dialog__headerbtn .el-dialog__close{
	color:#ffffff;
	font-size:0.2rem;
}
.createlib .el-dialog__body{
	padding:0.45rem 0.35rem 0 0.48rem;
}
.createlib .el-dialog__body .el-form-item{
	/*height: 0.5rem;*/
	line-height: 0.5rem;
	background-color: #ffffff;
	border: solid 1px #dfdfdf;
	margin:0;
	border-top:none;
}
.createlib .el-dialog__body .el-form-item:first-of-type{
	border-top:solid 1px #dfdfdf;
}
.createlib .el-dialog__body .el-form-item__label{
	line-height: 0.5rem;
	background-color: #fbfbfb;
	border-right:1px solid #dfdfdf;
	font-size:0.18rem;
	color:#333333;
}
.createlib .el-dialog__body .el-form-item__content{
	line-height: 0.5rem;
	
}
.createlib .el-dialog__body .el-input input{
	line-height:0.5rem;
	border:none;
	font-size:0.18rem;
	color:#333333;
	height:auto;
}
/*底部*/
.createlib .el-dialog__footer{
	padding:0.43rem 0;
}
.createlib .dialog-footer.center{
	text-align:center;
}
.createlib .dialog-footer button {
    font-size: 0.18rem;
    padding: 0rem;
    line-height: 0.5rem;
    border-radius: 0.1rem;
    width:1.3rem;
    height:0.5rem;
    text-align: center;
}
.createlib .dialog-footer .el-button+.el-button{
	margin-left:0.57rem;
}
.createlib .dialog-footer button.yes {
	background-color: rgb(88,180,129);
	border-color:rgb(88,180,129);
}
.createlib .dialog-footer button.yes:hover {
	background-color: rgba(88,180,129,0.8);
	border-color:#58b481;
}
.createlib .dialog-footer button.no {
	color: #58b481;
	border-color:#58b481;
}
.createlib .dialog-footer button.no:hover {
	background:rgba(88,180,129,0.1);
}
</style>