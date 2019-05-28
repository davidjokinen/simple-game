const Component = require('../component');

class Shape extends Component {
  static name() {
    return 'shape'
  }

  static add(data) {
    data = data || {};
    return {
      points: data.points || []
    };
  }
}

module.exports = Shape;