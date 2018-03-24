<template>
	<div class="printListWrap">
		<div class="printHeader">
			<div class="label">
				{{listdatas.titleLabel}}
			</div>
			<div class="listRow">
				<div class="rowItem" :class="{sub:listdatas.subtitle}">
					<div class="number">
						{{listdatas.titleNumber}}					
					</div>
					<div class="content">
						监{{listdatas.title}}	
					</div>
				</div>
				<div class="rowItem" v-if="listdatas.subtitle" :class="{sub:listdatas.subtitle}">
					<div class="subtitle">
						{{listdatas.subtitleLabel}}					
					</div>
					<div class="content">
						{{listdatas.subtitle}}	
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<div class="printDate" v-if="listdatas.printDate">
			<div class="label">
				打印时间
			</div>
			<div class="listRow">
				<div class="rowItem">
					<div class="content">
						{{listdatas.printDate}}	
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<div class="printBody">
			<div class="label" v-bind:style="{ height: bodyheight+ 'rem' }">
				<span>					
					{{listdatas.label}}
				</span>
			</div>
			<div class="listRow">
				<template v-for="(item,index) in checkList">
					<div class="rowItem">
						<div class="number">
							0{{index+1}}					
						</div>
						<div class="content">
							{{checkAllList[item-1]}}					
						</div>							
						<div v-if="listdatas.buttonText" class="button" @click="buttonClick(item)">{{listdatas.buttonText}}</div>
					</div>					
				</template>
				<div class="clear"></div>
			</div>
		</div>
		<div class="printfoot" style="height:0.5rem;">
		</div>
	</div>
</template>
<style>
	
</style>
<script>

//import SinograinModal from '@/components/common/action/Modal.vue';
import "@/assets/style/common/SamplePrintList.css"
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
//本地测试要用下面import代码
import data from '@/util/mock';

export default {
	props:['listdatas','checkList','checkAllList'],
	components: {
//		SinograinModal
	},
	computed: {
		...mapState(["modal_id_number", "viewdata", "editdata", "aultdata", "messions", "mask"]),
		...mapGetters(["modal_id"]),
		bodyheight(){
			var height;
			if(this.checkList){				
				height=Math.ceil(this.checkList.length/2)*0.5;
				if(!height){
					height=0.5;
				}
			}else{
				height=0.5;				
			}
			return height;
		}
	},
	created() {
	
	},
	data(){
		return {
//			listdatas:{
//				titleLabel:'样品编号',
//				title:'监20170078',
//				titleNumber:'12',
//				subtitleLabel:'打印条数',
//				subtitle:'8',
//				printDate:'2018.01.25',
//				label:'检验项目',
//				listdata:[
//					{
//						number:'01',
//						content:'水分',
//						buttonText:'打印',
//					},
//					{
//						number:'02',
//						content:'水分',
//						buttonText:'打印',
//					},
//					{
//						number:'03',
//						content:'不完善粒',
//						buttonText:'打印',
//					},
//					{
//						number:'04',
//						content:'不完善粒',
//						buttonText:'打印',
//					},
//					{
//						number:'05',
//						content:'生霉粒指标',
//						buttonText:'打印',
//					},
//					{
//						number:'06',
//						content:'生霉粒指标',
//						buttonText:'打印',
//					},
//					{
//						number:'07',
//						content:'质量、品质全项目指标',
//						buttonText:'打印',
//					},
//				]
//			}
		}
	},
	methods:{
		buttonClick(id){
			this.$emit('print',id)
		},
	},
}
</script>