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
import TemporaryRegistration from '@/components/sampleManagement/sampleIn/temporaryRegistration/TemporaryRegistration.vue'
import TemporaryRegistrationCreate from '@/components/sampleManagement/sampleIn/temporaryRegistration/TemporaryRegistrationCreate.vue'
import TemporaryRegistrationView from '@/components/sampleManagement/sampleIn/temporaryRegistration/TemporaryRegistrationView.vue'
import TemporarySampleSelect from '@/components/sampleManagement/sampleIn/temporaryRegistration/TemporarySampleSelect.vue'
import warehouseManagement from '@/components/sampleManagement/sampleIn/warehouseManagement/warehouseManagement.vue'
import sampleRoom from '@/components/sampleManagement/sampleIn/warehouseManagement/sampleRoom.vue'
import sampleRegistration from '@/components/sampleManagement/sampleIn/sampleRegistration/sampleRegistration.vue'
import registrationSelect from '@/components/sampleManagement/sampleIn/sampleRegistration/registrationSelect.vue'
import SampleInEdit from '@/components/sampleManagement/sampleIn/SampleInEdit.vue'
import SampleInView from '@/components/sampleManagement/sampleIn/SampleInView.vue'
import CreateSampleInNum from '@/components/sampleManagement/sampleIn/CreateSampleInNum.vue'
import SampleInCreate from '@/components/sampleManagement/sampleIn/SampleInCreate.vue'
import HandoverList from '@/components/sampleManagement/handover/HandoverList.vue'
import HandoverReturn from '@/components/sampleManagement/handover/HandoverReturn.vue'
import HandoverShow from '@/components/sampleManagement/handover/HandoverShow.vue'
import HandoverListCreate from '@/components/sampleManagement/handover/HandoverListCreate.vue'
import HandoverListCreateSelect from '@/components/sampleManagement/handover/HandoverListCreateSelect.vue'
import HandoverListView from '@/components/sampleManagement/handover/HandoverListView.vue'
import HandoverListEdit from '@/components/sampleManagement/handover/HandoverListEdit.vue'
import HandoverListEditSelect from '@/components/sampleManagement/handover/HandoverListEditSelect.vue'
import PackingTaskList from '@/components/sampleDetection/packing/PackingTaskList.vue'
import PackingList from '@/components/sampleDetection/packing/PackingList.vue'
import PackingView from '@/components/sampleDetection/packing/PackingView.vue'
import PackingPrint from '@/components/sampleDetection/packing/PackingPrint.vue'
import PackingSelect from '@/components/sampleDetection/packing/PackingSelect.vue'
import CheckList from '@/components/sampleDetection/check/CheckList.vue'
import confirmationList from '@/components/sampleDetection/confirmation/ConfirmationList.vue'
import confirmationsdetails from '@/components/sampleDetection/confirmation/Comfirmationdetails.vue'
import comfirmationentry from "@/components/sampleDetection/confirmation/comfirmationentry.vue"
import addsample from "@/components/sampleDetection/confirmation/addSample.vue"

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
import ContainerAdd from '@/components/informationManagement/ContainerAdd.vue'
import PlaceAdd from '@/components/informationManagement/PlaceAdd.vue'
import SampleRoomAdd from '@/components/informationManagement/SampleRoomAdd.vue'
import SampleLibraryList from '@/components/sampling/list/SampleLibraryList.vue'
import ExaminationLibrary from '@/components/sampling/list/ExaminationLibrary.vue'
import SuperviseList from '@/components/testReport/supervise/SuperviseList.vue'
import SuperviseShow from '@/components/testReport/supervise/SuperviseShow.vue'
import QualityAcceptance from '@/components/testReport/QualityAcceptance.vue'
import error403 from '@/components/error/error403.vue'



Vue.use(Router)

