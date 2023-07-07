<template>
	<div class="top">
		<div class="content">
			<div class="left">
				<img src="../../assets/vite.svg" alt="" />
				<h1>尚医通 预约挂号统一平台</h1>
			</div>
			<div class="right">
				<p class="help">帮助中心</p>
				<p class="login">登录/注册</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.top {
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 70px;
	background: #fff;
    border-bottom: 2px solid #ddd;
	.content {
		width: 1200px;
		height: 70px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		& > div {
			display: flex;
			align-items: center;
		}
		.left {
			font-size: 24px;
			color: #007fff;
			img {
				margin-right: 10px;
			}
		}
		.right {
			font-size: 14px;
			.help {
				margin-right: 10px;
			}
		}
	}
}
</style>
