<template>
  <div class="myPage">
    <header>
      <div class="header_top">
        <div class="header_top_left" id="step1">
          <img :src="img" alt="" @click="toggleImg()" />
        </div>
        <div class="header_top_center">
          <p>学号：123456</p>
          <p>余额：660</p>
        </div>
        <div class="header_top_right">
          <p id="step2">
            <ChangeTimeBtn @on-change="changeBtn"></ChangeTimeBtn>
          </p>
        </div>
      </div>
      <div class="header_bottom">
        <p>软件工程专业（六）班</p>
      </div>
    </header>
    <div class="myPage_item">
      <div
        v-for="(item, index) in ItemList"
        :key="index"
        :id="index == ItemList.length - 1 ? 'step3' : ''"
        class=""
        @click="clickItem(item)"
      >
        <van-icon
          :name="item.icon"
          size="22"
          class="icon1"
          :style="`transform:${item.rotate}`"
        />
        <span>{{ item.name }}</span>
        <van-icon name="arrow" class="icon2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ItemListModel, ItemList } from "./DataModel/MypageData";
import imgStr from "@/assets/images/My/7.jpg";
import router from "@/router";
import Message from "@/utils/message";
import Utils from "@/utils/utils";
import Tools from "@/utils/tools";
import ChangeTimeBtn from "@/components/button/ChangeTime.vue";
import intro from "intro.js"; // introjs库
import "intro.js/introjs.css"; // introjs默认css样式

let img = ref<string>(imgStr);
function clickItem(item: ItemListModel) {
  if (item.type === "page") {
    if (!item.path) return Message.showToast("暂未开通此模块");
    router.push(item.path);
  } else if (item.type == "action") {
    initGuide();
  } else {
    if (item.name === "退出登录") {
      Message.alertToast("确定要退出登录吗？", true).then((res) => {
        if (res) Utils.cleraSessionItem();
        router.go(0);
      });
    }
  }
}

async function toggleImg() {
  await Tools.uploadImg((res: string) => {
    img.value = res;
  });
}

const changeBtn = (val: boolean) => {
  console.log("🚀 ~ file: MyPage.vue:74 ~ changeBtn ~ val:", val);
};

const introOption: any = {
  // 参数对象
  prevLabel: "上一步",
  nextLabel: "下一步",
  skipLabel: "跳过",
  doneLabel: "完成",
  tooltipClass: "intro-tooltip" /* 引导说明文本框的样式 */,
  highlightClass: "intro-highlight" /* 说明高亮区域的样式 */,
  exitOnEsc: true /* 是否使用键盘Esc退出 */,
  exitOnOverlayClick: false /* 是否允许点击空白处退出 */,
  keyboardNavigation: true /* 是否允许键盘来操作 */,
  showBullets: false /* 是否使用点显示进度 */,
  showProgress: false /* 是否显示进度条 */,
  scrollToElement: true /* 是否滑动到高亮的区域 */,
  overlayOpacity: 0.5, // 遮罩层的透明度 0-1之间
  positionPrecedence: [
    "bottom",
    "top",
    "right",
    "left",
  ] /* 当位置选择自动的时候，位置排列的优先级 */,
  disableInteraction: false /* 是否禁止与元素的相互关联 */,
  hidePrev: true /* 是否在第一步隐藏上一步 */,
  // hideNext: true, /* 是否在最后一步隐藏下一步 */
  steps: [
    {
      title: "系统使用指导",
      element: "#step1",
      intro: `点击可切换头像`,
      position: "top",
    },
    {
      title: "系统使用指导",
      element: "#step2",
      intro: `点击可切换背景颜色`,
      position: "right",
    },
    {
      title: "系统使用指导",
      element: "#step3",
      intro: "点击退出登录",
      position: "left",
    },
  ] /* steps步骤，可以写个工具类保存起来 */,
};

const initGuide = () => {
  intro()
    .setOptions(introOption)
    // 点击结束按钮后执行的事件
    .oncomplete(() => {
      console.log("点击结束按钮后执行的事件");
    })
    // 点击跳过按钮后执行的事件
    .onexit(() => {
      console.log("点击跳过按钮后执行的事件");
    })
    // 确认完毕之后执行的事件
    .onbeforeexit((): any => {
      console.log("确认完毕之后执行的事件");
    })
    .start();
};
</script>

<style scoped lang="scss">
.myPage {
  width: 100%;
  height: 100%;
  header {
    width: 100%;
    height: 340px;
    background-image: linear-gradient(
      to bottom right,
      rgb(87, 161, 235) 0%,
      rgb(151, 194, 236) 100%
    );
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
          object-fit: cover;
        }
      }
      &_center {
        flex: 0.5;
        > p:nth-child(2) {
          margin: 10px 0;
        }
      }
      &_right {
        display: flex;
        justify-content: flex-end;
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
    > div {
      width: 100%;
      height: 100px;
      line-height: 100px;
      padding: 0 30px;
      display: flex;
      align-items: center;
      color: #666;
      font-size: 32px;
      border-bottom: 1px solid #eee;
      > span {
        margin-left: 10px;
        flex: 1;
      }
    }
  }
}
</style>
