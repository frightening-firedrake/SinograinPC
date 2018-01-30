<template>
    <div class="trmwrap">
    	<el-form ref="form" :inline-message="errorinline" class="sampling" :rules="rules" :model="formdatas" :label-width="labelWidth">
	        <template>
	            <p>{{formtitle}}</p>
	        </template>      
	        <el-form-item label="表单名称：" prop="tableName">
			    <el-input v-model="formdatas.tableName"></el-input>
			</el-form-item>
			<el-form-item label="备注：">
			    <el-input v-model="formdatas.remarks"></el-input>
			</el-form-item>
			<div class="clear"></div>
		</el-form>
		<div class="tableHeader">
			<el-col :span="7" class="left">
				<el-col  :span="12">&nbsp;</el-col >
				<el-col  :span="12">储存库店名称</el-col >
				<div class="clear"></div>
			</el-col >
			<el-col  :span="17" class="right">
				<el-col  :span="12">					
					<el-col  :span="5" class="index">序号</el-col >
					<el-col  :span="14" class="content">样品编号</el-col >
					<el-col  :span="5" class="action">操作</el-col >
				</el-col >
				<el-col  :span="12">					
					<el-col  :span="5" class="index">序号</el-col >
					<el-col  :span="14" class="content">样品编号</el-col >
					<el-col  :span="5" class="action">操作</el-col >
				</el-col >
				<div class="clear"></div>
			</el-col >
			<div class="clear"></div>
		</div>
		<div class="tbwrap">
			<div class="tbwraplab">
				选择列表信息
			</div>	
			<div v-for="(item,index1) in librarydatas" class="tbrow">					
				<el-col :span="7" class="left" :style="{lineHeight:titleH(item.samples.length)}">
					{{item.lib}}
				</el-col >
				<el-col  :span="17" class="right">
					
					<template v-for="(sample,index2) in item.samples">					
						<el-col  :span="12" class="item">					
							<el-col  :span="5" class="index">{{index2+1}}</el-col >
							<el-col  :span="14" class="content">{{sample.sampleNumber}}</el-col >
							<el-col  :span="5" class="action"><span class="pointer" @click="del(index1,sample.id)">删除</span></el-col >
						</el-col >
					</template>
					<el-col  :span="12" class="add">					
						<el-col  :span="5" class="index">&nbsp;</el-col >
						<el-col  :span="14" class="content"><span class="pointer" @click="add">+新建样品</span></el-col >
						<el-col  :span="5" class="action">&nbsp;</el-col >
					</el-col >
				</el-col >
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
		</div>
		<div class="bottom">
			<div class="create" @click="create">
				<span>生成样品检测报表</span>
			</div>
		</div>
    </div>
</template>

<script>
//import "@/assets/style/common/HandoverConnect.css"
//import SinograinModal from '@/components/common/action/Modal.vue';

export default {
//  components: { SinograinModal },
    props: ["formdatas","formtitle","addPath","librarydatas"],
    mounted(){
  
    },
    methods: {
        //新建样品
        new_sample() {
            this.$router.push({ path: '/index/sampleManagement/handover/handoverListCreate/handoverListCreateSelect' })
        },
        titleH(num){
        	return Math.ceil((num+1)/2)*0.5+"rem";
        },
        del(index,id){
        	this.$confirm('是否删除该扦样?', '提示', {
		      confirmButtonText: '确定',
		      cancelButtonText: '取消',
		      type: 'warning'
		    }).then(() => {
		    	
		    	this.librarydatas[index].samples=this.librarydatas[index].samples.filter((item,index)=>{
		    		return item.id!==id;
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
            this.$router.push({ path: '/index/TestReportManagement/TestReportMaker/SampleSelect' })
        },
        create(){
        	this.$refs["form"].validate((valid) => {
                if (valid) {
//                  alert('submit!');
					this.$http({
					    method: 'post',
						url: this.createURL,
						headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			//			data: {
			//
			//			}
				   }).then(function (response) {
           			 	this.$router.push({ path: '/index/TestReportManagement/TestReportMaker/TestReport' });
					}.bind(this)).catch(function (error) {
					    console.log(error);
					}.bind(this));
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
    data() {
    	// 普通文本的验证
        var validateText = ( rule, value, callback ) => {
            var str =/^[^'"#$%&\^*》>,."<《？，。！@#￥%……’”：/；]+$/;
            if(!value){
                 return callback(new Error("请输入内容"));
            }else if(!str.test(value)){
                return callback(new Error("请不要输入特殊的字符"))
            }else{
                callback()
            }
        }
        return {
        	createURL:"/liquid/role19/data",
        	labelWidth:'2rem',
        	errorinline:false,
            rules: {
                tableName: [
                    {validator:validateText,trigger:'blur'}
                ],
	           
            }
        }
    }
}
</script>

<style>
</style>