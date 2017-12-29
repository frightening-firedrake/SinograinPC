<template>
	<div class="breadcrumbwrap">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<template v-if="breadcrumb.undefinedpath">
			    <el-breadcrumb-item>
			    	<span @click='backhome'>
			    		
			    	<i class="icon-home"></i>
			    	首页
			    	</span>
			    </el-breadcrumb-item>
			    <el-breadcrumb-item v-for="item in breadcrumbListsCache" :key="item.index" >{{item.name}}</el-breadcrumb-item>
				<el-breadcrumb-item >
			    	{{breadcrumb.undefinedpath}}
			   </el-breadcrumb-item>				
			</template>
			<template v-else>
				<el-breadcrumb-item to="/index/home">
			    	<i class="icon-home"></i>
			    	首页
			    </el-breadcrumb-item>
			    <!--<el-breadcrumb-item v-for="item in breadcrumbList" :key="item.index" :to="item.path">{{item.name}}</el-breadcrumb-item>-->
			    <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.index" >{{item.name}}</el-breadcrumb-item>
			</template>
		</el-breadcrumb>
		
		<div class="bread_search" v-if="breadcrumb.search">
		    <el-input placeholder="搜索你想找到的..." v-model="searching" class="input-with-select">
			    <!--<el-select v-model="select" slot="prepend" placeholder="请选择">
			        <el-option label="餐厅名" value="1"></el-option>
			        <el-option label="订单号" value="2"></el-option>
			        <el-option label="用户电话" value="3"></el-option>
			    </el-select>-->
			    <!--<el-button slot="append" icon="el-icon-search">-->
			    <el-button slot="append" @click="searchingfor">
			    	<img src="static/images/sys/iconsearch.png" alt="" />
			    </el-button>
			</el-input>
		</div>
	</div>
</template>

<script>
import {mapMutations} from 'vuex';
	
//import "@/assets/style/common/Breadcrumb.css"
  export default {
    props: ['breadcrumb'],
    data() {
      return {
        searching:'',
		firstfalg:true,//第一次加载确定路由的开关
		breadcrumbListsCache:[],
      };
    },
    created(){
    	this.breadcrumbListFirst();
    },
    methods:{
    	...mapMutations(['route_click']),
    	searchingfor(){
      		this.$emit('searchingfor',this.searching)     		
    	},
    	backhome(){
//  		手动跳转
			this.route_click();
    		this.$router.push({ path: '/index/home' });
    	},
    	breadcrumbListFirst() {
    		if(this.firstfalg){
	//	    	获取连接名按照"/"切分并反转
		        var breadcrumbName=this.$route.name.split('/').reverse();
	//	       	 等待返回的面包屑名字对应路径的对象数组
		        var breadcrumbLists=[];
		        	for(var i=0;i<breadcrumbName.length;i++){
		        		var breadcrumbItem={};
	//	        		获取名字
		        		breadcrumbItem.name=breadcrumbName[i];
	//	        		获取路径
		        		var breadcrumbPath=this.$route.fullPath.split('/');
	//	        		从后向前以"/"为节点裁掉/后面的路径并拼接回字符串
		        		breadcrumbPath.splice(-i,i);	        		
		        		breadcrumbItem.path=breadcrumbPath.join('/');
		        		breadcrumbItem.index=i;
		        		breadcrumbLists.unshift(breadcrumbItem);
		        	}    
		        this.firstfalg=false,
		        this.breadcrumbListsCache=breadcrumbLists;
		        return breadcrumbLists;
    		}else{
    			return this.breadcrumbListsCache;
    		}
	    }
    },
    computed: {
	    breadcrumbList: function () {
//	    	获取连接名按照"/"切分并反转
	        var breadcrumbName=this.$route.name.split('/').reverse();
//	       	 等待返回的面包屑名字对应路径的对象数组
	        var breadcrumbLists=[];
	        	for(var i=0;i<breadcrumbName.length;i++){
	        		var breadcrumbItem={};
//	        		获取名字
	        		breadcrumbItem.name=breadcrumbName[i];
//	        		获取路径
	        		var breadcrumbPath=this.$route.fullPath.split('/');
//	        		从后向前以"/"为节点裁掉/后面的路径并拼接回字符串
	        		breadcrumbPath.splice(-i,i);	        		
	        		breadcrumbItem.path=breadcrumbPath.join('/');
	        		breadcrumbItem.index=i;
	        		breadcrumbLists.unshift(breadcrumbItem);
	        	}    
	        return breadcrumbLists;
	    }
	},
    mounted:function(){
//  	var curName=this.$route.name;
//      var curPath=this.$route.fullPath;
//      var breadcrumbPath=curPath.split('/');
//      var breadcrumbName=curName.split('/').reverse();
//      var breadcrumbLists=[];
//      	for(var i=0;i<breadcrumbName.length;i++){
//      		var breadcrumbItem={};
//      		breadcrumbItem.name=breadcrumbName[i];
//      		
//      		var breadcrumbPath=curPath.split('/');
//      		breadcrumbPath.splice(-i,i);
//      		
//      		breadcrumbItem.path=breadcrumbPath.join('/');
//      		breadcrumbLists.unshift(breadcrumbItem);
//      	}        
    }
  }
