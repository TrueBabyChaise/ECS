class Vector3 {

	static nextId = 0;

	x: number;
	y: number;
	z: number;

	constructor(x = 0, y = 0, z = 0) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	getX() {
		return this.x;
	}
	
	getY() {
		return this.y;
	}

	getZ() {
		return this.z;
	}
}