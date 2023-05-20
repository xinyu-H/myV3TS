<template>
  <div class="loginPage">
    <header>
        <img src="@/assets/images/Login/bg.png" alt="">
    </header>
    <div class="loginPage-content">
      <div class="loginPage-content-box radius">
        <div class="loginPage-content-box-title">{{ AppTitle }}</div>
        <div class="loginPage-content-box-input padding">
          <van-field
            v-model="username"
            clearable
            label=""
            left-icon="user-o"
            placeholder="请输入账号"
          />
          <van-field
            v-model="password"
            clearable
            label=""
            left-icon="bag-o"
            placeholder="请输入密码"
          />
        </div>
        <div class="loginPage-content-box-btn">
          <van-button type="primary" @click="login">登录</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref, onUnmounted } from "vue";
import Utils from "@/utils/utils";
import { AppTitle } from "@/config";
import Message from "@/utils/message";

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
  width: 100%;
  height: 100%;
  overflow: hidden;
  header {
    width: 100%;
    height: 400px;
    // background-color: tan;
    img {
        height: 100%;
        margin: 20px 0 0 20px;
    }
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
      box-shadow: 0 0 10px 10px #eee;
    //   background-color: skyblue;
      &-title {
        width: 100%;
        height: 100px;
        font-size: 36px;
        padding: 10px 40px;
      }
      &-input {
        width: 100%;
        height: auto;
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
}
</style>
