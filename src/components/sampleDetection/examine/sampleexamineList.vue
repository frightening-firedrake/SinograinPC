<template>
  <div class='listpagewrap'>
    <!--面包屑-->
    <sinograin-breadcrumb :breadcrumb="breadcrumb"></sinograin-breadcrumb>
    <!--alert-->
    <!--<sinograin-prompt :alerts="alerts"></sinograin-prompt>-->
    <!--表格上的时间选框以及 创建-->
    <list-header :listHeader="listHeader"></list-header>
    <!--表格-->
    <sinograin-list class="list" :librarylist='librarylist' :tabledata="tabledatas" :items="items" :actions="actions" v-on:getchecked="getchecked" :loading="loading" v-on:emptyCreate="emptyCreate">
    </sinograin-list>
    <!--分页-->
    <sinograin-pagination :page="page" v-on:paginationEvent="paginationEvent" v-on:getCurrentPage="getCurrentPage"></sinograin-pagination>
  </div>
</template>

<script>
import SinograinList from "@/components/common/action/List.vue";
import SinograinBreadcrumb from "@/components/common/action/Breadcrumb.vue";
import SinograinPagination from "@/components/common/action/Pagination.vue";
import ListHeader from "@/components/common/action/ListHeader.vue";
export default {
  components: {
    SinograinList,
    ListHeader,
    SinograinBreadcrumb,
    SinograinPagination
  },
  data() {
    return {
      //    分页数据
      page: {
        size: 10,
        total: 0,
        currentPage: 1,
        show: true,
        tfootbtns: {
          btns: false, //是否添加按钮组
          leading_out: false, //导出按钮
          refresh: false, //刷新按钮
          delete: false //删除按钮
        }
      },
      dataUrl: "/liquid/sampleexamine/data",
      loading: false,
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
      },
      tabledatas: [],
      librarylist: [],
      actions: {
        selection: false,
        number: false,
        message: false,
        view: false,
        edit: false,
        dele: false
      },
      items: [
        {
          id: 1,
          prop: "sampleNum",
          label: "样品编号"
          //   status: true
          //      sort:true,
        },
        {
          id: 2,
          prop: "sample",
          label: "品种",
          sort: false
        },
        {
          id: 3,
          prop: "people",
          label: "检测人员",
          sort: false
        },
        {
          id: 4,
          prop: "state",
          label: "状态",
          sort: false
        },
        {
          id: 5,
          prop: "applyTime",
          label: "申请日期",
          sort: false
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  created() {
    //  获取列表数据（第一页）
    // this.getlibrarylist()
    //	移除监听事件
    this.$root.eventHub.$off("delelistitem");
    this.$root.eventHub.$off("viewlistitem");
    //	监听列表点击查看事件
    this.$root.eventHub.$on(
      "viewlistitem",
      function(id, row) {
        //		console.log(row)
        this.$router.push({
          path:
            "/index/sampleDetection/examineList/sampleexamineList/examineLisrdetail",
          query: { title: this.$route.query.title }
        });
      }.bind(this)
    );
  },
  methods: {
    paginationEvent(){},
    getCurrentPage(){},
    getchecked() {},
    emptyCreate() {},
    init() {
      this.$http({
        method: "post",
        url: this.dataUrl,
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
        .then(
          function(response) {
            response.data.rows.forEach(element => {
              element.sample = element.sample == 1 ? "小麦" : "玉米";
              element.state = element.state == 1 ? "未完成" : "完成";
            });

            this.tabledatas = response.data.rows;
            this.loading = false;
          }.bind(this)
        )
        .catch(
          function(error) {
            console.log(error);
          }.bind(this)
        );
    }
  }
};
</script>

<style>
</style>

