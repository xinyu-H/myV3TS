import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
// 全局样式
import './assets/style/base.css'
// vant ui
import Vant from 'vant'
import 'vant/lib/index.css'
// 帮助方法
import Utils from './utils/index'
// 统一接口
import Api from './api/index'

import './api/request'

const app = createApp(App)
app.provide('$Utils', Utils)
app.provide('$Api', Api)
app.provide('$Router', router)
app.use(router)
.use(ElementPlus)
.use(Vant)
.use(createPinia())
.mount('#app')

