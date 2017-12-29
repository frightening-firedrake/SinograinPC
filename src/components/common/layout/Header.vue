<template>
      <el-row>
        <el-col :span="24">
          <el-col :span="15">
            <div class="grid-content bg-purple">
              <el-col :span="6" :sm="9"  :lg="6" class="lemon_logo">
                <div class="lemon_logo_img">
                  <img src="../../../assets/images/index/logo.png" alt="">
                </div>
                <div class="navbar_header_logo_home">
                  <i class="icon-home"></i>
                </div>
              </el-col>
              <el-col :span="7" class="lemon_title hidden-md-and-down">
                  <h4 class="el-col-24">青柠后台管理系统欢迎您</h4>
              </el-col>
              <el-col :span="8" :sm="12"  :lg="8" class="lemon_search">
                  <el-input>
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-col>
            </div>
          </el-col>
          <el-col :span="7"  class="lemon_admin">
            <div class="grid-content bg-purple-light">
              <el-col :span="10" :sm="14"  :lg="10" class="admin_fun_icon">
                <el-dropdown-item class="clearfix el-col-4 admin_fun_icon_text">
                  <i class="icon-lock"></i>
                </el-dropdown-item>
                <el-dropdown-item class="clearfix el-col-4 admin_fun_icon_text ">
                  <i class="icon-bell"></i>
                  <el-badge class="mark" :value="3" />
                </el-dropdown-item>
                 <el-dropdown-item class="clearfix el-col-4 admin_fun_icon_text ">
                  <i class="icon-envelope"></i>
                </el-dropdown-item>
              </el-col>
             <el-col :span="9" class="lemon_admin_image">
               <div class="lemon_admin_image_content el-col-12" style="background-image: url(static/images/index/user/user1.jpg);"></div>
               <div class="lemon_admin_image_font el-col-10 hidden-md-and-down">
                 <span>您好,GIGI</span>
               </div>
             </el-col>
               <el-col :span="5" class="lemon_admin_output hidden-md-and-down">
                 <img src="static/images/index/out.png" alt="">
               </el-col>
            </div>
          </el-col>
        </el-col>
      </el-row>
</template>
<script>
require("../../../assets/style/index/index.css")
export default {
}
</script>
