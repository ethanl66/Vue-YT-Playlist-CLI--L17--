import Vue from "vue";
import App from "./App.vue";
//import Ninjas from "./ninjas.vue"; //Register globally

Vue.config.productionTip = false;

//Vue.component("ninjas", Ninjas); //Register globally. Can be nested anywhere.

new Vue({
  render: (h) => h(App),
}).$mount("#app");
