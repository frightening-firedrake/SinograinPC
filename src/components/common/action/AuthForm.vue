<template>
    <el-form ref="form" :inline-message="errorinline" class="sampling" :rules="rules" :model="formdatas.form" :label-width="labelWidth">
        <template>
            <p>{{formdatas.title}}</p>
        </template>      
        <template v-for="(value,key,index) in formdatas.form">
            <template v-if="formdatas.labels[index]['type']=='input'">
		        <el-form-item :label="formdatas.labels[index]['label']" :prop="key" v-bind:class="formdatas.labels[index]['class']">
				    <el-input v-model="formdatas.form[key]" :disabled="formdatas.labels[index]['disable']"></el-input>
				</el-form-item>
            </template>
            <template v-if="formdatas.labels[index]['type']=='num'">
		        <el-form-item :label="formdatas.labels[index]['label']" :prop="key" v-bind:class="formdatas.labels[index]['class']">
					<el-input-number v-model="formdatas.form[key]" :min="1" :max="10"></el-input-number>
				</el-form-item>
            </template>
            <template v-if="formdatas.labels[index]['type']=='checkbox'">
		        <el-form-item :label="formdatas.labels[index]['label']" :prop="key" v-bind:class="formdatas.labels[index]['class']">
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
		        <el-form-item :label="formdatas.labels[index]['label']" :prop="key" v-bind:class="formdatas.labels[index]['class']">
					<el-select v-model="formdatas.form[key]" placeholder="">
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
            <el-button class="yes" type="primary" @click="onSubmit('form')">确认</el-button>
            <el-button class="no" @click="cancel('form')">取消</el-button>
        </div>
        
        <div class="clear"></div>
    </el-form>
</template>

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
                    this.$emit('submit',this.formdatas.form)
					window.history.go(-1)
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
        
    }

}
</script>

