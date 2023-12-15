//three js library
import * as THREE from 'three';
import { EffectComposer } from "/node_modules/three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "/node_modules/three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";

//cavas and camera and renderer
var canvas = document.getElementById('bg');
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//scene
var scene = new THREE.Scene();
camera.position.z = 5;
camera.position.x = 0;
scene.add(camera);
//renderer.render(scene, camera);


//sun object



// // //space background
// // const spaceTexture = new THREE.TextureLoader().load('../../imgs/space3.jpg');
// // scene.background = spaceTexture;
// //bloom renderer
// const renderScene = new RenderPass(scene, camera);
// const bloomPass = new UnrealBloomPass(
//   new THREE.Vector2(window.innerWidth, window.innerHeight),
//   1.5,
//   0.4,
//   0.85
// );
// bloomPass.threshold = 0;
// bloomPass.strength = 2; //intensity of glow
// bloomPass.radius = 0;
// const bloomComposer = new EffectComposer(renderer);
// bloomComposer.setSize(window.innerWidth, window.innerHeight);
// bloomComposer.renderToScreen = true;
// bloomComposer.addPass(renderScene);
// bloomComposer.addPass(bloomPass);
// //sun object
// const color = new THREE.Color("#FDB813");
// const geometry = new THREE.IcosahedronGeometry(1, 15);
// const material = new THREE.MeshBasicMaterial({ color: color });
// const sphere = new THREE.Mesh(geometry, material);
// sphere.position.set(0, 0, 0);
// sphere.layers.set(1);
// scene.add(sphere);

// //ambient light
// const ambientlight = new THREE.AmbientLight(0xffffff, 0.1);
// scene.add(ambientlight);


// window.addEventListener(
//     "resize",
//     function () {
//         var width = window.innerWidth;
//         var height = window.innerHeight;
//         renderer.setSize(width, height);
//         camera.aspect = width / height;
//         camera.updateProjectionMatrix();
//     },
//     false
// );


// //animation loop
// const animate = () => {
//     requestAnimationFrame(animate);
//     camera.layers.set(1);
//     bloomComposer.render();
//   };

// animate();
