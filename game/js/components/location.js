const Component = require('../component');

class Location extends Component {
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

module.exports = Location;