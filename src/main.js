import Vue from 'vue'
import App from './App.vue'
import router from './router'
import networkmanager from './network_manager/network_manager'
Vue.config.productionTip = false

import {Button} from 'mint-ui'
Vue.component(Button.name, Button)
new Vue({
  router,
  render: h => h(App),
  created() {
    networkmanager.get_theme_list(1).then(res => {
      console.log('hahahhahahahahah---------------',res)
    }).catch( err => {
      // console.log(err)
    })
  },
}).$mount('#app')
