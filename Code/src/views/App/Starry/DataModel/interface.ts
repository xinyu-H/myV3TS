export interface sizeModel {
  // 大小
  l: number;
  w: number;
  h: number;
}
export interface positionModel {
  // 位移
  x: number;
  y: number;
  z: number;
}
export interface animationModel extends positionModel {
  // 旋转--相对于自身
  tx: number;
  ty: number;
  tz: number;
}

export interface boxDetailModel extends positionModel, sizeModel {
  name?: string;
  color?: string;
  img?: string; // 贴图
  animat?: animationModel; // 动画配置
  animatTime?: number; // 动画时间
}

export interface bspDetailModel extends positionModel, sizeModel {
  l2: number;
  w2: number;
  h2: number;
  x2: number;
  y2: number;
  z2: number;
  color?: string;
}
