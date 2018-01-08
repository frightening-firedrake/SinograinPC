import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import Layout from '@/components/common/layout/Layout.vue'
import Home from '@/components/home/Home.vue'
import LibraryList from "@/components/sampling/list/LibraryList.vue"
import SamplingList from '@/components/sampling/list/SamplingList.vue'
import SamplingListCreate from '@/components/sampling/list/samplingShow/SamplingListCreate.vue'
import SamplingListEdit from '@/components/sampling/list/samplingShow/SamplingListEdit.vue'
import ManuscriptCreate from '@/components/sampling/list/manuscript/ManuscriptCreate.vue'
import ManuscriptEdit from '@/components/sampling/list/manuscript/ManuscriptEdit.vue'
import SafetyReportCreate from '@/components/sampling/list/safetyReport/SafetyReportCreate.vue'
import SafetyReportEdit from '@/components/sampling/list/safetyReport/SafetyReportEdit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
//    redirect: '/login',
      redirect: '/index',//暂时屏蔽掉了登录与首页直接列表页开始
      name: '',
    },
     {
      path: '/login',
      name: '登陆',
      component: Login,
    },
    {
      path: '/index',
      component: Layout,
      redirect: '/index/sampling/libraryList',
      children:[
          {
            path:"home",
            name: '首页',
            component:Home
          },
          {
            path:"sampling/libraryList",
            name:"扦样流程/扦样列表",
            component:LibraryList
          },
          {
            path:"sampling/samplingList",
            name:"扦样流程/扦样列表/被查库典列表",
            component:SamplingList
          },
		    	{
            path:"sampling/samplingList/samplingListCreate",
            name:"扦样流程/扦样列表/被查库典列表/新建扦样",
            component:SamplingListCreate
          },
          {
            path:"sampling/samplingList/samplingListEdit",
            name:"扦样流程/扦样列表/被查库典列表/查看扦样",
            component:SamplingListEdit
          },
          {
            path:"sampling/samplingList/manuscriptCreate",
            name:"扦样流程/扦样列表/被查库典列表/新建工作底稿",
            component:ManuscriptCreate
          },
          {
            path:"sampling/samplingList/manuscriptEdit",
            name:"扦样流程/扦样列表/被查库典列表/查看工作底稿",
            component:ManuscriptEdit
          },
          {
            path:"sampling/samplingList/safetyReportCreate",
            name:"扦样流程/扦样列表/被查库典列表/新建安全报告",
            component:SafetyReportCreate
          },
          {
            path:"sampling/samplingList/safetyReportEdit",
            name:"扦样流程/扦样列表/被查库典列表/查看安全报告",
            component:SafetyReportEdit
          }
      ]
    },
    
  ]
})
