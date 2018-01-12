<template>
    <div class="SelectChecklist">
    	<el-form ref="form" :model="form" :label-width="labelWidth" label-position="left">
	    	<el-form-item label="选择库点">
			    <!--<el-select v-model="libselect" placeholder="选择库点">
			    	<tempalte v-for="(item,index) in selectlist">			    		
			    		<el-option label="长南" value="1"></el-option>
			    		<el-option label="永济" value="2"></el-option>
			    	</tempalte>
			    </el-select>-->
			    <template>
				    <el-select v-model="libselect" placeholder="选择库点" @change="changelibselect">
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
	    	<el-form-item label="选择时间" style="border-left:none;">
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
		<p>样品管理</p>
		<div class="checkboxwrap">
			<div v-if="!checkList.length" class="checklistemit">
				请先选择库点！！！
			</div>
			<template>
			  <el-checkbox-group v-model="checkedList">

			  	<el-checkbox :label="item" v-for="(item,index) in checkList" :key="item"></el-checkbox>

			  		
			    
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
    },
    mounted: function() {
//		console.log(this.formdatas)
    },
    computed:{
    	
    },
    data() {

        return {
        	form:{
        		
        	},
			labelWidth:'1rem',
			selectlistUrl:'selectlist1',
//			selectlist: [{
//		          value: '选项1',
//		          label: '长南',
//		          url:'checklist1',
//		        }, {
//		          value: '选项2',
//		          label: '山西',
//		          url:'checklist2',
//		        }, {
//		          value: '选项3',
//		          label: '运城',
//		          url:'checklist3',
//		        }],
			selectlist: [],
		    libselect:'',
		    checkListUrl:'',
			checkList:[
				
			],
			checkedList:[

			],
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
    methods: {  
    	changelibselect(value){
			var selectitem=this.selectlist.filter((item,index)=>{
				return item.value==value
			});
			this.checkListUrl=selectitem[0].url;
			this.getcheckList();
    	},
        dateChange(){
    		console.log(this.date_select);
//  		this.$emit('dateChange',this.date_select);
    	},
    	onSubmit(formname) {

                if (this.checkedList.length) {
//                  alert('submit!');
//                  this.$emit('btn_close')
					window.history.go(-1)
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
			  	this.libselect=response.data.libselect;
//		  		setTimeout(()=>{			  		
//			  		this.loading=false;
//			  	},1000)
			}.bind(this)).catch(function (error) {
			    console.log(error);
			}.bind(this));
       },
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
			  	this.checkList=response.data.checkList;
			  	this.checkedList=response.data.checkedList;
//		  		setTimeout(()=>{			  		
//			  		this.loading=false;
//			  	},1000)
			}.bind(this)).catch(function (error) {
			    console.log(error);
			}.bind(this));
        }
    }

}
</script>

