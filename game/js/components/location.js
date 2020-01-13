import Component from './component';

export default class Location extends Component {
  static name() {
    return 'location'
  }

  static add(data) {
    data = data || {};
    return {
      x: data.x || 0,
      y: data.y || 0,
    };
  }
}