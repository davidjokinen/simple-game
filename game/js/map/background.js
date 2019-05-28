const CONSTANTS = require('../constants');

function renderBackground(world) {
  const { camera, ctx } = world;
  if (!camera) return;

  const TILE_SIZE = CONSTANTS.MAP.TILE_SIZE;
  let cameraScale = camera.camera.scale;
  let cameraX = camera.location.x;
  let cameraY = camera.location.y;
  
  let screenX = window.innerWidth;
  let screenY = window.innerHeight;

  cameraX -= screenX/2/cameraScale;
  cameraY -= screenY/2/cameraScale;
  
  ctx.strokeStyle = '#80b9d4';
  ctx.beginPath();
  const size = TILE_SIZE*cameraScale;
  const countX = screenX/size;
  const startX = (cameraX%TILE_SIZE)*cameraScale;
  for(let x=0;x<=countX+1;x++) {
    const add = x*size;
    ctx.moveTo((add-startX), 0);
    ctx.lineTo((add-startX), screenY); 
  }
  ctx.stroke();
  const countY = screenY/size;
  const startY = (cameraY%TILE_SIZE)*cameraScale;
  for(let y=0;y<=countY+1;y++) {
    const add = y*size;
    ctx.moveTo(0, add-startY);
    ctx.lineTo(screenX, add-startY); 
  }
  ctx.stroke();
}

module.exports = renderBackground;