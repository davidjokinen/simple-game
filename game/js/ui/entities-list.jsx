import React from 'react';

export default class EntitiesList extends React.Component {
  constructor(props) {
    super(props);

    this.focusElement = this.focusElement.bind(this);
    this.removeElement = this.removeElement.bind(this);
  }

  focusElement(id, e) {
    console.log('Focus Elelemtn', id)
    const { entities, focus } = this.props;
    const entity = entities.find(entity => entity.id === id);
    console.log(entity)
    focus.element = entity;
  }

  removeElement(id, e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    const { entities } = this.props;
    const index = entities.findIndex(entity => entity.id === id);
		if (index < -1) return;
		entities.splice(index, 1); 
  }

  renderEntity(entity) {
    const { focus } = this.props;
    let name = `Entity ${entity.id}`;
    if (entity.labels) {
      name = entity.labels.name;
    }
    if (entity == focus.element) {
      name = '* '+name
    }
    return (
      <li key={entity.id} onClick={(e) => this.focusElement(entity.id, e)}>
        {name} <button onClick={(e) => this.removeElement(entity.id, e)}>X</button>
      </li>
    );
  }

  render() {
    const { entities } = this.props;
    if (!entities) return (<div>No Entities</div>);
    let entityList = entities.map((e) => this.renderEntity(e))
    return (
      <div>
        <div>Entities List ({entities.length})</div>
        <ul>{entityList}</ul>
      </div>
    );
  }
}

