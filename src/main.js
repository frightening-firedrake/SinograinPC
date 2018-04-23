import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './assets/style/common/common.css'
import './assets/style/fonts/iconfont.css'
import 'element-ui/lib/theme-chalk/display.css'
import store from './store/index'
import axios from 'axios'
import router from './router/index'

Vue.use(ElementUI);
//Vue.prototype.apiRoot = 'http://m.ityyedu.com'
//Vue.prototype.apiRoot = 'http://192.168.1.210:80'
Vue.prototype.apiRoot = 'http://192.168.1.223:80'
//Vue.prototype.apiRoot = 'http://192.168.1.176:8082'
//Vue.prototype.apiRoot = 'http://192.168.1.221:80'
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.withCredentials=true;
axios.interceptors.request.use(function (response) {
	if (store.getters.Token) {
	  response.headers.Authorization= store.getters.Token
	}	
    return response;
}, function (error) {

    return Promise.reject(error);
});


//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.interceptors.response.use(function (response) {
//  console.log('全局的拦截测试，好简单')
    return response;
}, function (error) {
		console.log(error)

//		console.log(error.response.status)
//			if(error)
//			this.$router.replace({path: '/403'})  
    return Promise.reject(error);
});
Vue.prototype.$http=axios;



new Vue({
  el: '#app',
  router,//使用路由
  store,//使用store
  render: h => h(App),
  data:{
  	eventHub:new Vue(),//添加事件中心
  },
  
})
