

export default class Level {
  constructor(data) {
    // super(data);

    this.resources = {};
    this.map = null;
    this.entities = [];
    this.systems = [];

    this.loadLevel('map2');
  }

  loadLevel(name) {
    // $.getJSON( `/maps/${name}.json`, (response) => {
    //   console.log(response)
    //   this.layers = createMap(response);
    // });
    const response = require('../../maps/new-map.json');
    // this.layers = createMap(response);


  }

  render() {
    
  }

}
