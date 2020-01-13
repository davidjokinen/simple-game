import React from 'react';
import ReactDOM from 'react-dom';
import Scene from './scene';

import { Entity, Mouse } from "@spacegame/core";
import { Map, renderBackground } from "@spacegame/map";
import { Render, Move, GridMovement, MoveEnitity } from "@spacegame/services";

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class BackgroundScene extends Scene {
  constructor() {
    super();
    this.world = {};
  }

  setup(ctx, canvas) {
    this.world = {
      ctx: ctx,
      canvas: canvas,
    }; 

    document.getElementById('content').innerHTML = `<div id="menu-container"></div>`;
    const style = {
      padding: '20px',
      margin: '20px',
    };

    const loadNewLevel = () => {
      this.loadLevel('test');
    };

    ReactDOM.render(
      <Paper style={style} className="MuiPaper-root MuiPaper-elevation1 jss4128 MuiPaper-rounded">
        <Typography variant="h5" component="h3">
          Space Game
        </Typography>
        <Typography component="p">
          One day this might be a thing?
        </Typography>
        <Button variant="contained" color="primary" onClick={loadNewLevel}>
          Load level
        </Button>
        <Button variant="contained" color="primary" onClick={() => {
            this.loadLevel('assest');
          }}>
          Load assest test
        </Button>
        <Button variant="contained" color="primary" onClick={() => {
            this.loadLevel('chat');
          }}>
          Load chat test
        </Button>
        <Button variant="contained" color="primary" onClick={() => {
            this.loadLevel('loadMap');
          }}>
          Load map test
        </Button>
      </Paper>  
      ,
      document.getElementById('menu-container')
    );
  }

  loop() {
    const world = this.world;
    world.ctx.clearRect(0, 0, world.canvas.width, world.canvas.height);
    world.ctx.fillStyle = "#DDDDDD";
    world.ctx.fillRect(0, 0, world.canvas.width, world.canvas.height);
  }

  cleanup() {
    
  }
}
