
// const Entity = require('./entity');
// const createMap = require('./map/map-loader');
import createMap from './map-loader';

export default class Map {
  constructor(data) {
    // super(data);
    this.layers = [];

    this.loadMap('map2');
  }

  loadMap(name) {
    // $.getJSON( `/maps/${name}.json`, (response) => {
    //   console.log(response)
    //   this.layers = createMap(response);
    // });
    const response = require('../../maps/map2.json');
    this.layers = createMap(response);
  }

  render(world) {
    if (this.layers.length)
      this.layers[0].render(world);
  } 
}
