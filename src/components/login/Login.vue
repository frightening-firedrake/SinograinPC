<template>
    <div class="login" style="background-image:url(static/images/login/login_big.jpg)">
        <div class="login_box">
            <el-form ref="form"  class="login_form" :model="loginForm">
            	<p v-if="loginError" class="loginError"><span class="el-icon-warning"></span>您输入的账号或密码不正确，请重新输入！</p>
            	<p v-else class="loginError"></p>
                <el-form-item label="" @click="addborder($event)" :class="{focus:isfocus}">
                	<el-input
					    placeholder="请输入您的账号"
					    v-model="loginForm.name">
					    <i slot="prefix" class="iconfont icon-icon-test"></i>
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
                <!--<el-form-item label="" class="code" @click="addBorder()">
                	<el-input
					    placeholder="请输入验证码"
					    v-model="loginForm.number">
					    <i slot="prefix" class="iconfont icon-yanzhengma"></i>
					</el-input>
                    <i class="iconfont icon-yanzhengma"></i>
                    <el-input   placeholder="请输入验证码" v-model="loginForm.number"></el-input>
                </el-form-item>
                <img class="code_img" :src="captcha" @click="change()" alt="">-->
                <el-button class="login_submit" @click="submitForm()">登录</el-button>
            </el-form>
        </div>
    </div>
</template>
<script>
import "@/assets/style/common/login.css";
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
	computed:{
		...mapState([]),
		...mapGetters(["libraryId","libraryName"]),
  	},
    created() {
        this.$http({
		    method: 'post',
			url: 'api/grain/captcha',
			transformRequest: [function (data) {
				// Do whatever you want to transform the data
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
			}],
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: {
                
			}
	        }).then(function (response) {
               this.captcha = 'http://localhost:8080/api/grain/captcha'
            }.bind(this)).catch(function (error) {
                console.log(error);
            }.bind(this));
    },
    methods: {
    	...mapMutations(['setUserInfo']),
  		...mapActions([]),
        change() {
            this.captcha = 'http://localhost:8080/api/grain/captcha?d='+new Date().getTime()
        },
        submitForm() {
            this.$http({
		    method: 'post',
			url: 'api/grain/login',
			transformRequest: [function (data) {
				// Do whatever you want to transform the data
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
			}],
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: {
			    userName: this.loginForm.name,
                userPass: this.loginForm.password,
                verityCode: this.loginForm.number
			}
	        }).then(function (response) {
               if(response.data.success == true) {
               		var payload={};
               		payload.libraryId=response.data.user.libraryId;
               		payload.libraryName=response.data.user.libraryName;
               		payload.userName=response.data.user.userName;
               		this.setUserInfo(payload)
                   	this.$router.push({ path: '/index'});
               }else {
                   this.loginError=true
               }
            }.bind(this)).catch(function (error) {
                console.log(error);
            }.bind(this));
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
        	loginError:false,
            captcha:'',
        	isfocus:false,
            loginForm: {
                name:""
            },
        }
    }
}
</script>