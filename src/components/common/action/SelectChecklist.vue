<template>
    <div class="SelectChecklist">
    	<el-form ref="form" :model="form" :label-width="labelWidth" label-position="left">
	    	<el-form-item label="选择库点">
			    <el-select v-model="libselect" placeholder="选择库点">
			        <el-option label="长南" value="1"></el-option>
			        <el-option label="永济" value="2"></el-option>
			    </el-select>
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
			<template>
			  <el-checkbox-group v-model="checkedList">
			    <el-checkbox label="复选框 A"></el-checkbox>
			    <el-checkbox label="复选框 B"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			  </el-checkbox-group>
			</template>
			<div class="clear"></div>
		</div>
    </div>
</template>

<script>
import "@/assets/style/common/SelectChecklist.css";
export default {
//  props: ["formdatas"],
    created(){
    	
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
			libselect:'长南',
			labelWidth:'1rem',
			checkList:[
			
			],
			checkedList:[
				'复选框 A',
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
        dateChange(){
//  		console.log(this.date_select);
//  		this.$emit('dateChange',this.date_select);
    	},
    }

}
</script>

