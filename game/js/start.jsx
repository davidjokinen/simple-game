
const Poly = require('./poly');

const Entity = require('./entity');
const Map = require('./map');
const Render = require('./services/render')
const Move = require('./services/move')

const TestScene = require('./scenes/test-scene')

window.onload = () => {
  console.log('page has finished loading.');

  const canvas = document.getElementById("canvas");  
  const ctx = canvas.getContext('2d');

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  
  Render.init(ctx);

  const scene = new TestScene();
  scene.setup(ctx, canvas);
  const render = () => {
    scene.loop();
    requestAnimationFrame(render);
  };
  render();


};
