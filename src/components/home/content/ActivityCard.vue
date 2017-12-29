<template>
	<div class="panel-body gameBox">
		<h4>最新发布</h4>
		<div class="row newtitle">
			<div class="el-col-xs-14 time">下午2：52 08月28日</div>
			<div class="el-col-xs-10 title">
				<a href="javascript:;">世界你好</a>
			</div>
		</div>
		<div class="row-content">
			<div class="col-img">
				<img src="static/images/index/newIssue.jpg" alt="">
			</div>
			<div class="col-text text-justify">
				<p>小米商城直营小米公司旗下所有产品，囊括小米手机系列小米6、小米5X、小米MIX，红米手机系列红米4X、红米Note 5A，智能硬件，配件及小小米商城直营小米公司旗下所有产品，囊括小米手机系列小米6、小，红米手机系列红米4X、红米Note 5A，智能硬件，配件及小....
				</p>
			</div>
		</div>
	</div>
</template>
<style>
	.gameBox>h4 {
		color: #333333;
		font-size: 0.18rem;
	}
	
	.gameBox .newtitle {
		height: 0.4rem;
		line-height: 0.4rem;
	}
	
	.gameBox .newtitle>div.time {
		font-size:0.14rem;
		color:#999999;
		padding: 0;
	}
	.gameBox .newtitle>div.title {
		font-size:0.14rem;
		color:#378ef8;
		padding-left: 0.4rem;
	}
	.gameBox .row-content {
		margin-right: -0.15rem;
		margin-left: -0.15rem;
		height: 1.37rem;
		margin-top: 0.15rem;
		overflow: hidden;
	}
	
	.gameBox .row-content .col-img {
		float: left;
		height: 100%;
		padding: 0 0.15rem;
	}
	
	.gameBox .row-content .col-img img {
		display: block;
		height: 100%;
	}
	
	.gameBox .row-content .col-text {
		width: auto;
		height: 100%;
		padding-right: 0.15rem;
		overflow: hidden;
	}
	
	.gameBox .row-content .col-text>p {
		/*display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		overflow: hidden;*/
	}
	
	.gameBox a {
		color: #378ef8;
	}
</style>
<script>
//	require("../../../assets/default/style/index/Home_operable_card.css");

  export default {
//	props: ['card'],
    data() {
      return {

      };
    },
    methods: {

    },

  }
</script>


