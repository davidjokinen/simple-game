
const Poly = require('./poly');

// const Entity = require('./entity');
// const Map = require('./map');
// const Render = require('./services/render');
// const Move = require('./services/move');

import { Entity } from '@spacegame/core'
import { Map } from '@spacegame/map';

import {
  Render,
  Move,
} from '@spacegame/services';
// const TestScene = require('./scenes/test-scene');
// const BackgroundScene = require('./scenes/background-scene');
// const AssestTest = require('./scenes/assest-test-scene');
// const ChatScene = require('./scenes/chat-scene');
// const LoadMapScene = require('./scenes/load-map');
import {
  AssetTestScene,
  BackgroundScene,
  ChatScene,
  LoadMapScene,
  TestScene,
} from '@spacegame/scenes';

const levelMap = {
  'test': TestScene,
  'loadMap': LoadMapScene,
  'menu': BackgroundScene,
  'assest': AssetTestScene,
  'chat': ChatScene,
}

window.onload = () => {
  console.log('page has finished loading.');

  const canvas = document.getElementById("canvas");  
  const ctx = canvas.getContext('2d');

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', () => {
    resizeCanvas();
  });

  Render.init(ctx);
  let scene = null;
  const loadLevel = (level) => {
    if (!(level in levelMap)) {
      console.error('Level not found');
      return;
    }
    scene = new levelMap[level]();
    scene.loadLevel = loadLevel;
    scene.setup(ctx, canvas);
    render();
  };
  const render = () => {
    scene.loop();
    requestAnimationFrame(render);
  };

  loadLevel('menu');  

};
