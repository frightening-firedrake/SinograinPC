<template>
<div class="block tfoot">
	<div class="tfoot_btns" v-if='page.tfootbtns.btns'>
		<span v-if='page.tfootbtns.create' class='create' @click="create_newdata">
			<img src="static/images/sys/icons4.png" alt="" />
			新建
		</span>
		<span v-if='page.tfootbtns.refresh' class='refresh' @click="refresh_data">
			<img src="static/images/sys/icons1.png" alt="" />
			刷新
		</span>
		<span v-if='page.tfootbtns.delete' class='delete' @click="delete_checked">
			<img src="static/images/sys/icons2.png" alt="" />
			删除
		</span>
	</div>
    <el-pagination @size-change="sizeChange" @current-change="currentChange" :current-page.sync="page.currentPage" :page-size="page.size" layout="prev, pager, next, jumper" :total="page.total">
    </el-pagination>
  </div>
</template>
<script>
import "@/assets/style/common/Pagination.css"
  export default {
    props: ['page'],
    methods: {
      create_newdata(){
      	this.$emit('paginationEvent','create')
      },
      refresh_data(){
      	this.$emit('paginationEvent','refresh')     	
      },
      delete_checked(){
      	this.$emit('paginationEvent','delete')
      },
      sizeChange(){
//    	console.log(this.currentPage,this.page.size);
      },
      currentChange(){
//    	console.log(this.currentPage,this.page.size);
		this.$emit('getCurrentPage',this.page.currentPage);
      },
    },
    data() {
      return {

      };
    }
  }
</script>