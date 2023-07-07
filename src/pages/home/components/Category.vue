<template>
	<div class="content">
		<div class="left">{{ title }}:</div>
		<ul class="list">
			<li class="active">全部</li>
			<li>三级甲等</li>
			<li>三级甲等</li>
			<li>三级甲等</li>
			<li>三级甲等</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineProps(["title"]);
</script>

<style lang="scss" scoped>
.content {
	font-size: 14px;
	display: flex;
	line-height: 24px;
	.left {
		width: 45px;
		margin-right: 10px;
	}
	.list {
		display: flex;
		flex-wrap: wrap;
		li {
			margin-right: 10px;
			cursor: pointer;
			&.active,
			&:hover {
				color: #007fff;
			}
		}
	}
}
</style>
