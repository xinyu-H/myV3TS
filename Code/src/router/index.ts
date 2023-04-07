import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'IndexPage',
        component: () => import('../views/IndexPage.vue'),
    },{
        path: '/AppIndexPage',
        name: 'AppIndexPage',
        component: () => import('../views/App/AppIndexPage.vue'),
        meta: {}
    },{
        path: '/PageA',
        name: 'PageA',
        component: () => import('../views/PageA.vue'),
        meta: {}
    },{
        path: '/PageB',
        name: 'PageB',
        component: () => import('../views/PageB.vue')
    },{
        path: '/PageC',
        name: 'PageC',
        component: () => import('../views/PageC.vue')
    },{
        path: '/Work1',
        name: 'Work1',
        component: () => import('../views/Work1.vue')
    },{
        path: '/PageD',
        name: 'PageD',
        component: () => import('../views/PageD.vue')
    },{
        path: '/PageE',
        name: 'PageE',
        component: () => import('../views/PageE.vue')
    },{
        path: '/PageF',
        name: 'PageF',
        component: () => import('../views/PageF.vue')
    },{
        path: '/PageG',
        name: 'PageG',
        component: () => import('../views/PageG.vue')
    }]
})

export default router
