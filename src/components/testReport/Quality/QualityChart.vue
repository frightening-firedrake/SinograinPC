<template>
    <div class="charts">
        <p class="tableName">
            质量验收情况
        </p>
        <div  :class="{'rongzhong chart':true,'right':(index+1)%2==0}" v-for="(chart,index) in chartonly.rows" :key="index">
            <p>{{chart.name}}</p>
            <div :id="'myChart'+index"  class='chartonly'>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>
<style lang="scss">
.charts {
    width: 100%;
    // height: 8rem;
    font-size: 0;
    .clear{
        clear:both;
    }
    .chart {
        overflow: hidden;
        display: inline-block;
        width: 49.9%;
        height: 5.53rem;
        .chartonly {
            width: 100%;
            height: 5.02rem;
            border: 1px solid #dfdfdf;
            border-top: none; 
            border-bottom:none;
            &:last-child{
                border-bottom:1px solid #dfdfdf;
            }
        }
        &.right {
            float: right;
        }
        p {
            width: 100%;
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.21rem;
            color: #323232;
            padding-left: 0.4rem;
            border: 1px solid #dfdfdf;
        }
    }
}
</style>
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入折线图图组件
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require("echarts/lib/component/legend")
export default {
    props:["charts"],
    mounted() {
        this.chartonly = this.charts
        console.log(this.charts)
    },
    updated(){
        console.log(2222)
        this.drawLine();
    },
    methods: {
        drawLine() {
            this.chartonly.rows.forEach((i,v)=>{
                i.color = this.ChartColor[v%this.ChartColor.length]
                this.drawChart(i,v)
            })
        },
        drawChart(params,v){
            let{
                Testing:Testing,
                data:data,
                name:name,
                year:year,
                color:color
            } = params
            let seriesStr = []
            let myChart = echarts.init(document.getElementById('myChart'+v))
            myChart.setOption({
            	// 图标内容的位置
            	 grid:{
            	 	left:"10%",
            	 },
                // 颜色
                color: [color],//array
                // 提示框
                tooltip: {
                    trigger: 'axis',
                    // alwaysShowContent:true
                },
                // 上方显示
                legend: {
                    type: "plain",
                    width:"50%",
                    top:"2%",
                    data:[Testing],//array
                    textStyle:{
                            fontSize:14
                    }
                },
                // x轴的数据
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: year//array
                },
                // y轴的数据
                yAxis: {
                    type: 'value',
                    // axisLabel: {
                    //     formatter: '{value} °C'
                    // }
                },
                // 展示数据可以是变量赋值
                series: [{
                    name: '容重',
                    type: 'line',
                    data: [43,43,234,523,2523,1241,653,234],
                    // symbol:"circle",
                    symbolSize: "10",
                },
                // {
                //     name: '总量',
                //     type: 'line',
                //     data: [423,234132,5123,1423,1234,4231,42314,123],
                //     // symbol:"circle",
                //     symbolSize: "10",
                // }
                ]
            });
        }
    },
    data() {
        return {
            chartonly:[],
            ChartColor:["#2fbfc5","#2d82e2","#ecaf09","#58b481","#ff4c78","#f95e00","#16b8be"]
        }
    }
}
</script>