<template>
  <div class="loginPage box_center">
    <!-- <header></header> -->
    <div class="loginPage-content box_center">
      <div class="loginPage-content-box radius">
        <div class="loginPage-content-box-title">{{ AppTitle }}</div>
        <div class="loginPage-content-box-input padding">
          <div>
            <span :class="{ move: usernameTip || username }"
              >默认账号 admin</span
            >
            <van-field
              v-model="username"
              clearable
              @clear="username = ''"
              @focus="usernameTip = true"
              @blur="usernameTip = false"
              label=""
              left-icon="user-o"
            />
          </div>
          <div>
            <span :class="{ move: passwordTip || password }"
              >请输入密码 同上</span
            >
            <van-field
              v-model="password"
              clearable
              @clear="password = ''"
              @focus="passwordTip = true"
              @blur="passwordTip = false"
              label=""
              left-icon="bag-o"
              type="password"
            />
          </div>
        </div>
        <div class="loginPage-content-box-btn">
          <van-button type="primary" @click="login">登录</van-button>
        </div>
      </div>
    </div>
    <!-- <input type="file" @change="compareImages" />
    <input type="file" @change="compareImages2" /> -->
    <!-- <img src="@/assets/images/Login/老虎.png" alt="" />
    <img src="@/assets/images/Login/小狗.png" alt="" />
    <img src="@/assets/images/Login/小猪.png" alt="" />
    <img src="@/assets/images/Login/小猫.png" alt="" /> -->
  </div>
</template>

<script setup lang="ts">
import Resemble from "resemblejs";
import router from "@/router";
import { ref, reactive, onUnmounted } from "vue";
import Utils from "@/utils/utils";
import { AppTitle } from "@/config";
import Message from "@/utils/message";
import type { ConfigProviderThemeVars } from "vant";

let usernameTip = ref<boolean>(false);
let passwordTip = ref<boolean>(false);

let similarity = ref<any>();
let image1 = "";
let image2 = "";
const compareImages = (event: any) => {
  image1 = event.target.files[0];
};
const compareImages2 = (event: any) => {
  image2 = event.target.files[0];
  Resemble(image1)
    .compareTo(image2)
    .onComplete((data: any) => {
      similarity = data.isSameDimensions ? data.misMatchPercentage : -1;
      console.log(`图片相似度: ${similarity}%`, data);
    });
};

const username = ref<string>("");
const password = ref<string>("");

const usernameList = ref<Array<string>>(["admin", "123", "123456"]);
const passwordList = ref<Array<string>>(["admin", "123", "123456"]);

function login() {
  if (
    !usernameList.value.includes(username.value) &&
    !passwordList.value.includes(password.value)
  )
    return Message.showToast("用户名或密码错误");
  Utils.setSessionItem("openId", username.value);
  router.push("/");
}
</script>

<style scoped lang="scss">
.loginPage {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(@/assets/images/Login/null-179cf84c1d9bbd69.jpg);
  background-size: 100% 100%;
  header {
    width: 100%;
    height: 400px;
  }
  &-content {
    position: relative;
    width: 100%;
    height: 100%;
    &-box {
      // position: absolute;
      // left: 50%;
      // top: 10%;
      // transform: translate(-50%);
      padding: 10px 10px 20px;
      width: 86%;
      height: auto;
      box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.4);
      background-color: rgba(255, 255, 255, 0.3);
      &-title {
        width: 100%;
        height: 100px;
        font-size: 36px;
        padding: 10px 40px;
        color: rgba(82, 94, 105, 0.87);
        font-weight: 800;
      }
      &-input {
        width: 100%;
        height: auto;
        background: unset;
        > div {
          position: relative;
          span {
            position: absolute;
            top: 50%;
            left: 14%;
            transform: translate(0, -50%);
            font-size: 26px;
            color: rgba(82, 94, 105, 0.87);
            transition: 0.3s;
          }
          .move {
            top: 0%;
            left: 5%;
            font-size: 20px;
            transition: 0.3s;
          }
        }
      }
      .van-cell.van-field {
        background-color: unset;
        --van-field-placeholder-text-color: rgba(82, 94, 105, 0.87);
      }
      &-btn {
        padding: 10px 40px;
        width: 100%;
        height: 100px;
        margin-top: 50px;
        button {
          width: 100%;
        }
      }
    }
  }
  > img {
    width: 100px;
    position: absolute;
    left: 0;
    top: 0;
  }
  > img:nth-of-type(1) {
    top: 6%;
    left: 6%;
    transform: rotate(-20deg);
  }
  > img:nth-of-type(2) {
    top: 530px;
    left: 74%;
    transform: rotate(40deg);
  }
  > img:nth-of-type(3) {
    top: 1030px;
    left: 10%;
    transform: rotate(20deg);
  }
  > img:nth-of-type(4) {
    top: 1330px;
    left: 80%;
    // transform: rotate(40deg);
  }
}
</style>
