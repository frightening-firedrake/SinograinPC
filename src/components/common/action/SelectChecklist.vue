<template>
    <div class="SelectChecklist">
    	<el-form ref="form" :model="form" :label-width="labelWidth" label-position="left">
	    	<el-form-item label="选择库点">
			    <template>
				    <el-select v-model="libselect" placeholder="选择库点">
				    	<el-option label="全部" value="all"></el-option>
				    	<el-option
				        v-for="item in selectlist"
				        :key="item.value"
				        :label="item.label"
				        :value="item.value"
				        >
				    	</el-option>
				    </el-select>
				</template>

			</el-form-item>
			
			<el-form-item label="选择备注" style="border-left:none;">
			    <el-autocomplete
			      	class="remark-input"
			      	v-model="remSelect"
			     	:fetch-suggestions="querySearch"
			      	placeholder="请填写备注"
			    >
			    </el-autocomplete>
			</el-form-item>
			
	    	<el-form-item label="选择时间" style="border-top:none;width:100%;">
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
	    		
	    	</el-form-item>
			
			
		</el-form>
		<!--全选中处理-->
		<p>
			样品管理
			<el-checkbox v-model="checkAll" @change="handleCheckAllChange" :disabled="disabledCheckAll" style="margin-left:0.35rem;">全部选中</el-checkbox>
		</p>
		<div class="checkboxwrap">
			<div v-if="!checkList.length" class="checklistemit">
				请先选择库点！！！
			</div>
			
			<!--序号-->
            <el-row class="order">
				<el-col :span="6" class="">
                    <div class='pull-left1'>
                    	检验编号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;扦样编号
                    </div>                   
                </el-col>
                <el-col :span="6" class="">
                    <div class='pull-left1'>
                    	检验编号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;扦样编号
                    </div>                   
                </el-col>
                <el-col :span="6" class="">
                    <div class='pull-left1'>
                    	检验编号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;扦样编号
                    </div>                   
                </el-col>
                <el-col :span="6" class="">
                    <div class='pull-left1'>
                    	检验编号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;扦样编号
                    </div>                   
                </el-col>
            </el-row>
			<template>
				
			  <el-checkbox-group v-model="checkedList">

			  	<el-checkbox :label="item.sampleNum+' '+item.sampleWord"  v-for="(item,index) in checkedListFilter" :key="item.id"></el-checkbox>

			  		
			    
			  </el-checkbox-group>
			</template>
			<div class="clear"></div>
		</div>
		<div class="btns">
            <el-button class="yes" type="primary" @click="onSubmit('form')" v-bind:disabled="!checkedList.length">确认</el-button>
            <el-button class="no" @click="cancel('form')">取消</el-button>
        </div>
    </div>
</template>

<script>
import "@/assets/style/common/SelectChecklist.css";
//本地测试要用下面import代码
import data from '@/util/mock';
export default {
//  props: ["formdatas"],
    created(){
    	this.getselectList()
		this.getcheckList();
    	
    },
    mounted: function() {
//		console.log(this.formdatas)
    },
    computed:{
    	disabledCheckAll(){
    		if(this.checkList.length){
    			return false
    		}else{
    			return true
    		}
    	},
    	checkedListFilter(){
    		if(this.libselect=="all"){
    			if(!this.remSelect){
    				return this.checkList
    				
    			}else{
    				return this.checkList.filter((item,index)=>{
						return item.remark.indexOf(this.remSelect)>-1
					});

    			}
    		}else{
    			var list=this.checkList.filter((item,index)=>{
					return item.pid==this.libselect
				});
				if(!this.remSelect){
    				return list
    				
    			}else{
    				return list.filter((item,index)=>{
						return item.remark.indexOf(this.remSelect)>-1
					});

    			}
    		}
    	},
    },
    methods: {  
    	//下拉框改变对应库去后台获取响应检测项目
    	
//  	日期选项
        dateChange(){
    		console.log(this.date_select);
//  		this.$emit('dateChange',this.date_select);
    	},
//  	提交
    	onSubmit(formname) {
//			通过
            if (this.checkedList.length) {
//                  alert('submit!');
//                  this.$emit('btn_close')
				console.log(this.checkedList)
//				window.history.go(-1)
//			未通过
            } else {
//                  console.log('error submit!!');
//                  this.$message('请先勾选管理样品！！！');
                this.$notify({
		            title: '提示信息',
		            message: '请先勾选管理样品！！！',
		            offset: 100
		        });
                return false;
            }
        },
        cancel(formname) {
            console.log('取消!');
//			this.$refs[formname].resetFields();
//          this.$emit('btn_close')
			window.history.go(-1)
        },
//      获取库点选项
        getselectList(){
//      	this.loading=true;
			this.$http({
			    method: 'post',
				url: this.selectlistUrl,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	//			data: {
	//
	//			}
		    }).then(function (response) {
			  	this.selectlist=response.data.selectlist;
//			  	this.libselect=response.data.libselect;
//		  		setTimeout(()=>{			  		
//			  		this.loading=false;
//			  	},1000)
			}.bind(this)).catch(function (error) {
			    console.log(error);
			}.bind(this));
        },
//      库点选中后,后台获取对应样品项目
        getcheckList(){
//      	this.loading=true;
			this.$http({
			    method: 'post',
				url: this.checkListUrl,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	//			data: {
	//
	//			}
		    }).then(function (response) {
		    	this.checkAll=false;
			  	this.checkList=response.data.checkList;
			  	this.checkedList=response.data.checkedList;
//		  		setTimeout(()=>{			  		
//			  		this.loading=false;
//			  	},1000)
			}.bind(this)).catch(function (error) {
			    console.log(error);
			}.bind(this));
        },
        handleCheckAllChange(val){
        	if(val){
        		this.checkedList=this.checkList        			        		
        	}else{      		
        		this.checkedList=[];
        	}
        },
        querySearch(queryString, cb){
	        var restaurants = this.restaurants;
	        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
	        // 调用 callback 返回建议列表的数据
	        cb(results);
		},
		createFilter(queryString) {
	    	return (restaurant) => {
	      		return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
	    	};
	  	},
    },
    data() {

        return {
//			获取下拉选项时的后台地址
			selectlistUrl:'selectlist',
//		        被选中库点对应的样品地址
			checkListUrl:'checklist',
			selectlist: [],
//			被选中的库点
		    libselect:'all',
			checkList:[],
			checkedList:[],
//      	全部选中按钮
        	checkAll:false,
//      	筛选列表
	  	  	restaurants: [{"value": "春季抽查"},{"value": "秋季普查"},{"value": "2017年度轮换验收"},{"value": "2018年度轮换验收"},{"value": "收购巡查"}],
        	
//      	表单数据
        	form:{
        		
        	},
			labelWidth:'1rem',
//			
		    remSelect:'',
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
        }
    },
}
</script>

