import Vue from 'vue'
import VueRouter from "vue-router";
const home = () => import('views/home/home.vue')
const cart = () => import('views/cart/cart.vue')
const category = () => import('views/category/category.vue')
const profile = () => import('views/profile/profile.vue')
//1、安装router插件
Vue.use(VueRouter)
//2、创建router对象
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/profile',
    component:profile
  },
]
const router = new VueRouter({
  routes,
  mode:'history'
})
//3、导出router
export default router
