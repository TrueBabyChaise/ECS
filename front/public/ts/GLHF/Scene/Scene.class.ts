class Scene {

	static nextId = 0;

	sceneId: number;
	entities: Array<Entity>;
	futureEntities: Array<Entity>;

	constructor() {
		this.sceneId = Scene.nextId++;
		this.entities =  [];
		this.futureEntities =  [];
	}

	getId() {
		return this.sceneId;
	}

	getEntities() {
		return this.entities;
	}

	addEntity(name: String) {
		let entity = new Entity(this, name)
		this.entities.push(entity)
		return entity
	}
}