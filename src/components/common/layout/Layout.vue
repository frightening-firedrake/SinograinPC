<template>
	<el-container id="father" class="Sinograinrelative" style="min-height: 100%;">
		<el-header>
			<Sinograin-header></Sinograin-header>
		</el-header>
		<el-container>
			<Sinograin-sidebar></Sinograin-sidebar>
			<el-main class="Sinograinrelative" style="min-height: 100%;">
				<!--<transition name="router-transition">-->
<!--					name="rotate"-->
				<!--<transition
					name="fadeUp"
					:duration="{ enter: 0, leave: 200 }"
				>-->
					<!--enter-active-class="router-transition-enter-active"
						enter-class="router-transition-enter"
					enter-to-class="router-transition-enter-to"
					leave-to-class="router-transition-leave-to"
					leave-active-class="router-transition-leave-active"
					leave-class="router-transition-leave"-->
					<router-view></router-view>
				<!--</transition>-->
			</el-main>
		</el-container>
		<iframe id="fordownload" style="display:none"></iframe>
      	<!--<div>{{viewdata}}</div>-->
	</el-container>
</template>

<script>
	import SinograinHeader from '@/components/common/layout/Header.vue'
	import SinograinSidebar from '@/components/common/layout/Aside.vue'
	import SinograinHome from '@/components/home/Home.vue'
	import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
//	import "@/assets/style/common/animate.css"
	
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
.router-transition-enter-active {
  	/*transition: all 1.5s ease;*/
  	transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.router-transition-leave-active {
  	/*transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
  	transition: all 0s;
}
.router-transition-enter{
  	transform: translateX(10px);
  	opacity: 0;
}
.router-transition-leave-to{
  	/*transform: translateX(10px);*/
  	opacity: 0;
}
</style>