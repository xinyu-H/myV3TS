<template>
    <div class="starryPage">
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { initStar } from './DataModel/star'


onMounted(() => {
    nextTick(() => {
        initStar(document.querySelector('.starryPage') as HTMLElement)
    })
})

</script>

<style lang="scss" scoped>
.starryPage {
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
}
</style>