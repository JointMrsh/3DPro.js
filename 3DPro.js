import * as THREE from 'three';

class Game3D {
  constructor(container) {
    this.container = container;
    this.clock = new THREE.Clock();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);

    // Set up the scene and camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
    this.camera.position.z = 5;
    this.camera.position.y = 2;
    this.camera.lookAt(this.scene.position);

    // Add a directional light to the scene
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    this.scene.add(light);

    // Set up the game loop
    this.isPlaying = false;
    this.delta = 0;
    this.prevTime = 0;
    this.update = this.update.bind(this);
    this.resize = this.resize.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.resize();
    this.play();
  }

  add(object) {
    this.scene.add(object);
  }

  remove(object) {
    this.scene.remove(object);
  }

  update() {
    this.delta = this.clock.getDelta();

    // Update all children of the scene
    this.scene.traverse((child) => {
      if (child.update) {
        child.update(this.delta);
      }
    });
  }

  resize() {
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
  }

  play() {
    this.isPlaying = true;
    this.prevTime = performance.now();
    this.update();
  }

  pause() {
    this.isPlaying = false;
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  animate() {
    if (!this.isPlaying) return;

    requestAnimationFrame(() => this.animate());
    this.update();
    this.render();
  }
}

export { Game3D };
