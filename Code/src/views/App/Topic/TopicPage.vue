<template>
  <div class="Topic">
    <header>
      <div class="title">小学生习题测试</div>
      <div class="title-date" v-if="radio && beginAnswer">
        剩余时间:{{ remainingTime }}
      </div>
      <div class="title-date" v-if="isAccomplish">
        答对:
        <span style="font-weight: 800; color: rgb(6, 167, 6)">{{
          rightNum
        }}</span>
        题&nbsp; 答错:
        <span style="font-weight: 800; color: rgb(219, 14, 14)">{{
          value3 - rightNum
        }}</span>
        题
      </div>
    </header>
    <div class="topic-select">
      <div>
        <label for="">范围:</label>
        <el-select
          v-model="value1"
          placeholder="请选择"
          :disabled="beginAnswer"
        >
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div>
        <label for="">算法:</label>
        <el-select
          v-model="value2"
          placeholder="请选择"
          :disabled="beginAnswer"
        >
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div>
        <label for="">数量:</label>
        <el-select
          v-model="value3"
          placeholder="请选择"
          :disabled="beginAnswer"
        >
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div>
        <label for="" class="norequired">计时:</label>
        <el-radio v-model="radio" :label="0" :disabled="beginAnswer"
          >否</el-radio
        >
        <el-radio v-model="radio" :label="1" :disabled="beginAnswer"
          >是</el-radio
        >
      </div>
      <div v-if="radio">
        <label for="">时间:</label>
        <el-select
          v-model="value4"
          placeholder="请选择"
          :disabled="beginAnswer"
        >
          <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div>
        <el-button
          type="warning"
          @click="suspend()"
          v-if="radio && beginAnswer"
          >{{ isSuspend ? "继续" : "暂停" }}</el-button
        >
        <el-button type="primary" @click="confirm()" v-if="!beginAnswer"
          >确认</el-button
        >
        <el-button type="primary" @click="check()" v-else>完成</el-button>
      </div>
    </div>
    <div class="topic-content">
      <div v-for="(v, i) in topicLsit" :key="i">
        <span>{{ i + 1 }}.</span>
        {{ v.num1 }} {{ v.sym }} {{ v.num2 }} =
        <div>
          <input type="text" v-model="v.answer" :disabled="isSuspend" />
          <van-icon name="success" class="check" v-if="isAccomplish && v.correct" />
          <van-icon name="cross" class="close" v-if="isAccomplish && !v.correct" />
          <span class="rightAnswers" v-if="isAccomplish && !v.correct">{{
            v.rightAnswers
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, nextTick, onMounted } from "vue";
import Message from "@/utils/message";
import {
  options1,
  options2,
  options3,
  options4,
  randomModel,
} from "./DataModel/TopicPageData";

const value1 = ref<number>(0);            // 范围
const value2 = ref<string>("");           // 算法
const value3 = ref<number>(0);            // 题数
const value4 = ref<string>("");           // 计时时间
const radio = ref<string>("");            // 是否计时
const remainingTime = ref<string>("");    // 剩余时间
const beginAnswer = ref<boolean>(false);  // 是否开始答题
const nowDate = ref<string>("");          // 当前时间
const symbolLsit1 = ref<Array<string>>(["+", "-"]);
const symbolLsit2 = ref<Array<string>>(["×", "÷"]);
const topicLsit = ref<Array<any>>([]);    // 题目列表
const isAccomplish = ref<boolean>(false); // 是否显示对错提示box
const rightNum = ref<number>(0);          // 答对题目的数量
let timer: any = null;
let isSuspend = ref<boolean>(false);      // 是否暂停
let lastDate = ref<string>("");           // 加上倒计时后的时间

/**
 * 确定生成题目
 */
function confirm() {
  if (!value1.value) return Message.alertToast("请选择范围");
  if (!value2.value) return Message.alertToast("请选择算法");
  if (!value3.value) return Message.alertToast("请选择数量");
  if (radio.value && !value4.value) return Message.alertToast("请选择时间");
  topicLsit.value = [];
  isAccomplish.value = false;
  isSuspend.value = false;
  rightNum.value = 0;
  if (value2.value == "1") {
    for (let i = 0; i < value3.value; i++) topicLsit.value.push(getTopic1());
  }
  if (value2.value == "2") {
    for (let i = 0; i < value3.value; i++) topicLsit.value.push(getTopic2());
  }
  if (value2.value == "3") {
    let funList = [getTopic1, getTopic2];
    for (let i = 0; i < value3.value; i++)
      topicLsit.value.push(funList[getRandom(1) as number]());
  }
  // 开启倒计时
  if (radio && value4) {
    nowDate.value = Date.now() as unknown as string;
    lastDate.value = nowDate.value + +value4.value * 60 * 1000;
    timer = setInterval(() => {
      timing(nowDate.value, lastDate.value as unknown as Date);
      (lastDate.value as unknown as number) -= 1000;
    }, 1000);
  }
  beginAnswer.value = true;
}

/**
 * 确定提交答案
 */
function check() {
  suspend();
  // 结果计算 rightAnswers
  let flag = false;
  topicLsit.value.forEach((v) => {
    if (!v.answer.trim()) flag = true;
  });
  if (flag) {
    return Message.alertToast("有题目未做完哦，是否提交", true)
      .then(() => {
        accomplish();
      })
      .catch((res: any) => {
        suspend();
      });
  } else {
    accomplish();
  }
}

/**
 * 计算答案
 */
function accomplish() {
  isAccomplish.value = true;
  beginAnswer.value = false;
  remainingTime.value = "";
  clearInterval(timer);
  topicLsit.value.forEach((v) => {
    if (v.sym == "+") {
      v.correct = (v.num1 + v.num2).toString() === v.answer;
      if (v.correct) rightNum.value++;
      v["rightAnswers"] = v.num1 + v.num2;
    }
    if (v.sym == "-") {
      v.correct = (v.num1 - v.num2).toString() === v.answer;
      if (v.correct) rightNum.value++;
      v["rightAnswers"] = v.num1 - v.num2;
    }
    if (v.sym == "×") {
      v.correct = (v.num1 * v.num2).toString() === v.answer;
      if (v.correct) rightNum.value++;
      v["rightAnswers"] = v.num1 * v.num2;
    }
    if (v.sym == "÷") {
      v.correct = (v.num1 / v.num2).toString() === v.answer;
      if (v.correct) rightNum.value++;
      v["rightAnswers"] = v.num1 / v.num2;
    }
  });
}

/**
 * 生成加减题目
 */
function getTopic1() {
  let sym = symbolLsit1.value[getRandom(1) as number];
  let num1, num2;
  if (sym === "+") {
    num1 = getRandom(value1.value / 2);
    num2 = getRandom(value1.value / 2);
  } else {
    num1 = getRandom(value1.value);
    num2 = getRandom(value1.value);
  }
  if (num2 > num1) [num1, num2] = [num2, num1];
  return { num1, num2, sym, answer: "", correct: false };
}

/**
 * 生成乘除题目
 */
function getTopic2() {
  let sym = symbolLsit2.value[getRandom(1) as number];
  let num1, num2;
  let randomObj = getRandom(value1.value, value1.value, sym) as randomModel;
  num1 = randomObj.random1;
  num2 = randomObj.random2;
  if (num2 > num1) [num1, num2] = [num2, num1];
  return { num1, num2, sym, answer: "", correct: false };
}

/**
 * 暂停
 */
function suspend() {
  isSuspend.value = !isSuspend.value;
  if (isSuspend.value) {
    clearInterval(timer);
  } else {
    timer = setInterval(() => {
      timing(nowDate.value, lastDate.value as unknown as Date);
      (lastDate.value as unknown as number) -= 1000;
    }, 1000);
  }
}

/**
 * 倒计时
 * @param start 开始时间
 * @param end 结束时间
 */
function timing(start: string, end = new Date()) {
  let sD = new Date(start).getTime();
  let eD = new Date(end).getTime();
  let diff = (eD - sD) / 1000;
  if (diff <= 0) clearInterval(timer);
  let m = patch(diff / 60);
  let s = patch(diff % 60);
  remainingTime.value = `${m}分${s}秒`;
}
// 补零
function patch(str: number) {
  str = parseInt(str as unknown as string);
  return +str <= 0 ? "00" : +str < 10 ? "0" + str : str;
}
/**
 * 获取随机数
 * @param num 随机数范围,用于获取数字
 * @param type 随机数范围,用于对比是否超过范围
 * @param sym 计算方式
 */

function getRandom(num: number, type?: number, sym?: string): randomModel | number {
  if (sym == "×") {
    let random1 = Math.round(Math.random() * num);
    let random2 = Math.round(Math.random() * num);
    if (random1 * random2 > (type as number)) {
      return getRandom(num, type, sym);
    } else {
      return { random1, random2 };
    }
  }
  if (sym == "÷") {
    let random1 = Math.round(Math.random() * num);
    let random2 = Math.round(Math.random() * num);
    if (random2 > random1) [random1, random2] = [random2, random1];
    if ((random1 / random2) % 1 != 0) {
      return getRandom(num, type, sym);
    } else {
      return { random1, random2 };
    }
  }
  return Math.round(Math.random() * num);
}
/**
 * 初始化选项数据
 */
function initData() {
  for (let i = 0; i < 100; i++) {
    if ((i + 1) % 10 === 0) {
      options3.value.push({
        value: i + 1,
        label: i + 1 + "道",
      });
      options1.value.push({
        value: i + 1,
        label: i + 1 + "以内",
      });
    }
    if ((i + 1) % 5 === 0) {
      options4.value.push({
        value: i + 1,
        label: i + 1 + "分钟",
      });
    }
  }
}

onMounted(() => {
  initData();
});

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style lang="scss">
.Topic {
  width: 100%;
  height: 100%;
  padding: 0.1rem;
  overflow: hidden;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    filter: blur(2px);
    /*为了模糊更明显，调高模糊度*/
    z-index: -1;
  }
}
header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  .title {
    font-weight: 800;
  }
}
.topic-select {
  width: 100%;
  height: 200px;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(150, 150, 150, 0.6);
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  > div {
    width: 33%;
    font-size: 20px;
    margin-top: 5px;
    line-height: 80px;
    > label:not([class]) {
      position: relative;
      &::before {
        content: "*";
        position: absolute;
        left: 0px;
        transform: translateX(-100%);
        color: red;
      }
    }
    > label {
      display: inline-block;
      height: 100%;
      margin-right: 5px;
    }
    .el-select {
      width: 70%;
      input {
        height: 50px;
        padding: 0 0 0 5px;
      }
      .el-input {
        > .el-input__wrapper {
          padding: 0 10px;
        }
        > span {
          right: 0;
          display: none;
        }
      }
    }
    .el-radio {
      height: 100%;
      margin-right: 10px;
      .el-radio__label {
        padding-left: 10px;
      }
    }
    button {
      width: 40%;
      height: 60px;
      line-height: 6px;
      padding: 0;
    }
  }
}
.topic-content {
  width: 100%;
  height: calc(100% - 260px);
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  overflow: auto;
  > div {
    position: relative;
    width: 50%;
    height: 70px;
    padding: 5px 0;
    text-align: left;
    > span {
      display: inline-block;
      width: 10%;
      height: 100%;
      // float: left;
      margin: -5px 5px 0 0;
      font-size: 10px;
      color: rgb(43, 147, 245);
      font-weight: 800;
    }
    > div {
      width: 50%;
      float: right;
      > input {
        width: 30%;
        padding: 0 4px;
      }
      > span {
        font-weight: 800;
      }
      .check {
        color: rgb(6, 167, 6);
      }
      .close {
        color: rgb(219, 14, 14);
      }
      .rightAnswers {
        color: rgb(6, 167, 6);
        font-size: 20px;
      }
    }
  }
}
</style>
