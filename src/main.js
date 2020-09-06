
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import "vuetify/dist/vuetify.min.css"
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Vuetify)
export default new Vuetify({ })

new Vue({
  store,
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
