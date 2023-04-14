<template>
    <div class="scanPage">
        <div id="qrcode-reader" style="width: 100%;"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, inject } from 'vue'
import { Html5QrcodeScanner, Html5Qrcode, Html5QrcodeScannerState } from "html5-qrcode"

const $Utils: any = inject('$Utils')
let qrcodeDom: Html5Qrcode | null = null
let result = ref<string>('')

onMounted(() => {
    initScan()
    stratScan()
})

function initScan () {
    qrcodeDom = new Html5Qrcode("qrcode-reader");
}

function stratScan (this: any) {
    // 设置宽度为最小边的百分之64%
    let qrboxFunction = function(viewfinderWidth: number, viewfinderHeight: number) {
        let minEdgePercentage = 0.64; // 64%
        let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
        let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
        return {
            width: qrboxSize,
            height: qrboxSize
        };
    }
    const config = { fps: 10, qrbox: qrboxFunction };
    const qrCodeSuccessCallback = (decodedText: any, decodedResult: any) => {
        stopScan(decodedText);
    };
    const qrCodeErrorCallback = (errorMessage: any, error: any) => {
        
    };
    qrcodeDom?.start({ 
            facingMode: { exact: "environment"} 
    }, 
        config, 
        qrCodeSuccessCallback, 
        qrCodeErrorCallback
    ).catch((err: string) => {
        var errMsg = '';
        if (err.indexOf('NotAllowedError') != -1) {
            errMsg = 'ERROR: 您需要授予相机访问权限';
        } else if (err.indexOf('NotFoundError') != -1) {
            errMsg = 'ERROR: 这个设备上没有摄像头';
        } else if (err.indexOf('NotSupportedError') != -1) {
            errMsg = 'ERROR: 所需的安全上下文(HTTPS、本地主机)';
        } else if (err.indexOf('NotReadableError') != -1 )  {
            errMsg = 'ERROR: 相机被占用';
        } else if (err.indexOf('OverconstrainedError') != -1) {
            errMsg = 'ERROR: 安装摄像头不合适';
        } else if (err.indexOf('StreamApiNotSupportedError') != -1) {
            errMsg = 'ERROR: 此浏览器不支持流API';
        } else if (err.indexOf('not supported by the browser') != -1) {
            errMsg = '浏览器不支持摄像头流媒体';
        } else {
            errMsg = err;
        }
        console.log(err)
        $Utils.Message.failToast(errMsg);
    });
    
}

function stopScan(text: any) {
    qrcodeDom?.stop().then((ignore: any) => {
        // QR Code scanning is stopped.
    }).catch((err: any) => {
        // Stop failed, handle it.
    }).finally(() => {
        if (!!text) {
            result.value = text
        }
    });
}

</script>

<style lang="scss" scoped>

</style>