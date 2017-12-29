<template>
	<div class='administration'>
	    <el-table
	      :data="tableData"
	      style="width: 100%">
	      <el-table-column
	        prop="number"
	        label="编号"
	        width="70"
	        align="center"
	        >
	      </el-table-column>
	      <el-table-column
	        prop="name"
	        label="名称"
	        width="100"
	        align="center"
	        >
	      </el-table-column>
	      <el-table-column
	        prop="father"
	        label="父菜单"
	        width="80"
	        align="center"
	        >
	      </el-table-column>
	      <el-table-column
	        label="操作"
	        align="center"
	        >
	        <template slot-scope="scope">
	          <a href="" class="icon-eye-open lookRole" title="查看"></a>
			  <a href="" class="icon-pencil editUser" title="编辑"></a>
			  <a href="" class="icon-trash removeBtn" title="删除"></a>
			  <a href="" class="icon-key" title="授权"></a>
	        </template>
	      </el-table-column>
	    </el-table>
    </div>
  </template>

  <script>
//	require("../../../assets/default/style/index/Home_operable_card.css");
  	
    export default {
      data() {
        return {
          tableData: [
          {
            number: '01',
            name: '首页信息管理',
            father: '首页',
          }, 
          {
            number: '02',
            name: '首页信息管理',
            father: '首页',
          }, 
          {
            number: '03',
            name: '首页信息管理',
            father: '首页',
          }, 
          {
            number: '04',
            name: '首页信息管理',
            father: '首页',
          }, 
          ]
        }
    },
    methods: {
      handleClick(row) {
      console.log(row);
    }
      }
    }
  </script>

<style>
.administration .el-table__body, .administration .el-table__footer, .administration .el-table__header{
	width:100%!important;
}
.administration .el-table__body{
	width:100%!important;
	padding:1px;
}
.administration .el-table::before{
	display: none;
}
.icon-eye-open {
	color: #f47675;
}

.icon-pencil {
	color: #5ca2f7;
}

.icon-trash {
	color: #fcdf3a;
}

.icon-key {
	color: #84f9b6;
}
.administration table.el-table__header{
	margin-bottom:0.2rem;
}
.administration .el-table td,.administration  .el-table th.is-leaf{
	border:none!important;
	padding:0;
    text-align: center;
}
.administration  .el-table th.is-leaf{
	background-color: #f7f7f7;
}
.administration .el-table__row:hover{
	background:rgba(255,255,255,1);
	outline: 1px solid #378ef8;
}
.el-table--enable-row-hover .el-table__body tr:hover>td{
	background:rgba(255,255,255,0);
}
.el-table .cell, .el-table th div{
	white-space: nowrap;
}
.administration .cell{
    font-size: 0.14rem;
    line-height:0.4rem;
    padding:0;
}
.administration .cell a{
	padding: 0 0.05rem;
    font-size: 0.2rem;
}
.administration div.cell{
	width:100%;

}
.administration_card .el-table__header thead{
	width:auto!important;
}
.administration_card .el-table__header thead th{
	background-color: #f7f7f7;
}


/*设定表头宽度*/
.el-main .administration .el-table__header-wrapper table colgroup col:nth-child(1){
	min-width:0.75rem!important;
	width:20%;
}
.el-main .administration .el-table__header-wrapper table colgroup col:nth-child(2),.el-main .administration .el-table__header-wrapper table colgroup col:nth-child(3){
    min-width:1rem!important;
	width:30%;
}
.el-main .administration .el-table__header-wrapper table colgroup col:nth-last-child(2){
    width:auto!important;
}
/*设定表身宽度*/
.el-main .administration .el-table__body-wrapper table colgroup col:nth-child(1){
    min-width:0.75rem!important;
	width:20%;
}
.el-main .administration .el-table__body-wrapper table colgroup col:nth-child(2),.el-main .administration .el-table__body-wrapper table colgroup col:nth-child(3){
    min-width:1rem!important;
	width:30%;
}
.el-main .administration .el-table__body-wrapper table colgroup col:nth-last-child(1){
    width:auto!important;
}

@media screen and (min-width: 1200px) { 
	/*设定表头宽度*/
	.el-main .administration .el-table__header-wrapper table colgroup col:nth-child(1){
		width:0.75rem!important;
	}
	.el-main .administration .el-table__header-wrapper table colgroup col:nth-child(2),.el-main .administration .el-table__header-wrapper table colgroup col:nth-child(3){
	    width:1rem!important;
	}
	.el-main .administration .el-table__header-wrapper table colgroup col:nth-last-child(2){
	    width:auto!important;
	}
	/*设定表身宽度*/
	.el-main .administration .el-table__body-wrapper table colgroup col:nth-child(1){
	    width:0.75rem!important;
	}
	.el-main .administration .el-table__body-wrapper table colgroup col:nth-child(2),.el-main .administration .el-table__body-wrapper table colgroup col:nth-child(3){
	    width:1rem!important;
	}
	.el-main .administration .el-table__body-wrapper table colgroup col:nth-last-child(1){
	    width:auto!important;
	}
}
</style>




