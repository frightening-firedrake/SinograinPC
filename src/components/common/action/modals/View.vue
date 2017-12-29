<template>
	<div class="viewwrap">
	    <div class="row modal_body_title" v-show="lg">
			<h3>青柠云后台管理系统</h3>
		</div>
		<table class="view">
			<tr v-for="(value, key) in datalist">
				<td>{{key}}</td>
				<td>{{value}}</td>
			</tr>				
			<!--<tr class="remarks">
				<td>备注消息</td>
				<td>UI设计师为研发部门付出了艰辛的努力</td>
			</tr>-->
		</table>
    </div>    
</template>

<script>
//import LemonModalView from '@/components/common/action/modals/View.vue';
	
export default {
//  components:{ LemonOptionTitle,LemonBreadcrumb,LemonModalView },
    props: ['lg','datalist'],
    data() {
        return {
        }
       }
   }
</script>

<style>
/*查看内容*/

table.view tr:first-child td:first-child{
	width: 14em;
	/*width: 50%;*/
}
/*@media (min-width: 1200px){
	.lg table.view tr:first-child td:first-child{
		width: 16.666666%;
	}
}*/
table .remarks td {
    white-space: normal;
    text-overflow: unset;
    word-break: normal;
}
table.view{
	width:100%;	
}
.modal_body_title{
	padding-left:0.45rem;
	background-color:#f2f2f4;
	height:0.6rem;
	border:1px solid #dddddd;
	border-bottom:1px dashed #dddddd;

}	
.modal_body_title h3{
	font-size:0.24rem;
	line-height:0.6rem;
	height:100%;
}
table.view {
	border-top: 1px solid #ddd;
	border-left: 1px solid #ddd;
	border-right: 1px solid #ddd;
	text-align: right;
	table-layout: fixed; 
}
.lg table.view {
	border-top: none;
}
table.view .remarks td{
	white-space: normal;
    text-overflow: unset;
    word-break: normal;
}
table.view tr{
	height:0.6rem;
	border-bottom:1px dashed #ddd;
	text-align:left;
}
table.view tr td {
	font-size: 0.18rem;
	height:0.6rem;
	line-height:0.6rem;
	padding:0;
	color: #333333;	
	overflow: hidden;
	white-space: nowrap;
	border-top:none;
	text-overflow: ellipsis;
	word-break: keep-all; 
	border-bottom: 1px dashed #ddd;
}
table.view tr td.error {
	color: rgb(255,100,100);
}
table.view tr td:nth-child(1) {
	border-left:none;
	background-color:#fbfbfb;
	padding-left:5em;
	padding-right: 4.5em; 
}
table.view tr td:nth-child(2) {
	text-align: left;
	border-left: 1px dashed #ddd;
	font-size:0.17rem;
	color:#666666;
	padding-left: 0.52rem; 
}
</style>