import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/PageA',
        name: 'PageA',
        component: () => import('../views/PageA.vue')
    },{
        path: '/PageB',
        name: 'PageB',
        component: () => import('../views/PageB.vue')
    },{
        path: '/',
        name: 'PageC',
        component: () => import('../views/PageC.vue')
    },{
        path: '/Work1',
        name: 'Work1',
        component: () => import('../views/Work1.vue')
    }]
})

export default router
