<template>
	<div class="search">
		<el-autocomplete clearable placeholder="请输入医院名称" />
		<el-button type="primary" :icon="Search" @click="">搜索</el-button>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

</script>

<style lang="scss" scoped>
.search {
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 0;
	:deep(.el-input__wrapper) {
		width: 400px;
		margin-right: 10px;
	}
}
</style>
