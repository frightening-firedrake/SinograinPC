<template>
    <el-form ref="form" :inline-message="errorinline" class="sampling"  :model="formdatas" :label-width="labelWidth">
        <template>
            <p>{{formdatas.title}}</p>
        </template>      
        <template v-for="(value,key,index) in formdatas.form">
            <template v-if="formdatas.labels[index]['type']=='input'">
		        <el-form-item :label="formdatas.labels[index]['label']" :prop="'form.'+key" v-bind:class="formdatas.labels[index]['class']" 
		        	:rules="[{ required: true, message: '请完善输入内容', trigger: 'blur' }
    			]">
				    <el-input v-model="formdatas.form[key]" placeholder="请输入" :disabled="formdatas.labels[index]['disable']"></el-input>
				</el-form-item>
            </template>
            <template v-if="formdatas.labels[index]['type']=='num'">
		        <el-form-item :label="formdatas.labels[index]['label']" :prop="'form.'+key" v-bind:class="formdatas.labels[index]['class']">
					<el-input-number v-model="formdatas.form[key]" :min="1" :max="10"></el-input-number>
				</el-form-item>
            </template>
            <template v-if="formdatas.labels[index]['type']=='checkbox'">
		        <el-form-item :label="formdatas.labels[index]['label']" :prop="'form.'+key" v-bind:class="formdatas.labels[index]['class']">
					<el-checkbox-group v-model="formdatas.form[key]">
				      	<el-checkbox
					      v-for="item in formdatas.labels[index]['items']"
					      :key="item.value"
					      :label="item.label">
					    </el-checkbox>
				    </el-checkbox-group>
				</el-form-item>
            </template>
            <template v-if="formdatas.labels[index]['type']=='select'">
		        <el-form-item :label="formdatas.labels[index]['label']" :prop="'form.'+key" v-bind:class="formdatas.labels[index]['class']"
		        	:rules="[{ required: true, message: '请完善选择内容', trigger: 'change' }
    			]">
					<el-select v-model="formdatas.form[key]"  placeholder="请选择">
				        <el-option
					      v-for="item in formdatas.labels[index]['items']"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
				    </el-select>
				</el-form-item>
            </template>
        </template> 
        
        <template v-for="(value,index) in formdatas.actions">
        	<div class="actionsWrap">
        		<div class='actionsTitle'>
        			操
        			<br />
        			作
        		</div>
			    <el-form-item label="相关操作："  :class="formdatas.actions.length-1>index?'disabled':''" :prop="'actions['+index+']'+'.operation'" class="full" :rules="[
      				{ required: true, message: '请输入操作名称', trigger: 'blur' },
    			]">
					<el-input v-model="value.operation" placeholder="请输入" :disabled="formdatas.actions.length-1>index"></el-input>
				</el-form-item>
				<el-form-item label="权限许可：" :class="formdatas.actions.length-1>index?'disabled':''" :prop="'actions['+index+']'+'.permission'"  class="full" :rules="[
      				{ required: true, message: '权限许可名称', trigger: 'blur' },
    			]">
					<el-input v-model="value.permission" placeholder="请输入" :disabled="formdatas.actions.length-1>index"></el-input>
				</el-form-item>
				<el-form-item label="依赖操作：" :class="formdatas.actions.length-1>index?'disabled':''" :prop="'actions['+index+']'+'.relyName'"  class="full" :rules="[
      				{ required: true, message: '选择依赖操作', trigger: 'change' },
    			]">
					<el-select v-model="value.relyName" placeholder="请选择" :disabled="formdatas.actions.length-1>index">
				        <el-option
					      v-for="item in formdatas.operationRIds"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
				    </el-select>
				</el-form-item>
        	</div>
        </template>


        	
		 <!--<template v-for="(item,index) in formdatas.labels">-->
            <!--<template v-if="item.type=='input'">
		        <el-form-item :label="item.label" prop="ctime" v-bind:class="item.class">
				    <el-input v-model="formdatas.form[index]" :disabled="item.disable"></el-input>
				</el-form-item>
            </template>-->
        <!--</template>-->
		<!--<el-form-item label="产地：" prop="region" >
		    <el-select v-model="formdatas.form.region" placeholder="请选择产地">
		        <el-option label="山西" value="1"></el-option>
		        <el-option label="河南" value="henan"></el-option>
		        <el-option label="山东" value="shandong"></el-option>
		        <el-option label="陕西" value="shanxi2"></el-option>
		        <el-option label="东北" value="dongbei"></el-option>
		    </el-select>
		</el-form-item>
		<el-form-item label="最大限制用户数：" prop="num" >
			<el-input-number v-model="num1" :min="1" :max="10" label="描述文字"></el-input-number>
		</el-form-item>
		<el-form-item label="相关操作：" class="full" prop="action" >
		    <el-checkbox-group v-model="formdatas.form.action">
		      <el-checkbox label="美食/餐厅线上活动" name="action"></el-checkbox>
		      <el-checkbox label="地推活动" name="action"></el-checkbox>
		      <el-checkbox label="线下主题活动" name="action"></el-checkbox>
		      <el-checkbox label="单纯品牌曝光" name="action"></el-checkbox>
		    </el-checkbox-group>
		</el-form-item>
		<el-form-item label="备注：" class="full" prop="remarks" >
		    <el-input v-model="formdatas.form.remarks"></el-input>
		</el-form-item>-->

        
        <div class="btns">
        	<div class="tableAddWrap" v-if="formdatas.actions">        		
	        	<div class="tableAdd"  @click="actionAdd">
					<p style="background-image:url('static/images/sys/create.png');">					
						新增一组操作
					</p>
				</div>
				<div class="tableDel"  @click="actionDel" v-if="formdatas.actions.length>0">
					<p style="background-image:url('static/images/sys/icons2.png');">					
						删除最后一组操作
					</p>
				</div>
        	</div>
			
            <el-button class="yes" type="primary" @click="onSubmit('form')">确认</el-button>
            <el-button class="no" @click="cancel('form')">取消</el-button>
        </div>
        
        <div class="clear"></div>
    </el-form>
