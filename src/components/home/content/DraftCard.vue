<template>
	<div class="panel-body drafts">
		<form>
			<el-input v-model="input" placeholder="标题"></el-input>
			<el-input
			  type="textarea"
			  :rows="2"
			  placeholder="在想些什么"
			  v-model="textarea">
			</el-input>
			<el-button type="primary">保存草稿</el-button>
		</form>
	</div>
</template>
<style>
.drafts .el-input__inner{
	height:0.45rem;
	color:#999999;
	font-size:0.14rem;
	padding:0 0.12rem;
}

.drafts textarea.el-textarea__inner {
	width: 100%;
	margin-top: 0.1rem;
	background: #eee;
	height: 1.25rem;
	overflow: hidden;
	resize: none;
	padding:0.05rem 0.12rem;
	color:#999999;
	font-size:0.14rem;
}

.drafts .el-button {
	width:0.96rem;
	height:0.37rem;
	background: #5ca2f7;
	margin-top: 0.11rem;
	margin-bottom: 0;
	font-size: 0.14rem;
	float:right;
	line-height:0.37rem;
	text-align: center;
	padding:0;
}
</style>
<script>
//	require("../../../assets/default/style/index/Home_operable_card.css");

  export default {
//	props: ['card'],
    data() {
      return {
      	input:'',
		textarea: ''
      };
    },
    methods: {

    },

  }
</script>


