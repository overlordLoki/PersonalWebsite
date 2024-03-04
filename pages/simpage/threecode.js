//-------------------------------------------------------------------------------------------------//
import * as THREE from 'three';
import { Fish } from './custemObjects';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
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

function stopAnimation() {console.log("stopAnimation()");}
function updateSpeed() {const speed = speedInput.value; console.log("updateSpeed()", speed);}
//-------------------------------------------------------------------------------------------------//
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas'),
  alpha: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setX(0.00);
camera.position.setY(4.00);
camera.position.setZ(-10.0);
renderer.autoClear = true;
renderer.setClearColor(0x000000, 1);
//document.querySelector('#canvas') hight and width
const canvas = document.querySelector('#canvas');
//-------------------------------------------------------------------------------------------------//
//background space3
const spaceTexture = new THREE.TextureLoader().load('/../imgs/space3.jpg');
scene.background = spaceTexture;
//light
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight)
//-------------------------------------------------------------------------------------------------//
const blue = new THREE.Color(0x0000ff);
const myFish = new Fish(0, 0, 0, 0xff0000, 45); // Red fish initially facing 45 degrees
scene.add(myFish.object);
//-------------------------------------------------------------------------------------------------//

// Create a fish tank
const tankSize = 20;
const tankGeometry = new THREE.BoxGeometry(tankSize, tankSize, tankSize);
const tankMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0 });
const fishTank = new THREE.Mesh(tankGeometry, tankMaterial);
scene.add(fishTank);
// Set the position of the fish tank
fishTank.position.set(0, 0, 0);
// Create an outline for the fish tank
const edges = new THREE.EdgesGeometry(tankGeometry);
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
fishTank.add(line);


//-------------------------------------------------------------------------------------------------//

// ...

// ...

// Time interval for changing direction (10 seconds)
const changeDirectionInterval = 10 * 1000; // in milliseconds
let lastDirectionChangeTime = Date.now();

// ...

function moveAllFish() {
  const wallHitThreshold = 0.5;
  const minDistanceToWall = 0.5; // Minimum distance to wall

  // Check if the fish is out of bounds and bounce off the walls
  if (
    myFish.object.position.x > tankSize / 2 - wallHitThreshold ||
    myFish.object.position.x < -tankSize / 2 + wallHitThreshold
  ) {
    myFish.velocity.x *= -1; // Reverse the x component of velocity
    myFish.object.position.x = Math.max(-tankSize / 2 + minDistanceToWall, Math.min(tankSize / 2 - minDistanceToWall, myFish.object.position.x));
  }

  if (
    myFish.object.position.z > tankSize / 2 - wallHitThreshold ||
    myFish.object.position.z < -tankSize / 2 + wallHitThreshold
  ) {
    myFish.velocity.z *= -1; // Reverse the z component of velocity
    myFish.object.position.z = Math.max(-tankSize / 2 + minDistanceToWall, Math.min(tankSize / 2 - minDistanceToWall, myFish.object.position.z));
  }

  // Check if it's time to change direction
  const currentTime = Date.now();
  if (currentTime - lastDirectionChangeTime > changeDirectionInterval) {
    const randomDirection = getRandomDirection();
    myFish.setDirection(randomDirection.x, randomDirection.y, randomDirection.z);
    lastDirectionChangeTime = currentTime; // Update the last direction change time
  }

  myFish.move();
}

// ...


function getRandomDirection() {
  const maxChange = 45; // Maximum change in degrees

  const randomChangeX = (Math.random() - 0.5) * maxChange;
  const randomChangeY = (Math.random() - 0.5) * maxChange;
  const randomChangeZ = (Math.random() - 0.5) * maxChange;

  const currentDirection = myFish.direction;

  const newX = currentDirection.x + THREE.MathUtils.degToRad(randomChangeX);
  const newY = currentDirection.y + THREE.MathUtils.degToRad(randomChangeY);
  const newZ = currentDirection.z + THREE.MathUtils.degToRad(randomChangeZ);

  return { x: newX, y: newY, z: newZ };
}


// ...
function startAnimation() {console.log(myFish.object.position);}

//-------------------------------------------------------------------------------------------------//
const controls = new OrbitControls(camera, renderer.domElement)
// Your animation loop
function animate() {
  controls.update();
  moveAllFish();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

