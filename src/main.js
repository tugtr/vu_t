import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from './store';
import '@/css/global.scss';
import utilty from '@/utilty/utilty';

Vue.config.productionTip = true;
Vue.prototype.$utilty = utilty;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
