<template>
	<el-container id="father" class="Sinograinrelative" style="min-height: 100%;">
		<el-header>
			<Sinograin-header></Sinograin-header>
		</el-header>
		<el-container>
			<Sinograin-sidebar></Sinograin-sidebar>
			<el-main class="Sinograinrelative">
				<router-view></router-view>
			</el-main>
		</el-container>
      	<!--<div>{{viewdata}}</div>-->
	</el-container>
</template>

<script>
	import SinograinHeader from '@/components/common/layout/Header.vue'
	import SinograinSidebar from '@/components/common/layout/Aside.vue'
	import SinograinHome from '@/components/home/Home.vue'
	import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
	export default {
		components: {
			SinograinHeader,
			SinograinSidebar,
			SinograinHome,
		},
		computed:{

		},
	}
</script>

<style>

.Sinograinrelative{
	position:relative;
}
</style>