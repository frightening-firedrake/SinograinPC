<template>
	<div class="listHeader">
		<div class="status" v-if="listHeader.status">
			<p>状态:</p>
			<div>
			    <el-radio-group v-model="radio_status" text-color="white" fill="#ff4c78" @change="statusChange">
				    <!--<el-radio-button label="全部"></el-radio-button>
				    <el-radio-button label="未扦样"></el-radio-button>
				    <el-radio-button label="已扦样"></el-radio-button>-->
				    <el-radio-button v-for="item in listHeader.statusitems" :key="item.label" :label="item.label">{{item.text}}</el-radio-button>
				    
			    </el-radio-group>
			</div>
		</div>
		<div class="dataSelete" v-if="listHeader.date">			
			<p>创建时间:</p>
			<div>
			    <el-date-picker
			    size='mini'
			    :clearable='false'
			    v-model="date_select"
			    type="daterange"
			    align="right"
			    unlink-panels
			    range-separator="—"
			    start-placeholder="开始日期"
			    end-placeholder="结束日期"
			    :picker-options="pickerOptions2"
			    @change="dateChange"
			    >
			    </el-date-picker>
			</div>
		</div>
		
		<div class="btns">
			<template v-if="listHeader.createlib">				
				<div class="create" @click="createlib" style="background-image:url('static/images/sys/create.png');">
					新建库
				</div>
			</template>
			<template v-if="listHeader.connect">				
				<div class="create" @click="connect" style="background-image:url('static/images/sys/create.png');">
					新建样品领取交接单
				</div>
			</template>
			<template v-if="listHeader.createSampling">				
				<div class="create" @click="createSampling" style="background-image:url('static/images/sys/create.png');">
					新建扦样
				</div>
			</template>
			<template v-if="listHeader.autH">				
				<div class="create" @click="createAut" style="background-image:url('static/images/sys/create.png');">
					{{listHeader.autH}}
				</div>
			</template>
			<template v-if="listHeader.scanCode">				
				<div class="scanCode" @click="scanCode">
					<span>
						<i class="iconfont icon-ccgl-yundanpicisaomiao-4-copy"></i>
						扫描条形码
					</span>					
				</div>
			</template>
		</div>
		<div class="dataSelete" v-if="listHeader.subtitle">
			<p>{{subtitle}}</p>
		</div>
		<div class="tableName" v-if="listHeader.tableNameShow">
			<template v-if="listHeader.editModel">
				<label for="">
					扦样登记表名称：
					<input type="text" v-model="listHeader.tableName" />
				</label>
			</template>
			<template v-else >
				<span v-html="listHeader.tableName"></span>
			</template>
		</div>
	</div>
