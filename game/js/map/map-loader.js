import Layer from './layer';
import Chunk from './chunk';

export default function createMap(data) {
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
