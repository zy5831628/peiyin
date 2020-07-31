import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import qs from 'qs';
Vue.prototype.$qs=qs;

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)
axios.defaults.headers.post['Content-type'] = 'application/json'



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
