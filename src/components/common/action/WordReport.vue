<template>
	<div class="WordReport">
	    <span style="background-image:url(static/images/sys/left.png);" class="btnl" :class="{disabledl:disabledl}" @click="clickl"></span>
	    <span style="background-image:url(static/images/sys/right.png);" class="btnr" :class="{disabledr:disabledr}" @click="clickr"></span>
	    <span class="center">{{this.page}}/4</span>
	    <div class="pagewrap">
		    <transition-group name="pages" mode="in-out">		
		    	<div v-show="page==4" class="page" key="page4">		    		
		    		<word-report-page4YM v-if="sort=='玉米'" :pagedata='pagedata4'></word-report-page4YM>
		    		<word-report-page4XM v-if="sort=='小麦'" :pagedata='pagedata4'></word-report-page4XM>
		    	</div>
		    	<div v-show="page==3" class="page" key="page3">
		    		<word-report-page3YM v-if="sort=='玉米'" :pagedata='pagedata3'></word-report-page3YM>
		    		<word-report-page3XM v-if="sort=='小麦'" :pagedata='pagedata3'></word-report-page3XM>
		    	</div>
		    	<div v-show="page==2" class="page" key="page2">
		    		<word-report-page2 :pagedata='pagedata2'></word-report-page2>
		    	</div>
		    	<div v-show="page==1" class="page" key="page1">
		    		<word-report-page1 :pagedata='pagedata1'></word-report-page1>
		    	</div>
			</transition-group>
	    </div>
	</div>
</template>
<style>

