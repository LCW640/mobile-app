import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
import Button from '../views/testing/Button.vue'
import Header from '../views/testing/Header.vue'
import Field from '../views/testing/Field.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Nav from '../views/testing/Nav.vue'
import Tabbar from '../views/testing/Tabbar.vue'
import Gouwuche from '../views/testing/Gouwuche.vue'
import Wode from '../views/testing/Wode.vue'
import Me from '../views/Me.vue'
import Swipe from '../views/testing/Swipe.vue'
import Inf from '../views/testing/Inf.vue'
const routes = [
  {
    path: '/inf',
    component: Inf
  },{
    path: '/swipe',
    component: Swipe
  },{
    path: '/me',
    component: Me
  },{
    path: '/gouwuche',
    component: Gouwuche
  },{
    path: '/wode',
    component: Wode
  },{
    path: '/tabbar',
    component: Tabbar
  },{
    path: '/nav',
    name: 'Nav',
    component: Nav
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/register',
    name: 'Register',
    component: Register
  },{
    path: '/field',
    name: 'Field',
    component: Field
  },{
    path: '/header',
    name: 'Header',
    component: Header
  },{
    path: '/button',
    name: 'Button',
    component: Button
  },{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
