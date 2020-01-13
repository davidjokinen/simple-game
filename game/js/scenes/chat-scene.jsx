import React from 'react';
import ReactDOM from 'react-dom';
import Scene from './scene';

import { ChatBox } from '@spacegame/ui';

export default class ChatScene extends Scene {
  constructor() {
    super();
    this.world = {};
  }

  setup(ctx, canvas) {
    this.world = {
      ctx: ctx,
      canvas: canvas,
    }; 

    let messages = [
      {key: 1, type:"text", message:"Testing fun times"},
      {key: 2, type:"user", message:`SPACE MAN says, "So much fun"`},
      {key: 3, message:"Ree"},
    ];
    const onSend = (value) => {
      messages.push({key:messages.length+1, message:value});
      ReactDOM.render(
        <div>
          <ChatBox messages={messages} onSend={onSend} />
        </div>
        ,
        document.getElementById('right-side')
      );
    };
    document.getElementById('content').innerHTML = `<div id="right-side">`;
    ReactDOM.render(
      <div>
        <ChatBox messages={messages} onSend={onSend} />
      </div>
      ,
      document.getElementById('right-side')
    );
  }

  loop() {
    const world = this.world;
    world.ctx.clearRect(0, 0, world.canvas.width, world.canvas.height);
    world.ctx.fillStyle = "#DDFDFF";
    world.ctx.fillRect(0, 0, world.canvas.width, world.canvas.height);
  }

  cleanup() {
    
  }
}
