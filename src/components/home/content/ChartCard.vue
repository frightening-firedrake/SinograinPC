<template>
	<div id="card_echart"></div>
</template>
<style>
	#card_echart{
		width:100%;
		height:2.4rem;
	}
</style>
<script>
//	require("../../../assets/default/style/index/Home_operable_card.css");

  export default {
	mounted: function() {
		var echarts = require('echarts');

	//河流图
		var card_echart = echarts.init(document.getElementById("card_echart"))
		var option = {
			grid: {
				top: '10%',
				left: '10%',
				right: '5%',
				bottom:'15%',
			},
			tooltip: {
//				trigger: 'axis',
				trigger: 'item',		
				tooltip: false,
				backgroundColor: "#f9119f",
				borderColor: "#ffffff",
				borderWidth: 1,
				enterable: true,
//				b0 x轴坐标 a0曲线标题 c0 y轴坐标
				position:"top",
				formatter: "{c0}k",
				textStyle: {
					color: "#ffffff",
					align: 'center',
					rich: {
						b: {
							lineHeight: 33
						}
					}
				},
				extraCssText: "width:0.57rem;height:0.33rem；line-height:0.33rem",
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985',
						formatter:'{value} k',						
					}
				},
			},
			xAxis: {
				splitLine: {
					show: true
				},
				type: 'category',
				boundaryGap: false,
				axisTick:{
					length:0,
				},
				axisLabel:{
					show: true,
//					margin:15,
					formatter:'{value} k',
					color:'rgb(0,0,0)',
					fontSize:14,
				},
				data: ['2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5','2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5',]
			},
			yAxis: {
				splitLine: {
					show: true
				},
				type: 'value',
				axisTick:{
					length:0,
				},
				axisLabel:{
					show: true,
//					margin:15,
					formatter:'{value} k',
					color:'rgb(0,0,0)',
					fontSize:14,
				},
//				nameGap:0,
//				data: ['0', '2.5k', '5k', '7.5k', '10k',]
			},
			series: [
				{
					legendHoverLink: true,
					name: '资源一',
					type: 'line',
					smooth: true,
					showSymbol: false,
					areaStyle: {
						normal:{
							color:new echarts.graphic.LinearGradient(0,0,0,1,[
								{offset:0,color:'#fc129d'},
								{offset:1,color:'#bb04be'},
							],false),
							opacity: "1"							
						}
					},
					itemStyle: {
						normal: {
							color: "#f58705",//外圈
						},
						emphasis: {
							color: "#ffffff",//内芯
						},
					},
					lineStyle: {
						normal: {
							color: "#fc129d"//边线
						},
					},
					data: [1.4,1.7,1.6,2,1.8,2.7,2.4,5.5,2.5,2.4,2,1.8,3,2.7,4,1.5,1.4,1.1,2.5,2.3,4,2]
				},
				
			]

		};
		card_echart.setOption(option);
		$(window).on('resize.card_echart',function(){
			card_echart.resize();
		})
		var n=1;
		$('.el-menu-vertical-demo .btn-fold').on('click.card_echart',function(){
			n++;
			console.log(n)
			card_echart.resize();
			
		})

	},
    data() {
      return {

      };
    },
    methods: {

    },

  }
</script>

