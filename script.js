function render_icon() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 100);
  const surface = document.getElementById("sidebar_canvas");
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: surface,
  });
  renderer.setSize(surface.width, surface.height);
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0xda7386 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
  const animate = function () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
}

function about() {
  let post = document.getElementById("post-container");
  post.innerHTML = $("#post-container").load("/content/about.html");
}
function landing() {
  let post = document.getElementById("post-container");
  post.innerHTML = $("#post-container").load("/content/landing.html");
}
function post_2() {
  let post = document.getElementById("post-container");
  post.innerHTML = $("#post-container").load("/content/post2.html");
}

function post2_title_anim() {
  anime({
    targets: ".post-title",
    translateX: 15,
    loop: true,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
  });
}

function post1_title_anim() {
  let tl = anime.timeline({});
  tl.add(
    {
      targets: ".post-title",
      translateX: [-600, 0],
      translateY: [-600, 0],
      easing: "easeInQuad",
      duration: 2000,
    },
    100
  );
  tl.add(
    {
      targets: ".post-title",
      translateX: 40,
      easing: "spring(10, 50, 50, 2)",
      duration: 200,
    },
    "+=0.0001"
  );
}
