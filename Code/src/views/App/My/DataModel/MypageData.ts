import { ref } from "vue";
export interface ItemListModel {
  name: string;
  icon: string;
  path?: string;
  type: string;
  rotate?: string;
}
export const ItemList = ref<Array<ItemListModel>>([
  {
    name: "操作手册",
    icon: "orders-o",
    path: "initGuide",
    type: "action",
  },
  {
    name: "消息通知",
    icon: "chat-o",
    path: "",
    type: "page",
  },
  {
    name: "二维码",
    icon: "qr",
    path: "/QrPage",
    type: "page",
  },
  {
    name: "习题测试",
    icon: "records",
    path: "/TopicPage",
    type: "page",
  },
  {
    name: "退出登录",
    icon: "back-top",
    type: "button",
    rotate: "rotate(90deg)",
  },
]);
