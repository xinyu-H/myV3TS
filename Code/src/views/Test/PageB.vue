<template>
    <div>
        {{name}} -- {{ age }}
        <button @click="clickWatchEffect()">clickWatchEffect</button>
        <PageBChildVue></PageBChildVue>
    </div>
</template>

<script setup lang="ts">
import { update } from 'lodash';
import { provide, ref, watchEffect } from 'vue'
import PageBChildVue from '../../components/PageBChild.vue';
const age = ref<number>(23)
const name = ref<string>('侯新宇')
provide('ageKey', age)
provide('nameKey', name)
provide('updateNameKey', updateName)

function updateName (val: string) {
    name.value = name.value + val
}

watchEffect(onInvalidate => {
    const timer = setTimeout(() => {
        console.log('执行 setTimeout')
    }, 1000)
    onInvalidate(() => {
        clearTimeout(timer)
    })
    // console.log(age.value)
})

function clickWatchEffect () {
    age.value ++
}
</script>

<style scoped>

</style>