<template>
	<el-carousel height="350px">
		<el-carousel-item v-for="item in 4" :key="item">
			<img src="../../../assets/images/2.jpeg" alt="" />
		</el-carousel-item>
	</el-carousel>
</template>

<script setup lang="ts">
import { ref } from "vue";
const aa = ref()
</script>

<style lang="scss" scoped>
img {
	width: 100%;
	height: 350px;
}
</style>
