<template>
    <div class="starryPage">
        <div class="webglDom" ref="webglDom"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onUnmounted, inject } from 'vue'
import { initStar } from './DataModel/star'
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import TWEEN from "tween.js";
import ThreeBSPF from 'three-js-csg'
import doorImg from '@/assets/images/Door/door_right.png'


const $Utils: any = inject('$Utils')
const ThreeBSP = ThreeBSPF(THREE)
let width = 0,
    height = 0,
    scene: THREE.Scene,
    camera: THREE.Camera,
    controls = null,
    renderer: THREE.WebGLRenderer,
    isOpenDoor = true,
    amdLight = null,
    dirLight = null,
    ponLight: THREE.PointLight,
    // 鼠标位置
    raycaster: THREE.Raycaster,
    mouse: THREE.Vector2,
    dummy: THREE.Object3D,
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
    dummy = new THREE.Object3D();
}
// 相机
function initCamera(){
    camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 10000);
    camera.position.set(0, 0, 500);
    add(camera);
    camera.lookAt(scene.position);
}
// 控制器
function initControls(){
    controls = new OrbitControls(camera, renderer.domElement);
}
// 添加灯光
function initLight(){
    amdLight = new THREE.AmbientLight('#aaa');
    dirLight = new THREE.DirectionalLight('#aaa')
    ponLight = new THREE.PointLight('#aaa')
    amdLight.position.set(0, 0, 0)
    dirLight.position.set(0, 0, 0)
    ponLight.position.set(0, 0, 0)
    add(amdLight);		    // 环境光
    add(dirLight);		    // 方向光
    add(ponLight);			// 点光源
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
 * 创建门、门框及贴图，添加到场景
 */
function createDoor(){
    let frameBSP = initBSP(150, 230, 6, 0, 0, 0)   // 门框
    let doorBSP = initBSP(130, 220, 6, 0, -5, 0)   // 门占位
    let resultBSP = frameBSP.subtract(doorBSP); // 取交集
    let result = resultBSP.toMesh();        // 相交部分转换为mesh
    let boxGeometry = result.geometry;      // 转成geometry
    let boxMaterial = new THREE.MeshLambertMaterial({     // 添加材质
        color: '#aaa'
    });
    let wallMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    add(wallMesh);

    // 门
    let loader = new THREE.TextureLoader();
    loader.load(doorImg, function (texture) {
        const geometry = new THREE.BoxGeometry(130, 220, 2);
        const material = new THREE.MeshLambertMaterial({
            color: '#ccc',
            map: texture
        });
        material.transparent = true;
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(-65, -5, -2);
        dummy.add(mesh)
        dummy.position.set(65, 0, 0);
        dummy.name = 'door'
        add(dummy);
        (document.querySelector('.webglDom') as HTMLElement).addEventListener("click", onClick, false);
        (document.querySelector('.webglDom') as HTMLElement).addEventListener("touchstart", onClick, false);
    })
}
/**
 * 门的点击事件
 * @param event 
 */
function onClick(event: any){
    event = $Utils.Tools.isMobile() ? event.changedTouches[0] : event
    // event.preventDefault();
    // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(scene.children, true);
    let door = scene.getObjectByName('door') as THREE.Object3D
    if (intersects.length > 0) {
        if (isOpenDoor) {
            // door.rotation.y -= 0.25*Math.PI;
            let param = { y: 0 }
            let openDoor = new TWEEN.Tween(param)
            openDoor.to({ y: -0.25 * Math.PI }, 1000);
            openDoor.easing(TWEEN.Easing.Elastic.Out);
            openDoor.onUpdate(function () {
                door.rotation.set(0, param.y, 0);
            }).start();
            isOpenDoor = false;
        } else {
            // door.rotation.y += 0.25*Math.PI;
            let param = { y: -0.25 * Math.PI }
            let closeDoor = new TWEEN.Tween(param)
            closeDoor.to({ y: 0 }, 1000);
            closeDoor.easing(TWEEN.Easing.Elastic.Out);
            closeDoor.onUpdate(function () {
                door.rotation.set(0, param.y, 0);
            }).start();
            isOpenDoor = true;
        }
    }
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
    const geometry = new THREE.BoxGeometry(length, height, width);
    const material = new THREE.MeshLambertMaterial({
        color: color
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    add(mesh);
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
    closeDoorAnimation = requestAnimationFrame(render);
}
function initDoor() {
    initScene()
    initCamera()
    initLight()
    createDoor()
    initRenderer()
    initControls()
}

let closeStarAnimation: Function
onMounted(() => {
    nextTick(() => {
        closeStarAnimation = initStar(document.querySelector('.starryPage') as HTMLElement)
        initDoor()
    })
})

onUnmounted(() => {
    window.cancelAnimationFrame(closeDoorAnimation)
    closeStarAnimation()
})

</script>

<style lang="scss" scoped>
.starryPage {
    position: relative;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
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