<template>
    <div class="HomePage padding">
        <!-- 头部功能 -->
        <div class="HomePage_header radius flex_around ">
            <div class="padding" v-for="(item, index) in HeaderList" :key="item.icon" @click="$router.push(item.path)">
                <van-icon class="icon" :name="item.icon" />
                <p>{{ item.name }}</p>
            </div>
        </div>
        <!-- Echarts -->
        <div class="HomePage_echarts padding" ref="EchartsDom"></div>
        <!-- 功能区 -->
        <div class="HomePage_items flex_around padding">
            <div v-for="(item, index) in ItemsList" :key="item.icon" class="padding" @click="clickItems(item)">
                <van-icon class="icon" :class="isShake ? 'shake' : ''" :name="item.icon" :color="item.color" />
                <p>{{ item.name }}</p>
            </div>
        </div>
        <!-- banner 轮播图 -->
        <div class="HomePage_banner">
            <van-swipe class="my-swipe" :autoplay="8000" @change="bannerChange">
                <van-swipe-item class="scrollDiv" v-for="(item, index) in bannerList" :key="index"
                    :style="`background:url(${item.img}) no-repeat; background-size: 100% 100%;`">
                    <div class="scrollDivC">
                        <div v-for="(item2, index2) in item.strList" :key="index2">{{ item2.name }}</div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <van-overlay :show="showOverlay" @click="showOverlay = false" class="canvasOverlay"></van-overlay>
    </div>
</template>

<script setup lang="ts">
import { nextTick, ref, onMounted, onUnmounted, inject } from 'vue';
import { HeaderListModel, HeaderList, BannerListModel, bannerList, ItemsListModel, ItemsList, option } from './DataModel/homePageData';
import FireworkData from './DataModel/Fireworks'
import { watch } from 'vue';

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

// 功能区
// 是否开启颤抖动画
let isShake = ref<boolean>(false)
let showOverlay = ref<boolean>(false)
let fireworkSetInter: any = null
let fireworkSetTime: any = null

// 点击功能区
function clickItems(item: ItemsListModel) {
    if (item.name === '烟花') {
        showOverlay.value = true
        nextTick(() => {
            (document.querySelector('.canvasOverlay') as HTMLElement).style.background = 'rgba(0, 0, 0, 0)'
            new (FireworkData.Fireworks as any)();
            startFirewoke()
            fireworkSetTime = setTimeout(() => {
                showOverlay.value = false
            }, 4000)
        })
    }
    if (item.name === '群烟') {
        showOverlay.value = true
        nextTick(() => {
            (document.querySelector('.canvasOverlay') as HTMLElement).style.background = 'rgba(0, 0, 0, 0.8)'
            new (FireworkData.Fireworks as any)();
            fireworkSetInter = setInterval(() => {
                startFirewoke()
            }, 600)
        })
    }
    if (item.icon === 'bell') {
        let vibration = "vibrate" in navigator;
        if (!vibration) return $Utils.Message.failToast('不支持振动')
        isShake.value = true
        // 振动多次 参数分别是震动3秒，等待2秒，然后振动1秒
        navigator.vibrate([300, 100, 200, 100, 100, 100, 500, 100, 300, 100, 200, 100, 100, 50, 50, 50, 150, 200, 200])
        setTimeout(() => {
            isShake.value = false
        }, 3000)
    }
    if (item.icon === 'photograph') {
        let input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.setAttribute('id', 'file')
        input.setAttribute('accept', 'image/*')
        input.click()
        input.onchange = async function (e: Event) {
            let target = e.target as HTMLInputElement
            $Utils.Message.successToast('', await $Utils.Tools.toBase64((target.files as FileList)[0]), '100')
        }
    }
    if (item.icon === 'phone') {
        location.href = `tel://12345`
    }
}
watch(showOverlay, (newVal) => {
    if (!newVal) {
        clearInterval(fireworkSetInter)
        clearTimeout(fireworkSetTime)
        window.cancelAnimationFrame(FireworkData.self.stop)
        let canvasOverlay = document.querySelector('.canvasOverlay')
        let canvasDom = canvasOverlay?.querySelector('canvas') as HTMLCanvasElement
        canvasOverlay?.removeChild(canvasDom)
    }
})
function startFirewoke () {
    FireworkData.self.currentHue = $Utils.Tools.getRandom(0, 360)
    let wArea = $Utils.Tools.getRandom(100, window.innerWidth - 100)
    let hArea = $Utils.Tools.getRandom(100,  (window.innerHeight / 2) - 100)
    FireworkData.self.createFireworks(window.innerWidth / 2, window.innerHeight, wArea, hArea);
}


// Echarts
const EchartsDom = ref()
let intervalTimer: any = null
let chartIndex = ref<number>(0)
nextTick(() => {
    let myChart = $Echarts.init(EchartsDom.value)
    option && myChart.setOption(option);
    startRunChart(myChart, option)
    // 移入事件
    myChart.on('mouseover', (params: any) => {
        stopRunChart()
        myChart.dispatchAction({
            type: 'downplay',
            dataIndex: [...new Array(option.series[0].data.length).keys()]
        })
        myChart.dispatchAction({
            type: 'highlight',
            dataIndex: params.dataIndex
        })
    })
    // 移出事件
    myChart.on('mouseout', () => {
        startRunChart(myChart, option)
    })
})
// 开始转动 Echarts
function startRunChart(myChart: any, option: { title?: { text: string; subtext: string; left: string; }; tooltip?: { trigger: string; }; legend?: { orient: string; left: string; }; series: any; }) {
    intervalTimer = setInterval(() => {
        myChart.dispatchAction({
            type: 'downplay',
            dataIndex: [...new Array(option.series[0].data.length).keys()]
        })
        myChart.dispatchAction({
            type: 'highlight',
            dataIndex: chartIndex.value
        })
        chartIndex.value++
        if (chartIndex.value >= 5) chartIndex.value = 0
    }, 2000)
}
// 停止转动
function stopRunChart() {
    clearInterval(intervalTimer)
}



onUnmounted(() => {
    clearInterval(timer)
    clearInterval(intervalTimer)
})
</script>

<style lang="scss" scoped>
.HomePage {
    width: 100%;
    height: 100%;
    overflow: auto;

    &_header {
        width: 100%;
        height: 220px;
        text-align: center;
        background-color: #39f;
        color: #fff;

        >div {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            font-size: 36px;

            .icon {
                font-size: 80px;
            }
        }
    }

    &_banner {
        width: 100%;
        height: 400px;
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

    &_items {
        width: 100%;
        height: 400px;
        border: .5px solid #ddd;
        box-shadow: 0 0 15px 5px #ddd;
        flex-wrap: wrap;
        >div {
            width: 22%;
            height: 45%;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            font-size: 32px;
            .icon {
                font-size: 50px;
            }
            @keyframes appShake {
                0% {
                    transform: rotateZ(-8deg);
                }
                100% {
                    transform: rotateZ(8deg);
                }
            }
            // 颤动动画
            .shake {
                animation-name: appShake;
                animation-duration: 0.2s;
                animation-iteration-count: infinite;
                animation-direction: alternate;
                animation-timing-function: linear;
            }
        }
    }

    &_echarts {
        width: 100%;
        height: 400px;
        border: .5px solid #ddd;
        box-shadow: 0 0 15px 5px #ddd;
        margin: 20px 0;
    }

    .canvasOverlay {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0);
    }
}</style>