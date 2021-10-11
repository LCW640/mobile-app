<!-- Tabbar.vue -->
<template>
  <div>
    我的个人信息页面！
    <mt-tabbar v-model="selected">
      <mt-tab-item id="shouye">
        <img  v-if="selected=='shouye'" 
              src="../../assets/main_1.png" slot="icon">
        <img v-else src="../../assets/main_0.png" slot="icon">
        首页
      </mt-tab-item>
      <mt-tab-item id="gouwuche">
        <img  v-if="selected=='gouwuche'" 
              src="../../assets/cart_1.png" slot="icon">
        <img v-else src="../../assets/cart_0.png" slot="icon">
        购物车
      </mt-tab-item>
      <mt-tab-item id="wode">
        <img  v-if="selected=='wode'" 
              src="../../assets/me_1.png" slot="icon">
        <img v-else src="../../assets/me_0.png" slot="icon">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 'wode'
    } 
  },
  watch:{
    // 监听selected的变化 将会传入两个参数 （新值，旧值）
    selected(newval, oldval) {
      if(newval=='shouye'){
        this.$router.push('/tabbar');  // 
      }else if(newval=='gouwuche'){
        this.$router.push('/gouwuche');  //
      }
    }
  }
}
</script>