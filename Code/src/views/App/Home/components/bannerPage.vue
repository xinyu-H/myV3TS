<template>
    <div class="bannerPage">
        <!-- banner 轮播图 -->
        <div class="bannerPage_banner">
            <van-swipe class="my-swipe" :autoplay="8000" @change="bannerChange">
                <van-swipe-item class="scrollDiv" v-for="(item, index) in bannerList" :key="index"
                    :style="`background:url(${item.img}) no-repeat; background-size: 100% 100%;`">
                    <div class="scrollDivC">
                        <div v-for="(item2, index2) in item.strList" :key="index2">{{ item2.name }}</div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script setup lang="ts">
import { nextTick, ref, onMounted, onUnmounted, inject, watch } from 'vue';
import { BannerListModel, bannerList} from '../DataModel/homePageData';

const $Utils: any = inject('$Utils')
const $Echarts: any = inject('$Echarts');

// banner 改变触发
function bannerChange(index: number) {
    runBox(index)
}

let timer: any = null;
// 记录滚动值
let scrollTopBefore = 0
let scrollTopAfter = 0

nextTick(() => {
    runBox(0)
})
// 滚动函数
function runBox(index: number) {
    scrollTopBefore = 0
    scrollTopAfter = 0
    let scrollDiv = document.querySelectorAll('.scrollDiv')[index] as HTMLElement
    let scrollDivC = scrollDiv.querySelector('.scrollDivC') as HTMLElement
    let scrollDivCF = scrollDivC.querySelector('div') as HTMLElement
    //   scrollDiv.scrollTop = 0
    clearInterval(timer)
    timer = setInterval(() => {
        if (scrollDiv) {
            scrollTopBefore = scrollDiv.scrollTop
            scrollDiv.scrollTop++
            scrollTopAfter = scrollDiv.scrollTop
            if (scrollTopBefore === scrollTopAfter) {
                bannerList.value[index].strList.push(bannerList.value[index].strList.shift() as { name: string })
                // console.log('触底', scrollDiv.scrollTop)
                scrollDiv.scrollTop = scrollDiv.scrollTop - scrollDivCF.offsetHeight
            }
        }
    }, 30)
}

onUnmounted(() => {
    clearInterval(timer)
})
</script>

<style lang="scss" scoped>
.bannerPage {
    width: 100%;
    height: 400px;
    overflow: auto;

    &_banner {
        width: 100%;
        height: 100%;
        // background-color: #aaa;
        margin: 20px 0;

        .my-swipe {
            width: 100%;
            height: 100%;

            .van-swipe-item {
                position: relative;
                height: 100%;
                overflow: auto;

                img {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    filter: opacity(.2);
                }

                >.scrollDivC {
                    filter: opacity(1);

                    >div {
                        width: 100%;
                        height: 80px;
                        font-weight: 800;
                        color: #fff;
                        text-align: center;
                    }
                }
            }

            .van-swipe-item::-webkit-scrollbar {
                display: none;
            }
        }
    }
}
</style>