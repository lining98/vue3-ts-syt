<template>
	<el-card shadow="hover">
		<div class="content">
			<div class="left">
				<h1>{{ hospitalInfo.hosname }}</h1>
				<div class="tip">
					<p>
						<img src="@/assets/images/zan.png" alt="" />
						<span>{{ hospitalInfo.param.hostypeString }}</span>
					</p>
					<p>
						<img src="@/assets/images/time.png" alt="" />
						<span>每天{{ hospitalInfo.bookingRule?.releaseTime }}放号</span>
					</p>
				</div>
			</div>
			<div class="right">
				<img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="" />
			</div>
		</div>
	</el-card>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
defineProps(['hospitalInfo']);
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.left {
		width: 60%;
		.tip {
			color: #7f7f7f;
			display: flex;
			justify-content: space-between;
			margin-top: 10px;
			& > p {
				display: flex;
				align-items: center;
				img {
					margin-right: 3px;
				}
			}
		}
	}
	.right{
		img{
			width: 80px;
		}
	}
}
</style>
