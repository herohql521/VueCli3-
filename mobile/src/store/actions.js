/*
 * @Author: heql
 * @Begin: 2019-09-12 14:11:33
 * @Update: 2019-09-22 12:15:54
 * @Update log: 更新日志
 */
import {
	LOGIN_STATE,
} from './mutations-types'


export default {
	login({commit}){	
		commit(LOGIN_STATE,1)
	}
}