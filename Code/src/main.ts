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
import Vant, { ConfigProvider } from 'vant'
import 'vant/lib/index.css'
// 帮助方法
import Utils from './utils/index'
// 统一接口
import Api from './api/index'

import * as echarts from 'echarts';
// pinia 持久化
import PiniaPluginPersistedstate  from 'pinia-plugin-persistedstate'

const app = createApp(App)
app.provide('$Utils', Utils)
app.provide('$Api', Api)
app.provide('$Router', router)
app.provide('$Echarts', echarts)
app.use(router)
.use(ElementPlus)
.use(Vant)
.use(ConfigProvider)
.use(createPinia().use(PiniaPluginPersistedstate))
.mount('#app')

