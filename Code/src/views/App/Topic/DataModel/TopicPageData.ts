import { ref } from "vue";

interface optionsModel {
  value: number;
  label: string;
}

export interface randomModel {
  random1: number,
  random2: number
}
export const options1 = ref<Array<optionsModel>>([]);
export const options2 = ref<Array<optionsModel>>([
  {
    value: 1,
    label: "加减",
  },
  {
    value: 2,
    label: "乘除",
  },
  {
    value: 3,
    label: "加减乘除",
  },
]);
export const options3 = ref<Array<optionsModel>>([]);
export const options4 = ref<Array<optionsModel>>([]);
