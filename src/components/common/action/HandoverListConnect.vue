<template>
    <!--<el-form ref="form" :inline-message="errorinline"  :rules="rules" :model="formdatas.form" :label-width="labelWidth">-->
    <div>
        <!--新建库典弹框-->
        <sinograin-modal :modal="modal" v-if="modalVisible" v-on:createlibitem="createlibitem" v-on:dialogClose="dialogClose"></sinograin-modal>

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
                        <el-form-item label="样品领取交接单名称:" prop="pnumber"  class=" connect_font connect_font_title">
                                <el-input></el-input>
                            </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <!--<el-col :span="7" class=" connect_font connect_font_title">
                            <span>样品管理员:</span>
                        </el-col>
                        <el-col :span="17" class="connect_font connect_font_content">
                            <span>张海新</span>
                        </el-col>-->
                        <el-form-item label="样品管理员:" prop="pnumber"  class=" connect_font connect_font_title">
                                <el-input></el-input>
                            </el-form-item>
                    </el-col>
                </el-col>
                <el-col :span="24" class=" connect_fath">
                    <el-col :span="12">
                        <el-form-item label="备注:" prop="pnumber"  class=" connect_font connect_font_title">
                                <el-input></el-input>
                            </el-form-item>
                        <!--<el-col :span="7" class="connect_font connect_font_title">
                            <span>备注:</span>
                        </el-col>
                        <el-col :span="17" class="connect_font connect_font_content">
                            <span>分两份不完善粒平行小样，其他按国标法分样。</span>
                        </el-col>-->
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
                    <el-col :span="12" class="classify_hao">
                        <el-col :span="4">
                            <span>01</span>
                        </el-col>
                        <el-col :span="20">
                            <el-col :span="16" class="classify_font">
                                <span>监20170094</span>
                            </el-col>
                            <el-col :span="8" class="operation">
                                <span>删除</span>
                            </el-col>
                        </el-col>
                    </el-col>
                    <el-col :span="12" class="classify_hao">
                        <el-col :span="4">
                            <span>01</span>
                        </el-col>
                        <el-col :span="20">
                            <el-col :span="16" class="classify_font">
                                <span>监20170094</span>
                            </el-col>
                            <el-col :span="8" class="operation">
                                <span>删除</span>
                            </el-col>
                        </el-col>
                    </el-col>
                    <el-col :span="12" class="classify_hao">
                        <el-col :span="4">
                            <span>01</span>
                        </el-col>
                        <el-col :span="20">
                            <el-col :span="16" class="classify_font">
                                <span>监20170094</span>
                            </el-col>
                            <el-col :span="8" class="operation">
                                <span>删除</span>
                            </el-col>
                        </el-col>
                    </el-col>
                    <el-col :span="12" class="classify_hao">
                        <el-col :span="4">
                            <span>01</span>
                        </el-col>
                        <el-col :span="20">
                            <el-col :span="16" class="classify_font ">
                                <span @click="new_sample()" class="new_sample">+新建样品</span>
                            </el-col>
                            <el-col :span="8" class="operation">
                                <span>&nbsp;</span>
                            </el-col>
                        </el-col>
                    </el-col>
                    <!--<el-col :span="2" class="classify_font">
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
                                    <span  @click="new_sample()">+新建样品</span>
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
                        </el-col>-->
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
import SinograinModal from '@/components/common/action/Modal.vue';

export default {
    components: { SinograinModal },
    props: ["formdatas"],
    methods: {
        //新建样品
        new_sample() {
            this.$router.push({ path: '/index/sampleManagement/handover/handoverListCreate/handoverListCreateSelect' })
        },
        //	打开新建弹框
        createlib() {
            this.modalVisible = true;
        },
        //	填入新建数据
        createlibitem(unit, lib) {
            console.log(unit, lib);
        },
        //	关闭新建弹框
        dialogClose() {
            this.modalVisible = false;
        },
    },
    data() {
        return {
            modalVisible: false,
            modal: {
                title: '新建库点',
                formdatas: [
                    {
                        label: "领取人",
                        model: "unit",
                    },
                ],
                submitText: '提交',
            },
        }
    }
}
</script>
