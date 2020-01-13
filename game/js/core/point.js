
export default class Point {

	constructor(x,y) {
		this.x = y === undefined ? x.x : x;
		this.y = y === undefined ? x.y : y;
	}

	clone(){
		return new Point(this.x,this.y);
	}

	add(point){
		this.x += point.x;
		this.y += point.y;
		return this;
	}

	sub(point){
		this.x -= point.x;
		this.y -= point.y;
		return this;
	}

	mul(point){
		this.x *= point.x;
		this.y *= point.y;
		return this; 
	}

	getNormal(){
		let l = this.getLength();
		return new Point(this.x/l,this.y/l);
	}

	getLength(){
		return Math.sqrt(this.x*this.x+this.y*this.y);
	} 

	isEqual(point){
		return this.x == point.x && this.y == point.y;
	}

	isEqualEnough(point, off){
		if (this.x < point.x-off) 
			return false;
		if (this.x > point.x+off) 
			return false;

		if (this.y < point.y-off) 
			return false;
		if (this.y > point.y+off) 
			return false;
		return true;
	}

	out() {
		return [this.x, this.y];
	}
}
