<template>
  <div></div>
</template>

<script setup lang="ts">
/** js 修改滚动条样式 */
/**
 * let head = document.querySelector('head')
    let styleDom = document.createElement('style')
    styleDom.type = "text/css";
    styleDom.appendChild(document.createTextNode('div::-webkit-scrollbar {width: 0px; !important}'));
    head.appendChild(styleDom);
 */

/** 全屏方法 */
/**
 * // 进入全屏
    function enterFullscreen() {
        const element = document.documentElement; // 获取整个文档的根元素
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
    }

    // 退出全屏
    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }

    // 监听全屏状态改变
    document.addEventListener('fullscreenchange', function(event) {
        if (document.fullscreenElement) {
            console.log('进入全屏模式');
        } else {
            console.log('退出全屏模式');
        }
    });

    // 监听进入全屏失败
    document.addEventListener('fullscreenerror', function(event) {
        console.log('进入全屏失败');
    });
 */
</script>

<style scoped></style>
