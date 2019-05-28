const Component = require('../component');

class Camera extends Component {
  static name() {
    return 'camera'
  }

  static add(data) {
    data = data || {};
    return {
      scale: data.scale || 1,
    };
  }
}

module.exports = Camera;