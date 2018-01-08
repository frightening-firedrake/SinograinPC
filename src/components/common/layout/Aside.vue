<template>
	<el-menu default-active="/index/sampling/libraryList" class="el-menu-vertical-demo" :router=true @open="handleOpen" @select="handleSelect" @close="handleClose" :collapse="this.isCollapse" :background-color="backgroundColor" :unique-opened=true>
		<!--用户信息-->
		<div class="user">
			<div class="photo">
				<img :src="user.avater" alt="">
			</div>
			<div class="userinfo">
				<h3>扦样员
					<span>({{user.name}})</span>
				</h3>
				<p>
					<template v-if="user.status==1">
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
					<span slot="title">{{item.title}}</span>
				</template>

				<template v-if="item.level==3">
					<template v-for="item2 in navlist" v-if="item2.pid==item.lid" >
						<!--<el-submenu :index="item2.lid.toString()" key="item2.lid">-->
						<el-submenu :index="item2.lid.toString()">
							<template slot="title">
								<i class="iconfont secondlevel" :class="item2.icon"></i>
								<span slot="title">{{item2.title}}</span>
							</template>

							<template v-for="item3 in navlist" v-if="item3.pid==item2.lid">
								<el-menu-item :index="item3.linkto">
								<!--<el-menu-item :index="item3.linkto" key="item3.lid">-->
									<div class="leftline"></div>
									<i class="iconfont thirdlevel" :class="item3.icon"></i>
									<span>{{item3.title}}</span>
									
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
							<span>{{item4.title}}</span>
						</el-menu-item>
					</template>

				</template>

			</el-submenu>
		</template>

		

	</el-menu>
</template>
<script>
require("../../../assets/style/common/Sidebar.css");
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
	components: {
	    
	},
	computed:{
		...mapState(["isCollapse"]),
		...mapGetters(["modal_id"]),
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
					icon: 'icon-liuchengdingyi',
					title: '扦样流程',
					linkto: '',
					level: 2,
					pid: 0,
					lid: 1
				},
//				{
//					icon: 'icon-xinjian1',
//					title: '新建扦样',
//					linkto: '',
//					level: 2,
//					pid: 1,
//					lid: 2
//				},
				{
					icon: 'icon-iconfontcolor69',
					title: '扦样列表',
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

//				{
//					icon: 'icon-yonghuguanli',
//					title: '用户管理',
//					linkto: '',
//					level: 3,
//					pid: 1,
//					lid: 6
//				},
//				{
//					icon: 'icon-yonghuliebiao',
//					title: '用户列表',
//					linkto: '/index/authority/userList',
//					level: 3,
//					pid: 6,
//					lid: 7
//				},
//				{
//					icon: 'icon-tianjiaxinyonghu',
//					title: '添加用户',
//					linkto: '/index/authority/userAdd',
//					level: 3,
//					pid: 6,
//					lid: 8
//				},
//				{
//					icon: 'icon-tianjiaduoyonghu',
//					title: '批量添加用户',
//					linkto: '/index/authority/userAdds',
//					level: 3,
//					pid: 6,
//					lid: 9
//				},
//
//				{
//					icon: 'icon-ziyuanguanli',
//					title: '资源管理',
//					linkto: '',
//					level: 2,
//					pid: 1,
//					lid: 10
//				},
//				{
//					icon: 'icon-ziyuanguanli2',
//					title: '资源列表',
//					linkto: '/index/authority/resourceList',
//					level: 2,
//					pid: 10,
//					lid: 11
//				},
//				{
//					icon: 'icon-tianjiaziyuan-q',
//					title: '添加资源',
//					linkto: '/index/authority/resourceAdd',
//					level: 2,
//					pid: 10,
//					lid: 12
//				},
//
//				{
//					icon: 'icon-gerenzhongxin',
//					title: '个人中心',
//					linkto: '',
//					level: 3,
//					pid: 0,
//					lid: 13
//				},
//				{
//					icon: 'icon-wodedenglu_shezhi',
//					title: '我的设置',
//					linkto: '',
//					level: 3,
//					pid: 0,
//					lid: 14
//				},
//				{
//					icon: 'icon-shujukuguanli',
//					title: '数据库管理',
//					linkto: '',
//					level: 2,
//					pid: 0,
//					lid: 15
//				},
//				{
//					icon: 'icon-beifenshujuku',
//					title: '备份数据库',
//					linkto: '/index/database/databaseups',
//					level: 2,
//					pid: 15,
//					lid: 16
//				},
//				{
//					icon: 'icon-shuju-yihuifu',
//					title: '恢复数据库',
//					linkto: '/index/database/list',
//					level: 2,
//					pid: 15,
//					lid: 17
//				},
//				{
//					icon: 'icon-Group',
//					title: '优化数据库',
//					linkto: '',
//					level: 2,
//					pid: 15,
//					lid: 18
//				},
//				{
//					icon: 'icon-rizhiguanli',
//					title: '日志管理',
//					linkto: '',
//					level: 2,
//					pid: 0,
//					lid: 19
//				},
//				{
//					icon: 'icon-rizhitongji',
//					title: '日志列表',
//					linkto: '',
//					level: 2,
//					pid: 19,
//					lid: 20
//				},
//				{
//					icon: 'icon-rizhiliebiao',
//					linkto: '',
//					title: '日志统计',
//					level: 2,
//					pid: 19,
//					lid: 21
//				},

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