const routes = [{
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
        redirect: '/index/home',
        children: [{
                path: "home",
                name: '首页',
                component: Home,
            },
            {
                path: "error403",
                name: '没有权限',
                component: error403,
            },
            //        粮库管理
            {
                path: "grainDepot",
                name: '粮库管理',
                component: CreateSampleReglc,
                redirect: 'grainDepot/createSampleReglc',
            },
            {
                //          path:"grainDepot/createSampleReglc",
                //          name:"粮库管理/新建扦样登记表",
                path: "grainDepot/sampleRegListlc/createSampleReglc",
                name: "粮库管理/扦样登记列表/新建扦样登记表",
                component: CreateSampleReglc,
                meta: { needAuth: '新建扦样登记表' },
            },
            //        {
            //          path:"grainDepot/createSampleReglc/sampleReglc",
            //          name:"粮库管理/新建扦样登记表/扦样登记表",
            //          component:SampleReglc,
            //        },
            {
                path: "grainDepot/sampleRegListlc",
                name: "粮库管理/扦样登记列表",
                component: SampleRegListlc,
                meta: { needAuth: '扦样登记列表' },
            },
            {
                path: "grainDepot/sampleRegListlc/sampleReglc",
                name: "粮库管理/扦样登记列表/扦样登记表",
                component: SampleReglc,
            },
            {
                path: "grainDepot/sampleRegListlc/sampleDraft",
                name: "粮库管理/扦样登记列表/扦样登记草稿",
                component: CreateSampleReglc,
            },
            //        扦样流程
            {
                path: "sampling",
                name: '扦样流程',
                component: ExaminationLibraryList,
                redirect: 'sampling/examinationLibraryList',
            },
            //        {
            //          path:"sampling/examinationLibrary",
            //          name:"扦样流程/审批扦样单位列表",
            //          component:ExaminationLibrary
            //        },
            {
                path: "sampling/examinationLibraryList",
                name: "扦样流程/审批扦样库点列表",
                component: ExaminationLibraryList,
                meta: { needAuth: '审批扦样列表' },
            },
            {
                path: "sampling/examinationLibraryList/sampleRegList",
                name: "扦样流程/审批扦样库点列表/扦样登记列表",
                component: SampleRegList,
            },

            {
                path: "sampling/examinationLibraryList/sampleRegList/sampleReg",
                name: "扦样流程/审批扦样库点列表/扦样登记列表/扦样登记表",
                component: SampleReg,
            },
            {
                path: "sampling/sampleLibraryList",
                name: "扦样流程/扦样单位列表",
                component: SampleLibraryList,
            },
            {
                path: "sampling/libraryList",
                name: "扦样流程/扦样库点列表",
                component: LibraryList,
                meta: { needAuth: '扦样库点列表' },
            },
            {
                path: "sampling/libraryList/samplingList",
                name: "扦样流程/扦样库点列表/扦样登记列表",
                component: SamplingList,
            },

            {
                path: "sampling/libraryList/samplingList/sampleShowList",
                name: "扦样流程/扦样库点列表/扦样登记列表/被查库点列表",
                component: SampleShowList,
            },
            {
                path: "sampling/libraryList/samplingList/sampleShowList/samplingListCreate",
                name: "扦样流程/扦样库点列表/扦样登记列表/被查库点列表/新建扦样",
                component: SamplingListCreate,
            },
            {
                path: "sampling/libraryList/samplingList/sampleShowList/samplingListEdit",
                name: "扦样流程/扦样库点列表/扦样登记列表/被查库点列表/查看扦样",
                component: SamplingListEdit,
            },
            {
                path: "sampling/libraryList/samplingList/sampleShowList/manuscriptCreate",
                name: "扦样流程/扦样库点列表/扦样登记列表/被查库点列表/新建工作底稿",
                component: ManuscriptCreate,
            },
            {
                path: "sampling/libraryList/samplingList/sampleShowList/manuscriptEdit",
                name: "扦样流程/扦样库点列表/扦样登记列表/被查库点列表/查看工作底稿",
                component: ManuscriptEdit,
            },
            {
                path: "sampling/libraryList/samplingList/sampleShowList/safetyReportCreate",
                name: "扦样流程/扦样库点列表/扦样登记列表/被查库点列表/新建监督检查报告",
                component: SafetyReportCreate,
            },
            {
                path: "sampling/libraryList/samplingList/sampleShowList/safetyReportEdit",
                name: "扦样流程/扦样库点列表/扦样登记列表/被查库点列表/查看监督检查报告",
                component: SafetyReportEdit,
            },
            {
                path: "sampling/PLibraryList",
                name: "扦样流程/监督检查情况",
                component: PLibraryList,
                meta: { needAuth: '监督检查情况' },
            },
            {
                path: "sampling/SRLibraryList",
                name: "扦样流程/监督检查库点列表",
                component: SRLibraryList,
                meta: { needAuth: '监督检查情况' },
            },
            {
                path: "sampling/SRLibraryList/SafetyReportList",
                name: "扦样流程/监督检查库点列表/监督检查列表",
                component: SafetyReportList,
            },
            {
                path: "sampling/SRLibraryList/SafetyReportList/SafetyProblem",
                name: "扦样流程/监督检查库点列表/监督检查列表/监督检查详情",
                component: SafetyProblem,
            },
            //        样品管理
            {
                path: "sampleManagement",
                name: '样品管理',
                component: SampleInList,
                redirect: 'sampleManagement/sampleIn',
            },
            {
                path: "sampleManagement/sampleIn",
                name: "样品管理/样品储存列表",
                component: SampleInList,
                meta: { needAuth: '样品储存列表' },
            },
            {
                path: "sampleManagement/sampleIn/createSampleInNum",
                name: "样品管理/样品储存列表/创建检验编号",
                component: CreateSampleInNum,
            },
            {
                path: "sampleManagement/sampleIn/sampleInEdit",
                name: "样品管理/样品储存列表/查看样品",
                component: SampleInEdit,
            },

            {
                path: "sampleManagement/temporaryRegistration",
                name: "样品管理/送样检验登记表",
                component: TemporaryRegistration,
                //          meta: { needAuth: '送样检验登记表' },
            },
            {
                path: "sampleManagement/temporaryRegistration/temporaryRegistrationCreate",
                name: "样品管理/送样检验登记表/新建送样检验登记表",
                component: TemporaryRegistrationCreate,
                //          meta: { needAuth: '送样检验登记表' },
            },
            {
                path: "sampleManagement/temporaryRegistration/temporaryRegistrationCreate/temporarySampleSelect",
                name: "样品管理/送样检验登记表/新建送样检验登记表/添加送样样品信息",
                component: TemporarySampleSelect,
                //          meta: { needAuth: '送样检验登记表' },
            },
            {
                path: "sampleManagement/temporaryRegistration/temporaryRegistrationView",
                name: "样品管理/送样检验登记表/查看送样检验登记表",
                component: TemporaryRegistrationView,
                //          meta: { needAuth: '送样检验登记表' },
            },
            //        {
            //          path:"sampleManagement/sampleIn/sampleInCreate",
            //          name:"样品管理/样品储存列表/新建样品",
            //          component:SampleInCreate,
            //        },
            {
                path: "sampleManagement/warehouseManagement",
                name: "样品管理/样品储存管理",
                component: warehouseManagement,
                meta: { needAuth: '样品储存管理' },
            },
            {
                path: "sampleManagement/warehouseManagement/sampleRoom",
                name: "样品管理/样品储存管理/样品室",
                component: sampleRoom,
                meta: { needAuth: '样品储存管理' },
            },
            {
                path: "sampleManagement/warehouseManagement/sampleRoom/SampleInView",
                name: "样品管理/样品储存管理/样品室/查看样品",
                component: SampleInView,
                meta: { needAuth: '样品储存管理' },
            },
            {
                path: "sampleManagement/sampleRegistration",
                name: "样品管理/样品登记薄",
                component: sampleRegistration,
                //          meta: { needAuth: '样品登记薄' },
            },
            {
                path: "sampleManagement/sampleRegistration/registrationSelect",
                name: "样品管理/样品登记薄制作/检验样品",
                component: registrationSelect,
                //          meta: { needAuth: '样品储存列表' },
            },

            {
                path: "sampleManagement/handover",
                name: "样品管理/样品领取交接单",
                component: HandoverList,
                meta: { needAuth: '样品领取交接单' },
            },
            {
                path: "sampleManagement/handover/handoverListCreate",
                name: "样品管理/样品领取交接单/新建样品领取交接单",
                component: HandoverListCreate,
            },
            {
                path: "sampleManagement/handover/handoverListCreate/handoverListCreateSelect",
                name: "样品管理/样品领取交接单/新建样品领取交接单/选择样品编号",
                component: HandoverListCreateSelect,
            },
            {
                path: "sampleManagement/handover/handoverListCreate/handoverListPrint",
                name: "样品管理/样品领取交接单/新建样品领取交接单/打印样品领取交接单",
                component: HandoverListView,
            },
            {
                path: "sampleManagement/handover/handoverListView",
                name: "样品管理/样品领取交接单/查看样品领取交接单",
                component: HandoverListView,
            },
            {
                path: "sampleManagement/handover/handoverListEdit/handoverListPrint",
                name: "样品管理/样品领取交接单/编辑样品领取交接单/打印样品领取交接单",
                component: HandoverListView,
            },
            {
                path: "sampleManagement/handover/handoverListEdit",
                name: "样品管理/样品领取交接单/编辑样品领取交接单",
                component: HandoverListEdit,
            },
            {
                path: "sampleManagement/handover/handoverListEdit/handoverListEditSelect",
                name: "样品管理/样品领取交接单/编辑样品领取交接单/选择样品编号",
                component: HandoverListEditSelect,
            },
            {
                path: "sampleManagement/handoverReturn",
                name: "样品管理/归还样品及交接单",
                component: HandoverReturn,
                meta: { needAuth: '样品领取交接单' },
            },
            {
                path: "sampleManagement/handoverReturn/handoverShow",
                name: "样品管理/归还样品及交接单/交接单样品详情",
                component: HandoverShow,
            },
            //         样品检测
            {
                path: "sampleDetection",
                name: '样品检测',
                component: PackingList,
                redirect: 'sampleDetection/packingTaskList',
            },
            {
                path: "sampleDetection/packingTaskList",
                //          name:"样品检测/分装任务列表",
                name: "样品检测/任务列表",
                component: PackingTaskList,
                meta: { needAuth: '分装任务列表' },
            },
            {
                path: "sampleDetection/packingTaskList/packingList",
                //          name:"样品检测/分装任务列表/分装小样管理",
                name: "样品检测/任务列表/任务样品管理",
                component: PackingList,
            },
            {
                path: "sampleDetection/packingTaskList/packingList/packingSelect",
                //          name:"样品检测/分装任务列表/分装小样管理",
                name: "样品检测/任务列表/任务样品管理/添加检验样品",
                component: PackingSelect,
            },
            {
                path: "sampleDetection/packingTaskList/packingList/packingView",
                name: "样品检测/分装任务列表/分装小样管理/查看小样",
                component: PackingView,
            },
            {
                path: "sampleDetection/packingTaskList/packingList/packingPrint",
                name: "样品检测/分装任务列表/分装小样管理/打印条码",
                component: PackingPrint,
            },

            {
                path: "sampleDetection/confirmationList",
                name: "样品检测/样品确认单列表",
                component: confirmationList,
                //          meta: { needAuth: '样品确认单列表' },
            },
            {
                path: "sampleDetection/confirmationList/confirmationdetails",
                name: "样品检测/样品确认单列表/样品确认单详情页",
                component: confirmationsdetails,
                // meta:{needAuth:'样品确认单详情页'}
            },
            {
                path: "sampleDetection/confirmationList/confirmationdetails/comfirmationentry",
                name: "样品检测/样品确认单列表/录入样品检测数据",
                component: comfirmationentry,
            },
            {
                path: "sampleDetection/confirmationList/confirmationdetails/comfirmationentry/addsample",
                name: "样品检测/样品确认单列表/录入样品检测数据/添加检验编号",
                component: addsample,
            },
            {
                path: "sampleDetection/checkList",
                name: "样品检测/样品检验单",
                component: CheckList,
                meta: { needAuth: '样品检测单' },
            },
            {
                path: "sampleDetection/checkList/checkEdit",
                name: "样品检测/样品检验单/编辑样品检验单",
                component: CheckEdit,
            },
            {
                path: "sampleDetection/checkList/checkView",
                name: "样品检测/样品检验单/查看样品检验单",
                component: CheckView,
            },
            {
                path: "sampleDetection/checkList/checkCreate",
                name: "样品检测/样品检验单/新建样品检验单",
                component: CheckCreate,
            },
            //        样品检验报告TestReportManagement
            {
                path: "TestReportManagement",
                name: '检测报表管理',
                component: TestReportMaker,
                redirect: 'TestReportManagement/TestReportMaker',
            },
            {
                path: "TestReportManagement/TestReportMaker",
                name: "检测报表管理/样品检测报表制作",
                component: TestReportMaker,
                meta: { needAuth: '样品检测报表制作' },
            },
            {
                path: "TestReportManagement/TestReportMaker/SampleSelect",
                name: "检测报表管理/样品检测报表制作/选取样品",
                component: SampleSelect,
            },
            {
                path: "TestReportManagement/TestReportMaker/TestReport",
                name: "检测报表管理/样品检测报表制作/样品检测报表详情",
                component: TestReport,
            },
            {
                path: "TestReportManagement/SuperviseList",
                name: "检测报表管理/监督检查报告",
                component: SuperviseList,
                meta: { needAuth: '监督检查报告' },
            },
            {
                path: "TestReportManagement/SuperviseList/SuperviseShow",
                name: "检测报表管理/监督检查报告/监督检查详情",
                component: SuperviseShow,
            },
            {
                path: "TestReportManagement/QualityAcceptance",
                name: "检测报表管理/质量验收报告",
                component: QualityAcceptance,
                meta: { needAuth: '质量验收报告' },
            },

            //        权限管理AuthorityManagement
            {
                path: "AuthorityManagement",
                name: '权限管理',
                component: RoleList,
                redirect: 'AuthorityManagement/RoleList',
            },
            {
                path: "AuthorityManagement/RoleList",
                name: "权限管理/角色管理",
                component: RoleList,
                meta: { needAuth: '角色管理' },
            },
            {
                path: "AuthorityManagement/RoleList/RoleEdit",
                name: "权限管理/角色管理/编辑角色",
                component: RoleEdit,
            },
            {
                path: "AuthorityManagement/RoleList/RoleAdd",
                name: "权限管理/角色管理/新建角色",
                component: RoleAdd,
            },
            {
                path: "AuthorityManagement/RoleList/RoleAut",
                name: "权限管理/角色管理/角色授权",
                component: RoleAut,
            },
            {
                path: "AuthorityManagement/UserList",
                name: "权限管理/用户管理",
                component: UserList,
                meta: { needAuth: '用户管理' },
            },
            {
                path: "AuthorityManagement/UserList/UserEdit",
                name: "权限管理/用户管理/编辑用户",
                component: UserEdit,
            },
            {
                path: "AuthorityManagement/UserList/UserAdd",
                name: "权限管理/用户管理/新建用户",
                component: UserAdd,
            },
            {
                path: "AuthorityManagement/UserList/UserAut",
                name: "权限管理/用户管理/用户授权",
                component: UserAut,
            },
            {
                path: "AuthorityManagement/ResourcesList",
                name: "权限管理/资源管理",
                component: ResourcesList,
                meta: { needAuth: '资源管理' },
            },
            {
                path: "AuthorityManagement/ResourcesList/ResourcesEdit",
                name: "权限管理/资源管理/编辑资源",
                component: ResourcesEdit,
            },
            {
                path: "AuthorityManagement/ResourcesList/ResourcesAdd",
                name: "权限管理/资源管理/新建资源",
                component: ResourcesAdd,
            },
            //     		信息管理InformationManagement
            {
                path: "InformationManagement",
                name: '信息管理',
                component: InformationAdd,
                redirect: 'InformationManagement/InformationAdd',
            },
            {
                path: "InformationManagement/InformationAdd",
                name: "信息管理/添加直属库",
                component: InformationAdd,
                meta: { needAuth: '添加直属库' },
                //          beforeEnter: (to, from, next) => {
                //
                //		    }
            },
            {
                path: "InformationManagement/Informationpoint",
                name: "信息管理/添加库点",
                meta: { needAuth: '添加库点' },
                component: Informationpoint,
                //          beforeEnter: (to, from, next) => {
                //
                //		    }
            },
            {
                path: "InformationManagement/SampleRoomAdd",
                name: "信息管理/添加样品室",
                component: SampleRoomAdd,
                //          meta: { needAuth: '添加样品室' },
            },
            {
                path: "InformationManagement/ContainerAdd",
                name: "信息管理/添加柜子货架",
                //          meta: { needAuth: '添加柜子货架' },
                component: ContainerAdd,
            },
            //        {
            //          path:"InformationManagement/PlaceAdd",
            //          name:"信息管理/添加货位数",
            ////          meta: { needAuth: '添加货位数' },
            //          component:PlaceAdd,         
            //        },

        ]
    },

];

const router = new Router({ routes })
    //通过全局导航守卫检查权限？
router.beforeEach((to, from, next) => {
    var userAuth = router.app.$store.getters.userAuth


    //	验证登录状态
    if (!userAuth && to.path !== '/login') {
        console.log('没登陆')
        next({
            path: '/login',
            //query: { redirect: to.fullPath }// 考虑登录成功之后可以根据query中的内容跳转回原来的路由(页面)
        })
    } else if (userAuth && to.path == '/index') {
        //		验证用户权限制定不同首页地址重定向
        //		userAuth=userAuth.split(',');
        //	  	if (userAuth.includes('新建扦样登记表')) {
        //
        //	    	next({path: '/index/grainDepot'})	  	
        //	  	}else{	  		
        //	  		next({path: '/index/sampling'})	  	
        //	  	}
        next()
    } else if (to.matched.some(record => record.meta.needAuth)) {
        //		验证用户权限
        //		console.log('needAuth')
        userAuth = userAuth.split(',');
        if (!userAuth.includes(to.meta.needAuth)) {
            console.log('没权限')
            next({
                path: '/index/error403'
            })
        } else {
            next()
        }
    } else {
        //		console.log('最终')
        next()
    }
})
export default router;