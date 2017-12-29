<template>
	<!--<el-dialog  :append-to-body="true" :visible.sync="item.open" :modal="false" :lock-scroll="false" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" v-show="item.show" :center="true" :class="{lg:item.lg}">-->
	<el-dialog :visible.sync="item.open" :modal="false" :lock-scroll="false" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" v-show="item.show" :center="true" :class="{lg:item.lg,collapse:this.isCollapse&&item.lg}">
	    <!--头部-->
	    <span slot="title" class="titleaut" v-show="!item.lg">
			<p>{{item.title}}</p>
			<div class="btns">
				<!--最小化-->
				<a href="javascript:;" @click="btn_hid">
					<img src="static/images/sys/modal2.png" alt="">
				</a>
				<!--放大-->
				<a href="javascript:;" @click="btn_scaling">
					<img src="static/images/sys/modal3.png" alt="">
				</a>
				<!--关闭-->
				<a href="javascript:;" @click="btn_close">
					<img src="static/images/sys/modal1.png" alt="">
				</a>
			</div>
		</span>
	    
	    <!--放大后的头部-->
	    <template >	    	
		    <div class="role_view option_title_agg" v-show="item.lg">
			    <lemon-breadcrumb :breadcrumb="breadcrumb" ></lemon-breadcrumb>
			    <lemon-option-title  :actions="title_actions" v-on:btn_hid="btn_hid" v-on:btn_scaling="btn_scaling" v-on:btn_close="btn_close"></lemon-option-title>		
			</div>
	    </template>
		<!--内容-->
	    
	    <!--查看部分-->
	    <template v-if="modal_type=='view'">
	    	<lemon-modal-view :lg="item.lg" :datalist="item.datalist" v-on:btn_hid="btn_hid" v-on:btn_scaling="btn_scaling" v-on:btn_close="btn_close"></lemon-modal-view>
	    </template>
	    <!--编辑部分-->
	    <template v-if="modal_type=='edit'">
	    	<lemon-modal-edit :lg="item.lg" :datalist="item.datalist" v-on:btn_hid="btn_hid" v-on:btn_scaling="btn_scaling" v-on:btn_close="btn_close"></lemon-modal-edit>
	    </template>
	    <!--授权部分-->
	    <template v-if="modal_type=='ault'">
	    	<lemon-modal-ault :lg="item.lg" :datalist="item.datalist" :tree="item.tree" v-on:btn_hid="btn_hid" v-on:btn_scaling="btn_scaling" v-on:btn_close="btn_close"></lemon-modal-ault>
	    </template>
	    <!--底部-->
	    <span slot="footer" class="dialog-footer" v-if="footer">
	    	<el-button type="primary" @click="item.open = false">确 定</el-button>
		    <el-button @click="item.open = false">取 消</el-button>
		</span>
	</el-dialog>
</template>

<script>
//import "@/assets/style/common/list.css"
import LemonOptionTitle from "@/components/common/action/OptionTitle";
import LemonBreadcrumb from '@/components/common/action/Breadcrumb.vue';
//各种分支modal组件的引入
import LemonModalView from '@/components/common/action/modals/View.vue';
import LemonModalEdit from '@/components/common/action/modals/Edit.vue';
import LemonModalAult from '@/components/common/action/modals/Ault.vue';
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';

export default {
    components:{ LemonOptionTitle,LemonBreadcrumb,LemonModalView,LemonModalEdit,LemonModalAult },
    props: ['item','modal_type'],
    computed:{
		...mapState(["modal_id_number","viewdata","editdata","aultdata","messions","mask","isCollapse"]),
		...mapGetters(["modal_id"]),
	},
    data() {
        return {
        	breadcrumb:{
	      		search:true,
	      		undefinedpath:this.item.title,
	        },
	      	title_actions:{
	      		hid:true,
	      		scaling:true,
	      		close:true,
	      		undefinedpath:this.item.title,
	      	},
//      	lg:false,
    		true:true,
    		false:false,
    		footer:false,
        }
    },
    methods:{
    	...mapMutations(['create_modal_id','is_mask','close_modal','hid_modal']),
  		...mapActions(['addAction']),
    	btn_hid:function(){
    		this.item.show=!this.item.show;
    		this.is_mask(false); 
	    	var payload={};
				payload.id=this.item.id;
				payload.type=this.modal_type;
				payload.list=this.item.list;
				payload.title=this.item.title;
			this.hid_modal(payload);
//			发送事件让messions显示
			this.$root.eventHub.$emit("hidden_modal");
    	},
    	btn_scaling:function(){
    		this.item.lg=!this.item.lg;
    		if(this.item.lg){
	    		this.is_mask(false);
	    	}else{
	    		this.is_mask(true);    		
	    	}
    	},
    	btn_close:function(){
			this.is_mask(false);
			var payload={};
				payload.id=this.item.id;
				payload.type=this.modal_type;
				payload.list=this.item.list;
  			this.close_modal(payload);
    	},
    },
    mounted:function(){
//		console.log(this.breadcrumb)
    }
    
}
</script>
<style>
/*模态框插入body时的补充样式*/
/*.lg{
	padding:0.6rem 0 0 3rem;
}*/
.el-dialog{
	overflow: hidden;
    width: 10.24rem;
    border-radius:0.1rem;
}
/*最大定位*/
.lg{
	position:absolute;
	bottom:auto;
	z-index: 1!important;
	height:100%;
}
/*取消放大时的过渡效果*/
.lg.dialog-fade-leave-active{
	animation: dialog-fade-out 0s;	
}
.lg.dialog-fade-enter-active{
	animation: dialog-fade-in 0s;	
}

/*用在el-main时不用这条*/
/*.lg.collapse{
	padding-left:1rem;
}*/
.lg .el-dialog{
	width:100%!important;
	height:100%;
	margin:0!important;
	border-radius:0!important;
}
.lg .el-dialog__header,.lg .el-dialog__body{
	padding:0!important;
}
.lg .el-dialog__body{
	height:100%!important;
}
.lg .viewwrap{
	padding:0 0.41rem;
}
.lg .editwrap{
	padding:0 0.41rem;
}
.lg .aultwrap{
	padding:0 0.41rem;
}
/*头部*/
.titleaut{
	display: block;
	margin:-30px -15px -10px;
	height: 0.6rem;
	line-height: 0.6rem;
	padding:0 0.25rem;
	background-color: #5fa5f9;
	color:rgb(255,255,255);
	position:relative;
}
.titleaut:before{
	position:absolute;
	content:'';
	width:0.04rem;
	height:0.2rem;
	background:rgb(255,255,255);
	left:0.25rem;
	top:0.2rem;
}
.titleaut p{
	font-size:0.18rem;
	padding-left:0.08rem;
	float:left;
	line-height:0.6rem;
}
.titleaut div.btns{
	float:right;
	height:0.6rem;
}
.titleaut div.btns a{
	float:left;
	width:0.3rem;
	height:0.6rem;
	margin-left:0.1rem;
}
.titleaut div.btns a img{
	width:100%;
	height:100%;
}
/*底部*/
.el-dialog__footer{
	padding:0 0.4rem 0.4rem;
}
.dialog-footer{
	display: block;
}
.dialog-footer button {
    font-size: 0.22rem;
    padding: 0.15rem 0.45rem;
    line-height: 0.2rem;
    border-radius: 0.05rem 0.05rem 0.05rem 0.05rem;
}
/*内容*/
.el-dialog--center .el-dialog__body,.el-dialog__body{
	padding:0.5rem 0.6rem;
}


</style>