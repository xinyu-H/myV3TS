<template>
    <div>

    </div>
</template>

<script setup lang="ts">
// const zigp = function (arr1: unknown[], arr2: unknown[]): unknown[] {
//   if (!arr1.length || !arr2.length) return []
//   const [one, ...rest1] = arr1
//   const [other, ...rest2] = arr2
//   return [[one, other], ...zigp(rest1, rest2)]
// }

// const arr1: Array<number | string> = ['1', '2', 3]
// const arr2: Array<number | string> = [4, '5', '6']
// console.log(zigp(arr1, arr2))


type ObjType = {
  name: string,
  age: number,
  child: {
    cName: string,
    cAge: number
  },
  arr: Array<number>
}
const obj: ObjType = {
  name: '侯',
  age: 23,
  child: {
    cName: '李',
    cAge: 24
  },
  arr: [1, 2, 3]
}
// const deepClone = function (obj: any = {}, map = new Map()): any {
//   if (typeof obj !== 'object') return obj
//   if (map.get(obj)) return map.get(obj)
//   let result: any = {}
//   if (obj instanceof Array || Object.prototype.toString.call(obj) === '[object Array]') result = []
//   map.set(obj, result)
//   for (const k in obj) {
//     if (obj.hasOwnProperty(k)) {
//       result[k] = deepClone(obj[k], map)
//     }
//   }
//   return result
// }

const deepClone = function (obj: any): any {
  let result: any = {}
  if (obj instanceof Array || Object.prototype.toString.call(obj) === '[object Array]') result = []
  for (const k in obj) {
    if (typeof obj[k as keyof ObjType] === 'object') {
      result[k] = deepClone(obj[k as keyof ObjType])
    } else {
      result[k] = obj[k as keyof ObjType]
    }
  }
  return result
}


// const obj2 = deepClone(obj)
// console.log(obj2)
// obj2.child.cAge = 25
// obj2.arr[1] = 25
// console.log(obj.child.cAge)
// console.log(obj2.child.cAge)

// function Fun (this: any, name: string): void {
//   this.name = name
// }
// let f1 = new Fun('hou')

// console.log(f1.__proto__)
// console.log(Fun.prototype)
// console.log(new Object().__proto__)


</script>

<style scoped>

</style>