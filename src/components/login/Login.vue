<template>
    <div class="login" style="background-image:url(static/images/login/login_big.jpg)">
        <div class="login_box">
            <el-form ref="form"  class="login_form" :model="loginForm">
            	<p v-if="loginError" class="loginError"><span class="el-icon-warning"></span>{{errorMessage}}</p>
            	<p v-else class="loginError"></p>
                <el-form-item label=""  :class="{focus:isfocus}">
                	<el-input
					    placeholder="请输入您的账号"
					    v-model="loginForm.name">
					    <i slot="prefix" class="iconfont icon-icon-test"></i>
					</el-input>
                    <!--<i class="iconfont icon-zhanghao"></i>-->
                    <!--<el-input type="text" placeholder="请输入您的账号" v-model="loginForm.name" @focus="focus" @blur="blur"></el-input>-->
                </el-form-item>
                <el-form-item label="" >
                	<el-input
                		type='password'
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
					    @blur="checkcode"
					    @keyup.enter.native="submitForm()"
					    v-model="loginForm.number">
					    <i slot="prefix" class="iconfont icon-yanzhengma"></i>
					</el-input>
                    <!--<i class="iconfont icon-yanzhengma"></i>-->
                    <!--<el-input   placeholder="请输入验证码" v-model="loginForm.number"></el-input>-->
                </el-form-item>
                <img class="code_img" :src="captcha" @click="change()" alt="验证码加载中...">
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
        this.change()
        this.updataRemarks()
    },
    methods: {
    	...mapMutations(['setUserInfo']),
  		...mapActions([]),
        change() {
        	this.$http({
			    method: 'post',
				url:  this.apiRoot + '/grain/captcha?d='+new Date().getTime(),
				withCredentials: true,
       			crossDomain: true,
				transformRequest: [function (data) {
					// Do whatever you want to transform the data
					let ret = ''
					for (let it in data) {
					ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
					return ret
				}],
				headers: {'Content-Type': 'application/x-www-form-urlencoded','crossDomain': true},
				data: {
	                
				}
	       }).then(function (response) {
//	        	console.log(response)
//	        	console.log(response.data.capText)
	           	this.captcha = 'data:image/jpg;base64,'+response.data.img;
//	           	this.captcha = response.data;
//          	this.captcha = this.apiRoot + '/grain/captcha?d='+new Date().getTime()
	           	this.captchaId = response.data.captcha; 
	        }.bind(this)).catch(function (error) {
	            console.log(error);
	        }.bind(this));
//          this.captcha = this.apiRoot + '/grain/captcha?d='+new Date().getTime()
        },
        submitForm() {
        	if(!this.checkcode()){
        		return
        	}
            this.$http({
		    method: 'post',
			url: this.apiRoot +  '/grain/login',
			transformRequest: [function (data) {
				// Do whatever you want to transform the data
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
			}],
			headers: {'Content-Type': 'application/x-www-form-urlencoded','crossDomain': true},
			withCredentials: true,
       		crossDomain: true,
			data: {
			    userName:this.loginForm.name,
                userPass:this.loginForm.password,
                verityCode:this.loginForm.number,
                captcha:this.captchaId,
			}
	        }).then(function (response) {
               	if(response.data.success == true) {
               		var payload={};
               		payload.libraryId=response.data.user.libraryId;
               		payload.libraryName=response.data.user.libraryName;
               		payload.userName=response.data.user.userName;
               		payload.userId=response.data.user.id;
               		payload.userAuth=response.data.user.resourceName;
               		payload.Token=response.data.user.token;
               		payload.permissions=response.data.user.permissions;
               		payload.roleName=response.data.user.roleName;
               		payload.remarkses=this.remarkses;
//             		payload.Token='akjshjakjclacahdawhdlahwdiua';
//             		payload.userRole=response.data.user.userRole;
//             		payload.userAuth='InformationManagement,AuthorityManagement';//grainDepot
               		this.setUserInfo(payload)
                   	this.$router.push({ path: '/index'});
               	}else if(response.data.success == false){
                    this.loginError=true;
            		this.errorMessage=response.data.code+'!';    
            		this.loginForm.name='',
                	this.loginForm.password='',
                	this.loginForm.number='',
        			this.change();           		
               	}
            }.bind(this)).catch(function (error) {
                console.log(error);
            }.bind(this));
        },
        addborder(e){
            alert(1)
            console.log(e)
        },
//      失去焦点时是否需要验证码的验证
        checkcode(){
			if(this.captchaId==this.loginForm.number){
                this.loginError=false;			
				return true;
			}else{
                this.loginError=true;
				this.errorMessage="您输入的验证码信息不正确，请重新输入！";
				return false;
			}
        },
        focus(a,b){
        	console.log(this,a,b)
        	this.isfocus=true
        },
        blur(){
        	this.isfocus=false   
        },
        updataRemarks(){
        	var myDate = new Date();
			var yearNew=myDate.getFullYear(); 

			for(var i=2017;i<=yearNew;i++){
				var obj={};
				obj.value=i+"年度轮换验收"
				this.remarkses.push(obj)
			}
        }
    },
    data() {
        return {
        	loginError:false,
            captcha:'',
            captchaId:'',
        	isfocus:false,
            loginForm: {
                name:"",
                password:"",
                number:"",
            },
            errorMessage:"",
            remarkses:[
            	{"value": "春季抽查"},
            	{"value": "秋季普查"},
            	{"value": "收购巡查"},
            	{"value": "出库巡查"},
//          	{"value": "2017年度轮换验收"},
            ],//备注组这个单词拼错了但是年久失修记不清其他模块了就不改了
        }
    }
    
}
</script>