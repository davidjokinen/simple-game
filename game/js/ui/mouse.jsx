import React from 'react';

export default class MouseInfo extends React.Component {
  render() {
    const { mouse } = this.props;
    if (!mouse) return (<div>No mouse</div>);
    return (
      <div>
        <div>Mouse Info</div>
        <div>X: {mouse.x}</div>
        <div>Y: {mouse.y}</div>
      </div>
    );
  }
}

