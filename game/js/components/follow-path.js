import Component from './component';

export default class FollowPath extends Component {
  static name() {
    return 'followPath'
  }

  static add(data) {
    data = data || {};
    return {
      current: data.current || 0,
      points: data.points || [],
    };
  }
}