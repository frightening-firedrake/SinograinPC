<template>
    <el-form ref="forms" class="role_form" :rules="rules" :model="forms" size="medium">
        <template>
            <p>青柠云后台管理系统</p>
        </template>
        <el-form-item v-for="(form,index) in forms" :prop="index" :inline-message="true" :key="index" :label="form.label" :class="{textarea:form.type=='remarks'}" v-show="form.type!='options'">
            <template v-if="form.type=='text'">
                <el-input class="roleinput" v-model="form.text" :placeholder="form.default"></el-input>
            </template>
            <template v-else-if="form.type=='remarks'">
                <el-input type="textarea" v-model="form.text" :placeholder="form.default"></el-input>
            </template>
            <template v-else-if="form.type=='select'">
                <el-select class="select" v-model="form.text" :placeholder="form.selected">
                    <el-option v-for="(item,index) in form.childrens" :key="index" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </template>
            <template v-else-if="form.type=='number'">
                <el-input-number v-model="form.text" class="maxnum" size="mini" :min="form.min" :max="form.max" label="描述文字"></el-input-number>
            </template>
        </el-form-item>
        <template v-if="forms.option">
            <div v-for="(option,index) in forms.option.arr" :key="index">
                <div class="options">
                    <el-form-item v-for="(optionarr,index) in option" :key="index" :label="optionarr.label">
                        <template v-if="optionarr.type=='text'">
                            <el-input class="option_text roleinput" v-model="optionarr.text" :disabled="optionarr.readonly" :placeholder="optionarr.default"></el-input>
                            <div class="options_btn" v-if="optionarr.btn_look">
                                <button class="option_add" @click="addOption">+</button>
                                <button class="option_cancel" @click="cancelOption">-</button>
                            </div>
                        </template>
                        <template v-if="optionarr.type=='select'">
                            <el-select class="option_select select" :disabled="optionarr.readonly" v-model="optionarr.text" :placeholder="optionarr.selected">
                                <el-option v-for="(item,index) in optionarr.childrens" :key="index" :label="optionarr.label" :value="optionarr.value">
                                </el-option>
                            </el-select>
                        </template>
                    </el-form-item>
                </div>
            </div>
        </template>
        <div class="btns">
            <el-button class="btn_succse btn" type="primary" @click="onSubmit('forms')">{{btn?btn.succse:"确认"}}</el-button>
            <el-button class="btn_cancel btn" @click="cancel">取消</el-button>
        </div>
    </el-form>
</template>

<script>
import "@/assets/style/common/Form.css";
export default {
    props: ["forms", "btn"],
    mounted: function() {

    },
    data() {
        methods:{
            // name的验证
            var validateName = ( rule, value, callback ) => {
                var str =/^[^'"#$%&\^*》>,."<《？，。！@#￥%……’”：/；]+$/;
                if(!value.text){
                     return callback(new Error("请输入名称"));
                }else if(!str.test(value.text)){
                    return callback(new Error("有除了特殊的字符"))
                }else{
                    callback()
                }
            }
            // 下拉框
            var validateFath = ( rule, value, callback ) => {
                if(!value.text){
                    return callback(new Error("必须选择"))
                }else{
                    callback()
                }
            }
            // 电话
            var validatePhone = ( rule, value, callback ) => {
                var str = /^1[3|4|5|8][0-9]\d{4,8}$/
                if(!value.text){
                    return callback(new Error("手机号不能为空"))
                }else if(!str.test(value.text)){
                    return callback(new Error("手机号不对"))
                }else{
                    callback()
                }
            }
            // 邮箱
            var validateEmily = ( rule, value, callback ) => {
                var str = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ 
                if(!value.text){
                    return callback(new Error("邮箱不能为空"))
                }else if(str.test(value.text)){
                    return callback(new Error("邮箱不正确"))
                }else{
                    return callback()
                }
            }
        } 
        return {
            rules: {
                name: [
                    {validator:validateName,trigger:'change'}
                ],
                fath:[
                    {validator:validateFath,trigger:'change'}
                ],
                rely:[
                     {validator:validateFath,trigger:'change'}
                ],
                Assigning_users:[
                     {validator:validateFath,trigger:'change'}
                ],
                phone:[
                    {validator:validatePhone,trigger:'change'}
                ],
                emily:[
                    { validator:validateEmily,trigger:"change" }
                ],
                email:[
                    { validator:validateEmily,trigger:"change" }
                ],
            }
        }
    },
    methods: {
        onSubmit(formname) {
            // console.log(this.$refs)
            this.$refs[formname].validate((valid) => {
                if (valid) {
                    alert('submit!');
                    this.$emit('btn_close')
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        cancel() {
            console.log('取消!');

            this.$emit('btn_close')
        },
        addOption: function() {
            var forms_content = this.forms.option.arr
            var parpam = [
                {
                    btn_look: true,
                    label: "相关操作：",
                    type: "text",
                    text: "",
                    default: "请输入相关操作"
                },
                {
                    label: "权限许可：",
                    type: "text",
                    text: "",
                    default: "请输入权限许可"
                },
                {
                    label: "选择依赖操作：",
                    type: 'select',
                    text: "",
                    selected: "选择资源",
                }
            ]

            var option = forms_content[forms_content.length - 1][0].text
            var Permit = forms_content[forms_content.length - 1][1].text
            if (!(option && Permit)) {
                return
            } else {
                forms_content.forEach(function(i, v) {
                    i.forEach(function(i, v) {
                        i.readonly = true,
                            i.btn_look = false
                    })
                })
                forms_content.push(parpam)
            }
        },
        cancelOption: function() {
            var forms_content = this.forms.option.arr
            if (forms_content.length > 1) {
                forms_content.pop()
                forms_content[forms_content.length - 1].forEach(function(i, v) {
                    i.readonly = false
                })
                forms_content[forms_content.length - 1][0].btn_look = true
            } else {
                return
            }
        }
    }

}
</script>

