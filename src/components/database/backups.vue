<template>
    <div class="database_list option_title_agg">
        <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
        <lemon-option-title :actions="title_actions"></lemon-option-title>
        <lemon-form :forms="form" :btn="btn"></lemon-form>
    </div>
</template>

<script>
import LemonForm from "@/components/common/action/Form"
import LemonOptionTitle from "@/components/common/action/OptionTitle"
import LemonBreadcrumb from '@/components/common/action/Breadcrumb.vue';
export default {
    components: { LemonForm, LemonOptionTitle, LemonBreadcrumb },
    data() {
        return {
            title_actions: {
                hid: false,
                scaling: false,
                close: true,
            },
            breadcrumb: {
                search: true,
            },
            form: {
                name: {
                    label: "备份数据库",
                    text: "",
                    type: "text",
                    default: "请输入文件名"
                },
                fath: {
                    label: "分卷备份，文件长度",
                    text: "",
                    type: "select",
                    selected: "分卷备份",
                    childrens: [
                        {
                            label: "2048k",
                            value: 1
                        },
                        {
                            label: "2048k",
                            value: 2
                        }
                    ]
                },
                remarks: {
                    label: "备注",
                    text: "",
                    type: "remarks",
                    default: "请输入备注"
                },
            },
            btn: {
                succse: "开始备份"
            }
        }
    }
} 
</script>
