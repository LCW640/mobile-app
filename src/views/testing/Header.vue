<!-- views/Header.vue -->
<template>
  <div>
    <mt-header title="timu">
      <div slot="left">返回</div>
      <div slot="right">分享</div>
    </mt-header>
    <mt-header title="timu">
      <mt-button slot='left' icon="back"></mt-button>
      <div slot="right">
        <router-link to="#" class="link">登录</router-link>
        &nbsp;
        <router-link to="#" class="link">注册</router-link>
      </div>
    </mt-header>
  </div>  
</template>
<style scoped>
.link {color:white;}
</style>