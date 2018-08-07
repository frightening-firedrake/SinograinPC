<template>
	<div class="WordReportPage">
	    
	</div>
</template>
<style>


</style>
<script>
//import "@/assets/style/common/Option_title.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
	props:['pagedata'],
	created(){

	},
	mounted(){
//		this.listWidth=document.querySelector('#AdvancedSearch').offsetWidth+'px';
	},
    computed:{
		...mapGetters(["Token","userName"]),
		
    },
    methods:{
		

	},
    data() {
	    return {
	      	
	    }
	},
}
</script>