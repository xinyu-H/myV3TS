<template>
    <div class="AppIndexPage" @touchstart="touchStart()" @touchend="touchEnd()">
        <div class="AppIndexPage_content">
            <van-swipe class="my-swipe" @change="changeSwipe" :show-indicators="false" :loop="false" ref="swipeRef">
                <van-swipe-item v-for="(item, index) in tabberList" :key="item.icon">
                    <HomePage v-if="item.key === 'HomePage'"></HomePage>
                    <ShoppingPage v-if="item.key === 'ShoppingPage'"></ShoppingPage>
                    <MyPage v-if="item.key === 'MyPage'"></MyPage>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="AppIndexPage_footer">
            <van-tabbar v-model="tabberActive" @change="changeTabber">
                <van-tabbar-item v-for="(item, index) in tabberList" :key="item.icon" :icon="item.icon">{{ item.name }}</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import { getData1ResponseModel } from '../../api/Home/HomeModel'
import HomePage from './Home/HomePage.vue';
import ShoppingPage from './Shopping/ShoppingPage.vue'
import MyPage from './My/MyPage.vue';


// 全局接口
const $Api: any = inject('$Api')
const $Router: any = inject('$Router')
// 底部导航数据
const tabberList = ref<Array<{
    name: string,
    icon: string,
    key: string
}>>([{
    name: '主页',
    icon: 'home-o',
    key: 'HomePage'
}, {
    name: '选购',
    icon: 'shopping-cart-o',
    key: 'ShoppingPage'
}, {
    name: '我的',
    icon: 'friends-o',
    key: 'MyPage'
}])
// 底部导航下标
const tabberActive = ref(0);
// swipe ref实例
const swipeRef = ref()
// 底部导航变化后触发
function changeTabber (index: number | string) {
    swipeRef.value.swipeTo(index)
}

// swipe 滑动后触发事件
function changeSwipe (index: number) {
    tabberActive.value = index
}
onMounted(() => {
    // $Api.Home.getData1({
    //     num: 3
    // }).then((res: getData1ResponseModel) => {
    //     console.log(res)
    // })
})



let setTimer: any = null
function touchStart () {
    setTimer = setTimeout(() => {
        clearTimeout(setTimer)
        $Router.push('IndexPage')
    }, 5000)
}
function touchEnd () {
    clearTimeout(setTimer)
}
</script>

<style lang="scss" scoped>
.AppIndexPage {
    width: 100%;
    height: 100%;
    overflow: hidden;
    &_content {
        width: 100%;
        height: calc(100% - 100px);
        .my-swipe {
            width: 100%;
            height: 100%;
            .van-swipe-item {
                height: 100%;
            }
        }
    }
    &_footer {
        width: 100%;
        height: 100px;
        font-size: 10px;
        border-top: .5px solid #aaa;
        box-shadow: 0 0 15px 2px #ddd;
        .van-tabbar {
            width: 100%;
            height: 100px;
        }
    }
}
</style>