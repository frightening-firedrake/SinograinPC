<template>
	<div class="WordReportPage">
	    <div class="zw-page" style="padding-top:40px; margin-left: 96px; margin-right: 96px; column-count: 1; column-gap: 0px;">
			<div class="zw-header">
				<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt; padding-bottom: 0px;"><br></p>
			</div>
			<div class="zw-contentpane">
				<p style="margin: 0px; line-height: 1; text-indent: 4.656in; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 42pt; font-weight: bold; padding-bottom: 0px; border-bottom: 0px;"><img src="static/images/sys/reportlogo.png" style="width: 172px; height: 56px;"></p>
				<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 42pt; font-weight: bold; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><br></p>
				<p style="margin: 0px; line-height: 1.5; text-align: center; font-family: _GB2312; color: rgb(0, 0, 0); font-size: 60pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: _GB2312; color: rgb(0, 0, 0); font-size: 60pt;">检 验 报 告</span></p>
				<p style="margin: 0px; line-height: 1.5; text-align: center; font-family: _GB2312; color: rgb(0, 0, 0); font-size: 42pt; font-weight: bold; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><br></p>
				<p style="margin: 0px; line-height: 1.5; text-align: center; font-family: _GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: _GB2312; color: rgb(0, 0, 0); font-size: 12pt;">编号：</span><span style="font-family: _GB2312; color: rgb(0, 0, 0); font-size: 12pt; text-decoration: none;">中储粮（晋）</span><span style="font-family: _GB2312; color: rgb(0, 0, 0); font-size: 12pt;">检{{this.reportNum}}</span></p>
				<p style="margin: 0px; line-height: 1.5; text-align: left; font-family: _GB2312; color: rgb(0, 0, 0); font-size: 22pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><br></p>
				<p style="margin: 0px; line-height: 1.5; font-family: _GB2312; color: rgb(0, 0, 0); font-size: 16pt; font-weight: bold; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: _GB2312; color: rgb(0, 0, 0); font-size: 22pt;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></p>
				<p style="text-align:center; margin: 0px; line-height: 1.5; font-family: _GB2312; color: rgb(0, 0, 0); font-size: 14pt; text-decoration: none; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><br></p>
				<p style="text-align:center; margin: 0px; line-height: 1.5; font-family: _GB2312; color: rgb(0, 0, 0); font-size: 16pt; text-decoration: none; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: _GB2312; color: rgb(0, 0, 0); font-size: 16pt; text-decoration: none;"> 产品名称:</span><span style="width:230px;display:inline-block;text-align:center;font-family: _GB2312; color: rgb(0, 0, 0); font-size: 16pt; text-decoration: none;border-bottom:1px solid black;"><input class="wordInput" v-model="sort" type="text" /></span></p>
				<p style="text-align:center; margin: 0px; line-height: 1.5; font-family: _GB2312; color: rgb(0, 0, 0); font-size: 16pt; text-decoration: none; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: _GB2312; color: rgb(0, 0, 0); font-size: 16pt; text-decoration: none;"> 受检单位:</span><span style="width:230px;display:inline-block;text-align:center;font-family: _GB2312; color: rgb(0, 0, 0); font-size: 16pt; text-decoration: none;border-bottom:1px solid black;"><input class="wordInput" v-model="unit" type="text" /></span></p>
				<p style="margin: 0px; line-height: 1.5; font-family: _GB2312; color: rgb(0, 0, 0); font-size: 16pt;  padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: _GB2312; color: rgb(0, 0, 0); font-size: 16pt; text-decoration: none;">检验类别:</span><span style="width:230px;display:inline-block;text-align:center;font-family: _GB2312; color: rgb(0, 0, 0); font-size: 16pt; text-decoration: none;border-bottom:1px solid black;"><input class="wordInput" v-model="check" type="text" /></span></p>
				<p style="margin: 0px; line-height: 1.5; text-indent: 0.993in; font-family: _GB2312; color: rgb(0, 0, 0); font-size: 16pt; text-decoration: none; font-weight: bold; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><br></p>
				<p style="margin: 0px; line-height: 1.5; text-indent: 0.993in; font-family: _GB2312; color: rgb(255, 0, 0); font-size: 16pt; text-decoration: none; font-weight: bold; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: _GB2312; color: rgb(0, 0, 0); font-size: 16pt; text-decoration: none; font-weight: bold;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></p>
				<p style="margin: 0px; line-height: 1.5; text-indent: 0px; font-family: _GB2312; color: rgb(0, 0, 0); font-size: 16pt; text-decoration: none; font-weight: bold; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><br></p>
				<p style="margin: 0px; line-height: 1.5; text-align: center; font-family: _GB2312; color: rgb(0, 0, 0); font-size: 16pt; font-weight: bold; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: _GB2312; color: rgb(0, 0, 0); font-size: 18pt; text-decoration: none; font-weight: bold;">山西中储粮粮油质监中心</span></p>
				<p style="margin: 0px; line-height: 1.5; text-align: center; font-family: _GB2312; color: rgb(0, 0, 0); font-size: 22pt; font-weight: bold; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><br></p>
			</div>
			<div class="zw-footer">
				<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt; padding-bottom: 0px;"><br></p>
			</div>
		</div>
	</div>
</template>
<style>


</style>
<script>
//import "@/assets/style/common/Option_title.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
	props:['pagedata'],
	created(){

	},
	mounted(){
//		this.listWidth=document.querySelector('#AdvancedSearch').offsetWidth+'px';
	},
    computed:{
		...mapGetters(["Token","userName"]),
		
    },
    methods:{
		

	},
    data() {
	    return {
	      	reportNum:'20170031',
	      	sort:'小麦',
	      	unit:'中央储备粮洪洞直属库',
	      	check:'监督检查',
	    }
	},
}
</script>