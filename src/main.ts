import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router';

// 新增引入
// import router from './router/index.js'
// 使用router
import store from './store'

 // 创建vue实例
const app = createApp(App)
// 挂载pinia
app.use(store)
app.use(router);
// 挂载实例
app.mount('#app');