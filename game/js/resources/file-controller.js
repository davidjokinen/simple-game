const { Loader } = require('@pixi/loaders');

console.log('Loader ', Loader)

class FileController {
  constructor() {
    this.pngList = [];
    this.dmiList = [];
  }

  addPNG(imageLoc) {
    this.pngList.push(imageLoc);
  }

  addDMI(imageLoc) {
    this.dmiList.push(imageLoc);
  }

  load(callback) {
    let loader = new Loader();
    for(let i=0;i<this.pngList.length;i++)
      loader = loader.add(this.pngList[i])
    for(let i=0;i<this.dmiList.length;i++)
      loader = loader.add(this.dmiList[i])
    loader.load(callback); 
    return loader;
  }
}

const _Files = new FileController();
module.exports = _Files;