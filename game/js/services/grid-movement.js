const Service = require('../service');
const CONSTANTS = require('../constants');

class GridMovement extends Service {
  static name() {
    return 'grid'; 
  }

  static init() {
  }

  static update(world) {
    const TILE_SIZE = CONSTANTS.MAP.TILE_SIZE;
    const HALF_TILE_SIZE = TILE_SIZE/2;
    const entities = world.entities;
    for(let i=0;i<entities.length;i++) {
      let entity = entities[i];
      if (entity.location && entity.grid) {
        if (entity.grid.lock ) {
          const x = entity.location.x;
          const y = entity.location.y;
          const difX = x%TILE_SIZE;
          const difY = y%TILE_SIZE;
          
          if (entity.movement) {
            const GRID_PUSH = CONSTANTS.MAP.GRID_PUSH;
            // Grid or not to grid that is the question. 
            if (Math.abs(entity.movement.vx) < .1 && difX > 10) {
              const vX = difX < HALF_TILE_SIZE ? -GRID_PUSH : GRID_PUSH;
              entity.movement.vx += vX;
            }
            if (Math.abs(entity.movement.vy) < .1 && difY > 10) {
              const vY = difY < HALF_TILE_SIZE ? -GRID_PUSH : GRID_PUSH;
              entity.movement.vy += vY;
            }
          } else {
            const newX = difX < HALF_TILE_SIZE ? x-difX : x-difX+TILE_SIZE;
            const newY = difY < HALF_TILE_SIZE ? y-difY : y-difY+TILE_SIZE;
            entity.location.x = newX;
            entity.location.y = newY;
          }
          

          //entity.grid.setlock = false;
        }
        
      }
    }
  }
}

module.exports = GridMovement;