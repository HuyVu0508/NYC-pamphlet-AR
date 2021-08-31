/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

(async function () {  // Enables async/await in JS [part 1]

  // To access scene objects
  // const [directionalLight] = await Promise.all([
  //   Scene.root.findFirst('directionalLight0')
  // ]);

  // To access class properties
  // const directionalLightIntensity = directionalLight.intensity;

  // To log messages to the console
  // Diagnostics.log('Console message logged from the script.');

  // Set current variable for control
  var current_object

  // To access scene objects
  const [liberty, bridge, nyc_manhattan, number1, number2, number3] = await Promise.all([
    Scene.root.findFirst('liberty'),
    Scene.root.findFirst('bridge'),
    Scene.root.findFirst('nyc_manhattan'),
    Scene.root.findFirst('number1'),
    Scene.root.findFirst('number2'),
    Scene.root.findFirst('number3')
  ]);

  // Subscribe to tap gestures on the numbers
  TouchGestures.onTap(number1).subscribe((gesture) => {
    current_object = nyc_manhattan;
    Diagnostics.log(current_object);
    Diagnostics.log("number1 tapped!");
  });
  TouchGestures.onTap(number2).subscribe((gesture) => {
    current_object = liberty;
    Diagnostics.log(current_object);
    Diagnostics.log("number2 tapped!");
  });
  TouchGestures.onTap(number3).subscribe((gesture) => {
    current_object = bridge;
    Diagnostics.log(current_object);
    Diagnostics.log("number3 tapped!");
  });  

  // To log messages to the console
  Diagnostics.log('Current object seleted: ');
  Diagnostics.log(current_object)


})(); // Enables async/await in JS [part 2]
