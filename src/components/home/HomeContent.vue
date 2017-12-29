<template>
	<div id="showList">
		<div class="row_m">
			<operable-card :card="card" v-for="card in cards" :key="card.card_id"></operable-card>
		</div>
	</div>
</template>
<style>
	#showList{
		padding:0 0.41rem;
		overflow: hidden;
	}
	#showList .cardwrap{
		padding:0 15px;
	}
	.row_m{
		margin:0 -15px;	
	}
	.row_m:after{
		display: block;
		content:'';
		clear:both;
	}
</style>
<script>

import OperableCard from '@/components/common/action/OperableCard.vue'
require("../../../static/jqueryui/jquery-ui.js")

export default {
	mounted: function() {
		var handle = $("#showList .ctrTool .icon-move");
		var mcons = $("#showList .row_m");
		var items = $("#showList .cardwrap");
		$(mcons).sortable({
			items: items,
			connectWith: mcons,
			handle: handle,
			helper: "clone"
			//      forcePlaceholderSize: true
			//      activate:function(event,ui){
			//      	$(ui.item).siblings().addClass("moveAnimation");
			//      }
			//      placeholder:'ui-nav-placeholder',
			//介绍后的回掉函数
			//      beforeStop: function( event, ui ) {
			//      }
		});
	},
	data() {
      return {
      	cards:[
	        {
	        	title:'今日任务',
	        	circleColor:'#ed0e68',
	        	more:true,
	        	slidetoggle:true,
	        	remove:false,
	        	card_id:'card1',
	        	cardType:'release',
	  			classObject:{
	  				'el-col-lg-8':true,
	  				'el-col-lg-12':false,
	  				'el-col-lg-16':false,
	  				'el-col-xs-24':true,
	  				'el-col-sm-24':true,
	  				'el-col-md-12':true,
	  				
	  			},
	        },
	        {
	        	title:'活动',
	        	circleColor:'#37f889',
	        	more:false,
	        	slidetoggle:true,
	        	remove:false,
	        	card_id:'card2',
	        	cardType:'activity',
	  			classObject:{
	  				'el-col-lg-8':true,
	  				'el-col-lg-12':false,
	  				'el-col-lg-16':false,
	  				'el-col-xs-24':true,
	  				'el-col-sm-24':true,
	  				'el-col-md-12':true,
	  			},
	        },
	        {
	        	title:'天气小贴士',
	        	circleColor:'#378ef8',
	        	more:true,
	        	slidetoggle:true,
	        	remove:false,
	        	card_id:'card3',
	        	cardType:'weather',
	  			classObject:{
	  				'el-col-lg-8':true,
	  				'el-col-lg-12':false,
	  				'el-col-lg-16':false,
	  				'el-col-xs-24':true,
	  				'el-col-sm-24':true,
	  				'el-col-md-12':true,
	  			},
	        },
			{
	        	title:'人力管理',
	        	circleColor:'#c013da',
	        	more:true,
	        	slidetoggle:true,
	        	remove:false,
	        	card_id:'card4',
	        	cardType:'administration',
	 			classObject:{
	  				'el-col-lg-8':true,
	  				'el-col-lg-12':false,
	  				'el-col-lg-16':false,
	  				'el-col-xs-24':true,
	  				'el-col-sm-24':true,
	  				'el-col-md-12':true,
	  			},
	        },
	        {
	        	title:'经济报表',
	        	circleColor:'#ed0e68',
	        	more:false,
	        	slidetoggle:true,
	        	remove:false,
	        	card_id:'card5',
	        	cardType:'chart',
	 			classObject:{
	  				'el-col-lg-8':false,
	  				'el-col-lg-12':false,
	  				'el-col-lg-16':true,
	  				'el-col-xs-24':true,
	  				'el-col-sm-24':true,
	  				'el-col-md-24':true,
	  			},
	        },
	        {
	        	title:'快速草稿',
	        	circleColor:'#f837e8',
	        	more:false,
	        	slidetoggle:true,
	        	remove:false,
	        	card_id:'card6',
	        	cardType:'draft',
				classObject:{
	  				'el-col-lg-8':true,
	  				'el-col-lg-12':false,
	  				'el-col-lg-16':false,
	  				'el-col-xs-24':true,
	  				'el-col-sm-24':true,
	  				'el-col-md-12':true,
	  			},
	        },
      	]

        
      };
    },
  components: {
    OperableCard
  }
}
</script>

