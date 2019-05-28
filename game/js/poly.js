
class UpdateMove {
  constructor (minSize, maxSize) {
    this.minSize = minSize;
    this.maxSize = maxSize;

    this.t = 0;

    this.points = [];
  }

  update(object) {
    this.t++;
    const points = object.points;
    this.points = [];

    const move = 3;
    for (let i=0;i<points.length;i++) { 
      const point = points[i];
      const newPoint = {
        x: point.x + move,
        y: point.y + move,
      }

      this.points.push(newPoint);
    }
    object.points = this.points;
  }

}

class UpdateSize {
  constructor (minSize, maxSize) {
    this.minSize = minSize;
    this.maxSize = maxSize;

    this.t = 0;

    this.points = [];
  }

  update(object) {
    this.t++;
    const points = object.points;
    this.points = [];
    const getCenter = (points) => {
      let minX = null;
      let minY = null;
      let maxX = null;
      let maxY = null;

      for (let i=0;i<points.length;i++) {
        const point = points[i];
        if (!minX || point.x < minX)
          minX = point.x;
        if (!minY || point.y < minY)
          minY = point.y;
        if (!maxX ||point.x > maxX)
          maxX = point.x;
        if (!maxY ||point.y > maxY)
          maxY = point.y;
      }

      const x = minX + ((maxX - minX) / 2);
      const y = minY + ((maxY - minY) / 2);
      return {x: x, y: y};
    }
    const center = getCenter(points);
    const scale = 1.01;
    for (let i=0;i<points.length;i++) { 
      const point = points[i];
      const newPoint = {
        x: (point.x - center.x) * scale + center.x,
        y: (point.y - center.y) * scale + center.y,
      }

      this.points.push(newPoint);
    }
    object.points = this.points;
  }

}

class Poly {
  constructor(points) {
    this.points = points;
    this.fill = "rgba(255,60,10, .4)";
    this.stroke = "rgba(10,60,10, .4)";

    this.updateSize = new UpdateSize();
    this.updateMove = new UpdateMove();
  }

  renderByCanvas(ctx) {
    ctx.beginPath();
    for (let i=0;i<this.points.length;i++) {
      const point = this.points[i];
      if (i === 0)
        ctx.moveTo(point.x,point.y);
      else 
        ctx.lineTo(point.x,point.y);
    }
    ctx.closePath();
    ctx.fillStyle = this.fill;
    ctx.strokeStyle = this.stroke;
    ctx.fill();
    ctx.stroke();
  }

  update() {
    //this.updateSize.update(this);
    //this.updateMove.update(this);
  } 
}

module.exports = Poly;