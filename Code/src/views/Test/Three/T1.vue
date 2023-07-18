<template>
    <div class="starryPage">
        <div class="webglDom" ref="webglDom"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onUnmounted, inject } from 'vue'
import Tools from '@/utils/tools';
import img1 from '@/assets/images/Login/leaf.jpg'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import TWEEN from "tween.js";
import ThreeBSPF from 'three-js-csg'


const ThreeBSP = ThreeBSPF(THREE)

// 定义变量
let width = 0,
    height = 0,
    controls = null,
    amdLight = null,
    dirLight = null,
    scene: THREE.Scene,
    camera: THREE.Camera,
    renderer: THREE.WebGLRenderer,
    ponLight: THREE.PointLight,
    // 鼠标位置
    raycaster: THREE.Raycaster,
    mouse: THREE.Vector2,
    closeDoorAnimation: number;
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
    renderer.setClearAlpha(0);
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
 * 创建 BSP 镂空几何
 * @param l 
 * @param h 
 * @param w 
 * @param x 
 * @param y 
 * @param z 
 */
 function initBSP(l: number, h: number, w: number, x: number, y: number, z: number){
    let geometry = new THREE.BoxGeometry(l, h, w);
    let mesh = new THREE.Mesh(geometry)
    mesh.position.set(x, y, z)
    return new ThreeBSP(mesh);
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
 * @param name 模型 name
 * @param animat 动画参数 { x: , y: z: }
 */
 function addBox(length: number, height: number, width: number, color: any, x: number, y: number, z: number, name: string, animat?: object, animatTime?: number) {
    let loader = new THREE.TextureLoader();// 纹理贴图
    // loader.load(img1, (texture) => {
        const geometry = new THREE.BoxGeometry(length, height, width);
        const material = new THREE.MeshLambertMaterial({
            color: color,
            // map: texture
        });
        const mesh: any = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        mesh.name = name // 可通过 scene.getObjectByName('name') 获取材质
        mesh.animat = animat
        mesh.isOpenAnimat = true
        mesh.animatTime = animatTime
        add(mesh);
        window.addEventListener("click", onClick, false);
    // })
}
function createBox() {
    addBox(100, 100, 100, "#999", 0, 0, 0, 'box1', {x: 0, y: 0, z: 2 * Math.PI});
    addBox(100, 100, 100, "#39f", -200, 0, 0, 'box2', {x: 2 * Math.PI, y: 2 * Math.PI, z: 2 * Math.PI}, 3000);
    addBox(100, 100, 100, "tomato", 200, 0, 0, 'box3');
    let frameBSP = initBSP(200, 230, 6, 0, 0, 0)   // 门框
    let doorBSP = initBSP(180, 220, 6, 0, -5, 0)   // 门占位
    let resultBSP = frameBSP.subtract(doorBSP); // 取交集
    let result = resultBSP.toMesh();        // 相交部分转换为mesh
    let boxGeometry = result.geometry;      // 转成geometry
    let boxMaterial = new THREE.MeshLambertMaterial ({     // 添加材质
        color: '#999'
    });
    let wallMesh = new THREE.Mesh(boxGeometry,boxMaterial);
    add(wallMesh);
}

/**
 * 点击事件
 * @param event 
 */
function onClick(event: any){
    event = Tools.isMobile() ? event.changedTouches[0] : event
    // event.preventDefault();
    // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    let intersects: any = raycaster.intersectObjects(scene.children, true);
    let model = intersects[0]?.object
    console.log(model, model.name)
    if (intersects.length > 0 && model.name) {
        let box = scene.getObjectByName(model.name) as THREE.Mesh
        // 动画形式参考 https://tweenjs.github.io/tween.js/examples/03_graphs.html
        if (model.isOpenAnimat) {
            let param = { x: 0, y: 0, z: 0 }
            let euler = new THREE.Euler(100, 100, 100)
            let openBox = new TWEEN.Tween(param)
            console.log(euler)
            openBox.to({ 
                x: model.animat.x,
                y: model.animat.y,
                z: model.animat.z
            }, model.animatTime || 1000);
            openBox.easing(TWEEN.Easing.Linear.None);
            openBox.onUpdate(function () {
                box.rotation.set(param.x, param.y, param.z);
                box.position.set(euler.x, euler.y, euler.z);
            }).start();
            model.isOpenAnimat = false;
        } else {
            // box.rotation.y += 0.25*Math.PI;
            let param = { 
                x: model.animat.x,
                y: model.animat.y,
                z: model.animat.z
            }
            let closeBox = new TWEEN.Tween(param)
            closeBox.to({ 
                x: 0,
                y: 0,
                z: 0
            }, model.animatTime || 1000);
            closeBox.easing(TWEEN.Easing.Linear.None);
            closeBox.onUpdate(function () {
                box.rotation.set(param.x, param.y, param.z);
            }).start();
            model.isOpenAnimat = true;
        }
    }
}

function initDoor() {
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

onUnmounted(() => {
    window.cancelAnimationFrame(closeDoorAnimation)
})

</script>

<style lang="scss" scoped>
.starryPage {
    position: relative;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    background: url('../../../assets/images/Login/sand.jpg');
    background-size: 100% 100%;
    overflow: hidden;

    .webglDom {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>