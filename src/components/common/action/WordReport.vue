<template>
	<div class="WordReport">
	    <span style="background-image:url(static/images/sys/left.png);" class="btnl" :class="{disabledl:disabledl}" @click="clickl"></span>
	    <span style="background-image:url(static/images/sys/right.png);" class="btnr" :class="{disabledr:disabledr}" @click="clickr"></span>
	    <span class="center">{{this.page}}/4</span>
	    <div class="pagewrap">
		    <transition-group name="pages" mode="in-out">		
		    	<div v-show="page==4" class="page" key="page4">		    		
		    		<word-report-page4YM v-if="sort=='玉米'" :pagedata='pagedata5'></word-report-page4YM>
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
		console.log(this.$route.query)
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
			if(this.$route.query.sort=='小麦'){
				pagedata.jianyanyiju='GB 1351-2008《小麦》、GB/T 20571-2006《小麦储存品质判定规则》';			
			}else if(this.$route.query.sort=='玉米'){								
				pagedata.jianyanyiju='GB 1353-2009《玉米》、GB/T 20570-2015《玉米储存品质判定规则》';			
			}
			pagedata.checkeds=this.findCheckeds(this.pagedatas.checkeds,this.pagedatas.sort);
			pagedata.isFuhe=this.pagedatas.isFuhe?'经检验该仓'+this.$route.query.sort+'，'+this.pagedatas.isFuhe+'中央储备粮储存质量要求。':'经检验该仓'+this.$route.query.sort+'，你猜符合不符合中央储备粮储存质量要求。';
			return pagedata
		},
		pagedata4(){
			var pagedata={};
			pagedata.rongzhongbiaozhunyaoqiu='≥750';
			pagedata.rongzhongjiancejieguo=this.findResult(this.pagedatas.testItems,1);
			pagedata.rongzhongdanxiangpingjia=this.findResult(this.pagedatas.testItems,1)=='--'?'--':this.findResult(this.pagedatas.testItems,1)>=750?'达标':'不达标';
			pagedata.buwanshanlibiaozhunyaoqiu='≤8.0';
			pagedata.buwanshanlijiancejieguo=this.findResult(this.pagedatas.testItems,5);
			pagedata.buwanshanlidanxiangpingjia=this.findResult(this.pagedatas.testItems,5)=='--'?'--':this.findResult(this.pagedatas.testItems,5)<=8?'达标':'不达标';
			pagedata.zazhizongliangbiaozhunyaoqiu='≤1.0';
			pagedata.zazhizongliangjiancejieguo=this.findResult(this.pagedatas.testItems,3);
			pagedata.zazhizongliangdanxiangpingjia=this.findResult(this.pagedatas.testItems,3)=='--'?'--':this.findResult(this.pagedatas.testItems,3)<=1?'达标':'不达标';
			pagedata.zazhikuangwuzhibiaozhunyaoqiu='≤0.5';
			pagedata.zazhikuangwuzhijiancejieguo=this.findResult(this.pagedatas.testItems,4);
			pagedata.zazhikuangwuzhidanxiangpingjia=this.findResult(this.pagedatas.testItems,4)=='--'?'--':this.findResult(this.pagedatas.testItems,4)<=0.5?'达标':'不达标';
			pagedata.shuifenbiaozhunyaoqiu='≤12.5';
			pagedata.shuifenjiancejieguo=this.findResult(this.pagedatas.testItems,2);
			pagedata.shuifendanxiangpingjia=this.findResult(this.pagedatas.testItems,2)=='--'?'--':this.findResult(this.pagedatas.testItems,2)<=12.5?'达标':'不达标';
			
			pagedata.yingduzhishu_1_biaozhunyaoqiu='≥60';
      		pagedata.yingduzhishu_2_biaozhunyaoqiu='＞45～＜60';
      		pagedata.yingduzhishu_3_biaozhunyaoqiu='≤45';
			pagedata.yingduzhishujiancejieguo=this.findResult(this.pagedatas.testItems,8);
			pagedata.yingduzhishudanxiangpingjia=this.findResult(this.pagedatas.testItems,8)=='--'?'--':this.findResult(this.pagedatas.testItems,8)<=45?'软质小麦':this.findResult(this.pagedatas.testItems,8)>=60?'硬质小麦':'混合小麦';

	      	pagedata.sezeqiweibiaozhunyaoqiu='正常';
      		pagedata.sezeqiweijiancejieguo=this.findResult(this.pagedatas.testItems,7);
			pagedata.sezeqiweidanxiangpingjia=this.findResult(this.pagedatas.testItems,7)=='--'?'--':this.findResult(this.pagedatas.testItems,7);
			
      		pagedata.mianjinxishui_yicun='≥180';
      		pagedata.mianjinxishui_qingdubuyicun='＜180';
      		pagedata.mianjinxishui_zhongdubuyicun='--';

      		pagedata.mianjinxishui_jianyanjieguo=this.findResult(this.pagedatas.testItems,9);
      		pagedata.pinchangpinfen_yicun='≥70';
      		pagedata.pinchangpinfen_qingdubuyicun='≥60且＜70';
      		pagedata.pinchangpinfen_zhongdubuyicun='＜60';

      		pagedata.pinchangpinfen_jianyanjieguo=this.findResult(this.pagedatas.testItems,11);
      		pagedata.sezeqiwei_yicun='正常';
      		pagedata.sezeqiwei_qingdubuyicun='正常';
      		pagedata.sezeqiwei_zhongdubuyicun='基本正常';

      		pagedata.sezeqiwei_jianyanjieguo=this.findResult(this.pagedatas.testItems,12);
      		
      		if(this.findResult(this.pagedatas.testItems,11)<60||this.findResult(this.pagedatas.testItems,12)=='基本正常'){
      			pagedata.jieguopanding='重度不宜存';      			
      		}else if(this.findResult(this.pagedatas.testItems,9)>=180&&this.findResult(this.pagedatas.testItems,11)>=70){
      			pagedata.jieguopanding='宜存';      			
      		}else{
      			if(this.findResult(this.pagedatas.testItems,9)=='--'||this.findResult(this.pagedatas.testItems,11)=='--'||this.findResult(this.pagedatas.testItems,12)=='--'){
      				pagedata.jieguopanding='--';      			      				
      			}else{      				
      				pagedata.jieguopanding='轻度不宜存';      			
      			}
      		}
			return pagedata
		},
		pagedata5(){
			var pagedata={};

			pagedata.rongzhongbiaozhunyaoqiu='≥650';
			pagedata.rongzhongjiancejieguo=this.findResult(this.pagedatas.testItems,1);
			pagedata.rongzhongdanxiangpingjia=this.findResult(this.pagedatas.testItems,1)=='--'?'--':this.findResult(this.pagedatas.testItems,1)>=650?'达标':'不达标';

			pagedata.buwanshanlizongliangbiaozhunyaoqiu='≤8.0';
			pagedata.buwanshanlizongliangjiancejieguo=this.findResult(this.pagedatas.testItems,5);
			pagedata.buwanshanlizongliangdanxiangpingjia=this.findResult(this.pagedatas.testItems,5)=='--'?'--':this.findResult(this.pagedatas.testItems,5)<=8?'达标':'不达标';
			
			pagedata.buwanshanlishengmeilibiaozhunyaoqiu='≤2.0';
			pagedata.buwanshanlishengmeilijiancejieguo=this.findResult(this.pagedatas.testItems,6);
			pagedata.buwanshanlishengmeilidanxiangpingjia=this.findResult(this.pagedatas.testItems,6)=='--'?'--':this.findResult(this.pagedatas.testItems,6)<=2?'达标':'不达标';

			pagedata.zazhibiaozhunyaoqiu='≤1.0';
			pagedata.zazhijiancejieguo=this.findResult(this.pagedatas.testItems,3);
			pagedata.zazhidanxiangpingjia=this.findResult(this.pagedatas.testItems,3)=='--'?'--':this.findResult(this.pagedatas.testItems,3)<=1?'达标':'不达标';

			pagedata.shuifenbiaozhunyaoqiu='≤14';
			pagedata.shuifenjiancejieguo=this.findResult(this.pagedatas.testItems,2);
			pagedata.shuifendanxiangpingjia=this.findResult(this.pagedatas.testItems,2)=='--'?'--':this.findResult(this.pagedatas.testItems,2)<=14?'达标':'不达标';

	      	pagedata.sezeqiweibiaozhunyaoqiu='正常';
      		pagedata.sezeqiweijiancejieguo=this.findResult(this.pagedatas.testItems,7);
			pagedata.sezeqiweidanxiangpingjia=this.findResult(this.pagedatas.testItems,7)=='--'?'--':this.findResult(this.pagedatas.testItems,7);

      		pagedata.zhifangsuanzhi_yicun='≥65';
      		pagedata.zhifangsuanzhi_qingdubuyicun='≤78';
      		pagedata.zhifangsuanzhi_zhongdubuyicun='＞78';
      		pagedata.zhifangsuanzhi_jianyanjieguo=this.findResult(this.pagedatas.testItems,10);

      		pagedata.pinchangpinfen_yicun='≥70';
      		pagedata.pinchangpinfen_qingdubuyicun='≥60且＜70';
      		pagedata.pinchangpinfen_zhongdubuyicun='＜60';

      		pagedata.pinchangpinfen_jianyanjieguo=this.findResult(this.pagedatas.testItems,11);
      		pagedata.sezeqiwei_yicun='正常';
      		pagedata.sezeqiwei_qingdubuyicun='正常';
      		pagedata.sezeqiwei_zhongdubuyicun='基本正常';

      		pagedata.sezeqiwei_jianyanjieguo=this.findResult(this.pagedatas.testItems,12);
      		
      		if(this.findResult(this.findResult(this.pagedatas.testItems,10)>78||this.pagedatas.testItems,11)<60||this.findResult(this.pagedatas.testItems,12)=='基本正常'){
      			pagedata.jieguopanding='重度不宜存';      			
      		}else if(this.findResult(this.pagedatas.testItems,10)<=65&&this.findResult(this.pagedatas.testItems,11)>=70){
      			pagedata.jieguopanding='宜存';      			
      		}else{
      			if(this.findResult(this.pagedatas.testItems,10)=='--'||this.findResult(this.pagedatas.testItems,11)=='--'||this.findResult(this.pagedatas.testItems,12)=='--'){
      				pagedata.jieguopanding='--';      			      				
      			}else{      				
      				pagedata.jieguopanding='轻度不宜存';      			
      			}
      		}
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
			if(!str){
				return
			}
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
			if(!testItems){
				return
			}
			var testItem=testItems.filter((value)=>{
				return value.testItem==num
			})
			console.log(testItem)
			if(!testItem.length){
				return '--'
			}
			return testItem[0].result			
		},
	},
    data() {
	    return {
	      	page:1,
	    }
	},
}
</script>