<!-- views/Register.vue -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="登录">
      <mt-button icon="back" slot="left" @click="$router.back(-1)"></mt-button>
      <router-link to="/register" slot="right">注册</router-link>
    </mt-header>
    <!-- 表单组件 -->
    <mt-field type="text" 
              placeholder="请输入用户名"
              v-model="name"
              :state="nameState"
              @blur.native.capture="checkName"
              label="用户名"></mt-field>
    <mt-field type="password" 
              placeholder="请输入密码"
              v-model="pwd"
              :state="pwdState"
              @blur.native.capture="checkPwd"
              label="密码"></mt-field>
    <mt-button 
      type="primary" size="large" @click="checkForm">
      快速登录
    </mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',  // 与用户名文本框中的value  完成双向数据绑定
      nameState: '',
      pwd: '',
      pwdState: ''
    }
  },
  methods: {
    // 验证用户名
    checkName(){
      // 通过正则表达式，验证value是否符合要求
      let reg = /^\w{6,15}$/;
      if(reg.test(this.name)){ // 合法  状态success
        this.nameState = 'success'
        return true;
      }else{  // 不合法  状态error
        this.nameState = 'error'
        return false;
      }
    },

    // 验证密码
    checkPwd(){
      let reg = /^\d{6}$/;
      if(reg.test(this.pwd)){ // 合法  状态success
        this.pwdState = 'success'
        return true;
      }else{  // 不合法  状态error
        this.pwdState = 'error'
        return false;
      }
    },

    // 验证表单  验证3个Field组件是否合法
    checkForm(){      
      // 验证用户名
      if(this.checkName() && this.checkPwd()){
        console.log('发请求，执行登录业务...');
      }
    }
  }
}
</script>