</template>
<style>

</style>
<script>
import "@/assets/style/common/Form.css";
export default {
    props: ["formdatas"],
    created(){
    	
    },
    mounted: function() {
//		console.log(this.formdatas)
    },
    computed:{
    	
    },
    data() {

    		// 普通文本的验证
            var validateText = ( rule, value, callback ) => {
                var str =/^[^'"#$%&\^*》>,."<《？，。！@#￥%……’”：/；]+$/;
                if(!value){
                     return callback(new Error("请输入内容"));
                }else if(!str.test(value)){
                    return callback(new Error("请不要输入特殊的字符"))
                }else{
                    callback()
                }
            }
            // 下拉框
            var validateSelect = ( rule, value, callback ) => {
                if(!value){
                    return callback(new Error("必须选择"))
                }else{
                    callback()
                }
            }
            // 电话
            var validatePhone = ( rule, value, callback ) => {
                var str = /^1[3|4|5|8][0-9]\d{4,8}$/
                if(!value){
                    return callback(new Error("手机号不能为空"))
                }else if(!str.test(value)){
                    return callback(new Error("手机号不对"))
                }else{
                    callback()
                }
            }
            // 邮箱
            var validateEmily = ( rule, value, callback ) => {
                var str = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ 
                if(!value){
                    return callback(new Error("邮箱不能为空"))
                }else if(str.test(value)){
                    return callback(new Error("邮箱不正确"))
                }else{
                    return callback()
                }
            }
        return {
        labelWidth:'2rem',
        errorinline:false,
        disabled:true,
            rules: {
                text: [
                    {validator:validateText,trigger:'blur'}
                ],
                select:[
                    {validator:validateSelect,trigger:'blur'}
                ],
                roleName:[
                    {validator:validateText,trigger:'blur'}
                ],
	            status: [
                    {validator:validateText,trigger:'blur'}
                ],
	            nid: [
                    {validator:validateText,trigger:'blur'}
                ],
	            checkregion:[
                    {validator:validateSelect,trigger:'blur'}
                ],
	            pnumber:[
                    {validator:validateText,trigger:'blur'}
                ],
	            varieties:[
                    {validator:validateText,trigger:'blur'}
                ],
	            quality:[
                    {validator:validateText,trigger:'blur'}
                ],
	            weight:[
                    {validator:validateText,trigger:'blur'}
                ],
	            region:[
                    {validator:validateSelect,trigger:'blur'}
                ],
//	            harvestdate: '2017',//收货年度
	            samplingdate:[
                    {validator:validateText,trigger:'blur'}
                ],
//	            remarks: '',//备注
                
            }
        }
    },
    methods: {  
        onSubmit(formname) {

            this.$refs[formname].validate((valid) => {
                if (valid) {
                	var formobj={};
                	for(var key in this.formdatas.form){
//              		console.log(this.formdatas.form[key])
                		formobj[key]=this.formdatas.form[key]
                	}
                	if(this.formdatas.actions){                		
						formobj.actions=this.formdatas.actions
                	}
                	this.$emit('submit',formobj)            		

//					window.history.go(-1)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        cancel(formname) {
            console.log('取消!');
			this.$refs[formname].resetFields();
//          this.$emit('btn_close')
			window.history.go(-1)
        },
        actionAdd(){
        	this.$emit('actionAdd');
        },
        actionDel(){
        	this.$emit('actionDel');
        },
    }

}
</script>

