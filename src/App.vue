<template>
	<div class="container">
		<HospitalTop />
    <div class="content">
      <router-view></router-view>
    </div>
    <HospitalBottom />
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  .content{
    margin-top: 80px;
    width: 1200px;
    min-height:1100px;
  }
}
</style>
