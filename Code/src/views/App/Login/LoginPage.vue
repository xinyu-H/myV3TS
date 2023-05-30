<template>
  <div class="loginPage">
    <header></header>
    <div class="loginPage-content">
      <div class="loginPage-content-box radius">
        <div class="loginPage-content-box-title">{{ AppTitle }}</div>
        <div class="loginPage-content-box-input padding">
          <van-field
            v-model="username"
            clearable
            @clear="username = ''"
            label=""
            left-icon="user-o"
            placeholder="默认账号 admin"
          />
          <van-field
            v-model="password"
            clearable
            @clear="password = ''"
            label=""
            left-icon="bag-o"
            placeholder="请输入密码 同上"
            type="password"
          />
        </div>
        <div class="loginPage-content-box-btn">
          <van-button type="primary" @click="login">登录</van-button>
        </div>
      </div>
    </div>
    <img src="@/assets/images/Login/老虎.png" alt="" />
    <img src="@/assets/images/Login/小狗.png" alt="" />
    <img src="@/assets/images/Login/小猪.png" alt="" />
    <img src="@/assets/images/Login/小猫.png" alt="" />
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref, reactive, onUnmounted } from "vue";
import Utils from "@/utils/utils";
import { AppTitle } from "@/config";
import Message from "@/utils/message";
import type { ConfigProviderThemeVars } from 'vant';

const username = ref<string>("");
const password = ref<string>("");

const usernameList = ref<Array<string>>(['admin', '123', '123456']);
const passwordList = ref<Array<string>>(['admin', '123', '123456']);

function login () {
  if (!usernameList.value.includes(username.value) && !passwordList.value.includes(password.value)) return Message.showToast('用户名或密码错误')
    Utils.setSessionItem('openId', username.value)
    router.push('/')
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
    height: calc(100% - 400px);
    &-box {
      position: absolute;
      left: 50%;
      top: 10%;
      transform: translate(-50%);
      padding: 10px 10px 20px;
      width: 86%;
      height: auto;
      box-shadow: 0 0 10px 10px rgba(255, 255, 255, .4);
      background-color: rgba(255, 255, 255, .3);
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
  >img {
    width: 100px;
    position: absolute;
    left: 0;top: 0;
  }
  >img:nth-of-type(1) {
    top:6%; left: 6%;
    transform: rotate(-20deg);
  }
  >img:nth-of-type(2) {
    top: 530px; left: 74%;
    transform: rotate(40deg);
  }
  >img:nth-of-type(3) {
    top: 1030px; left: 10%;
    transform: rotate(20deg);
  }
  >img:nth-of-type(4) {
    top: 1330px; left: 80%;
    // transform: rotate(40deg);
  }
}
</style>