</template>
<style>
	div.listHeader{
		width:auto;
		height: 0.54rem;
		line-height:0.54rem;
		border-radius: 0.1rem 0.1rem 0 0;
		border: solid 1px #eaeaea;
		border-bottom: none;
	}
	/*标题*/
	div.listHeader p{
		float:left;
		font-size:0.18rem;
		color:#000000;
		padding-left:0.35rem;
		position:relative;
		margin-right:0.18rem;
	}
	div.listHeader p:before{
		content:'';
		position:absolute;
		top:0.17rem;
		bottom:0.17rem;
		left:0.25rem;
		width:3px;
		background:#1bb45f;
	}
	/*按钮*/
	div.listHeader div.btns{
		height:100%;
		float:right;
		/*margin-right:0.13rem;*/
		padding:0.11rem;
	}
	div.listHeader div.btns div.create{
		float:left;
		height:0.32rem;
		line-height:0.32rem;
		/*width:1.07rem;*/
		padding-left:0.34rem;
		box-sizing: border-box;
		border-radius:0.05rem;
		border:1px solid #58b481;
		color: #58b481;
		font-size:0.2rem;
		text-align:right;
		background-repeat: no-repeat;
		background-position:0.04rem center;
		background-size:0.3rem 0.3rem;
		padding-right:0.07rem;
		cursor:pointer;
	}
	/*状态选择*/
	div.listHeader div.status{
		float:left;
		/*width:4rem;*/
	}
	div.listHeader div.status >p:before{
		background:#ff4c78;
	}
	div.listHeader div.status >div{
		float:left;
		/*width:2.85rem;*/
		line-height:0.54rem;
	}
	div.listHeader div.status >div .el-radio-group{
		float:left;
		margin-top:0.14rem;
	}
	div.listHeader div.status .el-radio-button{
		height:0.26rem;
		line-height:0.26rem;
		border-radius:0.04rem;
		margin-right:0.15rem;
	}
	div.listHeader div.status .el-radio-button__inner{
		height:0.26rem;
		line-height:0.24rem;
		border-radius:0.04rem;
		padding:0 0.14rem;
		border: solid 0.01rem #d5d5d5;
		font-size:0.14rem;
		color: #999999;
	}
	/*时间选择*/
	div.listHeader div.dataSelete{
		float:left;
	}
	div.listHeader div.dataSelete >p:before{
		background:#1bb45f;
	}
	div.listHeader div.dataSelete >div{
		float:left;
		width:3rem;
		line-height:0.54rem;
	}
	div.listHeader .el-date-editor{
		width:3rem;
		height:0.32rem;
		/*line-height:0.32rem;*/
		border-radius:0.05rem;
		border:1px solid #58b481;
		color: #58b481;
		font-size:0.2rem;
		padding:0 0.15rem;
	}
	div.listHeader .el-range-editor.is-active, div.listHeader .el-range-editor.is-active:hover{
		border-color:#58b481;
	}
	div.listHeader .el-date-editor .el-range-separator{
		padding:0;
	}
	/*扫码按钮*/
	div.listHeader div.btns .scanCode{
		float:left;
		height:0.4rem;
		line-height: 0.33rem;
		margin-left:0.3rem;
		font-size: 0.24rem;
		cursor: pointer;
		background-color: #58b481;
		border-radius: 0.05rem;
		box-sizing: border-box;
		padding:0.04rem;
		color:#ffffff;
		margin-top:-0.04rem;
	}
	div.listHeader div.btns .scanCode span{
		border:1px solid #FFFFFF;
		border-radius:0.04rem;
		padding:0 0.1rem;
		font-weight: 500;
	}
	div.listHeader div.btns .scanCode i{
		color:#ffffff;
		font-size:0.24rem;
	}
	/*表单标题*/
	div.listHeader div.tableName{
		width:100%;
		height:100%;
		background:#eeeeee;
		text-align: center;
		color:#333333;
		font-size:0.2rem;
	}
	div.listHeader div.tableName label{
		color:#333333;
		font-size:0.2rem;
	}
	div.listHeader div.tableName input{
		font-size:0.2rem;
		color:#333333;
		outline: none;
		/*background:rgba(0,0,0,0);
		text-align: center;
		border:none;
		width:4rem;*/
	}
</style>
<script>
//import SinograinModal from '@/components/common/action/Modal.vue';
import "@/assets/style/common/list.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';

export default {
    props: ['listHeader'],
    data() {
        return {
        	true:true,
        	false:false,
        	pickerOptions2: {
		        shortcuts: [{
		            text: '最近一周',
		            onClick(picker) {
		              const end = new Date();
		              const start = new Date();
		              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
		              picker.$emit('pick', [start, end]);
		            }
		        }, {
		            text: '最近一个月',
		            onClick(picker) {
		              const end = new Date();
		              const start = new Date();
		              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
		              picker.$emit('pick', [start, end]);
		            }
		        }, {
		            text: '最近三个月',
		            onClick(picker) {
		              const end = new Date();
		              const start = new Date();
		              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
		              picker.$emit('pick', [start, end]);
		            }
		        }]
	        },	
	        date_select: '',
	        radio_status:'全部',
        };
    },
    created(){

    },
    methods:{
//  	...mapMutations(['route_click']),
    	dateChange(){
//  		console.log(this.date_select);
    		this.$emit('dateChange',this.date_select);
    	},
    	statusChange(){
//  		console.log(this.radio_status)

    		this.$emit('statusChange',this.radio_status);
    	},
    	createSampling(){
//  		console.log('createSampling');
    		this.$emit('createSampling');
    	},
    	createAut(){
//  		console.log('createSampling');
    		this.$emit('createAut');
    	},
    	createlib(){
//  		console.log('createlib');
    		this.$emit('createlib');
    	},
    	scanCode(){
    		this.$emit('scanCode');
    	},
		connect(){
			this.$emit("connect")
		}
    },
    computed: {
	    subtitle(){
	    	return this.listHeader.subtitle;
//          const route = this.$route.name.split("/")
//          return route[route.length-1]
        }
	},
    mounted:function(){
 
    }
}
</script>