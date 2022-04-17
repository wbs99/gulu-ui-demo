import Vue from 'vue'
import App from './App.vue'
import { Button } from 'good-gulu-ui'

console.log(Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
