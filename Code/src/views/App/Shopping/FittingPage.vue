<template>
    <div class="FittingPage">
        <div class="shirt">
            <img src="@assets/images/Fitting/t-shirt.png" loading="lazy">
            <div class="shirt__overlay">
                <div class="shirt__overlay__pattern" :style="{backgroundImage: `url(${bgImg})`}"></div>
                <img src="@assets/images/Fitting/t-shirt-overlay-70c.png">
            </div>
        </div>
        <div class="preview">
            <li v-for="(v, i) in imgList" :key="i" :class="{'color': activeColor==i}" @click="fitting(v, i)">
                <img :src="v.src" alt="">
            </li>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import swatch1 from '@assets/images/Fitting/swatch1-preview.png'
import swatch2 from '@assets/images/Fitting/swatch2-preview.png'
import swatch3 from '@assets/images/Fitting/swatch3-preview.png'
import swatch4 from '@assets/images/Fitting/swatch4-preview.png'
import swatch5 from '@assets/images/Fitting/swatch5-preview.png'
import swatch6 from '@assets/images/Fitting/swatch6-preview.png'
import swatch7 from '@assets/images/Fitting/swatch7-preview.png'
import swatch8 from '@assets/images/Fitting/swatch8-preview.png'


interface ImgListModel {
    src: string
}
const imgList = ref<Array<ImgListModel>>([{
    src: swatch1
}, {
    src: swatch2
}, {
    src: swatch3
}, {
    src: swatch4
}, {
    src: swatch5
}, {
    src: swatch6
}, {
    src: swatch7
}, {
    src: swatch8
}, ])
const bgImg = ref<string>('')
const activeColor = ref<number>(0)
/**
 * 
 * @param val 点击预览图
 * @param index 
 */
function fitting(val: ImgListModel, index: number) {
    bgImg.value = val.src
    activeColor.value = index
}


</script>

<style lang="scss" scoped>
.FittingPage {
    background: #404749;
    background: radial-gradient(#404749 0%, #404749 85%, #303535);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 120px;
    .shirt {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        span {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100vw;
            text-align: center;
            color: white;
            font-size: 32px;
            font-weight: bold;
        }
        img {
            max-height: 80%;
            max-width: 80%;
            margin: auto;
            position: relative;
        }
        .shirt__overlay {
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                mix-blend-mode: multiply;
            }
            .shirt__overlay__pattern {
                position: absolute;
                top: 0%; 
                width: 80%;
                height: 100%;
                -webkit-mask-image: url(../../../assets/images/Fitting/shirt-mask.png);
                mask-image: url(../../../assets/images/Fitting/shirt-mask.png);
                -webkit-mask-size: contain;
                mask-size: contain;
            }
        }
    }
    .preview {
        position: absolute;
        top: 4px;left: 0;
        width: 100%;
        height: auto;
        li {
            width: 100px;
            height: 100px;
            background-color: tan;
            border-radius: 20px;
            overflow: hidden;
            margin: 10px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .color {
            border: 6px solid #39f;
        }
    }
}
</style>