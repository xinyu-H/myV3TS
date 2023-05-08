<template>
    <div class="pageF-content">
        <div class="snow_box">
           <!-- <div class="snow" y="2">❇</div>  -->
        </div>
        <div class="box">
            <el-button type="primary" @click="isColor = !isColor">变色</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

let timer: any = null
const isColor = ref<boolean>(false)
const iconList = ['❄', '❆', '❁', '❅', '❃', '✽', '✺', '❂', '✼', '❋', '✴', '❉', '❊', '✻', '✳', '❈', '✹', '✲', '✷', '✸', '❇']
nextTick(() => {
    setInterval(() => {
        let color = getColor()
        let snow = document.createElement('div')
        snow.setAttribute('y', String(getRandom(1, 1.5)))
        snow.setAttribute('x', String(getRandom(-0.1, 0.1, 2)))
        snow.classList.add('snow')
        snow.style.width = '10px'
        snow.style.height = '10px'
        snow.style.position = 'relative'
        snow.style.position = 'absolute'
        snow.style.top = '-20px'
        snow.style.opacity = String(getRandom(0.4, 0.9))
        snow.style.color = isColor.value ? color : '#FFF'
        snow.style.left = getRandom(0, window.innerWidth) + 'px'
        snow.style.transform = `scale(${getRandom(0.4, 1)})`
        // snow.style.filter = `drop-shadow(0 0 3px ${isColor.value ? color :'#FFF'})`
        snow.style.textShadow = `0 0 10px ${isColor.value ? color :'#FFF'}`
        snow.innerHTML = iconList[getRandom(0, 20, 1)]
        document.querySelector('.snow_box')?.appendChild(snow)
    }, 30)
    
    let snowDom = document.querySelectorAll('.snow') as unknown as Array<HTMLElement>
    snowDom.forEach((v: HTMLElement) => {
        v.style.left = getRandom(0, window.innerWidth) + 'px'
        v.style.transform = `scale(${getRandom(0.4, 1.4)})`
    })
})
function init () {
    nextTick(() => {
        let snowDom = document.querySelectorAll('.snow') as unknown as Array<HTMLElement>
        // if (!snowDom.length) clearInterval(timer)
        snowDom.forEach((v: HTMLElement) => {
            if (+v.style.top.slice(0, -2) > window.innerHeight) v.remove()
            v.style.top = +v.style.top.slice(0, -2) + Number(v.getAttribute('y')) + 'px'
            v.style.left = +v.style.left.slice(0, -2) + Number(v.getAttribute('x')) + 'px'
        })
    })
}
timer = setInterval(init, 20)
/**
 * 
 * @param m 
 * @param n 
 * @param is 
 */
function getRandom (m: number, n: number, is?: number): number {
    let num = +Math.abs(Math.random() * (n-m+1) + m-1).toFixed(2)
    if (is === 2) return +(Math.random() * (n-m+1) + m-1).toFixed(2)
    if (is === 1) return +Math.ceil(Math.random() * (n-m+1) + m-1)
    if (num < m) return getRandom(m, n, is)
    return num
}

const colorList: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
function getColor () {
    let str = '#'
    for (let i = 0; i < 6; i++) {
        str += colorList[getRandom(0, 15, 1)]
    }
    return str
}
</script>

<style scoped lang="scss">
.pageF-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 10px;
    background: linear-gradient(180deg, #000000, #1f3140);
    .snow_box {
        position: relative;
        width: 100%;
        height: 100%;
        .snow {
            position: absolute;
            top: 0;
            width: 10px;
            height: 10px;
            color: #fff;
            filter: drop-shadow(0 0 3px #fff);
            text-shadow: 0 0 10px #fff;
        }
    }
    .box {
        position: fixed;
        top: 20px;
        right: 20px;
    }
}
</style>