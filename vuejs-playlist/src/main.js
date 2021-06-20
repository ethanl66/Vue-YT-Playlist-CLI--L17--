import Vue from "vue";
import App from "./App.vue";
//import Ninjas from "./ninjas.vue"; //Register globally

Vue.config.productionTip = false;

export const bus = new Vue();

/* new Vue({
  render: (h) => h(App),
}).$mount("#app"); */

new Vue({
  el: "#app",
  render: (h) => h(App),
});
