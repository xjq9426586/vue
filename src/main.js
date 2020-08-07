import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'tsvue/lib/tstheme/index.css'
import tsVue from 'tsvue'
import {Service} from './service.js'
Vue.prototype.$axios=Service
Vue.use(tsVue)
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
