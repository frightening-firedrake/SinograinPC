<template>
	<div class="homeheaderrow">
		<el-row :gutter="24" class="home_cards" id="funcNav">
			<el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24" v-for="(card, index) in cards" :key="index" class="func-item">
				<div class="grid-content bg-purple home_card" :class='card.bscolor' :style='{backgroundColor: card.bgcolor}'>
					<div class="funcImg">
						<img :src='card.thumb' class="signImg" alt="">
					</div>
					<div class="title">
						<h3 class="cn">{{card.title}}</h3>
						<h4 class="en">{{card.Etitle}}</h4>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
require("../../../static/jqueryui/jquery-ui.js")
export default {
	mounted: function() {
		var funcItems = $("#funcNav .func-item");
		var funcNav = $("funcNav");
		$("#funcNav").sortable({
			items: funcItems,
			cursor: "move",
			opacity: 0.6,
			cursorAt: {
				left: 190,
				top: 85
			}
		});
		$("#funcNav").disableSelection();
	},
	data: function() {
		return {
			cards: [
				{
					thumb: "static/images/index/analysis.png",
					title: "统计分析",
					Etitle: "Statistical analysis",
					bgcolor: "#f16f6e",
					bscolor: "pink"
				},
				{
					thumb: "static/images/index/Authority.png",
					title: "权利管理",
					Etitle: "SAuthority management",
					bgcolor: "#5ca2f7",
					bscolor: "blue"
				},
				{
					thumb: "static/images/index/human.png",
					title: "人力行政",
					Etitle: "Human resources administration",
					bgcolor: "#fcdf3a",
					bscolor: "yellow"
				},
				{
					thumb: "static/images/index/Settings.png",
					title: "行政管理",
					Etitle: "System management",
					bgcolor: "#5cf79e",
					bscolor: "green"
				}
			]
		}
	}
}
</script>