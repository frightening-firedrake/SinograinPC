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
import SampleInList from '@/components/sampleManagement/sampleIn/SampleInList.vue'
import SampleInEdit from '@/components/sampleManagement/sampleIn/SampleInEdit.vue'
import SampleInCreate from '@/components/sampleManagement/sampleIn/SampleInCreate.vue'
import HandoverList from '@/components/sampleManagement/handover/HandoverList.vue'
import HandoverListCreate from '@/components/sampleManagement/handover/HandoverListCreate.vue'
import HandoverListCreateSelect from '@/components/sampleManagement/handover/HandoverListCreateSelect.vue'
import HandoverListView from '@/components/sampleManagement/handover/HandoverListView.vue'
import HandoverListEdit from '@/components/sampleManagement/handover/HandoverListEdit.vue'
import HandoverListEditSelect from '@/components/sampleManagement/handover/HandoverListEditSelect.vue'
import PackingList from '@/components/sampleDetection/packing/PackingList.vue'
import PackingView from '@/components/sampleDetection/packing/PackingView.vue'
import PackingPrint from '@/components/sampleDetection/packing/PackingPrint.vue'
import CheckList from '@/components/sampleDetection/check/CheckList.vue'
import CheckEdit from '@/components/sampleDetection/check/CheckListEdit.vue'






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
//    redirect: '/index',//暂时屏蔽掉了登录与首页直接列表页开始
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
            component:Home,
            redirect: 'sampling/libraryList',
          },
//        扦样流程
          {
            path:"sampling",
            name: '扦样流程',
            component:LibraryList,
            redirect: 'sampling/libraryList',
          },
          {
            path:"sampling/libraryList",
            name:"扦样流程/扦样列表",
            component:LibraryList
          },
          {
            path:"sampling/libraryList/samplingList",
            name:"扦样流程/扦样列表/被查库典列表",
            component:SamplingList
          },
		    	{
            path:"sampling/libraryList/samplingList/samplingListCreate",
            name:"扦样流程/扦样列表/被查库典列表/新建扦样",
            component:SamplingListCreate
          },
          {
            path:"sampling/libraryList/samplingList/samplingListEdit",
            name:"扦样流程/扦样列表/被查库典列表/查看扦样",
            component:SamplingListEdit
          },
          {
            path:"sampling/libraryList/samplingList/manuscriptCreate",
            name:"扦样流程/扦样列表/被查库典列表/新建工作底稿",
            component:ManuscriptCreate
          },
          {
            path:"sampling/libraryList/samplingList/manuscriptEdit",
            name:"扦样流程/扦样列表/被查库典列表/查看工作底稿",
            component:ManuscriptEdit
          },
          {
            path:"sampling/libraryList/samplingList/safetyReportCreate",
            name:"扦样流程/扦样列表/被查库典列表/新建安全报告",
            component:SafetyReportCreate
          },
          {
            path:"sampling/libraryList/samplingList/safetyReportEdit",
            name:"扦样流程/扦样列表/被查库典列表/查看安全报告",
            component:SafetyReportEdit
          },
//        样品管理
 					{
            path:"sampleManagement",
            name: '样品管理',
            component:SampleInList,
            redirect: 'sampleManagement/sampleIn',
          },
          {
            path:"sampleManagement/sampleIn",
            name:"样品管理/样品入库",
            component:SampleInList
          },
          {
            path:"sampleManagement/sampleIn/sampleInEdit",
            name:"样品管理/样品入库/查看样品",
            component:SampleInEdit
          },
          {
            path:"sampleManagement/sampleIn/sampleInCreate",
            name:"样品管理/样品入库/新建样品",
            component:SampleInCreate
          },
          
          {
            path:"sampleManagement/handover",
            name:"样品管理/样品领取交接单",
            component:HandoverList
          },
          {
            path:"sampleManagement/handover/handoverListCreate",
            name:"样品管理/样品领取交接单/新建样品领取交接单",
            component:HandoverListCreate
          },
          {
            path:"sampleManagement/handover/handoverListCreate/handoverListCreateSelect",
            name:"样品管理/样品领取交接单/新建样品领取交接单/选择样品编号",
            component:HandoverListCreateSelect
          },
          {
            path:"sampleManagement/handover/handoverListCreate/handoverListPrint",
            name:"样品管理/样品领取交接单/新建样品领取交接单/打印样品领取交接单",
            component:HandoverListView
          },
          {
            path:"sampleManagement/handover/handoverListView",
            name:"样品管理/样品领取交接单/查看样品领取交接单",
            component:HandoverListView
          },
          {
            path:"sampleManagement/handover/handoverListEdit/handoverListPrint",
            name:"样品管理/样品领取交接单/编辑样品领取交接单/打印样品领取交接单",
            component:HandoverListView
          },
          {
            path:"sampleManagement/handover/handoverListEdit",
            name:"样品管理/样品领取交接单/编辑样品领取交接单",
            component:HandoverListEdit
          },
          {
            path:"sampleManagement/handover/handoverListEdit/handoverListEditSelect",
            name:"样品管理/样品领取交接单/编辑样品领取交接单/选择样品编号",
            component:HandoverListEditSelect
          },
//         样品检测
 					{
            path:"sampleDetection",
            name: '样品检测',
            component:PackingList,
            redirect: 'sampleDetection/packingList',
          },
          {
            path:"sampleDetection/packingList",
            name:"样品检测/分装小样管理",
            component:PackingList
          },
          {
            path:"sampleDetection/packingList/packingView",
            name:"样品检测/分装小样管理/查看小样",
            component:PackingView
          },
          {
            path:"sampleDetection/packingList/packingPrint",
            name:"样品检测/分装小样管理/打印条码",
            component:PackingPrint
          },
          
          {
            path:"sampleDetection/checkList",
            name:"样品检测/样品检验单",
            component:CheckList
          },
          {
            path:"sampleDetection/checkList/checkEdit",
            name:"样品检测/样品检验单/样品检验单编辑",
            component:CheckEdit
          },
          {
            path:"sampleDetection/checkList/checkInput",
            name:"样品检测/样品检验单/样品检验单录入",
            component:CheckEdit
          },
          {
            path:"sampleDetection/checkList/checkView",
            name:"样品检测/样品检验单/样品检验单详情",
            component:CheckEdit
          },
      ]
    },
    
  ]
})
