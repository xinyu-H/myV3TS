<template>
    <div class="echartsPage">
        <!-- Echarts -->
        <div class="echartsPage_echarts padding" ref="EchartsDom"></div>
    </div>
</template>

<script setup lang="ts">
import { nextTick, ref, onMounted, onUnmounted, inject, watch } from 'vue';
import { option } from '../DataModel/homePageData';

const $Utils: any = inject('$Utils')
const $Echarts: any = inject('$Echarts');

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
    clearInterval(intervalTimer)
})
</script>

<style lang="scss" scoped>
.echartsPage {
    width: 100%;
    height: 400px;
    overflow: auto;
    margin: 20px 0;
    box-shadow: 0 0 15px 5px #ddd;
    &_echarts {
        width: 100%;
        height: 100%;
        border: .5px solid #ddd;
    }
}</style>