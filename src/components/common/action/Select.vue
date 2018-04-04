<template>
    <div class="common_select">
        <label>
            <span class="title_select" >选择直属库:</span>
            <el-select v-model="region" @change="select(1)" placeholder="全部" >
                <!--<el-option value="全部"></el-option>-->
                <el-option v-for="item in options" :key="item.id"  :value="item.libraryName">
                </el-option>
            </el-select>
        </label>
        <!--<label>
                        <span class="title_select">选择库点:</span>
                        <el-select v-model="point" @change="select(2)" collapse-tags placeholder="全部">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </label>
                    <label>
                        <span class="title_select">选择货位号:</span>
                        <el-select v-model="number" @change="select(3)" collapse-tags placeholder="全部">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </label>-->
    </div>
</template>


<script>
import "@/assets/style/common/Select.scss";
export default {
    props: ["formdatas"],
    created() {
         this.$http({
                    method: 'post',
                    url: this.apiRoot + "/grain/library/data",
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    data: {
                    }
                }).then(function(res) {
                    this.options = res.data.rows.filter((i, v) => {
                        return i.pLibraryId == -1
                    })
                    console.log(this.options)
                }.bind(this)).catch(function(error) {
                    console.log(error);
                }.bind(this));
    },
    mounted: function() {
        
        //		console.log(this.formdatas)
    },
    computed: {

    },
    data() {

        return {

            options: "",
            region: [],
            point: [],
            number: []
        }
    },
    methods: {
        // 任务筛选
        task() {
           
        },
        select(num) {
            switch (num) {
                // 直属库
                case 1:

                    break;
            }
            // if (num == 3) {
            //     this.$emit("_select", `${this.region}${this.point}${this.number}`)
            // }
        }
    }

}
</script>

