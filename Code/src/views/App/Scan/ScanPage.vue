<template>
    <div class="scanPage box_center">
        <Qrcode @scanResult="scanResult"></Qrcode>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import Qrcode from './componetns/Qrcode.vue';
import router from '@/router';
import Utils from '@/utils/utils';

const $Utils: any = inject('$Utils')

function scanResult(text: any) {
    Utils.setSessionItem('result', text)
    $Utils.Message.alertToast(text).then(() => {
        router.go(-1);
    })
    
}
</script>

<style lang="scss" scoped>
.scanPage {
    width: 100%;
    height: 100%;
    // background-color: rgba(0, 0, 0, .5);
}
</style>