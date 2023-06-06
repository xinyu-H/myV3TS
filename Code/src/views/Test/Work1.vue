<template>
    <div>
        <div class="test">
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script setup lang="ts">
function clickLi (e: Event) {
    console.log(e)
}
interface Perosn {
    name: string,
    age: number
}
type P = keyof Perosn

let p1: P = 'age'

const object = {
    name: '侯',
    age: 23
}
function getVal <T extends object, K extends keyof T> (obj: T, key: K): T[K] {
    return obj[key]
}
console.log(getVal(object, 'age'))

</script>

<style scoped lang="scss">
.test {
    width: 100%;
    height: 100px;
    >div:nth-child(1) {
        width: 100px;
        height: 100%;
        float: left;
        background-color: red;
    }
    >div:nth-child(2) {
        height: 100%;
        overflow: hidden;
        background-color: tan;
    }
}
</style>