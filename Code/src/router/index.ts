import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/IndexPage',
        name: 'IndexPage',
        component: () => import('../views/IndexPage.vue'),
        children: [{
            path: '/HomePage',
            name: 'HomePage',
            component: () => import('../views/App/Home/HomePage.vue'),
            meta: {
                title: '主页'
            }
        }, {
            path: '/ShoppingPage',
            name: 'ShoppingPage',
            component: () => import('../views/App/Shopping/ShoppingPage.vue'),
            meta: {
                title: '选购'
            }
        }, {
            path: '/MyPage',
            name: 'MyPage',
            component: () => import('../views/App/My/MyPage.vue'),
            meta: {
                title: '我的'
            }
        }]
    }, {
        path: '/QrPage',
        name: 'QrPage',
        component: () => import('../views/App/Qr/QrPage.vue'),
        meta: {
            title: '二维码'
        }
    }, {
        path: '/ScanPage',
        name: 'ScanPage',
        component: () => import('../views/App/Scan/ScanPage.vue'),
        meta: {
            title: '扫一扫'
        }
    }, {
        path: '/MapPage',
        name: 'MapPage',
        component: () => import('../views/App/Map/MapPage.vue'),
        meta: {
            title: '地图'
        }
    }, {
        path: '/',
        name: 'AppIndexPage',
        component: () => import('../views/App/AppIndexPage.vue'),
        meta: {
            is: true
        }
    }, {
        path: '/PageA',
        name: 'PageA',
        component: () => import('../views/PageA.vue'),
        meta: {
            is: true
        }
    }, {
        path: '/PageB',
        name: 'PageB',
        component: () => import('../views/PageB.vue')
    }, {
        path: '/PageC',
        name: 'PageC',
        component: () => import('../views/PageC.vue')
    }, {
        path: '/Work1',
        name: 'Work1',
        component: () => import('../views/Work1.vue')
    }, {
        path: '/PageD',
        name: 'PageD',
        component: () => import('../views/PageD.vue')
    }, {
        path: '/PageE',
        name: 'PageE',
        component: () => import('../views/PageE.vue')
    }, {
        path: '/PageF',
        name: 'PageF',
        component: () => import('../views/PageF.vue')
    }, {
        path: '/PageG',
        name: 'PageG',
        component: () => import('../views/PageG.vue')
    }]
})

export default router
