<template>
  <div class="giftPage padding box_center">
    <LuckyGrid
      ref="myLucky"
      width="300px"
      height="300px"
      :rows="4"
      :cols="4"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      :defaultStyle="defaultStyle"
      :defaultConfig="defaultConfig"
      :activeStyle="activeStyle"
      @start="startCallback"
      @end="endCallback"
      class="LuckyGrid"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { prizes } from "./detaModel";
import Tools from "@/utils/tools";
import Message from "@/utils/message";

const myLucky = ref();

const blocks = ref([
  { padding: "10px", background: "#869cfa" },
  {
    padding: "10px",
    background: "#e9e8fe",
    img: [
      {
        src: "https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg",
        width: "100%",
        height: "100%",
      },
    ],
  },
]);
// 开始按钮样式
const buttons = [
  {
    x: 1,
    y: 1,
    col: 2,
    row: 2,
    background: "#9c9dd8",
    fonts: [{ text: "开始", top: "35%", fontSize: "30px" }],
  },
];
// 块的样式
const defaultStyle = {
  // lineHeight: "20px",
  fontSize: "14px",
  fontColor: "#666",
  fontWeight: 700,
  background: "#b8c5f2",
};
// 块的间隙
const defaultConfig = {
  gutter: "6px",
};
// 选中的样式
const activeStyle = {
  fontColor: "#f9bdbd",
  background: "#9c9cdd",
};
// 点击抽奖按钮会触发star回调
const startCallback = () => {
  myLucky.value.play();
  setTimeout(() => {
    const index = Tools.getRandom(0, prizes.value.length);
    myLucky.value.stop(index);
  }, Tools.getRandom(1000, 3000));
};
// 抽奖结束会触发end回调
const endCallback = (prize: any) => {
  Message.alertToast(prize.fonts[0].text);
};
</script>

<style lang="scss" scoped>
.giftPage {
  width: 100%;
  height: 100%;
  background-color: #eee;
}
</style>
