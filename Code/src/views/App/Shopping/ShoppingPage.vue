<template>
    <div class="shoppingPage padding">
        <!-- 头部 -->
        <div class="shoppingPage_header">
            <div class="shoppingPage_header_text" :class="isShowSearch ? 'hideText' : ''">{{ searchTitle }}</div>
            <van-search v-model="searchValue" class="searchItem" :class="isShowSearch ? '' : 'hideItem'"
                placeholder="请输入搜索关键词" />
            <div class="searchIcon box_center" @click="clickSearch()">
                <van-icon name="search" size="24"></van-icon>
            </div>
        </div>
        <!-- 主体 -->
        <div class="shoppingPage_content ">
            <div class="shoppingPage_content_sidebar">
                <van-sidebar v-model="sidebarActive" class="vantSidebar">
                    <van-sidebar-item v-for="(item, index) in SidebarList" :key="item.index" :title="item.title"
                        @click="clickSidebar(item)" />
                </van-sidebar>
            </div>
            <div class="shoppingPage_content_info">
                <div class="vantList" @scroll="scrollList()">
                    <div v-for="(item, index) in GoodList" :key="index" class="cardDiv">
                        <GoodCard :item="item" :index="index"></GoodCard>
                    </div>
                    <div class="hintBox">
                        <div class="loadingDom box_center" v-show="loading">
                            <van-loading size="20" /> &nbsp;
                            <span>加载中...</span>
                        </div>
                        <div class="noMoreDom" v-show="finished">没有跟多了</div>
                    </div>
                </div>
                <van-back-top v-if="Store.isShowBackTop" bottom="10vh" offset="500" target=".vantList" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch, provide , inject } from 'vue'
import router from '../../../router/index';
import { SidebarListModel, SidebarList, GoodListModel, GoodList } from './DataModel/shoppingPageData'
import GoodCard from './components/GoodCar.vue'
import { Store1 } from '@/pinia/state'
import { load } from '@amap/amap-jsapi-loader';

const Store = Store1()
const searchValue = ref<string>()
const isShowSearch = ref<boolean>(false)
const searchTitle = ref<string>('')
/**
 * 点击搜索按钮
 */
function clickSearch() {
    if (!searchValue.value) isShowSearch.value = !isShowSearch.value
}

// 侧边栏部分
const sidebarActive = ref<number>(0)
searchTitle.value = SidebarList.value[sidebarActive.value].title
function clickSidebar(item: SidebarListModel) {
    searchTitle.value = item.title
}

// 商品部分
const loading = ref<boolean>(false);
const finished = ref<boolean>(false);
watch(loading, (newV) => {
    if (newV) {
        setTimeout(() => {
            loading.value = false
            GoodList.value.push(...GoodList.value)
            nextTick(initStyle)
        }, 10000)
    }
})
/**
 * 列表滚动
 */
function scrollList() {
    let listDom = document.querySelector('.vantList') as HTMLElement
    if (listDom.scrollTop + listDom.offsetHeight + 1 >= getHeight(true)){
        GoodList.value.length >= 50 ? finished.value = true : loading.value = true
    }
}

provide('initStyle', initStyle)
/**
 * 获取dom卡片
 */
function initStyle() {
    let divs = document.querySelectorAll('.cardDiv') as unknown as Array<HTMLElement>
    divs.forEach((v: HTMLElement, i: number) => {
        // 双数dom
        if ((i + 1) % 2 === 0) {
            v.style.left = '50%'
            setStyle(divs, v, i, true)
        } else {
            setStyle(divs, v, i, false)
        }
    })
    setLoading()
}
/**
 * 以此设置dom top高度
 * @param divs 所有卡片div 
 * @param v dom
 * @param i index
 * @param is 单双数
 */
function setStyle(divs: Array<HTMLElement>, v: HTMLElement, i: number, is: boolean) {
    let nums = getNum(i, is)
    let heights = 0
    nums.forEach(v1 => {
        // 获取当前dom前的 单/ 双 dom高度
        heights += ((divs[v1 - 1] as HTMLElement).offsetHeight)
        if (i - 1 === v1)  v.style.top = heights + 'px'
    })
}
/**
 * 获取当前dom前有几个dom 单双数区分
 * @param num 当前数
 * @param even 单双数
 */
function getNum(num: number, even: boolean) {
    let numArr = []
    for (let i = 1; i < num; i++) {
        if (even && i % 2 === 0) numArr.push(i)
        if (!even && i % 2 === 1)  numArr.push(i)
    }
    return numArr;
}
/**
 * 获取列表总高度
 * @param all 
 */
function getHeight (all?: boolean): number {
    let len = GoodList.value.length
    let cardDivLast1 = document.querySelectorAll('.cardDiv')[len - 1] as HTMLElement
    let cardDivLast2 = document.querySelectorAll('.cardDiv')[len - 2] as HTMLElement
    let cardDiv = (cardDivLast1.offsetTop + cardDivLast1.offsetHeight) > (cardDivLast2.offsetTop + cardDivLast2.offsetHeight) ? cardDivLast1 : cardDivLast2
    let top = cardDiv.offsetTop + cardDiv.offsetHeight
    let hintBox = document.querySelector('.hintBox') as HTMLElement
    return all ? top + hintBox.offsetHeight : top
}
/**
 * 设置加载提示
 */
function setLoading() {
    let hintBox = document.querySelector('.hintBox') as HTMLElement
    hintBox.style.position = 'absolute'
    hintBox.style.top = getHeight() + 'px'
}
onMounted(() => {
    nextTick(initStyle)
})

</script>

<style lang="scss" scoped>
.shoppingPage {
    width: 100%;
    height: 100%;

    &_header {
        position: relative;
        width: 100%;
        height: 100px;
        box-shadow: 0 0 15px 5px #eee;
        overflow: hidden;

        &_text {
            position: absolute;
            left: 0;
            top: 0;
            width: 87%;
            height: 100%;
            text-align: center;
            line-height: 100px;
            font-size: 36px;
            transition: transform .3s;
        }

        .hideText {
            transform: translateX(-100%);
            transition: transform .3s;
        }

        .searchItem {
            height: 100%;
            width: 87%;
            float: left;
            transition: transform .3s;
        }

        .hideItem {
            transform: translateX(100%);
            transition: transform .3s;
        }

        .searchIcon {
            width: 13%;
            height: 100%;
            float: right;
            position: relative;
            background-color: #fff;
        }
    }

    &_content {
        width: 100%;
        height: calc(100% - 110px);
        margin-top: 10px;
        display: flex;

        &_sidebar {
            width: 150px;
            height: 100%;

            .vantSidebar {
                width: 100%;
                height: 100%;
                overflow: auto;
                box-shadow: 0 0 15px 5px #eee;

                .van-sidebar-item {
                    height: 100px;
                    padding: 0 30px;
                    line-height: 100px;
                }
            }
        }

        &_info {
            flex: 1;
            height: 100%;
            .vantList {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: auto;
                // display: flex;
                // flex-wrap: wrap;
                // justify-content: space-around;
                .hintBox {
                    position: absolute;
                    width: 100%;
                    height: 80px;
                    color: #666;
                    text-align: center;
                }
                .cardDiv {
                    position: absolute;
                    width: 49%;
                    height: auto;
                    margin: 0 5px;
                }
                .loadingDom, .noMoreDom{
                    width: 100%;
                    height: 100%;
                    line-height: 80px;
                }
            }
        }
    }
}
</style>