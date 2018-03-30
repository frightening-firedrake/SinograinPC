<template>
	<!--<el-menu default-active="/index/sampling/libraryList" class="el-menu-vertical-demo" :router=true @open="handleOpen" @select="handleSelect" @close="handleClose" :collapse="this.isCollapse" :background-color="backgroundColor" :unique-opened=true>-->
	<el-menu :default-active="activePath" class="el-menu-vertical-demo" :router=true @open="handleOpen" @select="handleSelect" @close="handleClose" :collapse="this.isCollapse" :background-color="backgroundColor">
		<!--用户信息-->
		<div class="user">
			<div class="photo">
				<img :src="user.avater" alt="">
			</div>
			<div class="userinfo">
				<h3>扦样员
					<span>({{userName?userName:"未登录"}})</span>
				</h3>
				<p>
					<template v-if="userName">
						<span class="circle" style="background-color:#029441;"></span>
						<span>在线</span>
					</template>
					<template v-else>
						<span class="circle" style="background-color:red;"></span>
						<span>离线</span>
					</template>
				</p>
			</div>
		</div>
		<!--导航-->
		<!--  <div style="min-height:4.5rem;">-->
		<template v-for="item in navlist" v-if="item.pid==0">
			<el-submenu :index="item.lid.toString()">
			<!--<el-submenu :index="item.lid.toString()" key="item.lid">-->
				<template slot="title">
					<div class="rightborder"></div>
					<div class="rightarrow"></div>
					<i class="iconfont firstlevel" :class="item.icon"></i>
					
					<el-badge slot="title" v-if="item.badge" :value="item.badge" class="navbadge">						
						<span>{{item.title}}</span>
					</el-badge>
					<span v-else slot="title">{{item.title}}</span>
				</template>

				<template v-if="item.level==3">
					<template v-for="item2 in navlist" v-if="item2.pid==item.lid" >
						<!--<el-submenu :index="item2.lid.toString()" key="item2.lid">-->
						<el-submenu :index="item2.lid.toString()">
							<template slot="title">
								<i class="iconfont secondlevel" :class="item2.icon"></i>
								<!--<span slot="title">{{item2.title}}</span>-->
								<el-badge slot="title" v-if="item2.badge" :value="item2.badge" class="navbadge">						
									<span>{{item2.title}}</span>
								</el-badge>
								<span v-else slot="title">{{item2.title}}</span>
							</template>

							<template v-for="item3 in navlist" v-if="item3.pid==item2.lid">
								<el-menu-item :index="item3.linkto">
								<!--<el-menu-item :index="item3.linkto" key="item3.lid">-->
									<div class="leftline"></div>
									<i class="iconfont thirdlevel" :class="item3.icon"></i>
									<!--<span>{{item3.title}}</span>-->
									<el-badge slot="title" v-if="item3.badge" :value="item3.badge" class="navbadge">						
										<span>{{item3.title}}</span>
									</el-badge>
									<span v-else slot="title">{{item3.title}}</span>
								</el-menu-item>
							</template>

						</el-submenu>

					</template>
				</template>

				<template v-if="item.level==2">
					<template v-for="item4 in navlist" v-if="item4.pid==item.lid">
						<el-menu-item :index="item4.linkto">
						<!--<el-menu-item :index="item4.linkto" key="item4.lid">-->
							<i class="iconfont secondlevel" :class="item4.icon"></i>
							<!--<span>{{item4.title}}</span>-->
							<el-badge slot="title" v-if="item4.badge" :value="item4.badge" class="navbadge">						
								<span>{{item4.title}}</span>
							</el-badge>
							<span v-else slot="title">{{item4.title}}</span>
						</el-menu-item>
					</template>

				</template>

			</el-submenu>
		</template>

		

	</el-menu>
