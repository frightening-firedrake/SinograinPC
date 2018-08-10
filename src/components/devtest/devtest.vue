<template> 
	<button @click="click"></button>
</template>

<style>

</style>

<script>

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
	components: {

	},
	computed: {
		...mapState(["modal_id_number", "viewdata", "editdata", "aultdata", "messions", "mask"]),
		...mapGetters(["modal_id"]),
		
	},
	created() {

//		this.getlistdata(1)//对接时使用，暂时不启用用的假数据
		
	},
	destroy() {
		
	},
	methods: {
		...mapMutations(['create_modal_id', 'is_mask', 'create_modal', 'close_modal']),
		...mapActions(['addAction']),
		click(){
			
		},
		//	获取列表数据方法
		getlistdata(page) {

			var data={};
//			data.page=page;
//			data.rows=this.page.size;
//			var params = {};			
//			if(this.searchText){				
//				params.sampleNumLike = this.searchText;
//				data.params=JSON.stringify(params);
//			};
			// 获取列表数据（第？页）
			this.$http({
				method: 'post',
				url: this.datalistURL,
				transformRequest: [function (data) {
					let ret = ''
					for (let it in data) {
					ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
					return ret
				}],
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				data: data,
			}).then(function(response) {


			}.bind(this)).catch(function(error) {
				console.log(error);
			}.bind(this));
		},
		
		exportExcel(id){
//			if(!this.$_ault_alert('register:export')){
//				return
//			}
			var loadiframe=document.getElementById('fordownload');
			loadiframe.src=this.exportExcelURL+'?sampleId='+id+'&sessionid='+this.Token;
		}
	},
	data() {
		return {
			datalistURL: this.apiRoot +'/grain/testItem/data',
	  		exportExcelURL: this.apiRoot + '/grain/testItem/expotHandover',
		}	
	}
}
</script>

