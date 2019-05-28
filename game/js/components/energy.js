const Component = require('../component');

class Energy extends Component {
  static name() {
    return 'energy'
  }

  static add(data) {
    data = data || {};
    return {
      energy: data.energy || 10,
      energyMax: data.energyMax || 10,
      energyRecharge: data.energyRecharge || 1,
    };
  }
}

module.exports = Energy;