.pages-enter-active, .pages-leave-active {
    transition: all 1s;
    transform-origin: left center;
}
.pages-enter{
    opacity: 1;
    transform: rotateY(90deg);
}
.pages-leave-to{
    opacity: 1;
    transform: rotateY(90deg);
}
.WordReport{
	/*height: 816px;*/
	background-color: #eff8f5;
	border: solid 1px #dfdfdf;
	position:relative;
	height:940px;
	box-sizing: content-box;
	/*height:1140px;*/
	/*padding-top:300px;*/
}
.WordReport .btnl,.WordReport .btnr{
	height: 1.24rem;
	width: 1.24rem;
	position:absolute;
	top:50%;
	margin-top:-0.62rem;
	cursor:pointer;
	opacity: 0.66;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
.WordReport .btnl{
	margin-right:415px;
	right:50%;
}
.WordReport .btnr{	
	margin-left:415px;
	left:50%;
}
.WordReport .disabledl,.WordReport .disabledr{
	opacity: 0.26;
	cursor:not-allowed;
	height: 1.24rem;
	width: 1.24rem;
	position:absolute;
	top:50%;
	margin-top:-0.62rem;
}
.WordReport .center{
	position:absolute;
	bottom:30px;
	left:50%;
	margin-left:-0.25rem;
	width:0.5rem;
	text-align: center;
	line-height: 0.3rem;
	height:0.3rem;
	background-color:#57b380;
	opacity: 0.5;
	color:#fff;
	font-size:0.2rem;
	z-index: 6;
}
.WordReport .page{
	position:absolute;
	top:0;
	left:0;
	width:796px;
	height:940px;
	/*margin:auto;*/
	background-color:#fff;
	/*font-size:100px;*/
	text-align: center;
	padding-top:50px;
}
.WordReport .pagewrap{
	position:relative;
	/*top:0;
	left:0;*/
	width:796px;
	height:940px;
	margin:auto;
	background-color:#fff;
}
.wordInput{
	width:100%;
	height:100%;
	line-height:inherit;
	color:inherit;
	font-size:inherit;
	font-family:inherit;
	border:none;
	outline: none;
	background-color:white;
	text-align: center;
}
.wordInput.left{
	text-align: left;
}
.wordTextarea{
	width:100%;
	height:100%;
	line-height:inherit;
	color:inherit;
	font-size:inherit;
	font-family:inherit;
	overflow: hidden;
	resize: none;
	border:none;
	outline: none;
	text-align: left;
}
</style>
<script>
//import "@/assets/style/common/Option_title.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
import WordReportPage1 from '@/components/common/wordreport/WordReportPage1.vue';
import WordReportPage2 from '@/components/common/wordreport/WordReportPage2.vue';
import WordReportPage3YM from '@/components/common/wordreport/WordReportPage3YM.vue';
import WordReportPage3XM from '@/components/common/wordreport/WordReportPage3XM.vue';
import WordReportPage4YM from '@/components/common/wordreport/WordReportPage4YM.vue';
import WordReportPage4XM from '@/components/common/wordreport/WordReportPage4XM.vue';
export default {
	components: {
		WordReportPage1,WordReportPage2,WordReportPage3YM,WordReportPage3XM,WordReportPage4YM,WordReportPage4XM,
	},
	props:["sort","pagedatas"],
	created(){

	},
	mounted(){
//		this.listWidth=document.querySelector('#AdvancedSearch').offsetWidth+'px';
	},
    computed:{
		...mapGetters(["Token","userName"]),
		disabledl(){
			if(this.page==1){
				return true
			}else{
				return false
			}
		},
		disabledr(){
			if(this.page==4){
				return true
			}else{
				return false
			}
		},
		pagedata1(){
			var pagedata={};
			pagedata.pLibraryName=this.pagedatas.pLibraryName;
			return pagedata
		},
		pagedata2(){
			var pagedata={};
			return pagedata
		},
		pagedata3(){
			var myDate=new Date()
			var pagedata={};
			pagedata.sort=this.pagedatas.sort;
			pagedata.sampleNum='监'+this.pagedatas.sampleNum;
			pagedata.libraryName=this.pagedatas.libraryName;
			pagedata.position=this.pagedatas.position;
			pagedata.gainTime=this.pagedatas.gainTime;
			pagedata.quality=this.pagedatas.quality;
			pagedata.amount=(this.pagedatas.amount-0).toFixed(3);			
			pagedata.sampleCount=3;
			pagedata.yangpinmiaoshu='完好';
			pagedata.yangpinzhuangtai='颗粒状';
			pagedata.autograph=this.pagedatas.autograph;
			pagedata.sampleTime=this.pagedatas.sampleTime;			
			pagedata.qianyangyiju='《粮油、油料 检验扦样、分样法》（GB 5491-1985）、《关于印发<中央储备粮油质量检查扦样检验管理办法>的通知》（国粮发【2010】190号文件）';
			pagedata.remark=this.pagedatas.remark;		
			pagedata.newDate=myDate.getFullYear()+'-'+(myDate.getMonth()+1);
			pagedata.jianyanyiju='GB 1351-2008《小麦》、GB/T 20571-2006《小麦储存品质判定规则》';			
			pagedata.checkeds=this.findCheckeds(this.pagedatas.checkeds,this.pagedatas.sort);
			pagedata.isFuhe=this.pagedatas.isFuhe?'经检验该仓小麦，'+this.pagedatas.isFuhe+'中央储备粮储存质量要求。':'经检验该仓小麦，符合中央储备粮储存质量要求。';
			return pagedata
		},
		pagedata4(){
			var pagedata={};
			
			pagedata.rongzhongbiaozhunyaoqiu='≥750';
			pagedata.rongzhongjiancejieguo=this.findResult(this.pagedatas.testItems,1);
			pagedata.rongzhongdanxiangpingjia=this.findResult(this.pagedatas.testItems,1)>=750?'合格':'不合格';
			pagedata.buwanshanlibiaozhunyaoqiu='≤8.0';
			pagedata.buwanshanlijiancejieguo=this.findResult(this.pagedatas.testItems,1);
			pagedata.buwanshanlidanxiangpingjia=this.findResult(this.pagedatas.testItems,1)<=8?'合格':'不合格';
			pagedata.zazhizongliangbiaozhunyaoqiu='≤1.0';
			pagedata.zazhizongliangjiancejieguo=this.findResult(this.pagedatas.testItems,1);
			pagedata.zazhizongliangdanxiangpingjia=this.findResult(this.pagedatas.testItems,1)<=1?'合格':'不合格';
			pagedata.zazhikuangwuzhibiaozhunyaoqiu='≤0.5';
			pagedata.zazhikuangwuzhijiancejieguo=this.findResult(this.pagedatas.testItems,1);
			pagedata.zazhikuangwuzhidanxiangpingjia=this.findResult(this.pagedatas.testItems,1)<=0.5?'合格':'不合格';
			pagedata.shuifenbiaozhunyaoqiu='≤12.5';
			pagedata.shuifenjiancejieguo=this.findResult(this.pagedatas.testItems,1);
			pagedata.shuifendanxiangpingjia=this.findResult(this.pagedatas.testItems,1)<=12.5?'合格':'不合格';
			
			pagedata.yingduzhishu_1_biaozhunyaoqiu='≥60';
      		pagedata.yingduzhishu_2_biaozhunyaoqiu='＞45～＜60';
      		pagedata.yingduzhishu_3_biaozhunyaoqiu='≤45';
			pagedata.yingduzhishujiancejieguo=this.findResult(this.pagedatas.testItems,1);
			pagedata.yingduzhishudanxiangpingjia=this.findResult(this.pagedatas.testItems,1)<=45?'软质小麦':this.findResult(this.pagedatas.testItems,1)>=60?'硬质小麦':'混合小麦';

	      	pagedata.sezeqiweibiaozhunyaoqiu='正常';
      		pagedata.sezeqiweijiancejieguo='测试数据22';
      		pagedata.sezeqiweidanxiangpingjia='测试数据23';
      		pagedata.mianjinxishui_yicun='≥180';
      		pagedata.mianjinxishui_qingdubuyicun='＜180';
      		pagedata.mianjinxishui_zhongdubuyicun='--';
      		pagedata.mianjinxishui_jianyanjieguo='测试数据27';
      		pagedata.pinchangpinfen_yicun='≥70';
      		pagedata.pinchangpinfen_qingdubuyicun='≥60且＜70';
      		pagedata.pinchangpinfen_zhongdubuyicun='＜60';
      		pagedata.pinchangpinfen_jianyanjieguo='测试数据31';     		
      		pagedata.sezeqiwei_yicun='正常';
      		pagedata.sezeqiwei_qingdubuyicun='正常';
      		pagedata.sezeqiwei_zhongdubuyicun='基本正常';
      		pagedata.sezeqiwei_jianyanjieguo='测试数据35';
      		pagedata.jieguopanding='测试数据36';
			return pagedata
		},
    },
    methods:{
		clickl(){
			if(this.page==1){
				return
			}else{
				this.page=this.page-1;
			}
		},
		clickr(){
			if(this.page==4){
				return
			}else{
				this.page=this.page+1;
			}
		},
		findCheckeds(str,sort) {
			var checkList=["容重","水分","杂质","矿物质","不完善粒","生霉粒","色泽气味(质量指标)","硬度指数","面筋吸水量","脂肪酸值","品尝评分值","色泽气味(储存品质指标)","真菌毒素(黄曲霉毒素B1)","真菌毒素(脱氧雪腐镰刀菌烯醇)","真菌毒素(玉米赤霉烯酮)","重金属(铅)","重金属(镉)","重金属(汞)","重金属(砷)"];	
	  		var res=[];
	  		var indexs=str.split(',');
	  		indexs=indexs.sort((a,b)=>{
	  			return a-b
	  		})
		  	indexs.forEach((item)=>{
		  		if(item){
		  			res.push(checkList[item-1])
		  		}	
		  	})
		  	var restr=res.join(',');
	  		if(restr=="容重,水分,杂质,矿物质,不完善粒,色泽气味(质量指标),硬度指数,面筋吸水量,品尝评分值,色泽气味(储存品质指标),真菌毒素(脱氧雪腐镰刀菌烯醇),重金属(铅),重金属(镉),重金属(汞),重金属(砷)"){
	  			return '全项目指标';
	  		}else if(restr=="容重,水分,杂质,不完善粒,生霉粒,色泽气味(质量指标),脂肪酸值,品尝评分值,色泽气味(储存品质指标),真菌毒素(黄曲霉毒素B1),真菌毒素(脱氧雪腐镰刀菌烯醇),真菌毒素(玉米赤霉烯酮),重金属(铅),重金属(镉),重金属(汞),重金属(砷)"){
	  			return '全项目指标';
	  		}else{
				if(sort=='小麦'){
					restr=restr.replace("容重,水分,杂质,矿物质,不完善粒,色泽气味(质量指标),硬度指数", "质量指标全项目")					
					restr=restr.replace("面筋吸水量,品尝评分值,色泽气味(储存品质指标)", "储存品质指标全项目")
					restr=restr.replace("真菌毒素(脱氧雪腐镰刀菌烯醇),重金属(铅),重金属(镉),重金属(汞),重金属(砷)", "食品卫生指标全项目")
				}else if(sort=='玉米'){
					restr=restr.replace("容重,水分,杂质,不完善粒,生霉粒,色泽气味(质量指标)", "质量指标全项目")					
					restr=restr.replace("脂肪酸值,品尝评分值,色泽气味(储存品质指标)", "储存品质指标全项目")
					restr=restr.replace("真菌毒素(黄曲霉毒素B1),真菌毒素(脱氧雪腐镰刀菌烯醇),真菌毒素(玉米赤霉烯酮),重金属(铅),重金属(镉),重金属(汞),重金属(砷)", "食品卫生指标全项目")
				}
	  			return restr
	  		}
		},
		findResult(testItems,num){
			var testItem=testItems.filter((value)=>{
				return value.testItem==num
			})
			if(!testItem.length){
				return 
			}
			return testItem.result			
		},
	},
    data() {
	    return {
	      	page:1,
	    }
	},
}
</script>