//three js library
import * as THREE from 'three';
import { EffectComposer } from "/node_modules/three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "/node_modules/three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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
const sun = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xFDB813 })
);
sun.position.set(0, 0, 0);
scene.add(sun);

// bloom renderer
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
);
bloomPass.threshold = 0;
bloomPass.strength = 3; //intensity of glow
bloomPass.radius = 0;
const bloomComposer = new EffectComposer(renderer);
bloomComposer.setSize(window.innerWidth, window.innerHeight);
bloomComposer.renderToScreen = true;
bloomComposer.addPass(renderScene);
bloomComposer.addPass(bloomPass);

//ambient light
const ambientlight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientlight);


class Star {
    constructor() {
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        // White color
        this.color = 0xffffff;
        const material = new THREE.MeshStandardMaterial({ color: this.color });
        const star = new THREE.Mesh(geometry, material);
        this.mesh = star;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.position = [this.x, this.y, this.z];

        // Add a random delay for the pulsating effect
        this.pulsateDelay = Math.random() * 2 * Math.PI;

        // Add a pulsating speed
        this.pulsateSpeed = 0.5 + Math.random() * 1; // Adjust pulsateSpeed for a more noticeable effect
    }

    update() {
        // Apply pulsating effect
        const pulsate = Math.sin(this.pulsateSpeed * (Date.now() * 0.001 + this.pulsateDelay));
        this.mesh.scale.setScalar(0.25 + pulsate * 0.1); // Adjust scale for a more noticeable effect
    }
}

// Create and add 50 stars to the scene
const stars = [];
for (let i = 0; i < 150; i++) {
    const star = new Star();
    star.mesh.position.set(
        THREE.MathUtils.randFloatSpread(50),
        THREE.MathUtils.randFloatSpread(50),
        THREE.MathUtils.randFloatSpread(50)
    );
    scene.add(star.mesh);
    stars.push(star);
}

const controls = new OrbitControls(camera, renderer.domElement)
// // helper
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);


const animate = () => {
    requestAnimationFrame(animate);
    // Update stars
    stars.forEach(star => star.update());
    // Render scene
    renderer.render(scene, camera);
    bloomComposer.render();
    controls.update();
};

animate();