export default class Component {
  static name() {
    throw new Error('overload please'); 
  }

  static add(data) {
    return {};
  }
}