/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "tween.js";
declare module "three-js-csg";
declare module "speak-tts";
declare module "resemblejs";
