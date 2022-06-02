import "@/assets/style/global.less";
import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store/index";
import router from './router'
createApp(App).use(router).use(store).mount('#app')
// const app = createApp(App);
// app.use(store);
