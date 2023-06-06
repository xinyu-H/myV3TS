<template>
    <div class="signaturePage padding radius">
        <div class="signaturePage_content"></div>
        <div class="signaturePage_btn flex_around">
            <van-button type="default" @click="clearSign()">清空</van-button>
            <van-button type="primary" @click="saveSign()">确认</van-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { Autog, AutogModel } from '../DataModel/Signature'

let AutogConfig: AutogModel;
// 清除签名
function clearSign () {
    Autog.clearSignature(AutogConfig)
}
function saveSign () {
    Autog.saveSignature(AutogConfig)
}
nextTick(() => {
    let signaturePage_content = document.querySelector('.signaturePage_content') as HTMLElement
    AutogConfig = {
        class:"signaturePage_content",//实例化的class
        id:"canvasId",//canvas的ID
        width: signaturePage_content.offsetWidth,//canvas width
        height: signaturePage_content.offsetHeight,//canvas height
        lineWidth: 2,//线条宽
        strokeStyle: "#000",//线条颜色
        domClass: signaturePage_content
    }
    Autog.init(AutogConfig)
})
</script>

<style lang="scss" scoped>
.signaturePage {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin-top: 20vh;
    &_content {
        width: 100%;
        flex: 1;
        border: .5px solid #ccc;
    }
    &_btn {
        width: 100%;
        height: 90px;
        margin-top: 10px;
        >button {
            width: 200px;
            height: 80px;
        }
    }
}
</style>