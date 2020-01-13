import Component from './component';

export default class Movement extends Component {
  static name() {
    return 'movement'
  }

  static add(data) {
    data = data || {};
    return {
      vx: data.vx || 0,
      vy: data.vy || 0,
      ax: data.ax || 0,
      ay: data.ay || 0,
    };
  }
}