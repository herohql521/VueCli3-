import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import topTip from '@/components/top-tip'
import './config/setHtmlFontSize.js'
import {
  Search,
  ActionSheet,
  Swipe,
  SwipeItem,
  Button,
  Checkbox,
  CheckboxGroup,
  PasswordInput,
  NumberKeyboard,
  PullRefresh,
  Icon,
  Toast
} from 'vant'

Vue.use(Search)
Vue.use(Button)
Vue.use(ActionSheet)
Vue.use(PullRefresh)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(PasswordInput).use(NumberKeyboard)
Vue.use(Icon);
Vue.use(Toast);

import 'styles/reset.css'
import 'styles/border.css'

fastclick.attach(document.body)

Vue.config.productionTip = false

Vue.component('top-tip', topTip)



new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')


