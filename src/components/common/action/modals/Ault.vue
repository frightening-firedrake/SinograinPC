<template>
	<div class="aultwrap">
		<el-form ref="form" class="role_form" :model="datalist" size="medium">
	        <template>
	            <p>青柠云后台管理系统</p>
	        </template>
	        <el-form-item v-for="(form,index) in datalist" :key="index" :label="form.label" :class="{'textarea':form.type=='remarks','tree':form.type=='tree'}" v-show="form.type!='options'">
	            <template v-if="form.type=='text'">
	                <el-input class="roleinput" v-model="form.text" :placeholder="form.default"></el-input>
	            </template>
	            <template v-else-if="form.type=='tree'">	            	
	                <div class="treewrap">
				    	<header>
							<el-checkbox v-model="tree_select_toggle" @change="checkall">选中全部</el-checkbox>
							<el-checkbox v-model="tree_open_toggle" @change="openall">展开全部</el-checkbox>
							<div class="prompt">
								温馨小提示：此
								<el-checkbox v-model="disabletrue" disabled></el-checkbox>				
								为您的上级权限您无权更改
							</div>
						</header>
						<div class="treezl">
							<el-tree
							    :data="tree.data"
							    show-checkbox
						  	    node-key="id"
							    ref="tree"
							    :check-strictly="tree.checkStrictly"
							    highlight-current
  								:default-expand-all="tree_open_toggle"
  								:default-checked-keys="defaultCheckedKeys"
							    :props="tree.defaultProps">
							</el-tree>
						</div>
			    	
				    	<div class="prompt">
							温馨小提示：此
							<el-checkbox v-model="disabletrue" disabled></el-checkbox>				
							为您的上级权限您无权更改
						</div>		  
				  	</div>
	            </template>	  	
	        </el-form-item>	        
	        <div class="btns">
	            <el-button class="btn_succse btn" type="primary" @click="onSubmit">确认</el-button>
	            <el-button class="btn_cancel btn" @click="cancel" >取消</el-button>
	        </div>
	    </el-form> 
	</div>
</template>

<script>

//import LemonAult  from "@/components/common/action/Ault";
	
export default {

//  components:{ LemonAult},
    props: ['lg','datalist','tree'],
    beforeMount: function() {
//    	this.finddisablecheckkey(this.tree.data)
      	this.finddisablecheckedid(this.tree.data);
      	this.finddefaultcheckkey(this.tree.data);
      	this.findallcheckedid(this.tree.data);

    },
//  mounted: function() {
////    	this.finddisablecheckkey(this.tree.data)
//    	this.finddisablecheckedid(this.tree.data);
//    	this.finddefaultcheckkey(this.tree.data);
//  },
    methods: {
    	 onSubmit() {
            console.log('submit!');
			this.$emit('btn_close')
            
        },
		cancel(){
			
			this.$emit('btn_close')       
      },		
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
      checkall:function(a){
      	var allkeys;
      	if(a){
      		allkeys=this.checkallkey;
      	}else{
      		allkeys=this.disablecheckedkey;
      	}
      	this.$refs.tree[0].setCheckedKeys(allkeys);
      },
      openall(a){
      	if(a){
      		this.tree.tree_open_toggle=true;
      	}else{
      		this.tree.tree_open_toggle=false;
      	}
      	console.log(this.tree.tree_open_toggle)
      },
      	findallcheckedid(arr){
      		arr.forEach((val,index)=>{	      		   			
	      		if((val.checked)&&val.disabled||(!val.disabled)){    			
	      			this.checkallkey.push(val.id);
	      		}
				if(val.children){
					this.findallcheckedid(val.children)
				}
			})	
        },
        finddisablecheckedid(arr){
      		arr.forEach((val,index)=>{	      		   			
	      		if(!(!val.checked)&&val.disabled){    			
	      			this.disablecheckedkey.push(val.id);
	      		}
				if(val.children){
					this.finddisablecheckedid(val.children)
				}
			})	
        },
      	finddisablecheckkey(arr){
      		arr.forEach((val,index)=>{
	      		if(val.disabled){    			
	      			this.disablekey.push(val.id);
	      		}
				if(val.children){
					this.finddisablecheckkey(val.children)
				}
			})
        },
        finddefaultcheckkey(arr){
      		arr.forEach((val,index)=>{
	      		if(val.checked){    			
	      			this.defaultCheckedKeys.push(val.id);
	      		}
				if(val.children){
					this.finddefaultcheckkey(val.children)
				}
			})
        },
    },
    data() {
      return {
      	disablecheckedkey:[],//禁止选择且被选中的id
      	disablekey:[],//禁止选择的key id
      	checkallkey:[],//树上的全部可选排除了禁用的id
      	defaultCheckedKeys:[],//默认选中的key id
      	disabletrue:true,//处于禁止状态并选中
      	tree_select_toggle:false,//全部选中开关
      	tree_open_toggle:true,//全部打开开关
      	
      		
      	}
    }
  };


</script>

<style>
/*编辑内容*/
.el-dialog__body .el-form .btns{
	padding:0.2rem;
}
.lg .el-dialog__body  .el-form .btns{
	padding:0.66rem 0 0.56rem;
}
.el-dialog__body .el-form p{
	display: none;
}
.lg .el-dialog__body .el-form p{
	display: block;
}
.el-form .el-form-item:first-of-type{
	border-top-style:solid;
}
.lg .el-form .el-form-item:first-of-type{
	border-top-style:dashed;
}
.el-form .el-form-item.tree {
    height: 4rem;
}
.treewrap{
	border:1px solid #d8dce5;
	border-radius:0.06rem;
	height:100%;
	position: relative;
}
.treewrap header{
	height: 0.52rem;
	line-height: 0.52rem;
	background-color: rgba(222, 233, 247, 1);
	border-radius: 0.06rem 0.06rem 0 0;
}
.treewrap header label{
	line-height: 0.52rem;
	padding-left:0.3rem;
	margin:0!important;
}
.treewrap header label .el-checkbox__label{
	font-size:0.17rem;
}
.treewrap  header div.prompt label{
	padding:0;
}
.treewrap  header div.prompt{
	font-size:0.17rem;
	float:right;
	padding-right:0.1rem;
	display: none;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.treewrap>div.prompt{
	position: absolute;
	bottom:0;
	line-height: 0.52rem;
	padding-left:0.3rem;
	font-size:0.17rem;
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width:100%;
}
.lg .treewrap  header div.prompt{
	display: block;
}
.lg .treewrap>div.prompt{
	display: none;
}
@media (max-width:992px){
	.lg .treewrap  header div.prompt{
		display: none;
	}
	.lg .treewrap>div.prompt{
		display: block;
	}
}
.treewrap>div.prompt label{
	padding:0;
}
.treewrap .treezl{
	position:absolute;
	top:0.54rem;
	left:0;
	right:0;
	bottom:0.54rem;
	overflow:auto; 
	padding:0.1rem;
}
@media (min-width:992px){
	.lg .treewrap .treezl{
		bottom:0.1rem;
	}
}
.treewrap .el-checkbox__input.is-checked+.el-checkbox__label{
	color:rgb(51,51,51);
}
.treewrap .el-tree-node__label{
	font-size:0.17rem;
}
</style>