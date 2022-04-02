let container1, camera1, renderer1, scene1, calmWorld1, controls1;
let container2, camera2, renderer2, scene2, calmWorld2, controls2;

function init1() {
  container1 = document.querySelector(".scene1");
  scene1 = new THREE.Scene();
  console.log(container1.clientWidth);
  console.log(container1.clientHeight);

  const fov = 35;
  const aspect = container1.clientWidth / container1.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  camera1 = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera1.position.set(15, 25, 90);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene1.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(50, 50, 100);
  scene1.add(light);
  //Renderer
  renderer1 = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer1.setSize(container1.clientWidth, container1.clientHeight);
  renderer1.setPixelRatio(window.devicePixelRatio);

  container1.appendChild(renderer1.domElement);

  controls1 = new THREE.OrbitControls(camera1, renderer1.domElement);
  controls1.autoRotate = true;

  //Load Model
  console.log("Loading the model");
  let loader = new THREE.GLTFLoader();
  loader.load("../model/CalmWorld_GLTF.gltf", function (gltf) {
    scene1.add(gltf.scene);
    console.log(gltf);
    calmWorld1 = gltf.scene.children[0];
    animate1();
  });
}

function init2() {
  container2 = document.querySelector(".scene2");
  scene2 = new THREE.Scene();
  console.log(container2.clientWidth);
  console.log(container2.clientHeight);

  const fov = 35;
  const aspect = container2.clientWidth / container2.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  camera2 = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera2.position.set(25, 50, 90);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene2.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(50, 50, 100);
  scene2.add(light);
  //Renderer
  renderer2 = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer2.setSize(container2.clientWidth, container2.clientHeight);
  renderer2.setPixelRatio(window.devicePixelRatio);

  container2.appendChild(renderer2.domElement);

  controls2 = new THREE.OrbitControls(camera2, renderer2.domElement);
  controls2.autoRotate = true;

  //Load Model
  console.log("Loading the model");
  let loader = new THREE.GLTFLoader();
  loader.load("../model/calmworld2_gltf.gltf", function (gltf) {
    scene2.add(gltf.scene);
    console.log(gltf);
    calmWorld2 = gltf.scene.children[0];
    animate2();
  });
}

function animate1() {
  requestAnimationFrame(animate1);
  controls1.update();
  renderer1.render(scene1, camera1);
}

function animate2() {
  requestAnimationFrame(animate2);
  controls2.update();
  renderer2.render(scene2, camera2);
}

init1();
init2();

//change the window to resize everywhere or every object
function onWindowResize() {
  camera1.aspect = container1.clientWidth / container2.clientHeight;
  camera2.aspect = container2.clientWidth / container2.clientHeight;
  camera1.updateProjectionMatrix();
  camera2.updateProjectionMatrix();

  renderer1.setSize(container1.clientWidth, container1.clientHeight);
  renderer2.setSize(container2.clientWidth, container2.clientHeight);
}

window.addEventListener("resize", onWindowResize);
