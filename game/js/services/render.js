const Service = require('../service');

let ctx = null;

class Render extends Service {
  static name() {
    return 'render'; 
  }

  static init(refCtx) {
    ctx = refCtx;
  }

  static update(world) {
    const entities = world.entities;
    let cameraX = 0;
    let cameraY = 0;
    let cameraScale = 1;
    let screenX = window.innerWidth;
    let screenY = window.innerHeight;

    for(let i=0;i<entities.length;i++) {
      let entity = entities[i];
      if (entity.camera && entity.location) {
        cameraX = entity.location.x;
        cameraY = entity.location.y;
        cameraScale = entity.camera.scale;
        world.camera = entity;
        break;
      }
    }
    cameraX -= screenX/2/cameraScale;
    cameraY -= screenY/2/cameraScale;

    for(let i=0;i<entities.length;i++) {
      let entity = entities[i];
      if (entity.location && entity.shape) {
        const x = (entity.location.x - cameraX) * cameraScale;
        const y = (entity.location.y - cameraY) * cameraScale;
        const points = entity.shape.points;
        const fill = "rgba(255,60,10, 1)";
        const stroke = "rgba(10,60,10, 1)";
        ctx.beginPath();
        for (let i=0;i<points.length;i++) {
          const point = points[i];
          if (i === 0)
            ctx.moveTo(point.x*cameraScale+x,point.y*cameraScale+y);
          else 
            ctx.lineTo(point.x*cameraScale+x,point.y*cameraScale+y);
        }
        ctx.closePath();
        ctx.fillStyle = fill;
        ctx.strokeStyle = stroke;
        ctx.fill();
        ctx.stroke();
      }
      
    }
  }
}

module.exports = Render;