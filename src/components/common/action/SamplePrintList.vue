<template>
	<div class="printListWrap">
		<div class="printHeader">
			<div class="label">
				{{listdatas.titleLabel}}
			</div>
			<div class="listRow">
				<div class="rowItem">
					<div class="number">
						{{listdatas.titleNumber}}					
					</div>
					<div class="content">
						{{listdatas.title}}	
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
				<template v-for="(item,index) in listdatas.listdata">
					<div class="rowItem">
						<div class="number">
							{{item.number}}					
						</div>
						<div class="content">
							{{item.content}}					
						</div>							
						<div class="button" @click="buttonClick(item.number)">{{item.buttonText}}</div>
					</div>					
				</template>
				<div class="clear"></div>
			</div>
		</div>
		<div class="printfoot">
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
//	props:['listdatas',],
	components: {
//		SinograinModal
	},
	computed: {
		...mapState(["modal_id_number", "viewdata", "editdata", "aultdata", "messions", "mask"]),
		...mapGetters(["modal_id"]),
		bodyheight(){
			var height=Math.ceil(this.listdatas.listdata.length/2)*0.5
			return height;
		}
	},
	created() {
	
	},
	data(){
		return {
			listdatas:{
				titleLabel:'样品编号',
				title:'监20170078',
				titleNumber:'12',
				label:'检验项目',
				listdata:[
					{
						number:'01',
						content:'水分',
						buttonText:'打印',
					},
					{
						number:'02',
						content:'水分',
						buttonText:'打印',
					},
					{
						number:'03',
						content:'不完善粒',
						buttonText:'打印',
					},
					{
						number:'04',
						content:'不完善粒',
						buttonText:'打印',
					},
					{
						number:'05',
						content:'生霉粒指标',
						buttonText:'打印',
					},
					{
						number:'06',
						content:'生霉粒指标',
						buttonText:'打印',
					},
					{
						number:'07',
						content:'质量、品质全项目指标',
						buttonText:'打印',
					},
				]
			}
		}
	},
	methods:{
		buttonClick(id){
			this.$emit('print',id)
		},
	},
}
</script>