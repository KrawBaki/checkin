import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/style.css";
import "./assets/css/index.css";

createApp(App).use(router).use(router).mount("#app");
