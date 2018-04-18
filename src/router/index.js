import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import Layout from '@/components/common/layout/Layout.vue'
import Home from '@/components/home/Home.vue'
import ExaminationLibraryList from "@/components/sampling/examination/ExaminationLibraryList.vue"
import SampleRegListlc from "@/components/grainDepot/SampleRegListlc.vue"
import SampleReglc from "@/components/grainDepot/SampleReglc.vue"
import CreateSampleReglc from "@/components/grainDepot/CreateSampleReglc.vue"
import SampleRegList from "@/components/sampling/examination/SampleRegList.vue"
import SampleReg from "@/components/sampling/examination/SampleReg.vue"
import LibraryList from "@/components/sampling/list/LibraryList.vue"
import PLibraryList from "@/components/sampling/list/PLibraryList.vue"
import SRLibraryList from "@/components/sampling/list/library/SRLibraryList.vue"
import SafetyReportList from "@/components/sampling/list/safetyReport/SafetyReportList.vue"
import SafetyProblem from "@/components/sampling/list/safetyReport/SafetyProblem.vue"
import SampleShowList from "@/components/sampling/list/SampleShowList.vue"
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
import PackingTaskList from '@/components/sampleDetection/packing/PackingTaskList.vue'
import PackingList from '@/components/sampleDetection/packing/PackingList.vue'
import PackingView from '@/components/sampleDetection/packing/PackingView.vue'
import PackingPrint from '@/components/sampleDetection/packing/PackingPrint.vue'
import CheckList from '@/components/sampleDetection/check/CheckList.vue'
import CheckView from '@/components/sampleDetection/check/CheckListView.vue'
import CheckEdit from '@/components/sampleDetection/check/CheckListEdit.vue'
import CheckCreate from '@/components/sampleDetection/check/CheckListCreate.vue'
import TestReportMaker from '@/components/TestReport/TestReportMaker.vue'
import SampleSelect from '@/components/TestReport/SampleSelect.vue'
import TestReport from '@/components/TestReport/TestReport.vue'
import RoleList from '@/components/authorityManagement/role/RoleList.vue'
import RoleEdit from '@/components/authorityManagement/role/RoleEdit.vue'
import RoleAdd from '@/components/authorityManagement/role/RoleAdd.vue'
import RoleAut from '@/components/authorityManagement/role/RoleAut.vue'
import UserList from '@/components/authorityManagement/user/UserList.vue'
import UserEdit from '@/components/authorityManagement/user/UserEdit.vue'
import UserAdd from '@/components/authorityManagement/user/UserAdd.vue'
import UserAut from '@/components/authorityManagement/user/UserAut.vue'
import ResourcesEdit from '@/components/authorityManagement/resources/ResourcesEdit.vue'
import ResourcesAdd from '@/components/authorityManagement/resources/ResourcesAdd.vue'
import ResourcesList from '@/components/authorityManagement/resources/ResourcesList.vue'
import InformationAdd from '@/components/informationManagement/InformationAdd.vue'
import Informationpoint from '@/components/informationManagement/Informationpoint.vue'
import SampleLibraryList from '@/components/sampling/list/SampleLibraryList.vue'
import ExaminationLibrary from '@/components/sampling/list/ExaminationLibrary.vue'

import SuperviseList from '@/components/testReport/supervise/SuperviseList.vue'
import SuperviseShow from '@/components/testReport/supervise/SuperviseShow.vue'
import QualityAcceptance from '@/components/testReport/QualityAcceptance.vue'



Vue.use(Router)

