import React from 'react';
import ReactDOM from 'react-dom';
import * as PIXI from 'pixi.js';
import crc32 from 'crc-32';
import { getChunks, toPNG } from 'png-chunks';

import Scene from './scene';
import _Files from '../resources/file-controller';

function stringToUint8Array(str) {
  return Uint8Array.from(str.split('').map(char => char.charCodeAt(0)))
}

export default class AssetTestScene extends Scene {
  constructor() {
    super();
    this.world = {};
  }

  setup(ctx, canvas) {
    this.world = {
      ctx: ctx,
      canvas: canvas,
    }; 

    _Files.addDMI('./icons/turf/floors.dmi');
    var enc = new TextEncoder(); 
    const world = this.world;
    _Files.load(function (Loader, data) {
      console.log('Loaded! ', data)
      let byteArr = stringToUint8Array(data['./icons/turf/floors.dmi'].data);

      console.log('test2')
      console.log(typeof byteArr)
      console.log(byteArr)
      let chunks = getChunks(byteArr);
      let chunk = chunks.filter(chunk => chunk.chunkType === 'tEXt');
      console.log(chunk);
      let dmiText = new TextDecoder("utf-8").decode(chunk[0].data);
      console.log(dmiText)



      const bunny = PIXI.Sprite.from('./icons/turf/floors.dmi');
      world.bunny = bunny;
      world.stage.addChild(bunny);
    });

    document.getElementById('canvas').remove();

    const renderer = new PIXI.Renderer();
    document.body.appendChild(renderer.view);
    renderer.view.setAttribute('id', 'canvas');
    this.world.renderer = renderer;
    this.world.stage = new PIXI.Container();
  }

  loop() {
    const world = this.world;
    
    world.renderer.render(world.stage);
  }

  cleanup() {
    
  }
}
