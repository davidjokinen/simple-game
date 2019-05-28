import React from 'react';

export default class CameraInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
    this.handleClick = this.handleClick.bind(this);
    this.detachCamera = this.detachCamera.bind(this);

    this.click = {x:0,y:0,down:false,startTime:0};
    this.setup = null;
  }

  handleClick() {
    const { camera, mouse } = this.props;
    let { active } = this.state;
    this.setState(state => ({
      active: !state.active
    }));
    active = !active;
    console.log('test', active, !this.setup)
    if (!active) {
      if (this.setup) {
        mouse.removeOnClickDown(this.setup.onClickDown);
        mouse.removeOnClickUp(this.setup.onClickUp);
        mouse.removeOnMove(this.setup.onMove);
        mouse.removeOnZoom(this.setup.onZoom);
        this.setup = null;
      }
      return;
    }
    if (!this.setup) {
      
      // setup
      const onClickDown = mouse.addOnClickDown((e) => {
        if(e.button==2){
          document.body.style.cursor="move";
          this.click.x = e.pageX;
          this.click.y = e.pageY;
          this.click.startTime = Date.now();
          this.click.down = true
        }
      });
      const onClickUp = mouse.addOnClickUp((e) => {
        if(e.button==2){
          document.body.style.cursor="auto";
          this.click.down = false
        }
      });
      const onMove = mouse.addOnMove((e) => {
        if(!this.click.down)return;
        //if(e.button==2){
          const scale = camera.camera.scale;
          camera.location.x -= (e.pageX - this.click.x)/scale;
          camera.location.y -= (e.pageY - this.click.y)/scale;
          this.click.x = e.pageX;
          this.click.y = e.pageY;
        //}
      });
      const onZoom = mouse.addOnZoom((e) => {
        const scale = camera.camera.scale;
        if(scale+((e.wheelDelta)/1800.0)>=.14&&scale+((e.wheelDelta)/1800.0)<20) {
          
          var oldScale = scale;
          
          camera.camera.scale += (e.wheelDelta)/1800.0;
          
          var oldX = camera.location.x;
          var oldY = camera.location.y;
          camera.location.x += ~~(mouse.x* (1-scale/oldScale));
          camera.location.x -= ~~(oldX* (1-scale/oldScale));
          camera.location.y += ~~(mouse.y* (1-scale/oldScale));
          camera.location.y -= ~~(oldY* (1-scale/oldScale));
        }
      });
      this.setup = {
        onClickDown: onClickDown,
        onClickUp: onClickUp,
        onMove: onMove,
        onZoom: onZoom, 
      };
    }
  }

  detachCamera() {
    
  }

  render() {
    const { camera } = this.props;
    const { active } = this.state;
    if (!camera) return (<div>No camera</div>);
    return (
      <div>
        <div>Camera Info</div>
        <div>X: {camera.location.x}</div>
        <div>Y: {camera.location.y}</div>
        <div>Scale: {camera.camera.scale}</div>
        Move camera by mouse: <button onClick={this.handleClick}>{active ? 'ON' : 'OFF'}</button>
        <button onClick={this.detachCamera}>Detatch</button>
      </div>
    );
  }
}

