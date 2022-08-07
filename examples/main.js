import Vue from 'vue'
import App from './App.vue'

// import '../components/css/demo.scss'
// import Demo from '../components/lib/demo/index'
// import '../components/css/card.scss'
// import Card from '../components/lib/card/index'
// // Vue.component('name', Demo)
// Vue.use(Demo)  // Demo.install -> Vue.components()
// Vue.use(Card)

import 'britta-ui/dist/css/index.css'
import BUI from 'britta-ui'
Vue.use(BUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
