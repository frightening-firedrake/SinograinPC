<template>
    <div class="common_select">
        <label>
            <span class="title_select">选择地区:</span>
            <el-select v-model="region" @change="select(1)" placeholder="全部">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </label>
        <label>
            <span class="title_select">选择库点:</span>
            <el-select v-model="point" @change="select(2)"  collapse-tags placeholder="全部">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </label>
        <label>
            <span class="title_select">选择货位号:</span>
            <el-select v-model="number" @change="select(3)"  collapse-tags placeholder="全部">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </label>
    </div>
</template>


<script>
import "@/assets/style/common/Select.scss";
export default {
    props: ["formdatas"],
    created() {

    },
    mounted: function() {
        //		console.log(this.formdatas)
    },
    computed: {

    },
    data() {

        return {

            options: [{
                value: '黄金糕',
                label: '黄金糕'
            }, {
                value: '双皮奶',
                label: '双皮奶'
            }, {
                value: '蚵仔煎',
                label: '蚵仔煎'
            }, {
                value: '龙须面',
                label: '龙须面'
            }, {
                value: '北京烤鸭',
                label: '北京烤鸭'
            }],
            region: [],
            point: [],
            number: []
        }
    },
    methods: {
        select(num) {
            if(num == 3){
           this.$emit("_select", `${this.region}${this.point}${this.number}`)
            }
        }
    }

}
</script>

