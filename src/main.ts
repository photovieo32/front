import './assets/style/main.css'
import './assets/style/vendor.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Vue3Masonry from 'vue3-masonry-css';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Masonry);
app.mount('#app')
