 
export default class Mouse {
	constructor(div) {
		this.x = 0;
		this.y = 0;
		this.mousedown = false;
		
		this.div = div;

		this.onClick = [];
		this.onMove = [];
		this.onZoom = [];
		this.onClickDown = [];
		this.onClickUp = [];
	}

	init() {
		this.div.addEventListener('mousedown', (e)=>{this.mousedownCanvas(e)}, false);
		this.div.addEventListener('mouseup', (e)=>{this.mouseupCanvas(e)}, false);
		this.div.addEventListener('mousemove', (e)=>{this.mousemoveCanvas(e)}, false);
		this.div.addEventListener('mousewheel', (e)=>{this.mousewheelCanvas(e)}, false);
	}

	addOnClickDown(event){
		return this.onClickDown.push(event);
	}

	addOnClickUp(event){
		return this.onClickUp.push(event);
	}

	addOnClick(event){
		return this.onClick.push(event);
	}

	addOnMove(event){
		return this.onMove.push(event);
	}

	addOnZoom(event){
		return this.onZoom.push(event);
	}

	removeOnClickDown(event) {
		const index = this.onClickDown.indexOf(event);
		if (index < -1) return;
		this.onClickDown.splice(index, 1); 
	}

	removeOnClickUp(event) {
		const index = this.onClickUp.indexOf(event);
		if (index < -1) return;
		this.onClickUp.splice(index, 1); 
	}

	removeOnClick(event) {
		const index = this.onClick.indexOf(event);
		if (index < -1) return;
		this.onClick.splice(index, 1); 
	}

	removeOnMove(event) {
		const index = this.onMove.indexOf(event);
		if (index < -1) return;
		this.onMove.splice(index, 1); 
	}

	removeOnZoom(event) {
		const index = this.onZoom.indexOf(event);
		if (index < -1) return;
		this.onZoom.splice(index, 1); 
	}

	mousedownCanvas(e) {   
		for(let i in this.onClickDown)
			this.onClickDown[i](e);
	}

	mouseupCanvas(e) {
		for(let i in this.onClickUp)
			this.onClickUp[i](e);
	}

	mousemoveCanvas(e) {
		this.x = e.pageX;
		this.y = e.pageY;
		for(let i in this.onMove)
			this.onMove[i](e);
	}

	mousewheelCanvas(e) {
		for(let i in this.onZoom)
			this.onZoom[i](e);
	}
}
