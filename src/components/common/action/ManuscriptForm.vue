<template>
    <el-form ref="form" :inline-message="errorinline" class="sampling" :rules="rules" :model="formdatas.form" :label-width="labelWidth">
        <template>
            <p>{{formdatas.title}}</p>
        </template>      
		<el-form-item label="被检查企业" prop="checkregion" class="three">
		    <el-select v-model="formdatas.form.checkregion" placeholder="选择库点">
		        <el-option label="山西" value="1"></el-option>
		        <el-option label="河南" value="henan"></el-option>
		        <el-option label="山东" value="shandong"></el-option>
		        <el-option label="陕西" value="shanxi2"></el-option>
		        <el-option label="东北" value="dongbei"></el-option>
		    </el-select>
		</el-form-item>
		<el-form-item label="被查时点"  class="three">
		    <el-form-item prop="checktime">
		        <!--<el-date-picker type="year" :default-value="dyear" placeholder="选择年度" v-model="form.harvestdate"></el-date-picker>-->
		        <el-date-picker type="month" placeholder="选择被查时点" v-model="formdatas.form.checktime"></el-date-picker>
		    </el-form-item>
		</el-form-item>
		<el-form-item label="实际查库日"  class="three">
		    <el-form-item prop="realchecktime">
		        <!--<el-date-picker type="year" :default-value="dyear" placeholder="选择年度" v-model="form.harvestdate"></el-date-picker>-->
		        <el-date-picker type="month" placeholder="选择实际查库日" v-model="formdatas.form.realchecktime"></el-date-picker>
		    </el-form-item>
		</el-form-item>
		<el-form-item label="货位号" prop="pnumber"  v-bind:class="{disabled:disabled}" class="three">
		    <el-input v-model="formdatas.form.pnumber" :disabled="disabled"></el-input>
		</el-form-item>
		<el-form-item label="品种" prop="varieties"  v-bind:class="{disabled:disabled}" class="three">
		    <el-input v-model="formdatas.form.varieties" :disabled="disabled"></el-input>
		</el-form-item>
		<el-form-item label="性质" prop="quality"  v-bind:class="{disabled:disabled}" class="three">
		    <el-input v-model="formdatas.form.quality" :disabled="disabled"></el-input>
		</el-form-item>
		<el-form-item label="所在库区" prop="reservoir_area"  v-bind:class="{disabled:disabled}" class="three2">
		    <el-input v-model="formdatas.form.reservoir_area" :disabled="disabled"></el-input>
		</el-form-item>
		<el-form-item label="仓房类型" prop="warehouse_type"  class="three">
		    <el-input v-model="formdatas.form.warehouse_type"></el-input>
		</el-form-item>
		<el-form-item label="收货年度"  v-bind:class="{disabled:disabled}" class="three">
		    <el-form-item prop="harvestdate">
		        <!--<el-date-picker type="year" :default-value="dyear" placeholder="选择年度" v-model="form.harvestdate"></el-date-picker>-->
		        <el-date-picker type="year" placeholder="选择年度" v-model="formdatas.form.harvestdate"  :disabled="disabled"></el-date-picker>
		    </el-form-item>
		</el-form-item>
		<el-form-item label="储存形式"  class="three">
		    <el-select v-model="formdatas.form.storage_from" placeholder="选择储存形式">
		        <el-option label="常规" value="1"></el-option>
		        <el-option label="非常规" value="2"></el-option>
		    </el-select>
		</el-form-item>
		<el-form-item label="保管帐数量（kg）" prop="bgzsl" class="three">
		    <el-input v-model="formdatas.form.bgzsl"></el-input>
		</el-form-item>
		<el-form-item label="质量等级"  class="three">
		    <el-select v-model="formdatas.form.quality" placeholder="选择质量等级">
		        <el-option label="上等" value="1"></el-option>
		        <el-option label="中等" value="2"></el-option>
		        <el-option label="下等" value="3"></el-option>
		    </el-select>
		</el-form-item>
		<!--<el-form-item label="入仓方式" prop="stored_way" class="three2">
		    <el-checkbox-group v-model="formdatas.form.stored_way">
		        <el-checkbox label="人工入仓" name="type"></el-checkbox>
		        <el-checkbox label="机械入仓" name="type"></el-checkbox>
		    </el-checkbox-group>
		</el-form-item>-->
		<el-form-item label="入仓方式" prop="stored_way" class="three2">
	    	<el-radio-group v-model="formdatas.form.stored_way">
		        <el-radio label="1">人工入仓</el-radio>
		        <el-radio label="2">机械入仓</el-radio>
		    </el-radio-group>
		</el-form-item>
		
		<!--分两半-->
		<div class="left">
			<div>
				<div class="merge_title_3">
					粮食入库质量
				</div>
				<el-form-item label="容重（g/l）" prop="volume_weigh_i" class='leftborder'>
				    <el-input v-model="formdatas.form.volume_weigh_i"></el-input>
				</el-form-item>
				<el-form-item label="水分（%）" prop="water_content_i" class='leftborder'>
				    <el-input v-model="formdatas.form.water_content_i"></el-input>
				</el-form-item>
				<el-form-item label="杂质（%）" prop="impurity_i" class='leftborder'>
				    <el-input v-model="formdatas.form.impurity_i"></el-input>
				</el-form-item>
				<div class="clear"></div>
			</div>
		</div>

		<div class="right">
			<div>
				<div class="merge_title_right">						
					<div class="merge_title_3">
						实测粮食质量
					</div>
				</div>
				<el-form-item label="容重（g/l）" prop="volume_weigh_r" class='leftborder'>
				    <el-input v-model="formdatas.form.volume_weigh_r"></el-input>
				</el-form-item>
				<el-form-item label="水分（%）" prop="water_content_r" class='leftborder'>
				    <el-input v-model="formdatas.form.water_content_r"></el-input>
				</el-form-item>
				<el-form-item label="杂质（%）" prop="impurity_r" class='leftborder'>
				    <el-input v-model="formdatas.form.impurity_r"></el-input>
				</el-form-item>		
				<div class="clear"></div>
				
			</div>
		</div>
		
		<div class="left">
			<div>
				
				<div class="fromrow">
					1.计算粮堆体积
				</div>
				<el-form-item label="粮堆测量体积(m3)" prop="volume_c" >
				    <el-input v-model="formdatas.form.volume_c"></el-input>
				</el-form-item>
				<el-form-item label="需要扣除体积(m3)" prop="volume_q" >
				    <el-input v-model="formdatas.form.volume_q"></el-input>
				</el-form-item>
				<el-form-item label="粮堆实际体积(m3)" prop="volume_r" >
				    <el-input v-model="formdatas.form.volume_r"></el-input>
				</el-form-item>
				<div class="fromrow">
					2.计算粮堆平均密度
				</div>
				<div class="box">
					<div class="merge_title_3">
						<el-radio v-model="calculation_density" label="1">标准容重器法</el-radio>
					</div>
					<el-form-item label="粮食容重（g/l）" prop="volume_weigh_bz"  class='leftborder'>
					    <el-input v-model="formdatas.form.volume_weigh_bz"></el-input>
					</el-form-item>
					<el-form-item label="校正后修正系数" prop="correction_factor_bz"  class='leftborder'>
					    <el-input v-model="formdatas.form.correction_factor_bz"></el-input>
					</el-form-item>
					<el-form-item label="粮堆平均密度（kg/m³）" prop="average_density_bz"  class='leftborder'>
					    <el-input v-model="formdatas.form.average_density_bz"></el-input>
					</el-form-item>
					<div class="clear"></div>
				</div>
				<div class="box">				
					<div class="merge_title_3">
						<el-radio v-model="calculation_density" label="2">特制大容器法</el-radio>
					</div>
					<el-form-item label="单位体积粮食重量（kg/m³）" prop="unit_volume_weight_tz"  class='leftborder'>
					    <el-input v-model="formdatas.form.unit_volume_weight_tz"></el-input>
					</el-form-item>
					<el-form-item label="校正后修正系数" prop="correction_factor_tz"  class='leftborder'>
					    <el-input v-model="formdatas.form.correction_factor_tz"></el-input>
					</el-form-item>
					<el-form-item label="粮堆平均密度（kg/m³）" prop="average_density_tz"  class='leftborder'>
					    <el-input v-model="formdatas.form.average_density_tz"></el-input>
					</el-form-item>
					<div class="clear"></div>
				</div>

				
			</div>
		</div>
		<div class="right">
			<div class="padding">
				<div class="fromrow">
					粮堆形状及基本尺寸
				</div>
				<div class="imgbox">
					
				</div>
				<el-form-item label="长（m）：" prop="long" class="small" style="border-left: solid 1px #dfdfdf;">
				    <el-input v-model="formdatas.form.long"></el-input>
				</el-form-item>
				<el-form-item label="宽（m）：" prop="width" class="small">
				    <el-input v-model="formdatas.form.width"></el-input>
				</el-form-item>
				<el-form-item label="高（m）：" prop="height" class="small">
				    <el-input v-model="formdatas.form.height"></el-input>
				</el-form-item>	
				<div class="clear"></div>
				
			</div>		
		</div>
		<div class="clear"></div>
		
		<div class="left">
			<div>
				<div class="fromrow">
					3.计算粮食数量
				</div>
				<el-form-item label="测量计算数（kg）" prop="weight_measure" >
				    <el-input v-model="formdatas.form.weight_measure"></el-input>
				</el-form-item>
				<div class="box">				
					<div class="merge_title_3">
						应记粮食损耗(kg)	
					</div>
					<el-form-item label="水分减量" prop="weight_humidity"  class='leftborder'>
					    <el-input v-model="formdatas.form.weight_humidity"></el-input>
					</el-form-item>
					<el-form-item label="保管自然损耗" prop="weight_natural"  class='leftborder'>
					    <el-input v-model="formdatas.form.weight_natural"></el-input>
					</el-form-item>
					<el-form-item label="合计" prop="weight_total"  class='leftborder'>
					    <el-input v-model="formdatas.form.weight_total"></el-input>
					</el-form-item>
					
					<div class="clear"></div>
				</div>
				<el-form-item label="检查计算数（kg）" prop="weight_calculation" >
				    <el-input v-model="formdatas.form.weight_calculation"></el-input>
				</el-form-item>
				<div class="clear"></div>
				
			</div>
		</div>
		<div class="right">
			<div class="padding">
				<div class="fromrow">
					4.认定粮食实际数量
				</div>
			</div>
				

				<div class="merge_title_right">				
					<div class="merge_title_2">
						检查计算数与保管账数量比较
					</div>
				</div>
					<el-form-item label="差数（kg）" prop="difference"  class='leftborder'>
					    <el-input v-model="formdatas.form.difference"></el-input>
					</el-form-item>
					<el-form-item label="差率（％）" prop="slip"  class='leftborder'>
					    <el-input v-model="formdatas.form.slip"></el-input>
					</el-form-item>
				<div class="clear"></div>
				<div class="cover_left">
					<div></div>
				</div>	
					<el-form-item label="账实是否相符" prop="is_same" >
					    <el-input v-model="formdatas.form.is_same"></el-input>
					</el-form-item>
				<div class="cover_left">
					<div></div>
				</div>	
				<el-form-item label="粮食实际数量（kg）" prop="weight_r" >
				    <el-input v-model="formdatas.form.weight_r"></el-input>
				</el-form-item>
				<div class="cover_left">
					<div></div>
				</div>	
				<el-form-item label="账实不符原因" prop="difference_r" >
				    <el-input v-model="formdatas.form.difference_r"></el-input>
				</el-form-item>	
				<div class="clear"></div>
				

		</div>
		
		<el-form-item label="备注" prop="remarks"  class="full">
		    <el-input v-model="formdatas.form.remarks"></el-input>
		</el-form-item>
		<el-form-item label="检查人" prop="checker"  class="three">
		    <el-input v-model="formdatas.form.checker"></el-input>
		</el-form-item>
		<el-form-item label="保管责任人" prop="keeper"  class="three">
		    <el-input v-model="formdatas.form.keeper"></el-input>
		</el-form-item>
		<el-form-item label="被检查企业负责人" prop="responsible_person"  class="three">
		    <el-input v-model="formdatas.form.responsible_person"></el-input>
		</el-form-item>

        
        <div class="btns">
            <el-button class="yes" type="primary" @click="onSubmit('form')">确认</el-button>
            <el-button class="no" @click="cancel('form')">取消</el-button>
        </div>
        
        <div class="Explain">
        	<pre>
	    填表说明：								
		1.根据检查情况在表内相关项目后的“□”内打“√”。								
		2.粮堆实际体积＝粮堆测量体积－需要扣除体积。								
		3.粮堆平均密度＝粮食容重(单位体积粮食重量)×校正后修正系数。								
		4.测量计算数＝粮堆实际体积×粮堆平均密度。								
		5.水分减量＝保管账数量×(入库水分%－实测水分%)/(1－实测水分%)。								
		6.保管自然损耗＝保管账数量×0.2%×粮食储存年数。								
		7.应记粮食损耗=水分减量＋保管自然损耗。								
		8.检查计算数＝测量计算数＋应记粮食损耗。								
		9.差数＝保管账数量－检查计算数；差率＝差数/保管账数量×100％。								
		10.差率在±3％以内的，认定账实相符，保管账数量即为粮食实际数量。								
		11.账实不符原因可另附说明。								
		12.表中以kg、g/l为单位的栏目保留整数，以kg/m3、％为单位的保留1位小数，修正系数以及长、宽、高数值保留2位小数。								

        	</pre>
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
//      dyear:new Date(2017),
        calculation_density:"1",//计算密度方法
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
                ctime:[
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
                    alert('submit!');
//                  this.$emit('btn_close')
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

