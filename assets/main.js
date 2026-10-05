import * as THREE from 'three';

// ── Scene setup ──────────────────────────────────────────────────────────────
const canvas = document.getElementById('bg-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(0, 0, 18);

// ── Floating torus knots ──────────────────────────────────────────────────────
const shapes = [];
const geometries = [
  new THREE.TorusKnotGeometry(1.4, 0.38, 120, 18, 2, 3),
  new THREE.IcosahedronGeometry(1.6, 1),
  new THREE.OctahedronGeometry(1.5, 0),
  new THREE.TorusGeometry(1.2, 0.4, 20, 60),
];

const matOptions = [
  { color: 0x7c6dfa, emissive: 0x3a2db0 },
  { color: 0x4fd1c5, emissive: 0x1a7a72 },
  { color: 0xf06a6a, emissive: 0x8a2020 },
];

const positions = [
  [-14, 8, -10], [14, -6, -12], [-10, -10, -8],
  [12, 10, -14], [0, -14, -6], [-5, 14, -10],
];

positions.forEach((pos, i) => {
  const geo = geometries[i % geometries.length];
  const opt = matOptions[i % matOptions.length];
  const mat = new THREE.MeshStandardMaterial({
    color: opt.color,
    emissive: opt.emissive,
    emissiveIntensity: 0.4,
    roughness: 0.3,
    metalness: 0.6,
    wireframe: i % 3 === 0,
    transparent: true,
    opacity: i % 3 === 0 ? 0.18 : 0.12,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(...pos);
  const s = 0.7 + Math.random() * 0.8;
  mesh.scale.set(s, s, s);
  mesh.userData.rotSpeed = {
    x: (Math.random() - 0.5) * 0.004,
    y: (Math.random() - 0.5) * 0.004,
    z: (Math.random() - 0.5) * 0.002,
  };
  mesh.userData.floatOffset = Math.random() * Math.PI * 2;
  scene.add(mesh);
  shapes.push(mesh);
});

// ── Particle field ────────────────────────────────────────────────────────────
const particleCount = 1200;
const pPositions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i++) {
  pPositions[i * 3]     = (Math.random() - 0.5) * 80;
  pPositions[i * 3 + 1] = (Math.random() - 0.5) * 80;
  pPositions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 5;
}
const pGeo = new THREE.BufferGeometry();
pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
const pMat = new THREE.PointsMaterial({ color: 0x7c6dfa, size: 0.06, transparent: true, opacity: 0.5 });
scene.add(new THREE.Points(pGeo, pMat));

// ── Lights ────────────────────────────────────────────────────────────────────
scene.add(new THREE.AmbientLight(0xffffff, 0.3));
const dirLight = new THREE.DirectionalLight(0x7c6dfa, 2);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);
const dirLight2 = new THREE.DirectionalLight(0x4fd1c5, 1.5);
dirLight2.position.set(-8, -5, 3);
scene.add(dirLight2);

// ── Mouse parallax ────────────────────────────────────────────────────────────
const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
window.addEventListener('mousemove', e => {
  mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
  mouse.ty = -(e.clientY / window.innerHeight - 0.5) * 2;
});

// ── Scroll influence ──────────────────────────────────────────────────────────
let scrollY = 0;
window.addEventListener('scroll', () => { scrollY = window.scrollY; });

// ── Resize ────────────────────────────────────────────────────────────────────
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ── Animate ───────────────────────────────────────────────────────────────────
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();

  // Smooth mouse lerp
  mouse.x += (mouse.tx - mouse.x) * 0.05;
  mouse.y += (mouse.ty - mouse.y) * 0.05;

  camera.position.x = mouse.x * 1.5;
  camera.position.y = mouse.y * 1.0;
  camera.lookAt(0, -scrollY * 0.002, 0);

  shapes.forEach(mesh => {
    mesh.rotation.x += mesh.userData.rotSpeed.x;
    mesh.rotation.y += mesh.userData.rotSpeed.y;
    mesh.rotation.z += mesh.userData.rotSpeed.z;
    // Gentle float
    mesh.position.y += Math.sin(t * 0.4 + mesh.userData.floatOffset) * 0.003;
  });

  renderer.render(scene, camera);
}
animate();

// ── Scroll reveal ─────────────────────────────────────────────────────────────
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
sections.forEach(s => observer.observe(s));
