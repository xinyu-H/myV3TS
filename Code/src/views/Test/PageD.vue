<template>
    <div class="pageD-container">
        <div class="pageD-container__header"></div>
        <div class="pageD-container__main"></div>
        <div class="pageD-container__footer"></div>
        <button @click="heightNum += 10">height++</button>
        <button @click="clearTimer">clearTimer</button>
    </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue'

const heightNum = ref<number>(10)
const footerHeight = computed(() => heightNum.value + 'px')
class myPromise {
    state: string;
    value: unknown;
    reason: unknown;
    then: (onFulfilled: Function, onRejected: Function) => void;
    constructor (content: Function) {
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined

        this.then = (onFulfilled: Function, onRejected: Function) => {
            if (this.state === 'fulfilled') onFulfilled(this.value)
            if (this.state === 'rejected') onRejected(this.reason)
        }

        let resolve = (value: unknown) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
            }
        }
        let reject = (reason: unknown) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
            }
        }

        try {
            content(resolve, reject)
        } catch (err) {
            reject(err)
        }

    }
}

// new myPromise((resolve: Function, reject: Function) => {
//     reject('哈哈哈')
// }).then((res: unknown) => {
//     console.log(res)
// }, (err: unknown) => {
//     console.log(err)
// })

// interface User {
//     name: string
// }
// function foo (user: User) {
//     console.log(user.name)
// }
// const userData = JSON.stringify({}) 
// const user: unknown = JSON.parse(userData)
// function isUser(user: any): user is User {
//     return typeof user === 'object' && typeof user.name === 'string'
// }
// if (isUser(user)) {
//     foo(user);
// }

let timer: any = null;
timer = setTimeout(() => {
    console.log(132)
}, 10000)

function clearTimer () {
    clearTimeout(timer)
}

</script>

<style lang="scss">
.pageD-container {
    width: 100%;
    height: 100%;
    border: 1px solid tan;
    &__header {
        width: 100%;
        height: 10px;
        background-color: pink;
    }
    --pageD-main-height: 50px;
    &__main {
        width: 100%;
        height: var(--pageD-main-height);
        background-color: tan;
    }
    &__footer {
        width: 100%;
        height: v-bind(footerHeight);
        background-color: skyblue;
    }
}
</style>