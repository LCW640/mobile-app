<!-- views/Register.vue -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="注册">
      <mt-button icon="back" slot="left" @click="$router.back(-1)"></mt-button>
      <router-link to="/login" slot="right">登录</router-link>
    </mt-header>
    <!-- 表单组件 -->
    <mt-field type="text" 
              placeholder="请输入用户名"
              v-model="name"
              :state="nameState"
              label="用户名"></mt-field>
    <mt-field type="password" 
              placeholder="请输入密码"
              label="密码"></mt-field>
    <mt-field type="password" 
              placeholder="请再次输入密码"
              label="确认密码"></mt-field>
    <mt-button 
      type="primary" size="large" @click="checkForm">
      免费注册
    </mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',  // 与用户名文本框中的value  完成双向数据绑定
      nameState: ''
    }
  },
  methods: {
    // 验证用户名
    checkName(){
      // 通过正则表达式，验证value是否符合要求
      let reg = /^\w{6,15}$/;
      if(reg.test(this.name)){ // 合法  状态success
        this.nameState = 'success'
      }else{  // 不合法  状态error
        this.nameState = 'error'
      }
    },

    checkPwd(){},
    checkRepwd(){},

    // 验证表单  验证3个Field组件是否合法
    checkForm(){  
      // 验证用户名
      this.checkName();
      this.checkPwd();
      this.checkRepwd();
    }
  },
}
</script>