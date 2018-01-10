<template>
    <!--<el-form ref="form" :inline-message="errorinline"  :rules="rules" :model="formdatas.form" :label-width="labelWidth">-->
    <el-form class="connect_form">
        <template>
            <p>{{formdatas.title}}</p>
        </template>
        <el-row class="connect">
            <el-col :span="24" class="connect_fath">
                <el-col :span="12">
                    <el-col :span="7" class="connect_font connect_font_title">
                        <span>样品领取交接单名称:</span>
                    </el-col>
                    <el-col :span="17" class=" connect_font connect_font_content">
                        <span>玉米</span>
                    </el-col>
                </el-col>
                <el-col :span="12">
                    <el-col :span="7" class=" connect_font connect_font_title">
                        <span>样品管理员:</span>
                    </el-col>
                    <el-col :span="17" class="connect_font connect_font_content">
                        <span>张海新</span>
                    </el-col>
                </el-col>
            </el-col>
            <el-col :span="24" class=" connect_fath">
                <el-col :span="12">
                    <el-col :span="7" class="connect_font connect_font_title">
                        <span>备注:</span>
                    </el-col>
                    <el-col :span="17" class="connect_font connect_font_content">
                        <span>分两份不完善粒平行小样，其他按国标法分样。</span>
                    </el-col>
                </el-col>
            </el-col>
        </el-row>
        <el-row class="project">
            <el-col :span="9" class="classify">
                <span>检验项目</span>
            </el-col>
            <el-col :span="15" class="classify_num">
                <el-col :span="2">
                    <span>序号</span>
                </el-col>
                <el-col :span="10">
                    <el-col :span="16">
                        <span>样品编号</span>
                    </el-col>
                    <el-col :span="8">
                        <span>操作</span>
                    </el-col>
                </el-col>
                <el-col :span="2">
                    <span>序号</span>
                </el-col>
                <el-col :span="10">
                    <el-col :span="16">
                        <span>样品编号</span>
                    </el-col>
                    <el-col :span="8">
                        <span>操作</span>
                    </el-col>
                </el-col>
            </el-col>
        </el-row>
        <div class="clear"></div>
        <el-row class="project_details">
            <el-col :span="9" class="classify">
                <el-col :span="24" class="classify_col">
                    <el-checkbox>水分</el-checkbox>
                </el-col>
                <el-col :span="24" class="classify_col">
                    <el-checkbox>不完善粒</el-checkbox>
                </el-col>
                <el-col :span="24" class="classify_col">
                    <el-checkbox>生霉粒指标</el-checkbox>
                </el-col>
                <el-col :span="24" class="classify_col">
                    <el-checkbox>质量、品质全项目指标</el-checkbox>
                </el-col>
                <el-col :span="24" class="classify_col">
                    <el-checkbox>水分</el-checkbox>
                </el-col>
                <el-col :span="24" class="classify_col">
                    <el-checkbox>不完善粒</el-checkbox>
                </el-col>
                <el-col :span="24" class="classify_col">
                    <el-checkbox>不完善粒</el-checkbox>
                </el-col>
                <el-col :span="24" class="classify_col">
                    <el-checkbox>质量、品质全项目指标</el-checkbox>
                </el-col>
                <el-col :span="24" class="classify_col">
                    <el-checkbox>水分</el-checkbox>
                </el-col>
                <el-col :span="24" class="classify_col">
                    <el-checkbox>不完善粒</el-checkbox>
                </el-col>
                <el-col :span="24" class="classify_col">
                    <el-checkbox>水分</el-checkbox>
                </el-col>
                <el-col :span="24" class="classify_col">
                    <el-checkbox>质量、品质全项目指标</el-checkbox>
                </el-col>
            </el-col>
            <el-col :span="15" class="classify_num">
                <el-col :span="2" class="classify_font">
                    <el-col :span="24">
                        <span>01</span>
                    </el-col>
                    <el-col :span="24">
                        <span>01</span>
                    </el-col>
                    <el-col :span="24">
                        <span>01</span>
                    </el-col>

                </el-col>
                <el-col :span="10">
                    <el-col :span="16" class="classify_font">
                        <el-col :span="24">
                            <span>监20170094</span>
                        </el-col>
                        <el-col :span="24">
                            <span>监20170094</span>
                        </el-col>
                        <el-col :span="24">
                            <span>监20170094</span>
                        </el-col>
                    </el-col>
                    <el-col :span="8" class="classify_font operation">
                        <el-col :span="24">
                            <span>删除</span>
                        </el-col>
                        <el-col :span="24">
                            <span>删除</span>
                        </el-col>
                        <el-col :span="24">
                            <span>删除</span>
                        </el-col>

                    </el-col>
                </el-col>
                <el-col :span="2" class="classify_font">
                    <el-col :span="24">
                        <span>02</span>
                    </el-col>
                    <el-col :span="24">
                        <span>02</span>
                    </el-col>
                    <el-col :span="24">
                        <span>02</span>
                    </el-col>
                </el-col>
                <el-col :span="10">
                    <el-col :span="16" class="classify_font">
                        <el-col :span="24">
                            <span>咸阳-玉米-199</span>
                        </el-col>
                        <el-col :span="24">
                            <span>咸阳-玉米-199</span>
                        </el-col>
                        <el-col :span="24" class="new_sample">
                            <span>+新建样品</span>
                        </el-col>

                    </el-col>
                    <el-col :span="8" class="classify_font operation">
                        <el-col :span="24">
                            <span>删除</span>
                        </el-col>
                        <el-col :span="24">
                            <span>删除</span>
                        </el-col>
                        <el-col :span="24">
                            <span>&nbsp;</span>
                        </el-col>
                    </el-col>
                </el-col>
            </el-col>
        </el-row>
        <div class="leading_out">
            <span>生成样品领取交接单</span>
        </div>
    </el-form>
</template>
<script>
import "@/assets/style/common/HandoverConnect.css"
export default {
    props: ["formdatas"],
}
</script>
