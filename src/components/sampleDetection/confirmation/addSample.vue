<template>
    <div class='listpagewrap'>
        <!--面包屑-->
        <sinograin-breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></sinograin-breadcrumb>
        <!--标题-->
        <sinograin-option-title :title="subtitle"></sinograin-option-title>
    </div>
</template>
<script>
import SinograinBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import SinograinOptionTitle from "@/components/common/action/OptionTitle";
export default {
    components: { SinograinBreadcrumb, SinograinOptionTitle },
    data() {
        return {
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
        searchingfor: {

        }
    }
}
</script>