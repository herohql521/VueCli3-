/*
 * @Author: heql
 * @Begin: 2019-07-30 16:42:30
 * @Update: 2019-09-12 13:48:12
 * @Update log: 更新日志
 */
import {
	LOGIN_STATE
} from './mutations-types'

export default {
	// 设置用户登陆状态
	[LOGIN_STATE] (state, num ) {
		state.loginState = num
	}
}