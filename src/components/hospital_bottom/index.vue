<template>
	<div class="bottom">
		<div class="content">
            <div class="left">上海 xxxxx号 电话挂号xxx-xxxxxxx</div>
            <div class="right">
                <span>联系我们</span>
                <span>合作伙伴</span>
                <span>用户协议</span>
                <span>隐私协议</span>
            </div>
        </div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const msg = ref("bottom");
</script>

<style lang="scss" scoped>
.bottom {
	width: 100%;
	height: 50px;
	background-color: #f0f2f5;
	.content {
        font-size: 14px;
		width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .right span{
            margin-left: 10px;
            cursor: pointer;
        }
	}
}
</style>
