<template>
    <div class="HomePage padding">
        <!-- 头部功能 -->
        <div class="HomePage_header radius flex_around ">
            <div class="padding" v-for="(item, index) in HeaderList" :key="item.icon" @click="$router.push(item.path)">
                <van-icon class="icon" :name="item.icon" />
                <p>{{ item.name }}</p>
            </div>
        </div>
        <!-- banner 轮播图 -->
        <div class="HomePage_banner">
            <van-swipe class="my-swipe" :autoplay="100000" @change="bannerChange">
                <van-swipe-item class="scrollDiv" v-for="(item, index) in bannerList" :key="index" :style="`background:url(${item.img}) no-repeat; background-size: 100% 100%;`">
                    <!-- <img :src="item.img" alt=""> -->
                    <div class="scrollDivC">
                        <div v-for="(item2, index2) in item.strList" :key="index2">{{ item2.name }}</div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script setup lang="ts">
import { nextTick, ref, onMounted, onUnmounted } from 'vue';
import bannerImg1 from '../../../assets/images/Home/1.jpg'
import bannerImg3 from '../../../assets/images/Home/3.jpg'
import bannerImg4 from '../../../assets/images/Home/4.jpg'
import list from 'vant/lib/list';

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
const bannerList = ref<Array<{
    img: string,
    strList: Array<{
        name: string
    }>
}>>([{
    img: bannerImg1,
    strList: [{
        name: '一二三四五，上山打老虎1'
    }, {
        name: '一二三四五，上山打老虎2'
    }, {
        name: '一二三四五，上山打老虎3'
    }, {
        name: '一二三四五，上山打老虎4'
    }, {
        name: '一二三四五，上山打老虎5'
    }, {
        name: '一二三四五，上山打老虎6'
    }, {
        name: '一二三四五，上山打老虎7'
    }, {
        name: '一二三四五，上山打老虎8'
    }, {
        name: '一二三四五，上山打老虎9'
    }, {
        name: '一二三四五，上山打老虎10'
    }]
    // str: '《曹冲称象》是个寓言故事，讲述了有人送给曹操一头大象，没有见过大象这种庞然大物的文武百官想知道他的重量，可惜绞尽脑汁都没有想到合适办法。后来曹操的小儿子曹冲提议用吃水深度相同的石头去称大象。</br>当时学习的时候特别崇拜曹冲，一个小孩子就有如此的奇思妙想，太厉害了！'
}, {
    img: bannerImg3,
    strList: [{
        name: '老虎没打到，打到小松鼠1'
    }, {
        name: '老虎没打到，打到小松鼠2'
    }, {
        name: '老虎没打到，打到小松鼠3'
    }, {
        name: '老虎没打到，打到小松鼠4'
    }, {
        name: '老虎没打到，打到小松鼠5'
    }, {
        name: '老虎没打到，打到小松鼠6'
    }, {
        name: '老虎没打到，打到小松鼠7'
    }, {
        name: '老虎没打到，打到小松鼠8'
    }, {
        name: '老虎没打到，打到小松鼠9'
    }, {
        name: '老虎没打到，打到小松鼠10'
    }]
}, {
    img: bannerImg4,
    strList: [{
        name: '松鼠对你说，真是大傻der1'
    }, {
        name: '松鼠对你说，真是大傻der2'
    }, {
        name: '松鼠对你说，真是大傻der3'
    }, {
        name: '松鼠对你说，真是大傻der4'
    }, {
        name: '松鼠对你说，真是大傻der5'
    }, {
        name: '松鼠对你说，真是大傻der6'
    }, {
        name: '松鼠对你说，真是大傻der7'
    }, {
        name: '松鼠对你说，真是大傻der8'
    }, {
        name: '松鼠对你说，真是大傻der9'
    }, {
        name: '松鼠对你说，真是大傻der10'
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

onUnmounted(() => {
    clearInterval(timer)
})
</script>

<style lang="scss" scoped>
.HomePage {
    width: 100%;
    height: 100%;
    border: 1px solid tomato;
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
        margin: 15px 0;
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