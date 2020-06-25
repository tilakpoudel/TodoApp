import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue'
import VueSocialSharing from 'vue-social-sharing'

import App from './App.vue';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.use(VueSocialSharing);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
