import { ref } from "vue";
import { prizesData } from "./interface";

// gift.vue
export const prizes = ref<Array<prizesData>>([
  {
    x: 0,
    y: 0,
    borderRadius: "10px",
    fonts: [{ text: "黄焖鸡米饭", top: "25%" }],
  },
  {
    x: 1,
    y: 0,
    borderRadius: "10px",
    fonts: [{ text: "鸭血粉丝汤", top: "25%" }],
  },
  {
    x: 2,
    y: 0,
    borderRadius: "10px",
    fonts: [{ text: "养生火锅", top: "25%" }],
  },
  { x: 3, y: 0, borderRadius: "10px", fonts: [{ text: "酸菜鱼", top: "25%" }] },
  {
    x: 3,
    y: 1,
    borderRadius: "10px",
    fonts: [{ text: "牛肉炒面", top: "25%" }],
  },
  {
    x: 3,
    y: 2,
    borderRadius: "10px",
    fonts: [{ text: "鸡蛋炒饭", top: "25%" }],
  },
  {
    x: 3,
    y: 3,
    borderRadius: "10px",
    fonts: [{ text: "生煎包", top: "25%" }],
  },
  {
    x: 2,
    y: 3,
    borderRadius: "10px",
    fonts: [{ text: "青椒肉丝盖饭", top: "25%" }],
  },
  {
    x: 1,
    y: 3,
    borderRadius: "10px",
    fonts: [{ text: "煎饼果子", top: "25%" }],
  },
  {
    x: 0,
    y: 3,
    borderRadius: "10px",
    fonts: [{ text: "凉皮肉夹馍", top: "25%" }],
  },
  {
    x: 0,
    y: 2,
    borderRadius: "10px",
    fonts: [{ text: "功夫炸鸡", top: "25%" }],
  },
  {
    x: 0,
    y: 1,
    borderRadius: "10px",
    fonts: [{ text: "羊肉烩面", top: "25%" }],
  },
]);
