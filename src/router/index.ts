import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Layout from '@/components/HelloWorld.vue'

const routes: Array<RouteRecordRaw>=[
    {
        path:'/home',
        name: 'home',
        component: Layout,

    }
]

const router =createRouter ({
    history: createWebHistory(),
    routes
})

export default router