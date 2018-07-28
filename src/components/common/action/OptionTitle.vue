<template>
    <div class="option_title">
        <div class="option_title_name">
            <p>{{title.name?title.name:Route}}</p>
        </div>
        <div class="titlebtn" v-if="title.btn" @click="titlebtn">
			<span>
				{{title.btntext}}
			</span>					
		</div>
    </div>
</template>
<script>
import "@/assets/style/common/Option_title.css"
export default {
	props:['title'],
	data() {
	    return {
	      
	    }
	},
	methods:{
		titlebtn(){
			this.$emit('titleEvent');
		}
	},
    computed:{
        Route:function(){
        	if(this.title.title){
        		return this.title.title;
        	}
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