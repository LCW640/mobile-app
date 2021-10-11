<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="个人信息" fixed>
      <div slot="right">
        <router-link class="link" to="/register">注册</router-link>
        &nbsp;
        <router-link class="link" to="/login">登录</router-link>
      </div>
    </mt-header>

    <!-- 底部选项卡 -->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="main">
        <img v-if="selected=='main'" 
             src="../assets/main_1.png" slot="icon">
        <img v-else src="../assets/main_0.png" slot="icon">
        首页
      </mt-tab-item>
      <mt-tab-item id="me">
        <img v-if="selected=='me'" 
             src="../assets/me_1.png" slot="icon">
        <img v-else src="../assets/me_0.png" slot="icon">            
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navactive: '1',
      selected: 'me'
    }
  },
  watch: {
    selected(){ // 只能变为main
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.link{ color:white; }
</style>