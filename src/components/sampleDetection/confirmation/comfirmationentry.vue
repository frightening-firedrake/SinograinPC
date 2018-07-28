<template>
    <div class='listpagewrap'>
        <!--面包屑-->
        <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
        <!--标题-->
        <sinograin-option-title style='margin-bottom:0;' :title="subtitle"></sinograin-option-title>
        <!--按钮组-->
        <div class="buttons">
            <el-radio-group @change="statusChange" v-model="entryflag">
                <el-radio-button label="1" :class="{'active':entryflag==1}">手工录入</el-radio-button>
                <el-radio-button label="2" :class="{'active':entryflag==2}">批量导入</el-radio-button>
            </el-radio-group>
        </div>
        <!--列表实例-->
        <el-form class="entryform" v-if="entryflag==1">
        <el-row class="entrt">
            <el-col :span="8">
                <el-col :span="6">
                    <p>检验编号</p>
                </el-col>
                <el-col :span="8" style="border-bottom:none;">
                    <p>{{this.findCheckPoint()}}</p>
                </el-col>
                <el-col :span="5">
                    <p>负责人</p>
                </el-col>
                <el-col :span="5">
                    <p>操作</p>
                </el-col>
            </el-col>
            <el-col :span="8">
                <el-col :span="6">
                    <p>检验编号</p>
                </el-col>
                <el-col :span="8" style="border-bottom:none;">
                    <p>{{this.findCheckPoint()}}</p>
                </el-col>
                <el-col :span="5">
                    <p>负责人</p>
                </el-col>
                <el-col :span="5">
                    <p>操作</p>
                </el-col>
            </el-col>
            <el-col :span="8">
                <el-col :span="6">
                    <p>检验编号</p>
                </el-col>
                <el-col :span="8" style="border-bottom:none;">
                    <p>{{this.findCheckPoint()}}</p>
                </el-col>
                <el-col :span="5">
                    <p>负责人</p>
                </el-col>
                <el-col :span="5">
                    <p>操作</p>
                </el-col>
            </el-col>
        </el-row>
            <el-row style="border-right:none;">
                <el-col :span="8" v-for="(item,index) in tabledatas" :key="item.id" style="border-right:1px solid rgb(230, 231, 231);">
                    <el-col :span="6" style="border-left:none;">
                        <p>监{{item.sampleNum}}</p>
                    </el-col>
                    <el-col :span="8" style="border-bottom:none;">
                        <!--<el-form-item>-->
                            <el-input v-if="!double" class="import_input" v-model="item.res"></el-input>
                            <el-input v-if="double" style="padding-right:0;" class="import_input double" v-model="item.res"></el-input>
                            <el-input v-if="double" style="padding-left:0;" class="import_input double" v-model="item.res2"></el-input>
                        <!--</el-form-item>-->
                    </el-col>
                    <el-col :span="5">
                        <p>{{userName}}</p>
                    </el-col>
                    <el-col :span="5">
                        <a @click="deleSample(item.id)">删除</a>
                    </el-col>
                </el-col>
                
                <el-col :span="8" style="border-right:1px solid rgb(230, 231, 231);">
                    <el-col :span="6" style="border-left:none;">
                        <a class="add" @click="addstample">+检验编号</a>
                    </el-col>
                    <el-col :span="8" style="border-bottom:none;">
                    </el-col>
                    <el-col :span="5">
                    </el-col>
                    <el-col :span="5">
                    </el-col>
                </el-col>
                <el-col v-if="tabledatas.length%3<2" :span="8" style="border-right:1px solid rgb(230, 231, 231);">
                    <el-col :span="6" style="border-left:none;">
                    </el-col>
                    <el-col :span="8" style="border-bottom:none;">
                    </el-col>
                    <el-col :span="5">
                    </el-col>
                    <el-col :span="5">
                    </el-col>
                </el-col>
                <el-col v-if="tabledatas.length%3==0" :span="8" style="border-right:1px solid rgb(230, 231, 231);">
                    <el-col :span="6" style="border-left:none;">
                    </el-col>
                    <el-col :span="8" style="border-bottom:none;">
                    </el-col>
                    <el-col :span="5">
                    </el-col>
                    <el-col :span="5">
                    </el-col>
                </el-col>
            </el-row>
        </el-form>
        <div class="filein entryform" v-else-if="entryflag==2">
        	
        	<el-row class="entrt">
            <el-col :span="8">
                <el-col :span="6">
                    <p>检验编号</p>
                </el-col>
                <el-col :span="8" style="border-bottom:none;">
                    <p>{{this.findCheckPoint()}}</p>
                </el-col>
                <el-col :span="5">
                    <p>负责人</p>
                </el-col>
                <el-col :span="5">
                    <p>操作</p>
                </el-col>
            </el-col>
            <el-col :span="8">
                <el-col :span="6">
                    <p>检验编号</p>
                </el-col>
                <el-col :span="8" style="border-bottom:none;">
                    <p>{{this.findCheckPoint()}}</p>
                </el-col>
                <el-col :span="5">
                    <p>负责人</p>
                </el-col>
                <el-col :span="5">
                    <p>操作</p>
                </el-col>
            </el-col>
            <el-col :span="8">
                <el-col :span="6">
                    <p>检验编号</p>
                </el-col>
                <el-col :span="8" style="border-bottom:none;">
                    <p>{{this.findCheckPoint()}}</p>
                </el-col>
                <el-col :span="5">
                    <p>负责人</p>
                </el-col>
                <el-col :span="5">
                    <p>操作</p>
                </el-col>
            </el-col>
        </el-row>
            <el-row style="border-right:none;">
                <el-col :span="8" v-for="(item,index) in tabledatas2" :key="item.id" style="border-right:1px solid rgb(230, 231, 231);">
                    <el-col :span="6" style="border-left:none;">
                        <p>监{{item.sampleNum}}</p>
                    </el-col>
                    <el-col :span="8" style="border-bottom:none;">
                        <!--<el-form-item>-->
                            <el-input v-if="!double" class="import_input" v-model="item.res"></el-input>
                            <el-input v-if="double" style="padding-right:0;" class="import_input double" v-model="item.res"></el-input>
                            <el-input v-if="double" style="padding-left:0;" class="import_input double" v-model="item.res2"></el-input>
                            
                        <!--</el-form-item>-->
                    </el-col>
                    <el-col :span="5">
                        <p>{{userName}}</p>
                    </el-col>
                    <el-col :span="5">
                        <a @click="deleSample2(item.id)">删除</a>
                    </el-col>
                </el-col>
                
                <!--<el-col :span="8" style="border-right:1px solid rgb(230, 231, 231);">
                    <el-col :span="6" style="border-left:none;">
                        <a class="add" @click="addstample">+检验编号</a>
                    </el-col>
                    <el-col :span="8">
                    </el-col>
                    <el-col :span="5">
                    </el-col>
                    <el-col :span="5">
                    </el-col>
                </el-col>-->
                <el-col v-if="tabledatas2.length%3!=0" :span="8" style="border-right:1px solid rgb(230, 231, 231);">
                    <el-col :span="6" style="border-left:none;">
                    </el-col>
                    <el-col :span="8" style="border-bottom:none;">
                    </el-col>
                    <el-col :span="5">
                    </el-col>
                    <el-col :span="5">
                    </el-col>
                </el-col>
                <el-col v-if="tabledatas2.length%3==1" :span="8" style="border-right:1px solid rgb(230, 231, 231);">
                    <el-col :span="6" style="border-left:none;">
                    </el-col>
                    <el-col :span="8" style="border-bottom:none;">
                    </el-col>
                    <el-col :span="5">
                    </el-col>
                    <el-col :span="5">
                    </el-col>
                </el-col>
            </el-row>
        	
            <div class="filein_box" v-if="!tabledatas2.length">
            	<template v-if="daoru">
	                <img class="importicon" :src="importicon" alt="" />
	                <p class="message">请点击“导入文件”按钮导入文件</p>
            		<div class="btnswrap">
            			<span class="btnl" @click="download">下载模板</span>
            			<el-upload class="btnr" :action="uploadURL" :headers="{'Authorization':Token}" multiple :show-file-list="false">
		                                     导入文件
		                </el-upload>
            		</div>
            	</template>
            	<template v-else>
	                <img class="importicon" :src="importicon2" alt="" />
	                <p class="message" style="margin:0.25rem 0 0.3rem;">该检验项目暂未开放批量导入功能</p>
	                <p class="message2">敬请期待</p>
            		
            	</template>

                
            </div>
        </div>
        <div id='printbuttom' class="leading_out entry_out" v-if="entryflag==1">
            <!--<div class="leading_out" @click="lodopPrint()">-->
            <!--<span>打印样品领取交接单</span>-->
            <span>提交检测数据</span>
        </div>
    </div>
