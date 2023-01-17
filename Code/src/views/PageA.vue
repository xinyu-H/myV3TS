<template>
    <div>
        <el-row class="mb-4">
            <el-button @click="clickFun1()">Default</el-button>
            <el-button type="primary" @click="$router.push('PageB')">PageB</el-button>
            <el-button type="success" @click="$router.push('PageC')">PageC</el-button>
            <el-button type="info" @click="$router.push('Work1')">Work1</el-button>
            <el-button type="warning" @click="$router.push('PageD')">PageD</el-button>
            <el-button type="danger" @click="$router.push('PageE')">PageE</el-button>
            <el-button @click="$router.push('PageF')">PageF</el-button>
        </el-row>

        <el-row class="mb-4">
            <el-button plain>Plain</el-button>
            <el-button type="primary" plain>Primary</el-button>
            <el-button type="success" plain>Success</el-button>
            <el-button type="info" plain>Info</el-button>
            <el-button type="warning" plain>Warning</el-button>
            <el-button type="danger" plain>Danger</el-button>
        </el-row>

        <el-row class="mb-4">
            <el-button round>Round</el-button>
            <el-button type="primary" round>Primary</el-button>
            <el-button type="success" round>Success</el-button>
            <el-button type="info" round>Info</el-button>
            <el-button type="warning" round>Warning</el-button>
            <el-button type="danger" round>Danger</el-button>
        </el-row>

        <el-row>
            <el-button :icon="Search" circle />
            <el-button type="primary" :icon="Edit" circle />
            <el-button type="success" :icon="Check" circle />
            <el-button type="info" :icon="Message" circle />
            <el-button type="warning" :icon="Star" circle />
            <el-button type="danger" :icon="Delete" circle />
        </el-row>

        {{ Pinia1.height }}
    </div>
</template>

<script setup lang="ts">
import { Check, Delete, Edit, Message, Search, Star, } from '@element-plus/icons-vue'
import { Store1 } from '../../pinia/state'

const Pinia1 = Store1()
function clickFun1() {
    Pinia1.addHeight()
}


</script>

<style scoped>
.postcss {
    width: 700px;
    height: 20px;
    font-size: 20px;
    background-color: aqua;
}
</style>