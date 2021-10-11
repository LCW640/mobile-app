<!-- views/testing/Field.vue -->
<template>
  <div>
    <mt-field type="text"
              placeholder="请输入用户名"
              label="用户名"
              state="success"></mt-field>
    <mt-field type="password"
              placeholder="请输入密码"
              label="密码"
              state="error"></mt-field>
    <mt-field type="text"
              placeholder="请输入手机号"
              label="手机号"
              state="warning"
              :attr="{maxlength:'11'}"
              disableClear></mt-field>
  </div>
</template>