<template>
    <div class="IndexPage padding box_center">
        <div class="IndexPage_box radius flex_around padding">
            <li v-for="(item, index) in RouterList" class="radius"
            @click="goPage(item)">
                {{ item.name }}
            </li>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, } from 'vue';
import router from '../router';
// 定义获取的路由类型
interface RouterListModel {
    path: string,
    name: string,
    component: () => void,
    meta?: {}
}
const RouterList = ref<Array<RouterListModel>>([])
router.options.routes.forEach(v => {
    if (v.meta?.is) RouterList.value?.push(v as unknown as RouterListModel)
})
// 前往具体页面
function goPage (val: RouterListModel) {
    router.push(val.path)
}





</script>

<style scoped lang="scss">
.IndexPage {
    width: 100%;
    height: 100%;
    background: url(../assets/images/Base/2.jpg) no-repeat;
    background-size: 100% 110%;
    &_box {
        width: 500px;
        height: 300px;
        background-color: rgba(100, 100, 100, 0.5);
        border:1px solid rgba(100, 100, 100, .5);
        box-shadow: 0px 0px 5px 3px rgba(100, 100, 100, .5);
        >li {
            width: auto;
            height: 40px;
            padding: 0 5px;
            background-color: rgba(200, 200, 200, .5);
            text-align: center;
            line-height: 40px;
            font-size: 12px;
            font-weight: 800;
            transition: transform .3s;
        }
        >li:hover {
            cursor: pointer;
            transform: scale(.9);
            transition: transform .3s;
        }
    }
}
</style>