import Service from './service';
import { Point } from '@spacegame/core';

export default class MoveEnitity extends Service {
  static name() {
    return 'moveEnitity'; 
  }

  static init() {
  }

  static update(world) {
    const entities = world.entities;
    for(let i=0;i<entities.length;i++) {
      let entity = entities[i];
      if (entity.followPath && entity.movement) {
        const path = entity.followPath.points;
        
        const currentGoal = path[entity.followPath.current % path.length];

        const moveSpeed = 2;
        const dif = 10;

        let point = new Point(entity.location);
        const goal = new Point(currentGoal);
        
        if (point.isEqualEnough(goal, dif)) {
          entity.followPath.current = (entity.followPath.current+1) % path.length;
        } else {
          point = point.sub(goal).getNormal();
          entity.movement.vx -= ~~(point.x * moveSpeed);
          if (Math.abs(entity.movement.vx) > 10)
            entity.movement.vx = entity.movement.vx < 0 ? -10: 10;
          entity.movement.vy -= ~~(point.y * moveSpeed);
          if (Math.abs(entity.movement.vy) > 10)
            entity.movement.vy = entity.movement.vy < 0 ? -10 : 10;
        }
      }
    }
  }
}