</template>
<style lang="scss">
.listpagewrap {
    .entrt {
        /*padding-right:0.18rem;*/
        background-color: #ffe7b8;
        .el-col-8 {
            line-height: 0.5rem;
            text-align: center;
            height: 0.5rem;
            /*border-right:1px solid white;*/
            color: #000000;
            &:last-child{
                border-right:none;
            }
            /*.el-col-6 {*/
                p {
                    font-size: 0.18rem;
                }
            /*}*/
        }
    }
    .entry_out {
        float: right;
    }
    .filein {
        width: 100%;
        height: 6.2rem;
        border: 1px solid #e6e7e7;
        position: relative;
        .filein_box {
            width: 6.04rem;
            height: 3.51rem;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0.5rem;
            margin: auto;
            border: 1px solid #e6e7e7;
            .importicon {
                width: 2rem;
                height: 1.4rem;
                margin:0.4rem auto 0.1rem;
                display: block;
            }
            .message{
            	font-size:0.2rem;
            	color:#666;
            	text-align: center;
            	margin-bottom:0.4rem;
            }
            .message2{
            	font-size:0.2rem;
            	color:#2d82e2;
            	text-align: center;
            	line-height:0.35rem;
            }
            .btnswrap{
            	height:0.35rem;
            	width:100%;
            	text-align:center;
            	.btnl{
            		height:0.35rem;
            		line-height: 0.35rem;
            		width:1.26rem;
            		text-align: center;
            		color:#58b481;
            		border:1px solid #58b481;
            		background-color:white;
            		margin:0 0.1rem;
            		border-radius: 0;
                	display: inline-block;
                	cursor:pointer;
            	}
            	.btnr{
            		height:0.35rem;
            		line-height: 0.35rem;
            		width:1.26rem;
            		text-align: center;
            		color:white;
            		border:1px solid #58b481;
            		background-color:#58b481;
            		margin:0 0.1rem;
            		border-radius: 0;
                	display: inline-block;
                	cursor:pointer;
            	}
            	.el-upload:focus{
            		color:white;
            	}
            }
            .upload-demo {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0.5rem;
                .el-upload {
                    display: block;
                    margin: 0 auto;
                    .el-button {
                        width: 1.25rem;
                        height: 0.35rem;
                        background-color: #58b481;
                        font-size: 0.18rem;
                        border-color: transparent;
                    }
                }
            }
        }
    }
    .entryform {
        height: 5rem;
        border: 1px solid #e6e7e7;
        overflow-y: scroll;
        .el-row {
            height: 0.5rem;
            border-right: 1px solid #e6e7e7;
            .el-col-8 {
                border-bottom: 1px solid #e6e7e7;
                height: 0.5rem;
                &:first-child{
                    .el-col-6:first-child{
                        border-left:none;
                    }
                }
                .el-col-6,.el-col-8,.el-col-5 {
                    height: 0.5rem;
                    text-align: center;
                    line-height: 0.5rem;
                    border-left: 1px solid #e6e7e7;
                    .add {
                        color: #58b481;
                    }
                    p {
                        font-size: 0.16rem;
                        height: 100%;
                    }
                    a {
                        color: #d22424;
                        font-size: 0.16rem;
                        cursor: pointer;
                    }
                    .el-form-item {
                        height: 100%;
                        padding: 0.09rem 0.17rem 0.09rem 0.16rem;
                        margin: 0;
                        .el-form-item__content {
                            /*width: 1rem;*/
                            height: 0.3rem;
                            .el-input {
                                width: 100%;
                                height: 100%;
                                input {
                                    width: 100%;
                                    height: 100%;
                                    background-color: #f9f9f9;
                                    vertical-align: top;
                            		border-radius:0;
                					font-size: 0.16rem;
                					text-align: center;
                					padding:0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

.buttons {
    height: 0.55rem;
    line-height: 0.55rem;
    .el-radio-group {
        .el-radio-button {
            width: 1.7rem;
            height: 0.3rem;
            border-radius: 5px;
            border: 1px solid #d5d5d5;
            text-align: center;
            overflow: hidden;
            &:last-child {
                margin-left: 0.1rem;
            }
            &.active {
                border-color: #2d82e2;
                .el-radio-button__inner {
                    color: white;
                    background-color: #2d82e2;
                    &:hover {
                        color: white;
                    }
                }
            }
            .el-radio-button__inner {
                border: none;
                width: 100%;
                height: 100%;
                font-size: 0.16rem;
                line-height: 1.5;
                padding: 0;
                &:hover {
                    color: #606266;
                }
            }
        }
    }
}
.import_input{
	padding: 0.09rem 0.17rem 0.09rem 0.16rem;
	width:100%;
	height:100%;
	font-size:0.16rem;
	text-align: center;
}
.import_input input {
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
    vertical-align: top;
	border-radius:0;
	font-size: 0.16rem;
	text-align: center;
    padding:0;
}
.double.el-input{
    width: 47%!important;
}
</style>
<script>
import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import SinograinOptionTitle from "@/components/common/action/OptionTitle";
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
    components: { SinograinBreadcrumb, SinograinOptionTitle },
    computed:{
		...mapGetters(["Token","userName"]),
    },
    created(){
    	this.setUploadURL();
    },
    data() {
        return {
        	importicon:'static/images/comfirmationentry/importicon.png',
        	importicon2:'static/images/comfirmationentry/importicon2.png',
        	uploadURL:'',
        	downloadURL:'',
            entryflag: 1,
            double:false,
            daoru:false,
            breadcrumb: {
                search: true,
                searching: '',
            },
            subtitle: {
            	name:'录入'+this.$route.query.sort+'检测数据',
                btn: false,
                btntext: '',
            },
            tabledatas:[
            	{sampleNum:2018010001,res:'我是数据',res2:'我是数据2',fzr:'李建波',id:1},
            	{sampleNum:2018010002,res:'我是模拟数据',res2:'我是数据2',fzr:'李建波',id:2},
            	{sampleNum:2018010009,res:'我是假数据',res2:'我是数据2',fzr:'李建波',id:3},
            	{sampleNum:2018010011,res:'我也不是真数据',res2:'我是数据2',fzr:'李建波',id:4},
            ],
            tabledatas2:[
            	{sampleNum:2018010001,res:'我是数据',res2:'我是数据2',fzr:'李建波',id:1},
            	{sampleNum:2018010002,res:'我是模拟数据',res2:'我是数据2',fzr:'李建波',id:2},
            	{sampleNum:2018010009,res:'我是假数据',res2:'我是数据2',fzr:'李建波',id:3},
            	{sampleNum:2018010011,res:'我也不是真数据',res2:'我是数据2',fzr:'李建波',id:4},
            ],
        }
    },
    methods: {
		findCheckPoint() {
			var num=this.$route.query.checkPoint;
//			var checkList=["容重","水分","杂质(矿物质)","不完善粒(生霉粒)","色泽气味(质量指标)","面筋吸水量","脂肪酸值","品尝评分值","色泽气味(储存品质指标)","真菌毒素(黄曲霉毒素B1、脱氧雪腐、镰刀菌烯醇、玉米赤霉烯酮)","重金属(铅、镉、汞、砷)"];	
			var checkList=["容重","水分","杂质(矿物质)","不完善粒(生霉粒)","色泽气味(质量)","面筋吸水量","脂肪酸值","品尝评分值","色泽气味(品质)","真菌毒素","重金属"];	
//  		uploadURL
    		return checkList[num-1]
		},
        searchingfor() {

        },
        addstample(){
           this.$router.push({ path: '/index/sampleDetection/confirmationList/confirmationdetails/comfirmationentry/addsample',query:{checkPoint:this.$route.query.checkPoint}})
        },
        statusChange() {
//          if (this.entryflag == 2) {
//              this.entryflag = 1
//          } else {
//              this.entryflag = 2
//          }
        },
        deleSample(id){
        	this.$confirm('此操作将删除该样品, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.tabledatas=this.tabledatas.filter((value,index)=>{
	        		return value.id!==id;
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
        deleSample2(id){
        	this.$confirm('此操作将删除该样品, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.tabledatas2=this.tabledatas2.filter((value,index)=>{
	        		return value.id!==id;
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
        download(){
        	var loadiframe=document.getElementById('fordownload');
			loadiframe.src=this.downloadURL+'?sessionid='+this.Token;
        },
        setUploadURL(){
    		var num=this.$route.query.checkPoint;
    		var sort=this.$route.query.sort;
    		if(num==2){
    			this.daoru=false;
           		this.double=false;
    			this.uploadURL=this.apiRoot + '/grain/import/importExcelSF';
    			this.downloadURL=this.apiRoot + '/grain/import/downloadSF';
    		}else if(num==4){
    			if(sort=="玉米"){
           			this.double=true;
    				this.uploadURL=this.apiRoot + '/grain/import/importExcelBWSLYM';    			
    				this.downloadURL=this.apiRoot + '/grain/import/downloadBWSLYM';
    			}else{
           			this.double=false;
    				this.uploadURL=this.apiRoot + '/grain/import/importExcelBWSLXM';    			
    				this.downloadURL=this.apiRoot + '/grain/import/downloadBWSLXM';
    			}
    			this.daoru=true;
    		}else if(num==6){
    			this.daoru=false;
           		this.double=false;
    			this.uploadURL=this.apiRoot + '/grain/import/importExcelMJXS'; 			
    			this.downloadURL=this.apiRoot + '/grain/import/downloadMJXS';
    		}else if(num==7){
    			this.daoru=false;
           		this.double=false;
    			this.uploadURL=this.apiRoot + '/grain/import/importExcelZFSZ';    			
    			this.downloadURL=this.apiRoot + '/grain/import/downloadZFSZ';
    		}else{
    			this.daoru=false;
           		this.double=false;
    			this.uploadURL='';
    			this.downloadURL='';
    		}
    	}
    },
   
}
</script>