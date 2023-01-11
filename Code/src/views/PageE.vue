<template>
    <div class="pageE-content">
        <div class="outer">
            <div class="inter">
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// // 计算大整数
// let n1 = '33333333333333333133333333333'
// let n2 = '22229'
// function getBigInt (n1: string | string[], n2: string | string[]): string {
//     let result = ''
//     let temp: number | boolean = 0
//     let len = Math.max(n1.length, n2.length)
//     n1 = (n1 as string).split('')
//     n2 = (n2 as string).split('')
//     while (n1.length || n2.length || temp) {
//         (temp as number) += ~~n1.pop() + ~~n2.pop();
//         result = (temp as number % 10) + result;
//         temp = temp > 9;
//     }
//     return result
// }

// console.log(getBigInt(n1, n2))

interface Person {
    name: string,
    age: number,
    hobby: Array<string>
}
class createPerson {
    name: string
    age: number
    hobby: Array<string>
    constructor (name: string, age: number, hobby: Array<string>) {
        this.name = name
        this.age = age
        this.hobby = hobby
    }
    getName () {
        return this.name
    }
}

class extendsPerson extends createPerson {
    sex: string
    height: number
    constructor (name: string, age: number, hobby: Array<string>, sex: string, height: number) {
        super(name, age, hobby)
        this.sex = sex
        this.height = height
    }
}

const P1 = new createPerson('侯', 23, ['羽毛球'])
const P2 = new extendsPerson('李', 24, ['篮球'], '男', 170)

console.log(P1, P1.getName())
console.log(P2)


</script>

<style lang="scss">
.pageE-content {
    width: 100%;
    height: 100%;
}
.outer {
    width: 100%;
    height: 200px;
    background-color: blue;
    .inter {
        width: 50%;
        padding-bottom: 50%;
        background-color: red;
    }
}
</style>