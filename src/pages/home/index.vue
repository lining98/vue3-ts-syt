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
					<Card class="item" v-for="item in hospitalArr" :key="item.id" :hospitalInfo="item" />
				</div>
				<!-- 分页器 -->
				<el-pagination
					style="margin: 10px 0"
					v-model:current-page="pageNo"
					v-model:page-size="pageSize"
					:page-sizes="[4, 6, 10, 20]"
					:background="true"
					layout="prev, pager, next, jumper,-> ,sizes,total"
					:total="total"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
				/>
			</el-col>
			<el-col :span="4">right</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { reqHospital } from '@/api/home';

import Carousel from './components/Carousel.vue';
import Search from './components/Search.vue';
import Category from './components/Category.vue';
import Card from './components/Card.vue';

// 分页器需要的数据
const pageNo = ref<number>(1);
const pageSize = ref<number>(10);
const total = ref<number>(0);

const hospitalArr = ref([]);

// 获取医院的数据
const getHospitalInfo = async () => {
	let res: any = await reqHospital(pageNo.value, pageSize.value);
	if (res.code == 200) {
		hospitalArr.value = res.data.content;
		total.value = res.data.totalElements;
	}
};

// 切换每页多少条
const handleSizeChange = () => {
	getHospitalInfo();
};
// 切换页码
const handleCurrentChange = () => {
	getHospitalInfo();
};

onMounted(() => {
	getHospitalInfo();
});
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
