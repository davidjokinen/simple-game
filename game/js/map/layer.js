

class Layer {
  constructor(data) {
    this.chunks = [];
    this.height = data.height;
    this.name = data.name;
    this.opacity = data.opacity;
    this.startx = data.startx;
    this.starty = data.starty;
    this.type = data.type;
    this.visible = data.visible;
    this.width = data.width;
    this.x = data.x;
    this.y = data.y;
  }

  addChunk(chunk) {
    this.chunks.push(chunk);
  }

  render(world) {
    this.chunks.map((chunk) => {
      chunk.render(world);
    });
  }
}

module.exports = Layer;
