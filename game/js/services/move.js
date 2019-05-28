const Service = require('../service');

class Move extends Service {
  static name() {
    return 'move'; 
  }

  static init() {
  }

  static update(world) {
    const entities = world.entities;
    for(let i=0;i<entities.length;i++) {
      let entity = entities[i];
      if (entity.location && entity.movement) {
        const ax = entity.movement.ax;
        const ay = entity.movement.ay;

        entity.movement.vx += ax;
        entity.movement.vy += ay;

        const FRICTION = .95;
        entity.movement.vx = entity.movement.vx * FRICTION;
        entity.movement.vy = entity.movement.vy * FRICTION;

        const vx = entity.movement.vx;
        const vy = entity.movement.vy;

        entity.location.x += vx;
        entity.location.y += vy;
      }
    }
  }
}

module.exports = Move;