<template>
	<div class="header">
    <div class="logo">
    	  <img src="static/images/sys/logo.png" alt="" />
    </div>
    <div class="manager">
    	  <div class="dropdown">
				    <el-dropdown trigger="click">
					      <span class="el-dropdown-link">
					        	{{userName}}
					        	<i class="el-icon-arrow-down el-icon--right"></i>
					      </span>
					      <el-dropdown-menu slot="dropdown">
						        <el-dropdown-item>个人中心</el-dropdown-item>
						        <el-dropdown-item>退出登录</el-dropdown-item>
					      </el-dropdown-menu>
				    </el-dropdown>
				</div>
				<div class="mphoto">
						<img src="static/images/test/photo_01.png" alt="" />
				</div>
    </div>
    <div class="message">
    		<el-badge :value="1" :max="99" class="item">
				 		<i class="el-icon-bell"></i>
				</el-badge>
    </div>
    <div class="search_h">
			  <el-input
		    placeholder="Search"
		    v-model="search_h">
			    	<button slot="prefix" class="el-input__icon el-icon-search"></button>
			  </el-input>
    </div>
	</div>
</template>
<script>
require("../../../assets/style/index/index.css")
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
	computed:{
		...mapState([]),
		...mapGetters(["libraryId","libraryName","userName"]),
  	},
	data(){
		return {
			search_h:'',
		}
	}
}
</script>
