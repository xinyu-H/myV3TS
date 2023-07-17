<template>
    <div class="starryPage">
        <div class="webglDom" ref="webglDom"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onUnmounted, inject } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import TWEEN from "tween.js";
import ThreeBSPF from 'three-js-csg'
import Tools from '@/utils/tools';
import img1 from '@/assets/images/Login/leaf.jpg'


const $Utils: any = inject('$Utils')
const ThreeBSP = ThreeBSPF(THREE)
let width = 0,
    height = 0,
    controls = null,
    isOpenDoor = true,
    amdLight = null,
    dirLight = null,
    scene: THREE.Scene,
    camera: THREE.Camera,
    renderer: THREE.WebGLRenderer,
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
    camera.position.set(0, 100, 500);
    add(camera);
    camera.lookAt(scene.position);
}
// 控制器
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
 * 点击事件
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
    let door = scene.getObjectByName('box1') as THREE.Object3D
    if (intersects.length > 0) {
    console.log(intersects, door)
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
function addBox(length: number, height: number, width: number, color: any, x: number, y: number, z: number, name: string, img: string) {
    let loader = new THREE.TextureLoader();// 纹理贴图
    loader.load(img, (texture) => {
        const geometry = new THREE.BoxGeometry(length, height, width);
        const material = new THREE.MeshLambertMaterial({
            color: color,
            map: texture
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        dummy.add(mesh)
        // dummy.position.set(0, 0, 0);
        dummy.name = name
        add(dummy);
        window.addEventListener("click", onClick, false);
    })
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
function createBox() {
    addBox(100, 100, 100, "#999", 0, 0, 0, 'box1', img1)
    let frameBSP = initBSP(150, 230, 6, 0, 0, 0)   // 门框
    let doorBSP = initBSP(130, 220, 6, 0, -5, 0)   // 门占位
    let resultBSP = frameBSP.subtract(doorBSP); // 取交集
    let result = resultBSP.toMesh();        // 相交部分转换为mesh
    let boxGeometry = result.geometry;      // 转成geometry
    let boxMaterial = new THREE.MeshLambertMaterial ({     // 添加材质
        color: '#999'
    });
    let wallMesh = new THREE.Mesh(boxGeometry,boxMaterial);
    add(wallMesh);

    // for (let i = 0; i < 10; i++) {
    //     addBox(30, 100, 30, "#999", Tools.getRandom(-500, 100), 0, Tools.getRandom(-500, 100))
    // }
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