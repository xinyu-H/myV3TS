<template>
    <div class="webglDom" ref="webglDom"></div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import TWEEN from "tween.js";
import ThreeBSPF from 'three-js-csg'
import img from '@/assets/images/Login/leaf.jpg'
import { bspDetailModel, boxDetailModel } from "../DataModel/interface";

const ThreeBSP = ThreeBSPF(THREE)

// 定义变量
// 定义变量
let width = 0
let height = 0
let controls = null
let scene: THREE.Scene
let camera: THREE.Camera
let renderer: THREE.WebGLRenderer
let amdLight: THREE.AmbientLight
let dirLight: THREE.DirectionalLight
let ponLight: THREE.PointLight
// 鼠标位置
let raycaster: THREE.Raycaster
let mouse: THREE.Vector2
let closeDoorAnimation: number

// 场景
function initScene() {
    // 初始化画布宽高
    const container = document.querySelector('.webglDom') as HTMLElement;
    width = container.offsetWidth;
    height = container.offsetHeight;
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x005577, 1, 2800)
    // scene.background = new THREE.Color( 0x000000 );
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
}
// 相机
function initCamera(){
    camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 10000);
    camera.position.set(0, 100, 500);
    add(camera);
    camera.lookAt(scene.position);
}
/// 控制器
function initControls(){
    controls = new OrbitControls(camera, renderer.domElement);
}
// 添加灯光
function initLight(){
    amdLight = new THREE.AmbientLight('#eee');
    dirLight = new THREE.DirectionalLight('#eee')
    ponLight = new THREE.PointLight('#eee')
    amdLight.position.set(0, 0, 0)
    dirLight.position.set(0, 0, 0)
    ponLight.position.set(0, 0, 0)
    add(amdLight);          // 环境光
    add(dirLight);          // 方向光
    add(ponLight);          // 点光源
}
// 渲染器
function initRenderer(){
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    })
    renderer.setClearColor(0x4682B4, 1.0);
    // renderer.setClearAlpha(0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    // 开启阴影支持
    renderer.shadowMap.enabled = true;
    // 阴影类型
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    (document.querySelector('.webglDom') as HTMLElement).appendChild(renderer.domElement);
    render();
}
/**
 * 向场景添加一个物体
 * @param obj 
 */
 function add(obj: THREE.Object3D) {
    scene.add(obj);
}
function render() {
    let vector = camera.position.clone();
    ponLight.position.set(vector.x, vector.y, vector.z); //点光源位置
    renderer.render(scene, camera);
    TWEEN.update();
      // requestAnimationFrame()是浏览器window对象的方法
      // requestAnimationFrame()调用一个函数不是立即调用而是向浏览器发起一个
      // 执行某函数的请求，什么时候执行由浏览器决定，一般默认是60FPS的频率，
      // 也就是大约每16.7ms调用一次requestAnimationFrame()方法指定的函数
      // 就是说 render 方法在一直执行渲染
    closeDoorAnimation = requestAnimationFrame(render);
}
/**
 * 创建一个物体，添加到场景
 * @param length 长
 * @param height 高
 * @param width 宽
 * @param color 颜色
 * @param x 
 * @param y 
 * @param z 
 */
 function addBox(length: number, height: number, width: number, color: any, x: number, y: number, z: number) {
    // 1. 创建模型时
    let loader = new THREE.TextureLoader();// 纹理贴图
        loader.load(img, (texture) => {
        // 模型的长、宽、高
        const geometry = new THREE.BoxGeometry(100, 100, 100);
        // 模型的材质
        const material = new THREE.MeshLambertMaterial ({
            color: '#999',
            map: texture// 设置map 值为loader回调参数
        });
        // 生成一个 Mesh
        const mesh = new THREE.Mesh(geometry, material);
        // 位置
        mesh.position.set(0, 0, 0);
        mesh.name = "box1"
        add(mesh)
        window.addEventListener("click", onClick, false);
    })
}

function onClick(event: any){
    // event.preventDefault();
    // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(scene.children, true);
    let model = intersects[0]?.object
    if (intersects.length > 0 && model.name) {
        let box = scene.getObjectByName(model.name) as THREE.Mesh
        console.log(box)
    }
}
/**
 * 获取 BSP 镂空几何
 */
 const initBSP = (l: number, w: number, h: number, x: number, y: number, z: number) => {
    let geometry = new THREE.BoxGeometry(l, w, h);
    let mesh = new THREE.Mesh(geometry)
    mesh.position.set(x, y, z)
    return new ThreeBSP(mesh);
}
/**
 * 创建 BSP 镂空box
 * @param boxDetail 
 */
const createBSPBox = (boxDetail: bspDetailModel) => {
    let frameBSP = initBSP(boxDetail.l, boxDetail.w, boxDetail.h, boxDetail.x, boxDetail.y, boxDetail.z)   // 门框
    let doorBSP = initBSP(boxDetail.l2, boxDetail.w2, boxDetail.h2, boxDetail.x2, boxDetail.y2, boxDetail.z2)   // 门占位
    let resultBSP = frameBSP.subtract(doorBSP);             // 取交集
    let result = resultBSP.toMesh();                        // 相交部分转换为mesh
    let boxGeometry = result.geometry;                      // 转成geometry
    let boxMaterial = new THREE.MeshLambertMaterial ({      // 添加材质
        color: boxDetail.color || "#999"
    });
    let wallMesh = new THREE.Mesh(boxGeometry,boxMaterial);
    add(wallMesh);
}
function createBox() {
    addBox(100, 100, 100, "#999", 0, 0, 0);
    createBSPBox({l: 200, w: 230, h: 6, x: 0, y: 0, z: 0, l2: 180, w2: 220, h2: 6, x2: 0, y2: -5, z2: 0, color: "pink"})
}
const initDoor = () => {
    initScene()
    initCamera()
    initLight()
    createBox()
    initRenderer()
    initControls()
}

onMounted(() => {
    nextTick(() => {
        initDoor()
    })
})
</script>

<style scoped>
.webglDom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    background: url('../../../assets/images/Login/sand.jpg');
    background-size: 100% 100%; */
}
</style>