<template>
    <!--<el-form ref="form" :inline-message="errorinline"  :rules="rules" :model="formdatas.form" :label-width="labelWidth">-->
    <div>

        <el-form class="connect_form">
            <template>
                <p>{{formdatas.title}}</p>
            </template>
            <el-row class="connect">
                <el-col :span="24" class="connect_fath">
                    <el-col :span="12">
                        <!--<el-col :span="7" class="connect_font connect_font_title">
                            <span>样品领取交接单名称:</span>
                        </el-col>
                        <el-col :span="17" class=" connect_font connect_font_content">
                            <el-form-item label="" prop="pnumber"  class="three">
                                <el-input v-model="formdatas.form.pnumber" :disabled="disabled"></el-input>
                            </el-form-item>
                        </el-col>-->
                        <el-form-item label="样品领取交接单名称:" prop="name"  class=" connect_font connect_font_title">
                            <el-input v-model="formdatas.form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <!--<el-col :span="7" class=" connect_font connect_font_title">
                            <span>样品管理员:</span>
                        </el-col>
                        <el-col :span="17" class="connect_font connect_font_content">
                            <span>张海新</span>
                        </el-col>-->
                        <el-form-item label="样品管理员:" prop="manager"  class=" connect_font connect_font_title">
                                <el-input v-model="formdatas.form.manager"></el-input>
                            </el-form-item>
                    </el-col>
                </el-col>
                <el-col :span="24" class=" connect_fath">
                    <el-col :span="12">
                        <el-form-item label="备注:" prop="remarks"  class=" connect_font connect_font_title">
                                <el-input v-model="formdatas.form.remarks"></el-input>
                        </el-form-item>
                    </el-col>
                </el-col>
            </el-row>
            <el-row class="project">
                
                <el-col :span="15" class="classify_num">
                    <el-col :span="2">
                        <span>序号</span>
                    </el-col>
                    <el-col :span="10">
                        <el-col :span="18" style="padding-right:12px;">
                            <span>检验编号</span>
                        </el-col>
                        <!--<el-col :span="8" style="padding-right:6px;">
                            <span>扦样编号</span>
                        </el-col>-->
                        <el-col :span="6" style="padding-right:12px;">
                            <span>操作</span>
                        </el-col>
                    </el-col>
                    <el-col :span="2" style="padding-right:12px;">
                        <span>序号</span>
                    </el-col>
                    <el-col :span="10">
                    	<el-col :span="18" style="padding-right:15px;">
                            <span>检验编号</span>
                        </el-col>
                        <!--<el-col :span="8" style="padding-right:15px;">
                            <span>扦样编号</span>
                        </el-col>-->
                        <el-col :span="6" style="padding-right:24px;">
                            <span>操作</span>
                        </el-col>
                        <!--<el-col :span="16" style="padding-right:5px;">
                            <span>检验编号</span>
                        </el-col>
                        <el-col :span="8" style="padding-right:12px;">
                            <span>操作</span>
                        </el-col>-->
                    </el-col>
                </el-col>
                <el-col :span="9" class="classify">
                    <span>检验项目</span>
                </el-col>
                
            </el-row>
            <div class="clear"></div>
            <el-row class="project_details">
                
                <el-col :span="15" class="classify_num" style="overflow-y: scroll; overflow-x: hidden;"> 
                	<div class="wrapbox">
                		<template v-for="(item,index) in formdatas.items">
		                    <el-col :span="12" class="classify_hao">
		                        <el-col :span="4">
		                            <span>{{index+1}}</span>
		                        </el-col>
		                        <el-col :span="20">
		                            <el-col :span="18" class="classify_font">
		                                <span>{{item.sampleNum}}</span>
		                            </el-col>
		                            <!--<el-col :span="8" class="">
		                                <span>{{item.sampleWord}}</span>
		                            </el-col>-->
		                            <el-col :span="6" class="operation">
		                                <span @click="deleteItem(index)">删除</span>
		                            </el-col>
		                        </el-col>
		                    </el-col>                			
                		</template>
	                    
	                    <el-col :span="12" class="classify_hao">
							<el-col :span="4">
	                            <span>&nbsp;</span>
	                        </el-col>
	                        <el-col :span="20">
	                            <el-col :span="18" class="classify_font">
	                                <span @click="new_sample()" class="new_sample">+新建样品</span>
	                            </el-col>
	                            <el-col :span="6" class="operation">
	                                <span>&nbsp;</span>
	                            </el-col>
	                        </el-col>
	                    </el-col>
	                    <div class="clear"></div>
                	</div>
                </el-col>
                
                <el-col :span="9" class="classify">
                	<el-checkbox-group v-model="formdatas.checkList">
                		<el-checkbox label="不完善颗粒、杂质、生霉粒" class="classify_col"></el-checkbox>
					    <el-checkbox label="水分" class="classify_col"></el-checkbox>
					    <el-checkbox label="硬度" class="classify_col"></el-checkbox>
					    <el-checkbox label="脂肪酸值" class="classify_col"></el-checkbox>
					    <el-checkbox label="品尝评分" class="classify_col"></el-checkbox>
					    <el-checkbox label="卫生" class="classify_col"></el-checkbox>
					    <el-checkbox label="加工品质" class="classify_col"></el-checkbox>
					</el-checkbox-group>
                   
                </el-col>
            </el-row>
            <div class="leading_out" v-on:click="createlib">
                <span>生成样品领取交接单</span>
            </div>
        </el-form>

    </div>
</template>
<script>
import "@/assets/style/common/HandoverConnect.css"


export default {

    props: ["formdatas"],
    methods: {
        //新建样品
        new_sample() {
            this.$router.push({ path: '/index/sampleManagement/handover/handoverListCreate/handoverListCreateSelect' })
        },
        
        deleteItem(id){
        	this.formdatas.items=this.formdatas.items.filter((value,index)=>{
        		return index!==id;
        	})
        },
        createlib(){
        	this.$emit('createlib')
        },
    },
    data() {
        return {

        }
    }
}
</script>
