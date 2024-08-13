<template>
  <div class="AppIndexPage">
    <div class="AppIndexPage_content">
      <van-swipe
        class="my-swipe"
        @change="changeSwipe"
        :initial-swipe="tabberActive"
        :show-indicators="false"
        :loop="false"
        ref="swipeRef"
      >
        <van-swipe-item v-for="(item, index) in tabberList" :key="item.icon">
          <HomePage v-if="item.key === 'HomePage'"></HomePage>
          <ShoppingPage v-if="item.key === 'ShoppingPage'"></ShoppingPage>
          <StarryPage v-if="item.key === 'StarryPage'"></StarryPage>
          <MyPage v-if="item.key === 'MyPage'"></MyPage>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="AppIndexPage_footer">
      <van-tabbar v-model="tabberActive" @change="changeTabber">
        <van-tabbar-item
          v-for="(item, index) in tabberList"
          :key="item.icon"
          :icon="item.icon"
          >{{ item.name }}</van-tabbar-item
        >
      </van-tabbar>
    </div>
    <van-notify
      v-model:show="isShowTip"
      type="success"
      class="radius"
      :class="{
        morning: Tools.getTimeState()?.state === 0,
        noon: Tools.getTimeState()?.state === 1,
        night: Tools.getTimeState()?.state === 2,
      }"
      :style="{
        color: Tools.getTimeState()?.state === 0 ? '#333' : '#eee',
      }"
    >
      <span>{{ Tools.getTimeState()?.text }}</span>
    </van-notify>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const isShowTip = ref<boolean>(false);
export default defineComponent({
  beforeRouteEnter(to, from, next) {
    if (from.name === "LoginPage") {
      setTimeout(() => {
        isShowTip.value = true;
        setTimeout(() => {
          isShowTip.value = false;
        }, 2000);
      }, 300);
    }
    next();
  },
});
</script>
<script setup lang="ts">
import { ref, onMounted, inject, nextTick, watch } from "vue";
import { getData1ResponseModel } from "../../api/Home/HomeModel";
import HomePage from "./Home/HomePage.vue";
import ShoppingPage from "./Shopping/ShoppingPage.vue";
import StarryPage from "./Starry/StarryPage.vue";
import MyPage from "./My/MyPage.vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import { Store1 } from "@/pinia/state";
import Utils from "@/utils/utils";
import Tools from "@/utils/tools";

let aaa = {
  a: 4,
};
Object.defineProperty(aaa, "a", {
  get: function () {
    console.log("get");
    return 132;
  },
  set(val) {
    console.log(val, "set");
  },
});
// aaa.a = 2;
// console.log(aaa.a);

// 全局接口
const $Api: any = inject("$Api");
const $Router: any = inject("$Router");
// 底部导航数据
const tabberList = ref<
  Array<{
    name: string;
    icon: string;
    key: string;
  }>
>([
  {
    name: "主页",
    icon: "home-o",
    key: "HomePage",
  },
  {
    name: "选购",
    icon: "shopping-cart-o",
    key: "ShoppingPage",
  },
  {
    name: "星空",
    icon: "coupon-o",
    key: "StarryPage",
  },
  {
    name: "我的",
    icon: "friends-o",
    key: "MyPage",
  },
]);
// 底部导航下标
const tabberActive = ref(0);
// swipe ref实例
const swipeRef = ref();
// 底部导航变化后触发
function changeTabber(index: number | string) {
  swipeRef.value.swipeTo(index);
  Utils.setSessionItem("tabActive", index);
}

// swipe 滑动后触发事件
function changeSwipe(index: number) {
  tabberActive.value = index;
}

const Store = Store1();
watch(tabberActive, (newV) => {
  Store.updateIsShowBackTop(newV === 1 ? true : false);
});

onMounted(() => {
  // $Api.Home.getData1({
  //     num: 3
  // }).then((res: getData1ResponseModel) => {
  //     console.log(res)
  // })
  nextTick(() => {
    if (Utils.getSessionItem("tabActive")) {
      tabberActive.value = Number(Utils.getSessionItem("tabActive"));
    }
  });
});
onBeforeRouteUpdate((to, from) => {
  console.log(to);
});
onBeforeRouteLeave((to, from) => {
  Utils.setSessionItem("tabActive", tabberActive.value as unknown as string);
});
</script>

<style lang="scss" scoped>
:deep(.van-popup) {
  margin: 20px 0 0 25vw;
  width: 50vw;
}
:deep(.van-popup.morning) {
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
}
:deep(.van-popup.noon) {
  background-image: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
}
:deep(.van-popup.night) {
  background-image: linear-gradient(135deg, #d7d2cc 0%, #304352 100%);
}
.AppIndexPage {
  width: 100%;
  height: 100%;
  overflow: hidden;
  &_content {
    width: 100%;
    height: calc(100% - 100px);
    .my-swipe {
      width: 100%;
      height: 100%;
      .van-swipe-item {
        height: 100%;
      }
    }
  }
  &_footer {
    width: 100%;
    height: 100px;
    font-size: 10px;
    border-top: 0.5px solid #aaa;
    box-shadow: 0 0 15px 2px #ddd;
    .van-tabbar {
      width: 100%;
      height: 100px;
    }
  }
}
</style>
