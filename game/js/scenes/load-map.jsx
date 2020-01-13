import React from 'react';
import ReactDOM from 'react-dom';
import Scene from './scene';

import { Entity, Mouse } from "@spacegame/core";

import { Map, renderBackground } from "@spacegame/map";

import { Render, Move, GridMovement, MoveEnitity } from "@spacegame/services";

// import Level from "@spacegame/level"

const renderUI = (world) => {
};

export default class LoadMapScene extends Scene {
  constructor() {
    super();
    this.world = {};
  }

  setup(ctx, canvas) {
    document.getElementById('content').innerHTML = `
      <div id="top-left" class="menu"></div>
      <div id="bottom-left"></div>`;

    const points = [
      {x: 0, y: 0},
      {x: 100, y: 0},
      {x: 100, y: 100},
      {x: 0, y: 100},
    ];
  
    const data = {
      location: {
        x: 30,
        y: 30
      },
      shape: {
        points: points
      },
      movement: {
        vx: 20,
        ax: 0,
      },
      followPath: {
        points: [
          {
            x: 1500,
            y: 1500
          },
          {
            x: 0,
            y: 2000
          },
          {
            x: -2000,
            y: -1100
          },
        ]
      }
    }
    const data2 = {
      location: {
        x: 150,
        y: 150
      },
      shape: {
        points: points
      }, 
      movement: {
        vx: 20,
        ax: 0,
      },
      grid: {},
      // camera: {
      //   scale: .5,
      // },
    }

    const cameraData = {
      location: {
        x: 150,
        y: 150
      },
      camera: {
        scale: .5,
      },
      labels: {
        name: 'camera'
      }
    }
    let mouse = new Mouse(canvas);
    mouse.init();
    let entity = new Entity(data);
    let entity2 = new Entity(data2);
    let camera = new Entity(cameraData);
    this.entity2 = entity2;
    let map = new Map();
    const worldList = [entity, entity2, camera];
    this.world = {
      ctx: ctx,
      canvas: canvas,
      entities: worldList,
      map: map,
      camera: null,
      focusedElement: {},
      mouse: mouse,
    }; 

  }

  loop() {
    const world = this.world;
    world.ctx.clearRect(0, 0, world.canvas.width, world.canvas.height);
    renderBackground(world);
    world.map.render(world);
    if (this.entity2.movement && Math.random() > .96) {
      this.entity2.movement.vx += 10*Math.random()-5;
      this.entity2.movement.vy += 10*Math.random()-5;
    }
    Move.update(world);
    Render.update(world);
    GridMovement.update(world);
    MoveEnitity.update(world);
    renderUI(world);
  }

  cleanup() {
    
  }
}
