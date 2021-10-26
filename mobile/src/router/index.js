import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

const tabBar = () => import(/* webpackChunkName: "tab-bav" */ '@/pages/tabBar/index')
const index = () => import(/* webpackChunkName: "group-index" */ '@/pages/index/index')
const discover = () => import(/* webpackChunkName: "discover" */ '@/pages/discover/index')
const car = () => import(/* webpackChunkName: "car" */ '@/pages/car/index')
const homeIndex = () => import(/* webpackChunkName: "group-home" */ '@/pages/homeIndex/index')
const login = () => import(/* webpackChunkName: "login" */ '@/pages/login/index')

Vue.use(Router)

 
const router = new Router({
	/**************************************************
   *
   * 设置 链接激活时使用的 CSS 类名
   * 默认值: "router-link-active"
   * 可以通过路由的构造选项 linkActiveClass 来全局配置。
   *
   * 通过设置 meta: { keepAlive: true },来定义一个页面是否需要做缓存
   * 通过设置 meta: {requiresAuth: true},来定义一个页面是否需要登录
   *
   **************************************************/
  linkActiveClass: 'ac',
  routes: [{
    /**
    * 设置页面初次加载后默认显示 index 页面
    * home  个人中心
    */
    path: '/',
    name: 'main',
    component: tabBar,
    redirect: '/index',
    children: [{
      path: '/index',
      name:'index',
      component: index
    },{
      path: '/discover',
      name:'discover',
      component: discover
    },{
      path: '/car',
      name:'car',
      component: car
    },{
      path:'/home',
      name:'home',
      component:homeIndex,
      meta:{
        requiresAuth: true
      }
    },{
      path: '/login',
      name: 'login',
      component:login
    }]
  }]
});

//导航守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // matched 返回当前路由从上到下的所有对象数组
    // some遍历路由树, 这样子路由不需要重复配置requiresAuth,父级控制即可
    if (!store.getters.LOGIN_STATE) {
      console.log(to.fullPath)
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})



export default router