<template>
    <div>
        <h3>孙组件</h3>
        {{name}} -- {{ age }}
        <button @click="updateData()">updateData</button>

        <el-carousel height="200px" :autoplay="true" :interval="10000" :loop="true" ref="carousel" @change="carouselChange">
            <el-carousel-item v-for="(v, i) in list" :name="i.toString()">
              <div class="scrollDiv">
                <div class="scrollDivC">
                  <div v-for="(v1, i1) in v.list" :key="i">{{ v1.name }}</div>
                </div>
              </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts">
import { inject, nextTick, ref } from 'vue';

const list = ref<Array<{
  list: Array<{
    name: string
  }>
}>>([{
  list: [{
    name: '哈哈1'
  },{
    name: '哈哈2'
  },{
    name: '哈哈3'
  },{
    name: '哈哈4'
  },{
    name: '哈哈5'
  },{
    name: '哈哈6'
  },{
    name: '哈哈7'
  },{
    name: '哈哈8'
  },{
    name: '哈哈9'
  },{
    name: '哈哈10'
  }]
},{
  list: [{
    name: '哈哈1'
  },{
    name: '哈哈2'
  },{
    name: '哈哈3'
  },{
    name: '哈哈4'
  },{
    name: '哈哈5'
  },{
    name: '哈哈6'
  },{
    name: '哈哈7'
  },{
    name: '哈哈8'
  },{
    name: '哈哈9'
  },{
    name: '哈哈10'
  }]
},{
  list: [{
    name: '哈哈1'
  },{
    name: '哈哈2'
  },{
    name: '哈哈3'
  },{
    name: '哈哈4'
  },{
    name: '哈哈5'
  },{
    name: '哈哈6'
  },{
    name: '哈哈7'
  },{
    name: '哈哈8'
  },{
    name: '哈哈9'
  },{
    name: '哈哈10'
  }]
}])

let timer: number = 0;
let a = 0
let b = 0
function carouselChange (index: number) {
  runBox(index)
}

nextTick(() => {
  runBox(0)
})
function runBox (index: number) {
  a = 0
  b = 0
  let scrollDiv = document.querySelectorAll('.scrollDiv')[index] as HTMLElement
  let scrollDivC = scrollDiv.querySelector('.scrollDivC') as HTMLElement
  let scrollDivCF = scrollDivC.querySelector('div') as HTMLElement
  scrollDiv.scrollTop = 0
  clearInterval(timer)
  timer = setInterval(() => {
    if(scrollDiv) {
      a = scrollDiv.scrollTop
      scrollDiv.scrollTop++
      b = scrollDiv.scrollTop
      if(a === b) {
        list.value[index].list.push(list.value[index].list.shift() as {name: string})
        console.log('触底', scrollDiv.scrollTop)
        scrollDiv.scrollTop = scrollDiv.scrollTop - scrollDivCF.offsetHeight
      }
    }
  }, 30)
}







const age = inject('ageKey')
const name = inject('nameKey')
const updateName = inject('updateNameKey')
const num = ref<number>(0)
const autoplay = ref<boolean>(false)
const carousel = ref()

function updateData () {
    // updateName('哈')
    num.value ++
    carousel.value.setActiveItem(num.value % 4)
}

</script>

<style scoped lang="scss">
.el-carousel__item {
  >div {
    width: 100%;
    height: 100%;
    overflow: auto;
    >div {
      width: 100%;
      height: auto;
      >div {
        color: #475669;
        opacity: 0.75;
        margin: 0;
        text-align: center;
        height: 50px;
      }
    }
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>