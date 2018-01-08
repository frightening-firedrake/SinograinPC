<template>
    <div class="option_title">
        <div class="option_title_name">
            <p>{{Route}}</p>
        </div>
    </div>
</template>
<script>
import "@/assets/style/common/Option_title.css"
export default {
//	props:['actions'],
	data() {
	    return {
	      
	    }
	},
	methods:{
		
	},
    computed:{
        Route:function(){
//      	if(this.actions.undefinedpath){
//      		return this.actions.undefinedpath;
//      	}
            const route = this.$route.name.split("/")
            return route[route.length-1]
        }
    },
    mounted:function(){
    	
    }
    
}
</script>
