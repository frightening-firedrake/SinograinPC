<template>
    <div class='listpagewrap'>
        <!--面包屑-->
        <sinograin-breadcrumb :breadcrumb="breadcrumb"></sinograin-breadcrumb>
        <!--表格上的时间选框以及 创建-->
        <list-header :listHeader="listHeader"></list-header>
    </div>
</template>

<script>
import SinograinList from "@/components/common/action/List.vue";
import SinograinBreadcrumb from "@/components/common/action/Breadcrumb.vue";
import ListHeader from "@/components/common/action/ListHeader.vue";
export default {
  components: { SinograinList, SinograinBreadcrumb, ListHeader },
  data() {
    return {
      breadcrumb: {
        search: false,
        searching: ""
      },
      //    表格数据
      listHeader: {
        createlib: false,
        createSampling: false,
        status: false,
        date: false,
        subtitle: true,
        title: this.$route.query.title.tablename
      }
    };
  }
};
</script>

<style>
</style>
