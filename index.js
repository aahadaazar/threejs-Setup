var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
var scene = new THREE.Scene();
var material = new THREE.LineBasicMaterial({
  color: 0x0000ff
}

);
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(80, 0, 0));
geometry.vertices.push(new THREE.Vector3(-80, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 46, 0));
geometry.vertices.push(new THREE.Vector3(0, -46, 0));
var line = new THREE.Line(geometry, material);


var dotGeometry = new THREE.Geometry();
dotGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
var dotMaterial = new THREE.PointsMaterial({ size: 2, sizeAttenuation: false });
var dot = new THREE.Points(dotGeometry, dotMaterial);


var triGeometry = new THREE.Geometry();
triGeometry.vertices.push(new THREE.Vector3(20, 0, 0));
triGeometry.vertices.push(new THREE.Vector3(-20, 0, 0));
triGeometry.vertices.push(new THREE.Vector3(0, 20, 0));
triGeometry.faces.push(new THREE.Face3(0, 2, 1));
var redMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var triangle = new THREE.Mesh(triGeometry, redMat);


scene.add(triangle);
// scene.add(dot);
// scene.add(line);

renderer.render(scene, camera);

window.onkeyup = function (e) {
  if (e.code === 'ArrowRight') {
    renderer.clear();
    console.log(scene.children);
    scene.children = [];
    var newTri = triangle.clone();
    var angle = Math.PI / 2;
    newTri.rotation.z = angle;
    scene.add(newTri);
    renderer.render(scene, camera);
  }
}
