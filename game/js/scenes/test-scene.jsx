const React = require('react');
const ReactDOM = require('react-dom');

const Scene = require('../scene');

const Mouse = require('../core/input/mouse');

const Entity = require('../entity');
const Map = require('../map');
const renderBackground = require('../map/background');
const Render = require('../services/render');
const Move = require('../services/move');
const GridMovement = require('../services/grid-movement');

const CameraInfo = require('../ui/camera').default;
const MouseInfo = require('../ui/mouse').default;
const EntitiesList = require('../ui/entities-list').default;
const SelectedEntity = require('../ui/selected-entity').default;

const renderUI = (world) => {
  ReactDOM.render(
    <div>
      <CameraInfo camera={world.camera} mouse={world.mouse}/>
      <MouseInfo mouse={world.mouse} />
      <EntitiesList entities={world.entities} focus={world.focusedElement} />
    </div>
    ,
    document.getElementById('top-left')
  );
  ReactDOM.render(
    <div>
      <SelectedEntity  focus={world.focusedElement} />
    </div>
    ,
    document.getElementById('bottom-left')
  );
};

class TestScene extends Scene {
  constructor() {
    super();
    this.world = {};
  }

  setup(ctx, canvas) {
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
    //world.map.render(world);
    if (this.entity2.movement && Math.random() > .999) {
      this.entity2.movement.vx += 10*Math.random()-5;
      this.entity2.movement.vy += 10*Math.random()-5;
    }
    Move.update(world);
    Render.update(world);
    GridMovement.update(world);
    renderUI(world);
  }

  cleanup() {
    
  }
}

module.exports = TestScene;