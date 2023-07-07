<template>
	<div>
		<!-- 轮播图 -->
		<Carousel />
		<!-- 首页搜索医院的表单区域 -->
		<Search />

		<!-- 展示医院的结构 -->
		<el-row :gutter="20">
			<el-col :span="20" style="color: #7f7f7f">
				<h1>医院</h1>
				<Category title="等级" />
				<Category title="地区" />
				<!-- 展示医院的结构 -->
				<div class="hospital">
					<Card class="item" v-for="item in 10" :key="item" />
				</div>
			</el-col>
			<el-col :span="4">233</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts">
import Carousel from "./components/Carousel.vue";
import Search from "./components/Search.vue";
import Category from "./components/Category.vue";
import Card from "./components/Card.vue";
</script>

<style lang="scss" scoped>
h1 {
	font-weight: 900;
	margin: 10px 0;
}
.hospital {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.item {
		width: 48%;
		margin: 5px 0;
	}
}
</style>
