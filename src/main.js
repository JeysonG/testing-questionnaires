import Vue from 'vue'
import App from './App.vue'

import VeeValidate from 'vee-validate'
import { VueMaskDirective } from 'v-mask'

Vue.directive('mask', VueMaskDirective)

Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    invalid: 'is-invalid'
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
