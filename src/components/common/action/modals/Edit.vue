<template>
	<div class="editwrap">
		<lemon-form :forms="datalist" :lg="lg" v-on:btn_close="btn_close"></lemon-form> 
	</div>
</template>

<script>
//import LemonModalView from '@/components/common/action/modals/View.vue';
import LemonForm  from "@/components/common/action/Form";
	
export default {
    components:{ LemonForm},
    props: ['lg','datalist'],
    data() {
        return {
        	
        }
    },
    methods:{
    	btn_close:function(){
			this.$emit('btn_close')       
    	},
    }
   }
</script>

<style>
/*编辑内容*/
.el-dialog__body .el-form .btns{
	padding:0.2rem;
}
.lg .el-dialog__body  .el-form .btns{
	padding:0.66rem 0 0.56rem;
}
.el-dialog__body .el-form p{
	display: none;
}
.lg .el-dialog__body .el-form p{
	display: block;
}
.el-form .el-form-item:first-of-type{
	border-top-style:solid;
}
.lg .el-form .el-form-item:first-of-type{
	border-top-style:dashed;
}
</style>