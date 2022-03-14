import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';

import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// Initialize scene
const scene = new THREE.Scene();

// Initialize camera
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  60
);
// Reposition camera
camera.position.set(6, 0, 0);

// Initialize renderer
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
});

// Set renderer size
renderer.setSize(window.innerWidth, window.innerHeight);

// Append renderer to body
document.body.appendChild(renderer.domElement);

//! Initialize controls
const controls = new OrbitControls(camera, renderer.domElement);

// Load world texture
const worldTexture = new THREE.TextureLoader().load('images/world.jpg');

// Initialize world geometry
const worldGeometry = new THREE.SphereGeometry(1, 40, 40);

// Initialize world material
const worldMaterial = new THREE.MeshBasicMaterial({
  map: worldTexture,
});

// Initialize world
const world = new THREE.Mesh(worldGeometry, worldMaterial);

// Add earth to scene
scene.add(world);

// Load clouds texture
const cloudTexture = new THREE.TextureLoader().load('images/clouds.png');

// Initialize clouds geometry
const cloudGeometry = new THREE.SphereGeometry(1.01, 40, 40);

// Initialize clouds material
const cloudMaterial = new THREE.MeshBasicMaterial({
  map: cloudTexture,
  transparent: true,
});

// Initialize clouds
const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);

// Add clouds to scene
scene.add(clouds);

// Prepare animation loop
function animate() {
  // Request animation frame
  requestAnimationFrame(animate);

  // Rotate world
  world.rotation.y += 0.0005;

  // Rotate clouds
  clouds.rotation.y -= 0.001;

  // Render scene
  renderer.render(scene, camera);
}

// Animate
animate();

// Listen for window resizing
window.addEventListener('resize', () => {
  // Update camera aspect
  camera.aspect = window.innerWidth / window.innerHeight;

  // Update camera projection matrix
  camera.updateProjectionMatrix();

  // Resize renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
});
