# 3DPro.js
3DPro.js is a JavaScript library that allows you to create 3D games and visualizations in the browser. It is built on top of the Three.js library, which provides powerful and flexible tools for creating 3D graphics.

# Installation
To use 3DPro.js in your project, you first need to install it using NPM or Yarn. Here are the steps:

Open a terminal or command prompt in your project's root directory.

Run the following command to install 3DPro.js:


```npm install 3dpro.js```

or

```yarn add 3dpro.js```
Wait for the installation to complete. This will download the 3DPro.js library and its dependencies.

# Getting Started
To use 3DPro.js in your project, you first need to import it into your JavaScript file. Here's how:

```import { Game3D } from '3dpro.js';```

Once you have imported the library, you can create a new instance of the Game3D class and add objects to it. Here's an example:

```
const container = document.getElementById('container');
const game = new Game3D(container);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
game.add(cube);
```

In this example, we first create a new instance of the Game3D class and pass in a container element for the game to be rendered in. Then, we create a new box geometry and mesh, and add the mesh to the game using the add method.

Finally, we start the game loop by calling the animate method:


``` game.animate(); ```
This will continuously update and render the game in the browser.

# API
The 3DPro.js library provides the following API:

## Game3D(container: HTMLElement)
Creates a new instance of the Game3D class with the specified container element.

### Parameters

container - The HTML element that the game will be rendered in.
Methods

add(object: THREE.Object3D): Adds a new object to the game scene.

remove(object: THREE.Object3D): Removes an object from the game scene.

play(): Starts the game loop.

pause(): Pauses the game loop.

render(): Renders the game scene.

animate(): The game loop, which continuously updates and renders the game.

### Example
```
const container = document.getElementById('container');
const game = new Game3D(container);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
game.add(cube);

game.animate();
```

# Conclusion
3DPro.js provides a simple and powerful way to create 3D games and visualizations in the browser using the Three.js library. With its easy-to-use API and flexible design, you can create stunning 3D experiences with minimal effort.