</script>

<style>
	/*面包屑导航*/
	.breadcrumbwrap{
		margin:0 -0.41rem;
		padding:0 0.41rem;
		height:0.6rem;
		line-height: 0.6rem;
		background-color: rgba(241, 241, 241, 1);
		position:relative;
		overflow: hidden;
	}
	.breadcrumbwrap .el-breadcrumb{
		height:0.6rem;
		line-height: 0.6rem;
	}
	.breadcrumbwrap .el-breadcrumb__inner, .breadcrumbwrap .el-breadcrumb__inner a{
		font-size: 0.18rem;
		color:rgb(51,51,51);
		font-weight:400;
	}
	.breadcrumbwrap .el-breadcrumb__inner a:hover, .breadcrumbwrap .el-breadcrumb__inner:hover{
		/*color:rgb(55,142,248);*/
		color:rgb(51,51,51);
	}
	.breadcrumbwrap .el-breadcrumb__inner i.icon-home{
		color:rgb(55,142,248);
		font-size: 0.25rem;
    	vertical-align: -0.02rem;
	}
	.breadcrumbwrap .el-breadcrumb__separator{
		color: rgb(153,153,153);
		font-size:0.18rem;
		margin:0 0.02rem;
	}
	.breadcrumbwrap .el-breadcrumb__item:last-child .el-breadcrumb__inner,.breadcrumbwrap .el-breadcrumb__item:last-child .el-breadcrumb__inner a,.breadcrumbwrap .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .breadcrumbwrap .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
	    font-weight: 400;
	    color:rgb(55,142,248);
	    cursor: text;
	}
	/*搜索*/
	.bread_search{
		position:absolute;
		width:3.25rem;
		height:0.4rem;
		line-height: 0.4rem;
		/*border: solid 0.01rem rgba(153, 153, 153, 1);*/
		/*border-radius: 0.04rem;*/
		top:0.09rem;
		right:0.41rem;
	}
	.bread_search .el-input__inner{
		height:0.4rem;
		border: solid 0.01rem rgba(153, 153, 153, 1);
		/*box-sizing: content-box;*/
		color:rgb(85,85,85);
		/*width:2.8rem;*/
		position:relative;
		/*right:-0.2rem;*/
	}
	.el-input-group__append{
		background:rgba(0,0,0,0);
		border:none;
		height:0.4rem;
		padding:0;
		position: relative;
	    right: 0.2rem;
	    top: 0.12rem;
	}
	.el-input-group__append .el-button{
		height:0.4rem;
		padding:0;
	}
	.el-input-group__append .el-button span{
		display: block;
		height:100%;

	}
	.el-input-group__append .el-button span img{
		display: block;
		/*width:0.5rem;
		height:0.4rem;*/
		height:100%;
	}


div.nav-search input[type=text]{
	border:none;
	height:0.4rem;
	outline: none;
	box-shadow: none;
	border-radius: 0.04rem;
	border: solid 0.01rem rgba(153, 153, 153, 1);
	border-right: none;
}
div.nav-search .input-group-btn .btn{
	width:0.4rem;
	height:0.4rem;
	float:left;
	padding:0;
	border:none;
}
div.nav-search .input-group-btn{
	z-index: 66;
}
div.nav-search .input-group-btn:hover .btn{
	background:rgba(255,255,255,0);
	border:none;
	box-shadow: none;
}
div.nav-search .input-group-btn .btn img{
	margin-left:-0.11rem;
	width:0.5rem;
	height:0.4rem;
	display: block;
}
div.nav-search .input-group .btn-default:focus,
div.nav-search .input-group .btn-default.focus {
    outline: none;  
    background-color: rgba(0,0,0,0);
    border-color:  rgba(0,0,0,0);
	border:none;
}
</style>