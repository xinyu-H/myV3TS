<template>
    <div class="webglDom" ref="webglDom"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onUnmounted, inject } from 'vue'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import TWEEN from "tween.js";
import ThreeBSPF from 'three-js-csg'
import Tools from '@/utils/tools';
import img1 from '@/assets/images/Login/leaf.jpg'
import { bspDetailModel, boxDetailModel } from "../DataModel/interface";


const ThreeBSP = ThreeBSPF(THREE)

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
let activeBox: THREE.Mesh
// 场景
const initScene = () => {
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
const initCamera = () => {
    camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 10000);
    camera.position.set(0, 100, 500);
    add(camera);
    camera.lookAt(scene.position);
}
/// 控制器
const initControls = () => {
    controls = new OrbitControls(camera, renderer.domElement);
}
// 添加灯光
const initLight = () => {
    amdLight = new THREE.AmbientLight('#999');
    dirLight = new THREE.DirectionalLight('#999')
    ponLight = new THREE.PointLight('#999')
    amdLight.position.set(0, 0, 0)
    dirLight.position.set(0, 0, 0)
    ponLight.position.set(0, 0, 0)
    add(amdLight);          // 环境光
    add(dirLight);          // 方向光
    add(ponLight);          // 点光源
}
// 渲染器
const initRenderer = () => {
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    })
    renderer.outputEncoding = THREE.sRGBEncoding;
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
const add = (obj: THREE.Object3D) => {
    scene.add(obj);
}
const render = () => {
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
/**
 * 创建一个物体，添加到场景
 * @param boxDetail
 */
const addBox = (boxDetail: boxDetailModel) => {
    const cBox = (texture?: THREE.Texture) => {
        const geometry = new THREE.BoxGeometry(boxDetail.l, boxDetail.h, boxDetail.w);
        const material = new THREE.MeshLambertMaterial({
            color: boxDetail.color,
            map: texture
        });
        const mesh: any = new THREE.Mesh(geometry, material);
        mesh.position.set(boxDetail.x, boxDetail.y, boxDetail.z);
        mesh.name = boxDetail.name // 可通过 scene.getObjectByName('name') 获取材质
        mesh.animat = boxDetail.animat
        mesh.isOpenAnimat = true
        mesh.animatTime = boxDetail.animatTime
        mesh.initPosition = { x: boxDetail.x, y: boxDetail.y, z: boxDetail.z }
        add(mesh);
        window.addEventListener("click", onClick, false);
        window.addEventListener("keydown", onKeydown, false);
    }
    if (!boxDetail.img) return cBox();
    let loader = new THREE.TextureLoader();// 纹理贴图
    loader.load(boxDetail.img as string, (texture) => {
        cBox(texture)
    })
}
const onKeydown = (e: any) => {
    if (e.keyCode === 37) activeBox.position.x -= 1
    if (e.keyCode === 39) activeBox.position.x += 1
    if (e.keyCode === 38) activeBox.position.y += 1
    if (e.keyCode === 40) activeBox.position.y -= 1
}
/**
 * 点击事件
 * @param event 
 */
const onClick = (event: any) => {
    event = Tools.isMobile() ? event.changedTouches[0] : event
    // event.preventDefault();
    // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    let intersects: any = raycaster.intersectObjects(scene.children, true);
    let model = intersects[0]?.object
    // console.log(model, model.name)
    if (intersects.length > 0 && model.name) {
        let box = scene.getObjectByName(model.name) as THREE.Mesh
        activeBox = box
        return;
        // 动画形式参考 https://tweenjs.github.io/tween.js/examples/03_graphs.html
        if (!model.animat) return;
        let originPosition = {
            x: model.initPosition.x, 
            y: model.initPosition.y, 
            z: model.initPosition.z, 
            tx: 0, 
            ty: 0, 
            tz: 0
        }
        let targetPosition = {
            x: model.animat.x,
            y: model.animat.y,
            z: model.animat.z,
            tx: model.animat.tx,
            ty: model.animat.ty,
            tz: model.animat.tz
        }
        let cloneOriginPosition = JSON.parse(JSON.stringify(originPosition))
        let cloneTargetPosition = JSON.parse(JSON.stringify(targetPosition))
        if (model.isOpenAnimat) {
            let openBox2 = new TWEEN.Tween(cloneTargetPosition)
            .to(cloneOriginPosition, model.animatTime || 1000)
            .easing(TWEEN.Easing.Linear.None)
            .onUpdate(function(this: any) {
                box.rotation.set(this.tx, this.ty, this.tz);
                box.position.set(this.x, this.y, this.z);
            })
            let openBox = new TWEEN.Tween(originPosition)
            .to(targetPosition, model.animatTime || 1000)
            .easing(TWEEN.Easing.Linear.None)
            .onUpdate(function(this: any) {
                box.rotation.set(this.tx, this.ty, this.tz);
                box.position.set(this.x, this.y, this.z);
            }).start()
            // openBox.chain(openBox2)
            // openBox2.chain(openBox)
            model.isOpenAnimat = false;
        } else {
            let closeBox = new TWEEN.Tween(targetPosition)
            .to(originPosition, model.animatTime || 1000)
            .easing(TWEEN.Easing.Linear.None)
            .onUpdate(function (this: any) {
                box.rotation.set(this.tx, this.ty, this.tz);
                box.position.set(this.x, this.y, this.z);
            }).start();
            model.isOpenAnimat = true;
        }
    }
}

const createBox = () => {
    addBox({l: 30, w: 30, h: 30, x: 0, y: 0, z: 0, name: 'box1', color: "#666", animat: {x: 100, y: 100, z: 0, tx: 0, ty: 0, tz: 2}});
    // addBox({l: 100, w: 100, h: 100, x: -200, y: 0, z: 0, name: 'box2', color: "#39f", animat: {x: 50, y: 50, z: 50, tx: 2, ty: 2, tz: 2}, animatTime: 3000});
    // addBox({l: 100, w: 100, h: 100, x: 200, y: 0, z: 0, name: 'box3', img: img1});
    // createBSPBox({l: 200, w: 230, h: 6, x: 0, y: 0, z: 0, l2: 180, w2: 210, h2: 6, x2: 0, y2: 0, z2: 0, color: "pink"})
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

onUnmounted(() => {
    window.cancelAnimationFrame(closeDoorAnimation)
})

</script>

<style lang="scss" scoped>
.webglDom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    // background: url('../../../assets/images/Login/sand.jpg');
    background-size: 100% 100%;
}
</style>