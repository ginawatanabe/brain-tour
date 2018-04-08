window.onload = function() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let container, scene, camera, renderer, light;
  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2(), INTERSECTED, CLICKINTERSECTED;
  let intersects;
  let mesh = null;

  function init() {
    container = document.createElement('div');
    document.body.appendChild(container);
    scene = new THREE.Scene();

    //Initialize camera.
    camera = new THREE.PerspectiveCamera(70, width / height, 1, 500);
    camera.position.set(0, 3.5, 10);
    camera.lookAt(scene.position);

    //Add test mesh.
    let loader = new THREE.JSONLoader();
    let name = 'models/testbrain.json';
    loader.load(name, function(geometry, materials) {
      mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
      scene.add(mesh);
    });

    //Initialize lighting.
    light = new THREE.PointLight(0xffffff, lightIntensity);
    light.position.set(50,50,50);
    scene.add(light);
  }

}
