import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'
import './assets/style/common/common.css'
import './assets/style/fonts/iconfont.css'
import 'element-ui/lib/theme-chalk/display.css'
import store from './store/index'
import axios from 'axios'

Vue.use(ElementUI);
//Vue.prototype.apiRoot = 'http://m.ityyedu.com'
Vue.prototype.apiRoot = 'http://192.168.1.223:80'
//Vue.prototype.apiRoot = 'http://192.168.1.176:8082'
//Vue.prototype.apiRoot = 'http://192.168.1.221:80'
Vue.prototype.$http=axios;
new Vue({
  el: '#app',
  router,//使用路由
  store,//使用store
  render: h => h(App),
  data:{
  	eventHub:new Vue(),//添加事件中心
  }
})
