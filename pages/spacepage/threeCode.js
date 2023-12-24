//-------------------------------------------------------------------------------------------------//
//-----------------------------imports-------------------------------------------------------------//
import * as THREE from 'three';
import { EffectComposer } from "/node_modules/three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "/node_modules/three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Star ,connectStars , tile } from './custemObjects.js';
//-------------------------------------------------------------------------------------------------//
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true, // Ensure alpha is set to true for transparency
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setX(0.00);
camera.position.setY(4.00);
camera.position.setZ(-10.0);
renderer.autoClear = true;
renderer.setClearColor(0x000000, 1);
//-------------------------------------------------------------------------------------------------//

//background space3
const spaceTexture = new THREE.TextureLoader().load('/../imgs/space3.jpg');
scene.background = spaceTexture;

const green = new THREE.Color(0x00ff00);
const black = new THREE.Color(0x000000);
const white = new THREE.Color(0xffffff);
const star1 = new Star(0,0,0,white);
//add to layer 2 of the scene
scene.add(star1.object);
const star2 = new Star(0,2,0,white);
scene.add(star2.object);
const star3 = new Star(1,0,0,white);
scene.add(star3.object);

//-------------------------------------------------------------------------------------------------//
const controls = new OrbitControls(camera, renderer.domElement)
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight)
//-------------------------------------------------------------------------------------------------//
//draw line from star1 to star2
const line = connectStars(star1, star2);
scene.add(line);
//-------------------------------------------------------------------------------------------------//

//-------------------------------------------------------------------------------------------------//
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
//-------------------------------------------------------------------------------------------------//