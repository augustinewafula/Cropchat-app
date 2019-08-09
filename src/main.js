import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import Vuefire from "vuefire";
import firebase from "./services/firebase";

Vue.config.productionTip = false;
Vue.use(Vuefire);

new Vue({
  firebase: {
    cat: firebase.database.ref("cat").orderByChild("created_at")
  },
  router,
  render: h => h(App)
}).$mount("#app");
