<template>
	<div class="tfootbtns">
		<!--基础双按钮-->
		<div class="btn-center" v-if="tfbtns.btnCenter">
		    <el-button class="lbtn" :class="{no:tfbtns.btnCenter.doubleColor}" type="primary" @click="btnCenterNo">{{tfbtns.btnCenter.btnTextL?tfbtns.btnCenter.btnTextL:'不同意'}}</el-button>
		    <el-button v-if="tfbtns.btnCenter.doubleColor" class="rbtn yes"  type="primary" @click="btnCenterYes" >{{tfbtns.btnCenter.btnTextR?tfbtns.btnCenter.btnTextR:'同  意'}}</el-button>
		    <el-button v-else class="rbtn"  @click="btnCenterYes" >{{tfbtns.btnCenter.btnTextR?tfbtns.btnCenter.btnTextR:'同  意'}}</el-button>
	    </div>
		<!--左按钮-->
		<div class="btn-left btntfoot"  v-if="tfbtns.btnLeft" @click="btnLeft">
			<span>
				{{tfbtns.btnLeft.btnText}}
			</span>					
		</div>
		<!--右按钮-->
		<div class="btn-right btntfoot" v-if="tfbtns.btnRight" @click="btnRight">
			<span>
				{{tfbtns.btnRight.btnText}}
			</span>					
		</div>
		<!--中单按钮-->
		<div class="btn-one btntfoot"  v-if="tfbtns.btnOne" @click="btnOne">
			<span>
				{{tfbtns.btnOne.btnText}}
			</span>					
		</div>
	</div>
</template>
<style>
.tfootbtns{
	height:0.75rem;
	background:#ffffff;
	position:relative;
	text-align: center;
}
.btn-center{
	text-align: center;
	padding:0.12rem 0;
}
.btn-center button {
    font-size: 0.18rem;
    padding: 0rem;
    line-height: 0.5rem;
    border-radius: 0.1rem;
    width:1.3rem;
    height:0.5rem;
    text-align: center;
}
.btn-center .el-button+.el-button{
	margin-left:0.3rem;
}
.btn-center button.lbtn {
	background-color: rgb(88,180,129);
	border-color:rgb(88,180,129);
}
.btn-center button.lbtn:hover {
	background-color: rgba(88,180,129,0.8);
	border-color:rgb(88,180,129);
}
.btn-center button.rbtn {
	color: #58b481;
	border-color:#58b481;
}
.btn-center button.rbtn:hover {
	background:rgba(88,180,129,0.1);
}
.btn-center button.yes {
	color: #ffffff;
	background-color: rgb(88,180,129);
	border-color:rgb(88,180,129);
}
.btn-center button.yes:hover {
	background-color: rgba(88,180,129,0.8);
	border-color:rgb(88,180,129);
}
.btn-center button.no {
	background-color: rgba(255, 76, 120, 1);
	border-color:rgba(255, 76, 120, 1);
}
.btn-center button.no:hover {
	background-color: rgba(255, 76, 120, 0.8);
	border-color:rgba(255, 76, 120, 1);
}
.tfootbtns div.btntfoot{
	position:absolute;
	top:0.125rem;
	height:0.4rem;
	line-height: 0.33rem;
	/*margin:0 0 0 0.3rem;*/
	font-size: 0.24rem;
	cursor: pointer;
	background-color: #58b481;
	border-radius: 0.05rem;
	box-sizing: border-box;
	padding:0.04rem;
	color:#ffffff;
	z-index: 6;
}
.tfootbtns div.btntfoot span{
	border:1px solid #FFFFFF;
	border-radius:0.04rem;
	padding:0 0.2rem;
	font-weight: 500;
}
.tfootbtns div.btntfoot.btn-left{
	left:0;
}
.tfootbtns div.btntfoot.btn-right{
	right:0;
}
.tfootbtns div.btntfoot.btn-one{
	display: inline-block;
	margin-top:0.125rem;
	position: static;
}
</style>
<script>
export default {
//  components:{ },
    props: ['tfbtns'],
    computed:{

	},
	created(){

	},
    data() {
        return {
//			btnCenter:{
//				cancelText:'不同意',
//				submitText:'同意',
//			},
//			btnLeft:{
//				btnText:'导出Excel表格',
//			},
//			btnRight:{
//				btnText:'导出Excel表格',
//			},
//			btnOne:{
//				btnText:'导出Excel表格',
//			},
        }
    },
    methods:{
		btnCenterNo(){
			this.$emit("tfootEvent",'btnCenterL');
//			window.history.go(-1)
		},
		btnCenterYes(){
			this.$emit("tfootEvent",'btnCenterR');			
//			window.history.go(-1)
		},
		btnLeft(){
			this.$emit("tfootEvent",'btnLeft');			
		},
		btnRight(){
			this.$emit("tfootEvent",'btnRight');			
		},
		btnOne(){
			this.$emit("tfootEvent",'btnOne');
		},
    },
    mounted:function(){
//		console.log(this.breadcrumb)
    }
    
}
	
</script>