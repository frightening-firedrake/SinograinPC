<template>
<div>
我是登陆页面
<button @click="submitForm()">提交</button>
</div>
</template>
<script>
export default {
    methods: {
        submitForm() {
            this.$router.push({ path: '/index' });
        }
    }
}
</script>