</template>
<script>
require("../../../assets/style/common/Sidebar.css");
//import '@/assets/style/index/index.scss';
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
	components: {
	    
	},
	computed:{
		...mapState(["isCollapse"]),
		...mapGetters(["modal_id","libraryId","libraryName","userName"]),
		activePath(){

			var path=this.$route.path.split('/')
			var zpath=path[0]+'/'+path[1]+'/'+path[2]+'/'+path[3]
			return zpath;
		}
  	},
	mounted(){

		
	},
	data() {
		return {
//			isCollapse: false,
			backgroundColor: '#d8e5e1',
			user: {
				name: '12345号',
				avater:'static/images/test/photo_01.png',
				status: 1
			},
			navlist: [
				{
					icon: 'icon-wheat__easyic',
					title: '粮库管理',
					linkto: '',
					level: 2,
					pid: 0,
					lid: 12
				},

				{
					icon: 'icon-xinjian',
					title: '新建扦样登记表',
					linkto: '/index/grainDepot/createSampleReglc',
					level: 2,
					pid: 12,
					lid: 13
				},
				{
					icon: 'icon-shenqingshenpi',
					title: '扦样登记列表',
					linkto: '/index/grainDepot/sampleRegListlc',
					level: 2,
					pid: 12,
					lid: 14
				},
				{
					icon: 'icon-liuchengdingyi',
					title: '扦样流程',
					linkto: '',
					level: 2,
					pid: 0,
					lid: 1,
//					提示新信息
//					badge:8,
				},
				{
					icon: 'icon-xinshenqing',
					title: '审批扦样列表',
					linkto: '/index/sampling/examinationLibraryList',
					level: 2,
					pid: 1,
					lid: 2,
//					提示新信息
//					badge:8,
				},
				{
					icon: 'icon-iconfontcolor69',
					title: '扦样库点列表',
					linkto: '/index/sampling/libraryList',
					level: 2,
					pid: 1,
					lid: 3
				},
//				{
//					icon: 'icon-gongzuo2',
//					title: '工作底稿',
//					linkto: '',
//					level: 2,
//					pid: 1,
//					lid: 4
//				},
//				{
//					icon: 'icon-anquanbaogao',
//					title: '安全报告',
//					linkto: '',
//					level: 2,
//					pid: 1,
//					lid: 5
//				},
				{
					icon:'icon-anquanbaogao',
					title: '监督检查情况',
					linkto: '/index/sampling/SRLibraryList',
					level: 2,
					pid: 1,
					lid: 4
				},
				{
					icon: 'icon-cangkuguanli-xian',
					title: '样品管理',
					linkto: '',
					level: 2,
					pid: 0,
					lid: 6
				},
				{
					icon: 'icon-ruku',
					title: '样品入库列表',
					linkto: '/index/sampleManagement/sampleIn',
					level: 2,
					pid: 6,
					lid: 7
				},
				{
					icon: 'icon-chuku',
					title: '样品领取交接单',
					linkto: '/index/sampleManagement/handover',
					level: 2,
					pid: 6,
					lid: 8
				},
				{
					icon: 'icon-shiyan',
					title: '样品检测',
					linkto: '',
					level: 2,
					pid: 0,
					lid: 9
				},

				{
					icon: 'icon-subcontractor',
					title: '分装任务列表',
					linkto: '/index/sampleDetection/packingTaskList',
					level: 2,
					pid: 9,
					lid: 10
				},
				{
					icon: 'icon-jianyandan',
					title: '样品检验单',
					linkto: '/index/sampleDetection/checkList',
					level: 2,
					pid: 9,
					lid: 11
				},				
				{
					icon: 'icon-baobiaoguanli',
					title: '检测报表管理',
					linkto: '',
					level: 2,
					pid: 0,
					lid: 15
				},
				{
					icon: 'icon-baobiao',
					title: '样品检测报表制作',
					linkto: '/index/TestReportManagement/TestReportMaker',
					level: 2,
					pid: 15,
					lid: 16
				},
				{
					icon: 'icon-jiandukaohe',
					title: '监督检查报告',
					linkto: '/index/TestReportManagement/SuperviseList',
					level: 2,
					pid: 15,
					lid: 17
				},
				{
					icon: 'icon-baobiaoguanli',
					title: '质量验收报告',
					linkto: '/index/TestReportManagement/QualityAcceptance',
					level: 2,
					pid: 15,
					lid: 24
				},
				{
					icon: 'icon-quanxianguanli',
					title: '权限管理',
					linkto: '',
					level: 2,
					pid: 0,
					lid: 18
				},
				{
					icon: 'icon-jiaoseguanli',
					title: '角色管理',
					linkto: '/index/AuthorityManagement/RoleList',
					level: 2,
					pid: 18,
					lid: 19
				},
				{
					icon: 'icon-yonghuguanli',
					title: '用户管理',
					linkto: '/index/AuthorityManagement/UserList',
					level: 2,
					pid: 18,
					lid: 20
				},
				{
					icon: 'icon-ziyuanguanli',
					title: '资源管理',
					linkto: '/index/AuthorityManagement/ResourcesList',
					level: 2,
					pid: 18,
					lid: 21
				},
				{
					icon: 'icon-pingtaixinxiguanli',
					linkto: '',
					title: '信息管理',
					level: 2,
					pid: 0,
					lid: 22
				},
				{
					icon: 'icon-xinjian2',
					linkto: '/index/InformationManagement/InformationAdd',
					title: '添加信息',
					level: 2,
					pid: 22,
					lid: 23
				},

			]


		};
	},
	methods: {
		...mapMutations(['slideToggle','route_click']),
  		...mapActions(['addAction']),
		handleOpen(key, keyPath) {
			// console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			// console.log(key, keyPath);
		},
		handleSelect(key, keyPath){
//			console.log(key, keyPath);
			this.route_click()
		},
		tostr(num) {
			return num.toString()
		},
		show_messions(){
			this.mission_show=true;
		},
		hidden_messions(){
			this.mission_show=false;
		},
		slide(){
			this.mission_show=false;
			setTimeout(()=>{
				this.slideToggle();				
			},100)
		}
	},

}
</script>
