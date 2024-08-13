<template>
  <div class="qrPage">
    <qrcode-vue :value="QrValue" :size="150" @click="refresh()"></qrcode-vue>
    <div class="qrPage_text">
      <p>点击刷新二维码</p>
      <p>该二维码用于xxx</p>
      <el-button type="primary" @click="speakText()">播放</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import QrcodeVue from "qrcode.vue";
import { ref, inject, nextTick } from "vue";
import speak from "speak-tts";
import Tools from "@/utils/tools";
import Message from "@/utils/message";
import dog from "@/assets/images/Login/小狗.png";

const $Utils: any = inject("$Utils");
const QrValue = ref<string>("456465sfASfasfsaf");
let strList: Array<string> = [
  "你是我的玫瑰，你是我的花",
  "我们还能不能，能不能再见面",
  "被伤过的心还可以爱谁",
  "我爱你，爱着你，就像老鼠爱大米",
  "不是因为寂寞才想你，而是想你才寂寞",
  "You Are My Life, But Not All.",
];
function refresh() {
  QrValue.value = strList[$Utils.Tools.getRandom(0, 5)];
}

nextTick(() => {
  Tools.slideBox(
    document.querySelector(".qrPage") as HTMLElement,
    (res: string) => {
      console.log(res);
      Message.showToast(res);
    }
  );
});

// 语音播报
let speech: any = null;
const SpeechInit = () => {
  speech = new speak();
  speech.setLanguage("ja-JP");
  speech.init().then(() => {});
};
SpeechInit();
const speakText = () => {
  console.log(speech.speak);
  speech.speak({
    text: QrValue.value,
    listeners: {
      //开始播放
      onstart: () => {
        console.log("Start utterance");
      },
      //判断播放是否完毕
      onend: () => {
        console.log("End utterance");
      },
      //恢复播放
      onresume: () => {
        console.log("Resume utterance");
      },
    },
  });
};

// 桌面通知
const handleNotice = () => {
  if (!("Notification" in window)) {
    alert("此浏览器不支持桌面通知！");
  }
  Notification.requestPermission().then(function (result) {
    if (result === "denied") {
      console.log("被拒绝");
      return;
    }
    if (result === "default") {
      console.log("默认");
      return;
    }
    notifyMsg();
  });
};
handleNotice();
const notifyMsg = () => {
  //通知
  const title = "通知栏";
  const options = {
    body: "你可以的", // 通知主体
    data: "",
    icon: dog, // 通知图标
  };
  let notification = new Notification(title, options);
  notification.onclick = () => {
    notification.close(); //关闭通知
  };
};
</script>

<style lang="scss" scoped>
.qrPage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 200px 0;
  &_text {
    font-size: 34px;
    font-weight: bold;
  }
}
</style>
