import React from 'react';
import ComponentViewer from './component-viewer'

export default class SelectedEntity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selected: null};

    this.selectComponent = this.selectComponent.bind(this);
    this.removeComponent = this.removeComponent.bind(this);
  }

  selectComponent(componentName) {
    console.log(componentName)
    this.setState({selected: componentName});
  }

  removeComponent(entity, componentName, e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    
   // const entity = focus.element;
    entity.removeComponent(componentName);
  }

  renderComponent(entity, componentName, component) {
    const { focus } = this.props;
    const { selected } = this.state;
    let name = componentName;
    let add = null;
    if (name === selected) {
      name = "* "+name;
      add = (
        <div>
          <ComponentViewer key={componentName+"-viewer"} componentName={componentName} component={component}/>
        </div>
      );
    }
    return (
      <li key={componentName} onClick={(e) => this.selectComponent(componentName)}>
        {name} <button onClick={(e) => this.removeComponent(entity, componentName, e)}>X</button>
        {add}
      </li>
    );
  }

  render() {
    const { focus } = this.props;
    if (!focus || !focus.element) return (<div>No focus</div>);
    const entity = focus.element;
    let componentList = entity.components.map((c) => {
      return this.renderComponent(entity, c, focus.element[c])
    });
    return (
      <div>
        <div>Focus Info</div>
        <div>ID: {entity.id}</div>
        <ul>{componentList}</ul>
      </div>
    );
  }
}

