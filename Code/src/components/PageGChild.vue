<template>
    <div>
        <p>PageGChild页面Num：{{ pageGChildNum }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, defineExpose, inject } from 'vue'
const age = inject('ageKey')
console.log(age)
const props = defineProps({
    n: {
        type: Number,
        default: 0
    },
    fun: {
        type: Function,
    }
})
const emits = defineEmits(['fun'])


let pageGChildNum = ref<number>(0)
function addPageGChildNum () {
    // pageGChildNum.value ++
    emits('fun', addPageGChildNum2)
}
function addPageGChildNum2 () {
    pageGChildNum.value ++
}

defineExpose({
    addPageGChildNum,
})

</script>

<style scoped>

</style>