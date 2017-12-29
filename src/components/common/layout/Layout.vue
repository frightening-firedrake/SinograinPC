<template>
	<el-container class="lemonrelative">
		<el-header>
			<lemon-header></lemon-header>
		</el-header>
		<el-container>
			<lemon-sidebar></lemon-sidebar>
			<el-main class="lemonrelative">
				<router-view></router-view>
				<!--查看模态框-->	
			      	<lemon-modal v-for="(item, index) in viewdata" :item="item" :key="index" :ref="item.id" modal_type="view"></lemon-modal>      		
			    <!--编辑模态框-->	
			      	<lemon-modal v-for="(item, index) in editdata" :item="item" :key="index" :ref="item.id" modal_type="edit"></lemon-modal>      	
			    <!--授权模态框-->
			      	<lemon-modal v-for="(item, index) in aultdata" :item="item" :key="index" :ref="item.id" modal_type="ault"></lemon-modal>
		      	<div class="mask" v-if="mask"></div>
			</el-main>
		</el-container>
      	<!--<div>{{viewdata}}</div>-->
	</el-container>
</template>

<script>
	import LemonModal from '@/components/common/action/Modal.vue';
	import LemonHeader from '@/components/common/layout/Header.vue'
	import LemonSidebar from '@/components/common/layout/Aside.vue'
	import LemonHome from '@/components/home/Home.vue'
	import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
	export default {
		components: {
			LemonHeader,
			LemonSidebar,
			LemonHome,
			LemonModal
		},
		computed:{
			...mapState(["mask","viewdata","editdata","aultdata"]),
		},
	}
</script>

<style>
/*补了个遮罩层*/	
.mask{
	position:fixed;
	top:0;
	left:0;
	right:0;
	bottom:0;
	z-index: 1999;
	background:rgba(0,0,0,0.5);
}
.lemonrelative{
	position:relative;
}
</style>