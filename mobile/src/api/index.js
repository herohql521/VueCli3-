/*
 * @Author: heql
 * @Begin: 2019-08-19 13:47:19
 * @Update: 2019-12-08 12:02:19
 * @Update log: 更新日志
 */
import axios from 'axios'
import {
  loginStatus,
  bannerSwiper

} from './config'

// 请求超时时间
axios.defaults.timeout = 30000

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
//token
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  //登录态在router导航守卫中管理，和小程序思路不同，不需要判断每个接口
  //做一个单独的登录状态接口，首页调用即可
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default {
	/**
  * 获取当前登录状态
  */
  loginStatusFn (loginname,password) {
    return axios.post(loginStatus,{
      loginname:loginname,
      password:password
    })
  },
  bannerSwiper() {
  	return axios.get(bannerSwiper)
  }
}