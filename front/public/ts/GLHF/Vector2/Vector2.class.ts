class Vector2 {

	static nextId = 0;

	x: number;
	y: number;

	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	getX() {
		return this.x;
	}
	
	getY() {
		return this.y;
	}

}