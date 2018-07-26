<template>
    <div class='listpagewrap'>
        <!--面包屑-->
        <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
        <!--标题-->
        <sinograin-option-title :title="subtitle"></sinograin-option-title>
        <!--按钮组-->
        <div class="buttons">
            <el-radio-group @change="statusChange">
                <el-radio-button label="手工录入" :class="{'active':entryflag==1}"></el-radio-button>
                <el-radio-button label="批量导入" :class="{'active':entryflag==2}"></el-radio-button>
            </el-radio-group>
        </div>
        <!--列表实例-->
        <el-row class="entrt">
            <el-col :span="8">
                <el-col :span="6">
                    <p>检验编号</p>
                </el-col>
                <el-col :span="6">
                    <p>{{this.$route.query.checkPoint}}</p>
                </el-col>
                <el-col :span="6">
                    <p>负责人</p>
                </el-col>
                <el-col :span="6">
                    <p>操作</p>
                </el-col>
            </el-col>
            <el-col :span="8">
                <el-col :span="6">
                    <p>检验编号</p>
                </el-col>
                <el-col :span="6">
                    <p>{{this.$route.query.checkPoint}}</p>
                </el-col>
                <el-col :span="6">
                    <p>负责人</p>
                </el-col>
                <el-col :span="6">
                    <p>操作</p>
                </el-col>
            </el-col>
            <el-col :span="8">
                <el-col :span="6">
                    <p>检验编号</p>
                </el-col>
                <el-col :span="6">
                    <p>{{this.$route.query.checkPoint}}</p>
                </el-col>
                <el-col :span="6">
                    <p>负责人</p>
                </el-col>
                <el-col :span="6">
                    <p>操作</p>
                </el-col>
            </el-col>
        </el-row>
        <el-form class="entryform" v-if="entryflag==1">
            <el-row>
                <el-col :span="8">
                    <el-col :span="6">
                        <p>监20180098</p>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item>
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <p>admin</p>
                    </el-col>
                    <el-col :span="6">
                        <a>删除</a>
                    </el-col>
                </el-col>
                <el-col :span="8">
                    <el-col :span="6">
                        <p>监20180098</p>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item>
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <p>admin</p>
                    </el-col>
                    <el-col :span="6">
                        <a>删除</a>
                    </el-col>
                </el-col>
                <el-col :span="8">
                    <el-col :span="6">
                        <p>监20180098</p>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item>
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <p>admin</p>
                    </el-col>
                    <el-col :span="6">
                        <a>删除</a>
                    </el-col>
                </el-col>
                <el-col :span="8">
                    <el-col :span="6">
                        <a class="add" @click="addstample">+检验编号</a>
                    </el-col>
                    <el-col :span="6">
                    </el-col>
                    <el-col :span="6">
                    </el-col>
                    <el-col :span="6">
                    </el-col>
                </el-col>
                <el-col :span="8">
                    <el-col :span="6">
                    </el-col>
                    <el-col :span="6">
                    </el-col>
                    <el-col :span="6">
                    </el-col>
                    <el-col :span="6">
                    </el-col>
                </el-col>
                <el-col :span="8">
                    <el-col :span="6">

                    </el-col>
                    <el-col :span="6">

                    </el-col>
                    <el-col :span="6">

                    </el-col>
                    <el-col :span="6">

                    </el-col>
                </el-col>
            </el-row>
        </el-form>
        <div class="filein" v-else-if="entryflag==2">
            <div class="filein_box">
                <img src="static/images/comfirmationentry/filein.png" />
                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple :show-file-list="false">
                    <el-button size="small" type="primary">导入文件</el-button>
                </el-upload>
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
        padding-right:0.18rem;
        background-color: #ffe7b8;
        .el-col-8 {
            line-height: 0.5rem;
            text-align: center;
            height: 0.5rem;
            border-right:1px solid white;
            color: #000000;
            &:last-child{
                border-right:none;
            }
            .el-col-6 {
                p {
                    font-size: 0.18rem;
                }
            }
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
            top: 0;
            margin: auto;
            border: 1px solid #e6e7e7;
            img {
                width: 100%;
                height: 100%;
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
        height: 6.2rem;
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
                .el-col-6 {
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
                            width: 1rem;
                            height: 0.3rem;
                            .el-input {
                                width: 100%;
                                height: 100%;
                                input {
                                    width: 100%;
                                    height: 100%;
                                    background-color: #f9f9f9;
                                    vertical-align: top;
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
</style>
<script>
import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import SinograinOptionTitle from "@/components/common/action/OptionTitle";
export default {
    components: { SinograinBreadcrumb, SinograinOptionTitle },
    data() {
        return {
            entryflag: 1,
            breadcrumb: {
                search: true,
                searching: '',
            },
            subtitle: {
                btn: false,
                btntext: '',
            }
        }
    },
    methods: {
        searchingfor() {

        },
        addstample(){
           this.$router.push({ path: '/index/sampleDetection/confirmationList/confirmationdetails/comfirmationentry/addsample',query:{checkPoint:this.$route.query.checkPoint}})
        },
        statusChange() {
            if (this.entryflag == 2) {
                this.entryflag = 1
            } else {
                this.entryflag = 2
            }
        }
    }
}
</script>