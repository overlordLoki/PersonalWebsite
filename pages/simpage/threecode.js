//-------------------------------------------------------------------------------------------------//
import * as THREE from 'three';
//-------------------------------------------------------------------------------------------------//
// Accessing controls
const runButton = document.getElementById('runButton');
const stopButton = document.getElementById('stopButton');
const speedInput = document.getElementById('speedInput');
// Adding event listeners
runButton.addEventListener('click', startAnimation);
stopButton.addEventListener('click', stopAnimation);
speedInput.addEventListener('input', updateSpeed);
//-------------------------------------------------------------------------------------------------//
// Your animation functions go here

function startAnimation() {
  // Code to start your animation
}

function stopAnimation() {
  // Code to stop your animation
}

function updateSpeed() {
  const speed = speedInput.value;
  // Code to update the speed of your animation
}
//-------------------------------------------------------------------------------------------------//
// threecode.js

import * as THREE from 'three';

// Accessing the canvas element
const canvas = document.getElementById('canvas');

// Getting the 2D rendering context
const context = canvas.getContext('2d');

// Your Three.js code goes here

// Accessing controls
const runButton = document.getElementById('runButton');
const stopButton = document.getElementById('stopButton');
const speedInput = document.getElementById('speedInput');

// Adding event listeners
runButton.addEventListener('click', startAnimation);
stopButton.addEventListener('click', stopAnimation);
speedInput.addEventListener('input', updateSpeed);

// Creating a Three.js scene for the 2D panel
const panelScene = new THREE.Scene();

// Creating a 2D panel with a plane geometry
const panelGeometry = new THREE.PlaneGeometry(200, 200);
const panelMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const panelMesh = new THREE.Mesh(panelGeometry, panelMaterial);

// Positioning the panel in the center of the canvas
panelMesh.position.set(canvas.width / 2, canvas.height / 2, 0);

// Adding the panel to the scene
panelScene.add(panelMesh);

// Your animation functions go here

function startAnimation() {
  // Code to start your animation
  animate();
}

function stopAnimation() {
  // Code to stop your animation
}

function updateSpeed() {
  const speed = speedInput.value;
  // Code to update the speed of your animation
}

// Drawing panel functions
function drawSquare(x, y, size, color) {
  context.fillStyle = color;
  context.fillRect(x, y, size, size);
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

// Example usage
drawSquare(50, 50, 30, 'blue');

// Your animation loop
function animate() {
  // Your animation logic using Three.js goes here

  // Render the 2D panel scene
  renderer.render(panelScene, camera);

  // Continue the animation loop
  requestAnimationFrame(animate);
}

