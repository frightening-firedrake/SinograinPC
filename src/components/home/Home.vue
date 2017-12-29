<template>
	<div>
		<home-heard></home-heard>
		<home-content></home-content>
	</div>
</template>

<script>
	import HomeHeard from "@/components/home/HomeHeader.vue"
	import HomeContent from "@/components/home/HomeContent.vue"
	require("../../assets/style/index/Home.css")
	export default {
		components: {
			HomeContent,
			HomeHeard
		}
	}
</script>