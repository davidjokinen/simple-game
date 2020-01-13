import  { 
  Camera,
  Energy,
  FollowPath,
  Grid,
  Location,
  Movement,
  Shape,
} from '@spacegame/components';

let regesteredComponents = {};
const register = (newClass) => {
  regesteredComponents[newClass.name()] = newClass;
}
register(Shape);
register(Location);
register(Movement);
register(Camera);
register(Grid);
register(FollowPath);

const COMPONENTS = regesteredComponents;

var id = 0;

export default class Entity {
  constructor(data) {
    this.id = id++;
    this.components = [];
    this.loadData(data);
  }

  loadData(data) {
    for (let key in data) {
      if (key in COMPONENTS) {
        const component = COMPONENTS[key];
        const componentData = data[key];
        const componentName = component.name();
        this.components.push(componentName);
        this[componentName] = component.add(componentData);
      }
    }
  }

  removeComponent(componentName) {
    if (componentName in COMPONENTS && componentName in this) {
      delete this[componentName];
      const index = this.components.indexOf(componentName);
      if (index < -1) return;
      this.components.splice(index, 1); 
    }
  }
}
