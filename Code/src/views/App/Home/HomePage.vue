<template>
  <div class="HomePage padding">
    <!-- 头部功能 -->
    <div class="HomePage_header radius flex_around">
      <div
        class="padding"
        v-for="(item, index) in HeaderList"
        :key="item.icon"
        @click="$router.push(item.path)"
      >
        <van-icon class="icon" :name="item.icon" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!-- Echarts -->
    <EchartsPage></EchartsPage>
    <!-- 功能区 -->
    <div class="HomePage_items flex_around padding">
      <div
        v-for="(item, index) in ItemsList"
        :key="item.icon"
        class="padding"
        @click="clickItems(item)"
      >
        <van-icon
          class="icon"
          :class="isShake ? 'shake' : ''"
          :name="item.icon"
          :color="item.color"
        />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!-- banner 轮播图 -->
    <BannerPage></BannerPage>
    <van-overlay
      :show="isShowFireworkOverlay"
      @click="isShowFireworkOverlay = false"
      class="fireworkOverlay"
    ></van-overlay>
    <van-overlay
      :show="isShowSignOverlay"
      @click.self="isShowSignOverlay = false"
      class="SignOverlay padding"
    >
      <!-- 签名 -->
      <SignaturePage></SignaturePage>
    </van-overlay>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, onMounted, onUnmounted, inject, watch } from "vue";
import {
  HeaderListModel,
  HeaderList,
  ItemsListModel,
  ItemsList,
} from "./DataModel/homePageData";
import Firework from "./DataModel/Fireworks";
import EchartsPage from "./components/echartsPage.vue";
import SignaturePage from "./components/signaturePage.vue";
import BannerPage from "./components/bannerPage.vue";
import HomeApi from "@/api/Home/Home";
import router from "@/router";

const $Utils: any = inject("$Utils");

// 功能区
// 是否开启颤抖动画
let isShake = ref<boolean>(false);
let isShowFireworkOverlay = ref<boolean>(false);
let fireworkSetInter: any = null;
let fireworkSetTime: any = null;
let isShowSignOverlay = ref<boolean>(false);

// 点击功能区
async function clickItems(item: ItemsListModel) {
  if (item.path) {
    router.push(item.path);
    return;
  }
  if (item.name === "烟花") {
    isShowFireworkOverlay.value = true;
    nextTick(() => {
      (
        document.querySelector(".fireworkOverlay") as HTMLElement
      ).style.background = "rgba(0, 0, 0, 0)";
      Firework.init();
      startFirewoke();
      fireworkSetTime = setTimeout(() => {
        isShowFireworkOverlay.value = false;
      }, 4000);
    });
  }
  if (item.name === "签名") {
    isShowSignOverlay.value = !isShowSignOverlay.value;
  }
  if (item.name === "群烟") {
    isShowFireworkOverlay.value = true;
    nextTick(() => {
      (
        document.querySelector(".fireworkOverlay") as HTMLElement
      ).style.background = "rgba(0, 0, 0, 0.8)";
      Firework.init();
      fireworkSetInter = setInterval(() => {
        startFirewoke();
      }, $Utils.Tools.getRandom(800, 1000));
    });
  }
  if (item.icon === "bell") {
    let vibration = "vibrate" in navigator;
    if (!vibration) return $Utils.Message.failToast("不支持振动");
    isShake.value = true;
    // 振动多次 参数分别是震动--间隔--振动
    navigator.vibrate([
      300, 100, 200, 100, 100, 100, 500, 100, 300, 100, 200, 100, 100, 50, 50,
      50, 150, 200, 200,
    ]);
    setTimeout(() => {
      isShake.value = false;
    }, 3000);
  }
  if (item.icon === "photograph") {
    await $Utils.Tools.uploadImg((res: string) => {
      $Utils.Message.successToast("", res, "100");
    });
  }
  if (item.icon === "phone") {
    location.href = `tel://12345`;
  }
}
watch(isShowFireworkOverlay, (newVal) => {
  if (!newVal) {
    clearInterval(fireworkSetInter);
    clearTimeout(fireworkSetTime);
    window.cancelAnimationFrame(Firework.stop);
    let fireworkOverlay = document.querySelector(".fireworkOverlay");
    let canvasDom = fireworkOverlay?.querySelector(
      "canvas"
    ) as HTMLCanvasElement;
    fireworkOverlay?.removeChild(canvasDom);
  }
});
/**
 * 放烟花
 */
function startFirewoke() {
  Firework.currentHue = $Utils.Tools.getRandom(0, 360);
  let wArea = $Utils.Tools.getRandom(100, window.innerWidth - 100);
  let hArea = $Utils.Tools.getRandom(100, window.innerHeight / 2 - 100);
  Firework.createFireworks(
    window.innerWidth / 2,
    window.innerHeight,
    wArea,
    hArea
  );
}

// HomeApi.getData1({
//     num: 3
// })
// console.log(data)

onUnmounted(() => {
  clearInterval(fireworkSetInter);
  clearTimeout(fireworkSetTime);
  window.cancelAnimationFrame(Firework.stop);
});
</script>

<style lang="scss" scoped>
.HomePage {
  width: 100%;
  height: 100%;
  overflow: auto;
  &_header {
    width: 100%;
    height: 220px;
    text-align: center;
    background-color: #39f;
    color: #fff;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 36px;

      .icon {
        font-size: 80px;
      }
    }
  }

  &_items {
    width: 100%;
    height: 400px;
    border: 0.5px solid #ddd;
    box-shadow: 0 0 15px 5px #ddd;
    flex-wrap: wrap;
    > div {
      width: 22%;
      height: 45%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 32px;
      .icon {
        font-size: 50px;
      }
      @keyframes appShake {
        0% {
          transform: rotateZ(-8deg);
        }
        100% {
          transform: rotateZ(8deg);
        }
      }
      // 颤动动画
      .shake {
        animation-name: appShake;
        animation-duration: 0.2s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-timing-function: linear;
      }
    }
  }

  .fireworkOverlay,
  .SignOverlay {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0);
  }
  .SignOverlay {
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
