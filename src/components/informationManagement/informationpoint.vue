<template>
	<div class='listpagewrap'>
		<!--面包屑-->
		<sinograin-breadcrumb :breadcrumb="breadcrumb" ></sinograin-breadcrumb>
		<!--alert-->
		<!--<sinograin-prompt :alerts="alerts"></sinograin-prompt>-->
        <div class="common_select">
          <label>
            <span class="title_select">选择直属库:</span>
            <el-select v-model="point" placeholder="选择直属库" @change="_select">
                <el-option v-for="item in pointList" :key="item.id" :label="item.libraryName" :value="item.id">
                </el-option>
            </el-select>
        </label>
        </div>
		<!--表单-->
		<information-set :informations="informations" @addinformation="addinformationLib" :title="title" :inforSelect="inforselect"></information-set>
		<!--<information-set :informations="informations[1]" @addinformation="addinformationVarieties"></information-set> -->
		<!--输入弹框-->
		<sinograin-modal v-if="modalVisible" :modal="modal" v-on:createlibitem="createlibitem" v-on:dialogClose="dialogClose"></sinograin-modal>
	</div>
</template>

<style>

</style>

<script>

import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import SinograinOptionTitle from "@/components/common/action/OptionTitle";
import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
import InformationSet from "@/components/common/action/InformationSet";
import SinograinModal from '@/components/common/action/Modal.vue';

import "@/assets/style/information/InformationSet.css"
import "@/assets/style/common/Select.scss";
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
//本地测试要用下面import代码
//import data from '@/util/mock';

export default {
	components: {
		SinograinBreadcrumb, SinograinOptionTitle, InformationSet, SinograinPrompt, SinograinModal
	},
	computed: {

	},
	created() {
		this.getlistdata(1);
	},
	destroy() {

	},
	methods: {
        // 下拉框选择直属库
        _select(){
            this.loading = true;
            var params = {};
            params.libraryId = this.point
			// 获取列表数据（第？页）
			this.$http({
				method: 'post',
				url: this.apiRoot + "/grain/register/data",
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				data: {
					params:JSON.stringify(params),
				},
                transformRequest: [function(data) {
					// Do whatever you want to transform the data
					let ret = ''
					for (let it in data) {
						ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
					return ret
				}],
			}).then(function(response) {
                console.log(response)
				this.informations = response.data.rows;
				//		  	this.formdatas=response.data.formdatas;		  
				//		  	this.tabledatas=response.data.rows;
				//	  		this.page.total=response.data.total;

				setTimeout(() => {
					this.loading = false;
				}, 1000)
			}.bind(this)).catch(function(error) {
				console.log(error);
			}.bind(this));
        },
		//	获取列表数据方法
		getlistdata(page) {
			let params = {
				pLibraryId: "-1"
			}
			this.loading = true;
			// 获取列表数据（第？页）
			this.$http({
				method: 'post',
				url: this.datalistURL,
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				 transformRequest: [function(data) {
					// Do whatever you want to transform the data
					let ret = ''
					for (let it in data) {
						ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
					return ret
				}],
				data: {
					params:JSON.stringify(params)
				}
			}).then(function(response) {
				this.pointList = response.data.rows;
				//		  	this.formdatas=response.data.formdatas;		  
				//		  	this.tabledatas=response.data.rows;
				//	  		this.page.total=response.data.total;

				setTimeout(() => {
					this.loading = false;
				}, 1000)
			}.bind(this)).catch(function(error) {
				console.log(error);
			}.bind(this));
		},
		titleEvent() {
			console.log('titleEvent');
		},
		//	打开新建弹框
		//	新建库
		addinformationLib(type) {
			
			if(!this.$_ault_alert('register:save')){
				return
			}
			this.informationType = type;
			this.modal = {
				title: '新建库点',
				formdatas: [
					{
						label: "库点名称",
						model: "unit",
					},
					// {
					// 	label:"添加库点",
					// 	model:"lib",
					// },
				],
				submitText: '确定',
			},
				this.modalVisible = true;
		},
		//	填入新建数据
		createlibitem(data) {
			var params = {
				id: this.informations.length,
				libraryName: data.unit
			}
			this.informations.push({ id: this.informations.length, formName: data.unit })
			this.$http({
				method: 'post',
				url: this.apiRoot + "/grain/register/save",
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				transformRequest: [function(data) {
					// Do whatever you want to transform the data
					let ret = ''
					for (let it in data) {
						ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
					return ret
				}],
				data: {
					id: this.informations.length,
					formName:data.unit,
                    libraryId:this.point
				}
			}).then(function(response) {
				//		  	this.tabledatas=response.data.rows;
				this.getlistdata(1);
			}.bind(this)).catch(function(error) {
				console.log(error);
			}.bind(this));
			// this.getlistdata(1)
			// }else if(this.informationType=="品种"){
			// 	console.log(data);
			// 	this.informations[1].items.push({id:'',sampleNumber:data.unit})
			// }
		},
		//	关闭新建弹框
		dialogClose() {
			this.modalVisible = false;
		},
	},
	data() {
		return {
            inforselect:"2",
			title: "库点",
            pointList:"",
            point:"",
			datalistURL: this.apiRoot + '/grain/library/data',
			searchURL: this.apiRoot + '/liquid/role2/data/search',
			deleteURL: this.apiRoot + '/liquid/role2/data/delete',
			checkedId: [],
			createlibVisible: false,
			modalVisible: false,
			modal: {
				title: '新建库点',
				formdatas: [
					{
						label: "库点名称",
						model: "lib",
					},
				],
				submitText: '确定',
			},
			breadcrumb: {
				search: false,
				searching: '',
			},
			alerts: [{
				title: '温馨提示：可在此页面更改库点与品种项目!',
				type: 'info'
			}],
			informationType: '',
			informations: [
			
			],
		}
	}
}
</script>
