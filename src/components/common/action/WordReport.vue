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
	font-size:100px;
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
	text-align: center;
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
	props:[],
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
		

	},
    data() {
	    return {
	    	sort:'小麦',
	      	page:1,
	      	pagedata1:{
	      		
	      	},
	      	pagedata2:{
	      		
	      	},
	      	pagedata3:{
	      		
	      	},
	      	pagedata4:{
	      		
	      	},
	    }
	},
}
</script>