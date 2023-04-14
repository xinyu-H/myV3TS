<template>
    <div class="scanPage padding box_center">
        <Qrcode @scanResult="scanResult"></Qrcode>
    </div>
</template>

<script setup lang="ts">
import Qrcode from './componetns/Qrcode.vue';
import router from '@/router';

function scanResult(text: any) {
    sessionStorage.setItem('result', text)
    router.go(-1);
}
</script>

<style lang="scss" scoped>
.scanPage {
    width: 100%;
    height: 100%;
}
</style>