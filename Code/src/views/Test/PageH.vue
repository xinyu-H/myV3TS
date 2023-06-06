<template>
    <div class="pageH padding">
        <h2>添加一条记录</h2>
        <div>
            <el-input v-model="data.toAddData.title" placeholder="Please input" />
            <el-button class="elBtn" @click="addToDo()">添加</el-button>
        </div>
        <ol>
            <li v-for="(item, idnex) in data.list">{{ item.id }} {{ item.title }}</li>
        </ol>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import todoListHooks from '@/hooks/useTodoList'
import router from '@/router'

const $Utils: any = inject('$Utils')
$Utils.Tools.isMobile()
const { data, addToDo } = todoListHooks()


onMounted(() => {
    console.log('pageH.vue')
})

</script>

<style scoped lang="scss">
.pageH {
    width: 100%;
    height: 100%;
    >div {
        width: 100%;
        display: flex;
    }
}
</style>