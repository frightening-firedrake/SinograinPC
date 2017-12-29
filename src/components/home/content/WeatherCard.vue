<template>
	<div class="panel-body skyBox">
		<div class="row">
			<div class="moreSky text-right">
				<!--<a href="" class="moresky">更多天气</a>-->
				<a href="" class="moresky"></a>
			</div>
			<div class="el-col-xs-8 el-col-sm-8 el-col-md-8 el-col-lg-8 con r">
				<!--<div class="pie text-center">-->
					<div id="circle" class="pieChart text-center" data-percent="76%">
					</div>
					<!--<div class="per">76%</div>-->
					<!--<label for="" class="per">76%</label>-->
				<!--</div>-->
				<!--<div class="skyInfo text-center">空气湿度</div>-->

			</div>
			<div class="el-col-sm-16 con">
				<div class="row skyDetail">
					<div class="el-col-sm-12">
						<ul class="list-unstyled">
							<li class="text-center">太原</li>
							<li class="text-center">多云 星期四</li>
							<li class="text-center">17℃~20℃</li>
						</ul>
					</div>
					<div class="cloud el-col-sm-12 text-center">
						<!--<canvas width="80" height="100" id="skyCan">-->
						<!--</canvas>-->
						<img src="static/images/index/weather/duoyun.jpg" class="img-responsive" alt="">
					</div>
				</div>
				<div class="date text-center">
					<i class="icon-calendar"></i>
					<span id="calendar">{{now()}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
.text-center{
	text-align: center;
}
.skyBox>.row .con {
	height: 100%;
	padding: 0 0.05rem;
	height:2rem;
}

.skyBox>.row .con .pie {
	width: 100%;
	height: 85%;
	position: relative;
	top:0.3rem;
}

.skyBox>.row .con .pie .pieChart canvas {
	position: absolute;
	top: 50%;
	left: 50%;
}
.skyBox>.row .con .skyInfo {
	width: 100%;
	height: 15%;
}

@media screen and (min-width: 1080px) and (max-width: 1112px) {
	.skyBox>.row .con .skyInfo {
		font-size: 0.12rem;
	}
}

.skyBox>.row .con .skyDetail {
	position: relative;
	padding-top: 0.2rem;
	height: 80%;
	margin: 0;
}

.skyBox>.row .con .skyDetail .el-col-xs-6 {
	height: 100%;
	padding: 0;
}

.skyBox>.row .con .skyDetail ul {
	height: 100%;
	padding-top: 0.05rem;
}

.skyBox>.row .con .skyDetail li {
	line-height: 0.2rem;
}

.skyBox>.row .con .skyDetail li:first-child {
	font-weight: 700;
	font-size: 0.2rem;
	line-height: 0.24rem;
}

.skyBox>.row .con .skyDetail .skyCan {
	width: 100%;
	height: 100%;
}

.skyBox>.row .con .skyDetail .cloud img {
	float: left;
	height: 70%;
}

.skyBox>.row .con .date {
	height: 15%;
	line-height: 0.3rem;
	font-size: 0.24rem;
}

.skyBox>.row .con .date .icon-calendar {
	color: #f8639f;
	font-size: 0.24rem;
}

.skyBox>.row .con:last-child {
	border-left: 1px solid #5ea3f9;
}

.skyBox .moresky {
	height: 10%;
	line-height: 0.4rem;
	color: #f8639f;
	padding-right: 0.2rem;
}
.skyBox .pieChart{
	width:100%;
	height:100%;
	margin:auto;
	max-width:1.5rem;
}

</style>
<script>
//	require("../../../assets/default/style/index/Home_operable_card.css");

  export default {
	mounted: function() {
		var echarts = require('echarts');

	// 基于准备好的dom，初始化echarts实例
	var weather_echart = echarts.init(document.getElementById('circle'));
	// 绘制图表
	weather_echart.setOption({
//	    option = {
			title: {
	            text: '空气湿度',
	            textStyle:{
	            	fontSize:'12',
	            	color:'#000',
	            	fontWeight:'400',
	            },
	            bottom:5,
	            left:'center',
	        },
	        grid:{
	        	bottom:"middle",
	            left:'center',
	        },
	        silent:true,
			tooltip : { //提示框组件
				show:false,
//              trigger: 'item', //触发类型(饼状图片就是用这个)
//              formatter: "{a} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
            },
            color:[
		            {
					    type: 'linear',
					    x: 0,
					    y: 0,
					    x2: 0,
					    y2: 1,
					    colorStops: [{
					        offset: 0, color: 'red' // 0% 处的颜色
					    }, {
					        offset: 1, color: 'blue' // 100% 处的颜色
					    }],
					    globalCoord: false // 缺省为 false
					},
	            		'#dde6e4',
            		],  //手动设置每个图例的颜色
            legend: {  //图例组件
                //right:100,  //图例组件离右边的距离
				show:false,
//              orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
//              width:40,      //图行例组件的宽度,默认自适应
//              x : 'right',   //图例显示在右边
//              y: 'center',   //图例在垂直方向上面显示居中
//              itemWidth:10,  //图例标记的图形宽度
//              itemHeight:10, //图例标记的图形高度
//              data:['30%','10%','15%','20%','25%'],
//              textStyle:{    //图例文字的样式
//                  color:'#333',  //文字颜色
//                  fontSize:12    //文字大小
//              }
            },
            series : [ //系列列表
                {
                    name:'空气湿度',  //系列名称
                    type:'pie',   //类型 pie表示饼图
                    hoverAnimation:false,
                    avoidLabelOverlap: false,//重叠文字label
                    //center:['30%','50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                    radius : ['80%', '87%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                    itemStyle : {  //图形样式
                        normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                            label : {  //饼图图形上的文本标签
                                show : true,  //平常不显示
                                position: 'center',
                                textStyle : {
                                    fontSize : '18',
									//fontWeight : 'bold'
									color:'rgb(0,0,0)',
                                }
                            },
                            labelLine : {     //标签的视觉引导线样式
                                show : true  //平常不显示
                            }
                        },
//                      emphasis : {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
//                          label : {  //饼图图形上的文本标签
//                              show : true,
//                              position : 'center',
//                              textStyle : {
//                                  fontSize : '10',
//                                  fontWeight : 'bold'
//                              }
//                          }
//                      }
                    },
                    data:[
                        {value:76, name:'76%'},//圆环色区域值
                        {value:24},//圆环背景色区域值
                      
                    ]
                }
            ]
        
//};
	});
		$(window).on('resize.card_echart',function(){
			weather_echart.resize();
		})
	},
    data() {
      return {
//		date:'2017/11/21'
      };
    },
    methods: {
	  now: function () {
	    var mydate = new Date();
		var str = "" + mydate.getFullYear() + "/";
		str += (mydate.getMonth() + 1) + "/";
		str += mydate.getDate();
		return str;
	  }
	  
    },

  }
</script>


<!--normal:{
							color:new echarts.graphic.LinearGradient(0,0,0,1,[
								{offset:0,color:'#fc129d'},
								{offset:1,color:'#bb04be'},
							],false),
							opacity: "1"
							
						}-->