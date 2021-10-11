<!--  views/testing/Nav.vue -->
<template>
  <div>
    <mt-navbar v-model="navactive">
      <mt-tab-item id="1">
        <img src="/001.png" slot="icon">
        推荐
      </mt-tab-item>
      <mt-tab-item id="2">
        <img src="../../assets/004.png" slot="icon">
        科技</mt-tab-item>
      <mt-tab-item id="3">
        <img src="../../assets/007.png" slot="icon">
        数码</mt-tab-item>
      <mt-tab-item id="4">
        <img src="../../assets/025.png" slot="icon">
        军事</mt-tab-item>
    </mt-navbar>
    <!-- 配一套面板 -->
    <mt-tab-container 
      style="margin-top:5px;" v-model="navactive">
      <mt-tab-container-item id="1">推荐面板</mt-tab-container-item>
      <mt-tab-container-item id="2">科技面板</mt-tab-container-item>
      <mt-tab-container-item id="3">数码面板</mt-tab-container-item>
      <mt-tab-container-item id="4">军事面板</mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script> 
export default {
  data() {
    return {
      navactive: '1'
    }
  },
}
</script>