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
		<el-upload
			v-if="title.importbtn"
			class="titlebtn"
			:action="title.importURL" 
			:headers="{'Authorization':Token}"  
			:show-file-list="false"
  			:on-success="readdata"				
			>
			<span>
				{{title.importbtn}}		       	
			</span>	
        </el-upload>
    </div>
</template>
<script>
import "@/assets/style/common/Option_title.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
	props:['title'],
	data() {
	    return {
	      
	    }
	},
	methods:{
		titlebtn(){
			this.$emit('titleEvent');
		},
		readdata(response,file,fileList){
			this.$emit('readdata',response);
		},
	},
    computed:{
		...mapGetters(["Token","userName"]),
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