// @ts-ignore
import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import piniaPluginPersist from 'pinia-plugin-persist'
//引入Pinia构造函数
import { createPinia } from 'pinia'
// 实例化 Pinianpm install pinia-plugin-persist
const pinia = createPinia()
pinia.use(piniaPluginPersist)
import router from './router/index'
const app = createApp(App);

//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//挂载页面
app.use(pinia).use(ElementPlus).use(router).mount('#app')
