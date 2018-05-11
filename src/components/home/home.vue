<template>
    <div class='listpagewrap'>
    	<div>我就是首页哦</div>
    </div>
</template>

<style>
	
</style>

<script>
import SinograinList from '@/components/common/action/List.vue';

import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
//本地测试要用下面import代码
//import data from '@/util/mock';



export default {
  components: {
    SinograinList
  },
  computed:{
	...mapState(["mask"]),
	...mapGetters(["modal_id"]),
	
  },
  created(){
//  获取列表数据（第一页）
//	this.getlistdata()
  },
  destroy(){

  },
  methods: {
  	...mapMutations(['close_modal']),
  	...mapActions(['addAction']),

//	获取数据方法
  	getlistdata(){
		this.$http({
		    method: 'post',
			url: this.datalistURL,
			transformRequest: [function (data) {
				// Do whatever you want to transform the data
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
			}],
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: {
			    
			}
	    }).then(function (response) {
		  	
		}.bind(this)).catch(function (error) {
		    console.log(error);
		}.bind(this));
  	},


  },
  data() {
    return {
      	datalistURL: this.apiRoot + '/grain/register/data',

      
      
     
      
    }
  }
}
</script>