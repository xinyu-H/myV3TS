<template>
    <div>
        当前页面：
        <button @click="add()">点击子页面Num++</button>
        <br>
        子页面：
        <PageGChildPage ref="PageGChild" @fun="fun" :n="333"></PageGChildPage>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageGChildPage from '../components/PageGChild.vue';

const PageGChild = ref<InstanceType<typeof PageGChildPage>>()
function add() {
    console.log(PageGChild.value)
    PageGChild.value?.addPageGChildNum()
}
function fun (val: Function) {
    val()
}

</script>

<style scoped>

</style>