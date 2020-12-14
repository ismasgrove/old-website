function render_icon() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 100);
  var surface = document.getElementById("sidebar_canvas");
  var renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: surface,
  });
  renderer.setSize(surface.width, surface.height);
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({ color: 0xda7386 });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
  var animate = function () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
}

render_icon();
