<template>
    <div class="imsetwrap">
    	<div class="tabletitle">    		
    		<p>{{informations.title}}列表</p>
    		<div class="btns">		
				<div class="create" @click="add" style="background-image:url('static/images/sys/create.png');">
					添加{{informations.title}}
				</div>		
			</div>
    	</div>
		<div class="tableHeader">		
			<el-col  :span="24" class="right">
				<el-col  :span="8">					
					<el-col  :span="5" class="index">序号</el-col >
					<el-col  :span="14" class="content">{{informations.title}}名称</el-col >
					<el-col  :span="5" class="action">操作</el-col >
				</el-col >
				<el-col  :span="8">					
					<el-col  :span="5" class="index">序号</el-col >
					<el-col  :span="14" class="content">{{informations.title}}名称</el-col >
					<el-col  :span="5" class="action">操作</el-col >
				</el-col >
				<el-col  :span="8">					
					<el-col  :span="5" class="index">序号</el-col >
					<el-col  :span="14" class="content">{{informations.title}}名称</el-col >
					<el-col  :span="5" class="action">操作</el-col >
				</el-col >
				<div class="clear"></div>
			</el-col >
			<div class="clear"></div>
		</div>
		<div class="tbwrap">
			<div class="tbrow">					
				<el-col  :span="24" class="right">				
					<template v-for="(sample,index2) in informations.items">					
						<el-col  :span="8" class="item">					
							<el-col  :span="5" class="index">{{index2+1}}</el-col >
							<el-col  :span="14" class="content">{{sample.sampleNumber}}</el-col >
							<el-col  :span="5" class="action"><span class="pointer" @click="del(index2,sample.id)">删除</span></el-col >
						</el-col >
					</template>
				</el-col >
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
		</div>
    </div>
</template>

<script>
//import "@/assets/style/common/HandoverConnect.css"
//import SinograinModal from '@/components/common/action/Modal.vue';

export default {
//  components: { SinograinModal },
    props: ["formdatas","formtitle","addPath","informations"],
    mounted(){
  
    },
    methods: {
        del(index,id){
        	this.$confirm('是否删除该'+this.informations.title+'?', '提示', {
		      confirmButtonText: '确定',
		      cancelButtonText: '取消',
		      type: 'warning'
		    }).then(() => {
		    	
		    	this.informations.items=this.informations.items.filter((item,index1)=>{
		    		return index1!==index;
		    	})
		    	
		      this.$message({
		        type: 'success',
		        message: '删除成功!'
		      });
		    }).catch(() => {
		      this.$message({
		        type: 'info',
		        message: '已取消删除'
		      });          
		    });
        },
        add(){
           this.$emit("addinformation",this.informations.title) ;
        },
    },
    data() {
        return {
        	
        }
    }
}
</script>

<style>
</style>