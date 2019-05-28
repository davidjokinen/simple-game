

class Chunk {
  constructor(data) {
    this.data = data.data;
    this.height = data.height;
    this.width = data.width;
    this.x = data.x;
    this.y = data.y;
  }

  render(world) {
    const ctx = world.ctx;
    const camera = world.camera;
    if (!camera) return;

    const screenX = window.innerWidth;
    const screenY = window.innerHeight;

    const cameraScale = camera.camera.scale;

    const cameraX = camera.location.x - screenX/2/cameraScale;
    const cameraY = camera.location.y - screenY/2/cameraScale;
    
    const tileSize = 100;

    const chunkPosX = this.x*tileSize;
    const chunkPosY = this.y*tileSize;

    const colorList = ["#66aaFF", "#66FFFF", "#66aaAA", "#AAaaFF"];
    
    for (let x=0; x<this.width; x++) {
      for (let y=0; y<this.height; y++) {
        const posX = (x*tileSize + chunkPosX - cameraX)*cameraScale;
        const posY = (y*tileSize + chunkPosY - cameraY)*cameraScale;
        const index = this.data[(x+y*this.width%colorList.length)];
        ctx.fillStyle = colorList[index];
        ctx.fillRect(posX, posY, tileSize*cameraScale-1, tileSize*cameraScale-1);
      }
    }
  }
}

module.exports = Chunk;
