import Component from './component';

export default class Shape extends Component {
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