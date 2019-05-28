const Layer = require('./layer');
const Chunk = require('./chunk');

function createMap(data) {
  let outputLayers = [];
  data.layers.map((layer) => {
    let newLayer = new Layer(layer);
    if (layer.chunks) {
      layer.chunks.map((chunk) => {
        newLayer.addChunk(new Chunk(chunk));
      });
    }
    outputLayers.push(newLayer);
  });
  return outputLayers;
}

module.exports = createMap;