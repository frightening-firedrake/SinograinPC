<template>
    <div class="login" style="background-image:url(../../static/images/login/login_big.jpg)">
        <div class="login_box">
            <el-form ref="form"  class="login_form" :model="loginForm">
                <el-form-item label="" @click="addborder($event)" :class="{focus:isfocus}">
                	<el-input
					    placeholder="请输入您的账号"
					    v-model="loginForm.name">
					    <i slot="prefix" class="iconfont icon-zhanghao"></i>
					</el-input>
                    <!--<i class="iconfont icon-zhanghao"></i>-->
                    <!--<el-input type="text" placeholder="请输入您的账号" v-model="loginForm.name" @focus="focus" @blur="blur"></el-input>-->
                </el-form-item>
                <el-form-item label="" @click="addBorder()">
                	<el-input
					    placeholder="请输入您的密码"
					    v-model="loginForm.password">
					    <i slot="prefix" class="iconfont icon-mima"></i>
					</el-input>
                    <!--<i class="iconfont icon-mima"></i>
                    <el-input type="password" placeholder="请输入您的密码"   v-model="loginForm.password"></el-input>-->
                </el-form-item>
                <el-form-item label="" class="code" @click="addBorder()">
                	<el-input
					    placeholder="请输入验证码"
					    v-model="loginForm.number">
					    <i slot="prefix" class="iconfont icon-yanzhengma"></i>
					</el-input>
                    <!--<i class="iconfont icon-yanzhengma"></i>
                    <el-input   placeholder="请输入验证码" v-model="loginForm.number"></el-input>-->
                </el-form-item>
                <img class="code_img" src="~static/images/login/6078.jpg" alt="">
                <el-button class="login_submit" @click="submitForm()">登录</el-button>
            </el-form>
        </div>
    </div>
</template>
<script>
import "@/assets/style/common/login.css";
export default {
    methods: {
        submitForm() {
            this.$router.push({ path: '/index' });
        },
        addborder(e){
            alert(1)
            console.log(e)
        },
        focus(a,b){
        	console.log(this,a,b)
        	this.isfocus=true
        },
        blur(){
        	this.isfocus=false   
        },
    },
    data() {
        return {
        	isfocus:false,
            loginForm: {
                name:""
            },
        }
    }
}
</script>