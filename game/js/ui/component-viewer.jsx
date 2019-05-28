import React from 'react';

export default class ComponentViewer extends React.Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(key, component, e) {
    component[key] = e.target.value;
  }

  getValue(componentName, key, component) {
    return (
      <input value={component[key]} type="number" onChange={(e) => {this.changeValue(key, component, e)}}/>
    );
  }

  render() {
    const { componentName, component } = this.props;
    if (!component) return (<div>No component</div>);
    let componentInfo = Object.keys(component).map((key) => {
      const keyValue = this.getValue(componentName, key, component);
      return (
        <div key={`${componentName}-${key}`}>{key}: {keyValue}</div>
      );
    });
    return (
      <div>
        <div>{componentName} Info</div>
        {componentInfo}
      </div>
    );
  }
}
