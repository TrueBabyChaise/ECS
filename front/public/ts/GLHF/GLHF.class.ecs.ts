class GLHF {
	private systems : Array<System>;
	private scene: Scene;
	private timeStep: 32;
	private prevTick: number;

	constructor() {
		this.shouldEnd = false
		this.systems = [];
	}

	getScene() {
		return this.scene
	}

	changeScene(scene: Scene) {
		this.scene = scene
	}

	hasSystem(system: System) {
		if (this.systems.find(c => {return c instanceof (system as any)}))
			return true
		return false
	}

	addSystem(system: System) {
		if (this.hasSystem(system))
			return this;
		this.systems.push(system);
		return this;
		}

	getSystem(system: System) {
		return this.systems.find(c => {return c instanceof (system as any)})
	}

	removeSystem(system: System) {
		this.systems = this.systems.filter(c => {return !(c instanceof (system as any))})
		return this;
	}

	handler(callback: Function, state: LevelState, glhf: GLHF) {
		let newTime = Date.now()
		let dtime = Date.now() - glhf.prevTick
		glhf.prevTick = newTime

		for (let s of glhf.systems) {
			s.update(dtime)
		}
		callback(glhf, state)
		if (!glhf.shouldEnd)
			setTimeout(glhf.handler.bind(null, callback, state, glhf), 32)
	}

	run(callback: Function, state: LevelState) : void {
		this.prevTick = Date.now()
		setTimeout(this.handler.bind(null, callback, state, this), this.timeStep)
	}
}