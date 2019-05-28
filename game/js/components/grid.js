const Component = require('../component');

class Grid extends Component {
  static name() {
    return 'grid'
  }

  static add(data) {
    data = data || {};
    return {
      lock: true,
      setlock: true,
      move: null,
    };
  }
}

module.exports = Grid;