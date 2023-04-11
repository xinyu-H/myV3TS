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
                <van-swipe-item class="scrollDiv" v-for="(item, index) in bannerList" :key="index" :style="`background:url(${item.img}) no-repeat; background-size: 100% 100%;`">
                    <div class="scrollDivC">
                        <div v-for="(item2, index2) in item.strList" :key="index2">{{ item2.name }}</div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script setup lang="ts">
import { nextTick, ref, onMounted, onUnmounted, inject } from 'vue';
import bannerImg1 from '../../../assets/images/Home/1.jpg'
import bannerImg3 from '../../../assets/images/Home/3.jpg'
import bannerImg4 from '../../../assets/images/Home/4.jpg'
const $Utils: any = inject('$Utils')
const $Echarts: any = inject('$Echarts');


// 头部功能数据
const HeaderList = ref<Array<{
    name: string,
    icon: string,
    path: string
}>>([{
    name: '扫一扫',
    icon: 'scan',
    path: 'ScanPage'
}, {
    name: '定位',
    icon: 'location-o',
    path: 'MapPage'
}, {
    name: '二维码',
    icon: 'qr',
    path: 'QrPage'
}])

// banner 轮播数据
interface BannerListModel {
    img: string,
    strList: Array<{
        name: string
    }>
}
const bannerList = ref<Array<BannerListModel>>([{
    img: bannerImg1,
    strList: [{
        name: '红烧肉'
    }, {
        name: '可乐鸡翅'
    }, {
        name: '醋溜白菜'
    }, {
        name: '红烧排骨'
    }, {
        name: '西红柿炒鸡蛋'
    }, {
        name: '芹菜炒香干'
    }, {
        name: '土豆烧牛肉'
    }, {
        name: '麻婆豆腐'
    }, {
        name: '干锅菜花'
    }, {
        name: '酸辣土豆丝'
    }]
    // str: '《曹冲称象》是个寓言故事，讲述了有人送给曹操一头大象，没有见过大象这种庞然大物的文武百官想知道他的重量，可惜绞尽脑汁都没有想到合适办法。后来曹操的小儿子曹冲提议用吃水深度相同的石头去称大象。</br>当时学习的时候特别崇拜曹冲，一个小孩子就有如此的奇思妙想，太厉害了！'
}, {
    img: bannerImg3,
    strList: [{
        name: '东安子鸡'
    }, {
        name: '清蒸武昌鱼'
    }, {
        name: '无为熏鸭'
    }, {
        name: '辣子鸡'
    }, {
        name: '北京烤鸭'
    }, {
        name: '四川麻婆豆腐'
    }, {
        name: '西湖醋鱼'
    }, {
        name: '飞龙汤'
    }, {
        name: '东坡肉'
    }, {
        name: '腊味合蒸'
    }]
}, {
    img: bannerImg4,
    strList: [{
        name: '熘鱼焙面'
    }, {
        name: '炸紫酥肉'
    }, {
        name: '煎扒青鱼头尾'
    }, {
        name: '牡丹燕菜'
    }, {
        name: '汴京烤鸭'
    }, {
        name: '炸八块'
    }, {
        name: '清汤鲍鱼'
    }, {
        name: '套四宝'
    }, {
        name: '酸辣乌鱼蛋汤'
    }, {
        name: '桶子鸡'
    }]
}])
// banner 改变触发
function bannerChange (index: number) {
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
function runBox (index: number) {
    scrollTopBefore = 0
    scrollTopAfter = 0
    let scrollDiv = document.querySelectorAll('.scrollDiv')[index] as HTMLElement
    let scrollDivC = scrollDiv.querySelector('.scrollDivC') as HTMLElement
    let scrollDivCF = scrollDivC.querySelector('div') as HTMLElement
    //   scrollDiv.scrollTop = 0
    clearInterval(timer)
    timer = setInterval(() => {
        if(scrollDiv) {
            scrollTopBefore = scrollDiv.scrollTop
            scrollDiv.scrollTop++
            scrollTopAfter = scrollDiv.scrollTop
            if(scrollTopBefore === scrollTopAfter) {
                bannerList.value[index].strList.push(bannerList.value[index].strList.shift() as {name: string})
                // console.log('触底', scrollDiv.scrollTop)
                scrollDiv.scrollTop = scrollDiv.scrollTop - scrollDivCF.offsetHeight
            }
        }
    }, 30)
}

// 功能区
interface ItemsListModel {
    name: string,
    icon: string,
    color: string
}
// 是否开启颤抖动画
let isShake = ref<boolean>(false)
const ItemsList = ref<Array<ItemsListModel>>([{
    name: '烟花',
    icon: 'fire-o',
    color: 'red'
}, {
    name: '振动',
    icon: 'bell',
    color: '#399'
}, {
    name: '拍照',
    icon: 'photograph',
    color: '#39f'
}, {
    name: '通话',
    icon: 'phone',
    color: 'green'
}])
// 点击功能区
function clickItems (item: ItemsListModel) {
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
        input.onchange = async function(e: Event) {
            let target = e.target as HTMLInputElement
            $Utils.Message.successToast('', await $Utils.Tools.toBase64((target.files as FileList)[0]), '100')
        }
    }
    if (item.icon === 'phone') {
        location.href = `tel://12345`
    }
}



// Echarts
const EchartsDom = ref()
let intervalTimer:any = null
let chartIndex = ref<number>(0)
nextTick(() => {
    let myChart = $Echarts.init(EchartsDom.value)
    let option = {
        title: {
            text: '销售统计',
            subtext: '销售量',
            left: 'right'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [{
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            itemStyle: {
                borderRadius: 6,
                borderColor: '#fff',
                borderWidth: 0
            },
            data: [
                { value: 1048, name: '羊毛衫' },
                { value: 735, name: '皮靴' },
                { value: 580, name: '大衣' },
                { value: 484, name: '护目镜' },
                { value: 300, name: '登山杖' }
            ],
            labelLine: {
                show: true
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold'
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
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
function startRunChart (myChart: any, option: { title?: { text: string; subtext: string; left: string; }; tooltip?: { trigger: string; }; legend?: { orient: string; left: string; }; series: any; }) {
    intervalTimer = setInterval(() => {
        myChart.dispatchAction({
            type: 'downplay',
            dataIndex: [...new Array(option.series[0].data.length).keys()]
        })
        myChart.dispatchAction({
            type: 'highlight',
            dataIndex: chartIndex.value
        })
        chartIndex.value ++
        if (chartIndex.value >= 5) chartIndex.value = 0
    }, 2000)
}
// 停止转动
function stopRunChart () {
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
                    left: 0; bottom: 0;
                    width: 100%;
                    height: 100%;
                    filter: opacity(.2);
                }
                >.scrollDivC{
                    filter: opacity(1);
                    >div{
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
}
</style>