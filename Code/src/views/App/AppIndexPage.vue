<template>
    <div>
        <van-button type="primary">主要按钮</van-button>
<van-button type="success">成功按钮</van-button>
<van-button type="default">默认按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import { getData1ResponseModel } from '../../api/Home/HomeModel'

const $Api: any = inject('$Api')
onMounted(() => {
    $Api.Home.getData1({
        num: 3
    }).then((res: getData1ResponseModel) => {
        console.log(res)
    })
})



</script>

<style scoped>

</style>