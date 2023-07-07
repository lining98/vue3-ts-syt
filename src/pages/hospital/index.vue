<template>
	<div>
		<h1>{{ msg }}</h1>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const msg = ref("医院详情");
</script>

<style lang="scss" scoped></style>
