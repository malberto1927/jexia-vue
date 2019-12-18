import Vue from 'vue'
import App from './App.vue'
import router from './router'
import JexiaVue from './plugins/JexiaVue'

Vue.config.productionTip = false

Vue.use(JexiaVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
