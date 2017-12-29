<template>
    <div class="option_title">
        <div class="option_title_name">
            <p>{{Route}}</p>
        </div>
        <div class="option_title_close" v-if="actions.close" @click="close">
            <img src="static/images/sys/modal1.png" alt="">
        </div>
        <div class="option_title_scaling" v-if="actions.scaling" @click="scaling">
            <img src="static/images/sys/modal3.png" alt="">
        </div>
        <div class="option_title_hid" v-if="actions.hid" @click="hid">
            <img src="static/images/sys/modal2.png" alt="">
        </div>
    </div>
</template>
<script>
import "@/assets/style/common/Option_title.css"
export default {
	props:['actions'],
	data() {
	    return {
	      
	    }
	},
	methods:{
		close:function(){
			this.$emit('btn_close');
//			this.$root.eventHub.$emit('btn_close');
		},
		scaling:function(){
			this.$emit('btn_scaling');
//			this.$root.eventHub.$emit('btn_scaling');
		},
		hid:function(){
			this.$emit('btn_hid');
//			this.$root.eventHub.$emit('btn_hid');
		},
		
	},
    computed:{
        Route:function(){
        	if(this.actions.undefinedpath){
        		return this.actions.undefinedpath;
        	}
            const route = this.$route.name.split("/")
            return route[route.length-1]
        }
    },
    mounted:function(){
    	
    }
    
}
</script>