const routes= [
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
//    redirect: '/index/grainDepot/createSampleReglc',
      children:[
          {
            path:"home",
            name: '首页',
            component:Home,
            redirect: 'grainDepot/createSampleReglc',
          },
//        粮库管理
		  {
            path:"grainDepot",
            name: '粮库管理',
            component:CreateSampleReglc,
            redirect: 'grainDepot/createSampleReglc',
          },
          {
            path:"grainDepot/createSampleReglc",
            name:"粮库管理/新建扦样登记表",
            component:CreateSampleReglc,
            meta: { needAuth: 'grainDepot' },
          },
//        {
//          path:"grainDepot/createSampleReglc/sampleReglc",
//          name:"粮库管理/新建扦样登记表/扦样登记表",
//          component:SampleReglc,
//        },
          {
            path:"grainDepot/sampleRegListlc",
            name:"粮库管理/扦样登记列表",
            component:SampleRegListlc,
          },
          {
            path:"grainDepot/sampleRegListlc/sampleReglc",
            name:"粮库管理/扦样登记列表/扦样登记表",
//          component:SampleReglc,
          },
          {
            path:"grainDepot/sampleRegListlc/sampleDraft",
            name:"粮库管理/扦样登记列表/扦样登记草稿",
            component:CreateSampleReglc,
          },
//        扦样流程
          {
            path:"sampling",
            name: '扦样流程',
            component:ExaminationLibraryList,
            redirect: 'sampling/examinationLibraryList',
          },
//        {
//          path:"sampling/examinationLibrary",
//          name:"扦样流程/审批扦样单位列表",
//          component:ExaminationLibrary
//        },
          {
            path:"sampling/examinationLibraryList",
            name:"扦样流程/审批扦样库点列表",
            component:ExaminationLibraryList,
          },
          {
            path:"sampling/examinationLibraryList/sampleRegList",
            name:"扦样流程/审批扦样库点列表/扦样登记列表",
            component:SampleRegList,
          },
          
          {
            path:"sampling/examinationLibraryList/sampleRegList/sampleReg",
            name:"扦样流程/审批扦样库点列表/扦样登记列表/扦样登记表",
            component:SampleReg,
          },
          {
            path:"sampling/sampleLibraryList",
            name:"扦样流程/扦样单位列表",
            component:SampleLibraryList,
          },       
          {
            path:"sampling/libraryList",
            name:"扦样流程/扦样库点列表",
            component:LibraryList,
          },
          {
            path:"sampling/libraryList/samplingList",
            name:"扦样流程/扦样库点列表/扦样登记列表",
            component:SamplingList,
          },
          
          {
            path:"sampling/libraryList/samplingList/sampleShowList",
            name:"扦样流程/扦样库点列表/扦样登记列表/被查库点列表",
            component:SampleShowList,
          },
		    	{
            path:"sampling/libraryList/samplingList/sampleShowList/samplingListCreate",
            name:"扦样流程/扦样库点列表/扦样登记列表/被查库点列表/新建扦样",
            component:SamplingListCreate,
          },
          {
            path:"sampling/libraryList/samplingList/sampleShowList/samplingListEdit",
            name:"扦样流程/扦样库点列表/扦样登记列表/被查库点列表/查看扦样",
            component:SamplingListEdit,
          },
          {
            path:"sampling/libraryList/samplingList/sampleShowList/manuscriptCreate",
            name:"扦样流程/扦样库点列表/扦样登记列表/被查库点列表/新建工作底稿",
            component:ManuscriptCreate,
          },
          {
            path:"sampling/libraryList/samplingList/sampleShowList/manuscriptEdit",
            name:"扦样流程/扦样库点列表/扦样登记列表/被查库点列表/查看工作底稿",
            component:ManuscriptEdit,
          },
          {
            path:"sampling/libraryList/samplingList/sampleShowList/safetyReportCreate",
            name:"扦样流程/扦样库点列表/扦样登记列表/被查库点列表/新建监督检查报告",
            component:SafetyReportCreate,
          },
          {
            path:"sampling/libraryList/samplingList/sampleShowList/safetyReportEdit",
            name:"扦样流程/扦样库点列表/扦样登记列表/被查库点列表/查看监督检查报告",
            component:SafetyReportEdit,
          },
          {
            path:"sampling/PLibraryList",
            name:"扦样流程/监督检查情况",
            component:PLibraryList,
          },
          {
            path:"sampling/SRLibraryList",
            name:"扦样流程/监督检查库点列表",
            component:SRLibraryList,
          },
          {
            path:"sampling/SRLibraryList/SafetyReportList",
            name:"扦样流程/监督检查库点列表/监督检查列表",
            component:SafetyReportList,
          },
          {
            path:"sampling/SRLibraryList/SafetyReportList/SafetyProblem",
            name:"扦样流程/监督检查库点列表/监督检查列表/监督检查详情",
            component:SafetyProblem,
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
            name:"样品管理/样品入库列表",
            component:SampleInList,
          },
          {
            path:"sampleManagement/sampleIn/sampleInEdit",
            name:"样品管理/样品入库列表/查看样品",
            component:SampleInEdit,
          },
//        {
//          path:"sampleManagement/sampleIn/sampleInCreate",
//          name:"样品管理/样品入库列表/新建样品",
//          component:SampleInCreate,
//        },
          
          {
            path:"sampleManagement/handover",
            name:"样品管理/样品领取交接单",
            component:HandoverList,
          },
          {
            path:"sampleManagement/handover/handoverListCreate",
            name:"样品管理/样品领取交接单/新建样品领取交接单",
            component:HandoverListCreate,
          },
          {
            path:"sampleManagement/handover/handoverListCreate/handoverListCreateSelect",
            name:"样品管理/样品领取交接单/新建样品领取交接单/选择样品编号",
            component:HandoverListCreateSelect,
          },
          {
            path:"sampleManagement/handover/handoverListCreate/handoverListPrint",
            name:"样品管理/样品领取交接单/新建样品领取交接单/打印样品领取交接单",
            component:HandoverListView,
          },
          {
            path:"sampleManagement/handover/handoverListView",
            name:"样品管理/样品领取交接单/查看样品领取交接单",
            component:HandoverListView,
          },
          {
            path:"sampleManagement/handover/handoverListEdit/handoverListPrint",
            name:"样品管理/样品领取交接单/编辑样品领取交接单/打印样品领取交接单",
            component:HandoverListView,
          },
          {
            path:"sampleManagement/handover/handoverListEdit",
            name:"样品管理/样品领取交接单/编辑样品领取交接单",
            component:HandoverListEdit,
          },
          {
            path:"sampleManagement/handover/handoverListEdit/handoverListEditSelect",
            name:"样品管理/样品领取交接单/编辑样品领取交接单/选择样品编号",
            component:HandoverListEditSelect,
          },
//         样品检测
 		  {
            path:"sampleDetection",
            name: '样品检测',
            component:PackingList,
            redirect: 'sampleDetection/packingTaskList',
          },
          {
            path:"sampleDetection/packingTaskList",
            name:"样品检测/分装任务列表",
            component:PackingTaskList,
          },
          {
            path:"sampleDetection/packingTaskList/packingList",
            name:"样品检测/分装任务列表/分装小样管理",
            component:PackingList,
          },
          {
            path:"sampleDetection/packingTaskList/packingList/packingView",
            name:"样品检测/分装任务列表/分装小样管理/查看小样",
            component:PackingView,
          },
          {
            path:"sampleDetection/packingTaskList/packingList/packingPrint",
            name:"样品检测/分装任务列表/分装小样管理/打印条码",
            component:PackingPrint,
          },
          
          {
            path:"sampleDetection/checkList",
            name:"样品检测/样品检验单",
            component:CheckList,
          },
          {
            path:"sampleDetection/checkList/checkEdit",
            name:"样品检测/样品检验单/编辑样品检验单",
            component:CheckEdit,
          },
          {
            path:"sampleDetection/checkList/checkView",
            name:"样品检测/样品检验单/查看样品检验单",
            component:CheckView,
          },
          {
            path:"sampleDetection/checkList/checkCreate",
            name:"样品检测/样品检验单/新建样品检验单",
            component:CheckCreate,
          },
//        样品检验报告TestReportManagement
		  {
            path:"TestReportManagement",
            name: '检测报表管理',
            component:TestReportMaker,
            redirect: 'TestReportManagement/TestReportMaker',
          },
          {
            path:"TestReportManagement/TestReportMaker",
            name:"检测报表管理/样品检测报表制作",
            component:TestReportMaker,
          },
          {
            path:"TestReportManagement/TestReportMaker/SampleSelect",
            name:"检测报表管理/样品检测报表制作/选取样品",
            component:SampleSelect,
          },
          {
            path:"TestReportManagement/TestReportMaker/TestReport",
            name:"检测报表管理/样品检测报表制作/样品检测报表详情",
            component:TestReport,
          },
          {
            path:"TestReportManagement/SuperviseList",
            name:"检测报表管理/监督检查报告",
            component:SuperviseList,
          },
          {
            path:"TestReportManagement/SuperviseList/SuperviseShow",
            name:"检测报表管理/监督检查报告/监督检查详情",
            component:SuperviseShow,
          },
          {
            path:"TestReportManagement/QualityAcceptance",
            name:"检测报表管理/质量验收报告",
            component:QualityAcceptance,
          },

//        权限管理AuthorityManagement
		  {
            path:"AuthorityManagement",
            name: '权限管理',
            component:RoleList,
            redirect: 'AuthorityManagement/RoleList',
          },
          {
            path:"AuthorityManagement/RoleList",
            name:"权限管理/角色管理",
            component:RoleList,
            meta: { needAuth: 'AuthorityManagement' },
          },
          {
            path:"AuthorityManagement/RoleList/RoleEdit",
            name:"权限管理/角色管理/编辑角色",
            component:RoleEdit,
          },
          {
            path:"AuthorityManagement/RoleList/RoleAdd",
            name:"权限管理/角色管理/新建角色",
            component:RoleAdd,
          },
          {
            path:"AuthorityManagement/RoleList/RoleAut",
            name:"权限管理/角色管理/角色授权",
            component:RoleAut,
          },        
          {
            path:"AuthorityManagement/UserList",
            name:"权限管理/用户管理",
            component:UserList,
          },
          {
            path:"AuthorityManagement/UserList/UserEdit",
            name:"权限管理/用户管理/编辑用户",
            component:UserEdit,
          },
          {
            path:"AuthorityManagement/UserList/UserAdd",
            name:"权限管理/用户管理/新建用户",
            component:UserAdd,
          },
          {
            path:"AuthorityManagement/UserList/UserAut",
            name:"权限管理/用户管理/用户授权",
            component:UserAut,
          },
           {
            path:"AuthorityManagement/ResourcesList",
            name:"权限管理/资源管理",
            component:ResourcesList,
          },
          {
            path:"AuthorityManagement/ResourcesList/ResourcesEdit",
            name:"权限管理/资源管理/编辑资源",
            component:ResourcesEdit,
          },
          {
            path:"AuthorityManagement/ResourcesList/ResourcesAdd",
            name:"权限管理/资源管理/新建资源",
            component:ResourcesAdd,
          },
//     		信息管理InformationManagement
		  {
            path:"InformationManagement",
            name: '信息管理',
            component:InformationAdd,
            redirect: 'InformationManagement/InformationAdd',
          },
          {
            path:"InformationManagement/InformationAdd",
            name:"信息管理/添加直属库",
            component:InformationAdd,
            meta: { needAuth: 'InformationManagement' },
//          beforeEnter: (to, from, next) => {
//
//		    }
          },
           {
            path:"InformationManagement/Informationpoint",
            name:"信息管理/添加库点",
            component:Informationpoint,
           
//          beforeEnter: (to, from, next) => {
//
//		    }
          },

      ]
    },
    
  ];

const router = new Router({routes})
//通过全局导航守卫检查权限？
router.beforeEach((to, from, next) => {
	var userAuth=router.app.$store.getters.userAuth
	

//	验证登录状态
 	if (!userAuth&&to.path!=='/login') {
		console.log('没登陆')
	    next({
	      path: '/login',
	      //query: { redirect: to.fullPath }// 考虑登录成功之后可以根据query中的内容跳转回原来的路由(页面)
	    })
	}else if (userAuth&&to.path=='/index') {
//		验证用户权限制定不同首页地址重定向
		userAuth=userAuth.split(',');
	  	if (userAuth.includes('grainDepot')) {

	    	next({path: '/index/grainDepot'})	  	
	  	}else{	  		
	  		next({path: '/index/sampling'})	  	
	  	}
	}else if (to.matched.some(record => record.meta.needAuth)) {
//		验证用户权限
		userAuth=userAuth.split(',');
	  	if (!userAuth.includes(to.meta.needAuth)) {
	  		console.log('没权限')
	    	next(false)	  	
	  	}else{	  		
	  		next()	  	
	  	}
	} else {
	    next()
	}
})
export default router ;
