<template>
    <div class="myPage">
        <header>
            <div class="header_top">
                <div class="header_top_left">
                    <img :src="img" alt="" @click="toggleImg()">
                </div>
                <div class="header_top_right">
                    <p>学号：123456</p>
                    <p>余额：660</p>
                </div>
            </div>
            <div class="header_bottom">
                <p>软件工程专业（六）班</p>
            </div>
        </header>
        <div class="myPage_item">
            <div v-for="(item, index) in ItemList" :key="index" class="" @click="clickItem(item)">
                <van-icon :name="item.icon" size="22" class="icon1" />
                <span>{{ item.name }}</span>
                <van-icon name="arrow" class="icon2" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { ItemListModel, ItemList } from './DataModel/MypageData';
import imgStr from '@/assets/images/My/7.jpg'
import router from '@/router';

const $Utils:any = inject('$Utils')
let img = ref<string>(imgStr)
function clickItem (item: ItemListModel) {
    if (!item.path) return $Utils.Message.showToast('暂未开通此模块')
    router.push(item.path)

}


async function toggleImg () {
    await $Utils.Tools.uploadImg((res: string) => {
        img.value = res
    })
}

</script>

<style scoped lang="scss">
.myPage{
    width: 100%;
    height: 100%;
    header {
        width: 100%;
        height: 340px;
        background-image: linear-gradient(to bottom right, rgb(0, 108, 216) 0%, #39f 100%);
        color: #eee;
        font-size: 30px;
        .header_top {
            width: 100%;
            height: 240px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            &_left {
                width: 160px;
                height: 160px;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 4px solid #fff;
                }
            }
            &_right {
                flex: .8;
                >p:nth-child(1) {
                    margin-bottom: 10px;
                }
            }
        }
        .header_bottom {
            width: 100%;
            line-height: 100px;
            padding-left: 40px;
        }
    }
    &_item {
        width: 100%;
        height: auto;
        >div {
            width: 100%;
            height: 100px;
            line-height: 100px;
            padding: 0 30px;
            display: flex;
            align-items: center;
            color: #666;
            font-size: 32px;
            border-bottom: 1px solid #eee;
            >span {
                margin-left: 10px;
                flex: 1;
            }
            >.icon2 {
                
            }
        }
    }
}
</style>