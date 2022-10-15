abstract class System {
	
	private glfh: GLHF;

	constructor(glhf: GLHF) {
		this.glfh = glhf
	}

	getEntities() {
		return this.glfh.getScene().getEntities()
	}

	update(dtime: number) {
		for (let e of this.getEntities())
			this.onUpdate(e, dtime)
		this.onSelfUpdate(dtime)
	}
}