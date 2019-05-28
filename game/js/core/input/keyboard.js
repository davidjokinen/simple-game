
class Keyboard {
	constructor() {
		this.key = [];
		for(let i =0;i<255;i++)
			this.key[i] = false;
	}

	init() {
		window.addEventListener('keydown', (e)=>{this.keydown(e)}, false);
		window.addEventListener('keyup', (e)=>{this.keyup(e)}, false);
	}

	keydown(e){
		var code = e.keyCode;
		if(code < 0)return;
		if(code > 255)return;

		this.key[code] = true;
	}

	keyup(e){
		var code = e.keyCode;
		if(code < 0)return;
		if(code > 255)return;

		this.key[code] = false;
	}

}

module.exports = Keyboard;
