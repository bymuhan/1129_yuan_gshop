/*
 * 路由器模块
 * */
import Vue from 'vue'
import VueRouter from 'vue-router'
// 组件路由器
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
// 使用路由器
Vue.use(VueRouter)
// 导出路由器并注册实例
export default new VueRouter({
  routes: [
    { path: '/', redirect: '/msite' },
    { path: '/msite',
      component: Msite,
      // 是否隐藏底部栏
      meta: { showFooter: true }
    },
    { path: '/search',
      component: Search,
      meta: { showFooter: true }
    },
    { path: '/Order',
      component: Order,
      meta: { showFooter: true }
    },
    { path: '/profile',
      component: Profile,
      meta: { showFooter: true }
    },
    { path: '/login', component: Login }
  ]
})
