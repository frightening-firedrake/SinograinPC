import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import Layout from '@/components/common/layout/Layout.vue'
import Home from '@/components/home/Home.vue'
import RoleList from "@/components/auth/role/List.vue"
import RoleAdd from '@/components/auth/role/Add.vue'
import RoleAdds from '@/components/auth/role/Adds.vue'
import UserList from '@/components/auth/user/List.vue'
import UserAdd from '@/components/auth/user/Add.vue'
import UserAdds from '@/components/auth/user/Adds.vue'
import ResourceList from '@/components/auth/resource/List.vue'
import ResourceAdd from '@/components/auth/resource/Add.vue'
import DataBaseUps from '@/components/database/backups.vue'
import DataBaseList from '@/components/database/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
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
      children:[
          {
            path:"home",
            name: '首页',
            component:Home
          },
         {
              path:"authority/roleList",
              name:"角色管理/角色列表",
              component:RoleList
            },
            {
              path:"authority/roleAdd",
              name:"角色管理/添加角色",
              component:RoleAdd
            },
            {
              path:"authority/roleAdds",
              name:"角色管理/批量添加角色",
              component:RoleAdds
            },
            {
              path:"authority/userList",
              name:"用户管理/用户列表",
              component:UserList
            },
            {
              path:"authority/userAdd",
              name:"用户管理/添加用户",
              component:UserAdd
            },
            {
              path:"authority/userAdds",
              name:"用户管理/批量添加用户",
              component:UserAdds
            },
            {
              path:"authority/resourceList",
              name:"资源管理/资源列表",
              component:ResourceList
            },
            {
              path:"authority/resourceAdd",
              name:"资源管理/添加资源",
              component:ResourceAdd
            },
            {
              path:"database/databaseups",
              name:"数据库管理/备份数据库",
              component:DataBaseUps
            },
            {
              path:"database/list",
              name:"数据库管理/数据列表",
              component:DataBaseList
            }
        ]
    },
    
  ]
})
