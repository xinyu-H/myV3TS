<template>
    <div class="box">
        <div class="test">
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { nextTick } from "vue";

let scale = 1;
let boxW;
const scaleBox = (box: HTMLElement, size: number) => {
    boxW = box.getBoundingClientRect().width;
    box.style.transformOrigin = `top left`;
    while (Math.abs(boxW - size) > 1) {
        boxW < size ? scale += 0.001 : scale -= 0.001;
        box.style.transform = `scale(${scale})`;
        boxW = box.getBoundingClientRect().width;
    }
    console.log(boxW, size);
}

window.addEventListener("resize", () => {
    scaleBox(document.querySelector(".box") as HTMLElement, window.innerWidth)
})

nextTick(() => {
    scaleBox(document.querySelector(".box") as HTMLElement, window.innerWidth);
})













function clickLi (e: Event) {
    console.log(e)
}
interface Perosn {
    name: string,
    age: number
}
type P = keyof Perosn

let p1: P = 'age'

const object = {
    name: '侯',
    age: 23
}
function getVal <T extends object, K extends keyof T> (obj: T, key: K): T[K] {
    return obj[key]
}
// console.log(getVal(object, 'age'))

</script>

<style scoped lang="scss">
div {
    box-sizing: border-box;
}
.box {
    width: 1920px;
    height: 1080px;
    overflow: auto;
    background-color: tan;
    border: 2px solid red;
}

.test {
    width: 100%;
    height: 100px;
    >div:nth-child(1) {
        width: 100px;
        height: 100%;
        float: left;
        background-color: pink;
    }
    >div:nth-child(2) {
        width: 50px;
        height: 100%;
        overflow: hidden;
        background-color: tomato;
    }
}
</style>