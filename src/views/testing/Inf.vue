<!-- views/testing/Inf.vue -->
<template>
  <div>
    <div class="list"
         v-infinite-scroll="loadmore">
      <h1 v-for="i in 50" :key="i">测试列表项 - {{i}}</h1>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    loadmore(){
      console.log('到底了！');
    }
  }
}
</script>
<style scoped>
h1 {
  margin: 0px 6px; border-bottom: 1px solid #ccc;
  height: 45px; line-height: 45px; text-align: center;
}
</style>