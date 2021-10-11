import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 配置MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//  Vue.use() 将会自动调用 MintUI 内index.js中声明的install方法
//  所以 MintUI 中的index.js，一定要提供一个install，否则这行代码
//  就会报错。
Vue.use(MintUI);

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/';
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
