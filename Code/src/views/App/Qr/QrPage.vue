<template>
    <div class="qrPage">
        <qrcode-vue :value="QrValue" :size=150 @click="refresh()" ></qrcode-vue>
        <div class="qrPage_text">
            <p>点击刷新二维码</p>
            <p>该二维码用于xxx</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'
import { ref, inject } from 'vue'

const $Utils: any = inject('$Utils')
const QrValue = ref<string>('456465sfASfasfsaf')
let strList: Array<string> = [
    '你是我的玫瑰，你是我的花',
    '我们还能不能，能不能再见面',
    '被伤过的心还可以爱谁',
    '我爱你，爱着你，就像老鼠爱大米',
    '不是因为寂寞才想你，而是想你才寂寞',
    'You Are My Life, But Not All.'
]
function refresh () {
    QrValue.value = strList[$Utils.Tools.getRandom(0, 5)]
}

</script>

<style lang="scss" scoped>
.qrPage {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 200px 0;
    &_text {
        font-size: 34px;
        font-weight: bold;
    }
}
</style>