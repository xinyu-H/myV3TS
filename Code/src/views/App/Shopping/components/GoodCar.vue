<template>
    <div class="good_car">
        <div class="content_info_box radius">
            <img :src="item.img" alt="" @click="clickInfoBox()">
            <div class="info_box_info padding">
                <van-text-ellipsis rows="2" :content="item.name" @click-action="clickAction()" expand-text="展开" collapse-text=" 收起" />
                <p class="info_evaluate" v-if="item.evaluate">"{{ item.evaluate }}"</p>
                <p class="info_price">
                    <span>￥{{ item.price }}</span>
                    <span>￥{{ item.originalCost }}</span>
                </p>
                <van-rate v-model="item.star" readonly :size="12" color="#ffd21e" void-icon="star" void-color="#eee" />
                <!-- <p class="info_merchant">{{ item.merchant }}</p> -->
                <p class="info_merchant">月售 {{ item.sales }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '../../../../router/index';
import { ref, defineProps, defineEmits, inject, nextTick } from 'vue'

const Props = defineProps(['item'])
/**
 * 点击商品模块
 * 
 */
 function clickInfoBox () {
    router.push('FittingPage')
}

let initStyle: Function = inject('initStyle') as Function
function clickAction () {
    nextTick(() => {
        initStyle()
    })
}


</script>

<style scoped lang="scss">
.good_car {
    width: 100%;
    height: 100%;
}
.content_info_box {
    width: 100%;
    min-height: 300px;
    height: auto;
    border: .5px solid #eee;
    box-shadow: 0 0 15px 5px #eee;
    margin-bottom: 10px;
    overflow: hidden;
    >img {
        width: 100%;
        height: 240px;
    }
    >.info_box_info {
        width: 100%;
        height: auto;
        >.van-text-ellipsis {
            font-size: 28px;
        }
        >.info_price {
            span:nth-child(1) {
                font-size: 28px;
                color: red;
            }
            span:nth-child(2) {
                font-size: 24px;
                position: relative;
                color: #aaa;
                margin-left: 10px;
                &::after {
                    content: '';
                    position: absolute;
                    width: 110%;
                    height: 1px;
                    background-color: #aaa;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
        >.info_evaluate {
            font-size: 24px;
            color: rgb(241, 184, 37);
        }
        >.info_merchant {
            font-size: 22px;
            color: #aaa;
            text-align: right;
        }
    }
}
</style>