import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/IndexPage',
        name: 'IndexPage',
        component: () => import('/src/views/IndexPage.vue'),
        children: [{
            path: '/HomePage',
            name: 'HomePage',
            component: () => import('/src/views/App/Home/HomePage.vue'),
            meta: {
                title: '主页'
            }
        }, {
            path: '/ShoppingPage',
            name: 'ShoppingPage',
            component: () => import('/src/views/App/Shopping/ShoppingPage.vue'),
            meta: {
                title: '选购'
            }
        }, {
            path: '/StarryPage',
            name: 'StarryPage',
            component: () => import('/src/views/App/Starry/StarryPage.vue'),
            meta: {
                title: '星空'
            }
        }, {
            path: '/MyPage',
            name: 'MyPage',
            component: () => import('/src/views/App/My/MyPage.vue'),
            meta: {
                title: '我的'
            }
        }]
    }, {
        path: '/QrPage',
        name: 'QrPage',
        component: () => import('/src/views/App/Qr/QrPage.vue'),
        meta: {
            title: '二维码'
        }
    }, {
        path: '/ScanPage',
        name: 'ScanPage',
        component: () => import('/src/views/App/Scan/ScanPage.vue'),
        meta: {
            title: '扫一扫'
        }
    }, {
        path: '/MapPage',
        name: 'MapPage',
        component: () => import('/src/views/App/Map/MapPage.vue'),
        meta: {
            title: '地图'
        }
    }, {
        path: '/FittingPage',
        name: 'FittingPage',
        component: () => import('/src/views/App/Shopping/FittingPage.vue'),
        meta: {
            title: '地图'
        }
    }, {
        path: '/',
        name: 'AppIndexPage',
        component: () => import('/src/views/App/AppIndexPage.vue'),
        meta: {
            is: true
        }
    }, {
        path: '/PageA',
        name: 'PageA',
        component: () => import('/src/views/PageA.vue'),
        meta: {
            is: true
        }
    }, {
        path: '/PageB',
        name: 'PageB',
        component: () => import('/src/views/PageB.vue')
    }, {
        path: '/PageC',
        name: 'PageC',
        component: () => import('/src/views/PageC.vue')
    }, {
        path: '/Work1',
        name: 'Work1',
        component: () => import('/src/views/Work1.vue')
    }, {
        path: '/PageD',
        name: 'PageD',
        component: () => import('/src/views/PageD.vue')
    }, {
        path: '/PageE',
        name: 'PageE',
        component: () => import('/src/views/PageE.vue')
    }, {
        path: '/PageF',
        name: 'PageF',
        component: () => import('/src/views/PageF.vue')
    }, {
        path: '/PageG',
        name: 'PageG',
        component: () => import('/src/views/PageG.vue')
    }]
})

export default router
