<template>
    <div class="mapPage">
        <div id="container"></div>
        <footer class="radius padding" v-if="isShowFooter">
            <p>您现在的位置是：</p>
            <p>{{ address }}</p>
            <van-button type="primary">确定</van-button>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, watch } from 'vue';
import { ReGeocodeModel } from '../../../utils/aMap'

const $Utils: any = inject('$Utils')
const address = ref('')
let circle: any = null
let marker: any = null
let circleLocation = ref<Array<number>>([0, 0])
let dotLocation = ref<Array<number>>([0, 0])
let maxDistance = 50
let isShowFooter = ref<boolean>(false)

onMounted(() => {
    $Utils.Message.showLoadingToast()
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
})

let setTimeer = null
setTimeer = setTimeout(() => {
    if (!isShowFooter.value) {
        // $Utils.Message.closeLoadingToast()
        $Utils.Message.failToast('浏览器不支持获取当前位置')
    }
}, 5000);

// http的协议不支持获取定位，所以设置一个固定的进行测试
// showPosition({
//     coords: {
//         longitude: 116.274114,
//         latitude: 39.840426
//     }
// })
function showPosition(position: any) {
    isShowFooter.value = true
    circleLocation.value = [+position.coords.longitude, +position.coords.latitude]
    dotLocation.value = [+position.coords.longitude, +position.coords.latitude]
    $Utils.AMap.load().then(async (AMap: any)=> {
        // 获取的坐标转换为高德坐标
        await $Utils.AMap.convertGps(AMap, dotLocation.value).then((res: Array<number>) => {
            circleLocation.value = res
            dotLocation.value = res
        })
        // 获取坐标转换后的位置
        address.value = await getAddress(AMap, dotLocation.value)
        // 加载地图 及 设置
        const map = new AMap.Map('container')
        map.setCenter(circleLocation.value, true)
        map.setZoom(18, true)
        // 添加点标记 及 圆区域
        addCenterDot(map,  AMap)
        addCenterCircle(map, AMap)
        $Utils.Message.closeLoadingToast()
        // 地图点击事件
        map.on('click', (ev: any) => {
            // circleLocation.value = [ev.lnglat.lng, ev.lnglat.lat]
            // map.remove(circle)
            // addCenterCircle(map, AMap)
        })
        // 地图移动停止事件
        map.on('moveend', async (ev: any) => {
            let point = map.getCenter()
            // 重新计算点标记
            dotLocation.value = [point.lng, point.lat]
            map.remove(marker)
            addCenterDot(map, AMap)
            // 重新计算圆区域
            circleLocation.value = [point.lng, point.lat]
            map.remove(circle)
            addCenterCircle(map, AMap)
            // 重新计算位置
            address.value = await getAddress(AMap, dotLocation.value) + `(${dotLocation.value[0]}，${dotLocation.value[1]})`
        })
    })
}



// 添加点标记
function addCenterDot (map: any, AMap: any) {
    // 创建一个 Marker 实例：
    marker = new AMap.Marker({
        position: new AMap.LngLat(dotLocation.value[0], dotLocation.value[1]),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '北京'
    });
    // 将创建的点标记添加到已有的地图实例：
    map.add(marker);
}

// 添加区域标记
function addCenterCircle (map: any, AMap: any) {
    circle = new AMap.Circle({
        center: new AMap.LngLat(circleLocation.value[0], circleLocation.value[1]),
        radius: maxDistance, // 圆半径
        fillColor: '#e6f3ff', // 圆形填充颜色
        strokeColor: '#b3dbff', // 描边颜色
        strokeWeight: 2 // 描边宽度
    })
    // 将创建的区域添加到已有的地图实例：
    map.add(circle)
}

async function getAddress (AMap: any, location: Array<number>): Promise<string> {
    return await $Utils.AMap.reGeocoder(AMap, location).then((res: ReGeocodeModel) => {
        return res.formattedAddress;
    });
}




</script>

<style lang="scss" scoped>
.mapPage {
    width: 100%;
    height: 100%;
    #container {
        width: 100%;
        height: 100%;
    }
    footer {
        width: 90%;
        min-height: 200px;
        background-color: #fff;
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: .5px solid #ddd;
        box-shadow: 0 0 15px 8px #ddd;
        p {
            font-size: 30px;
        }
        button {
            font-size: 34px;
        }
    }
}
</style>