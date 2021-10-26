/*
 * @Author: heql
 * @Begin: 2019-08-19 13:42:17
 * @Update: 2019-12-03 13:37:22
 * @Update log: 更新日志
 */
 const api = process.env.NODE_ENV === 'development' ? '/api' : ''

 // ===================登录
export const loginStatus = api + '/user/doLoginUser.do'// 登录
export const bannerSwiper = api + '/banner?type=1' // 请求发现页面轮播图