class Entity {

	static nextUid = 0;

	uid: number;
	name: String;
	scene: Scene;
	isDisable: boolean;
	components: Array<Component>

	constructor(scene: Scene, name: String) {
		this.uid = Entity.nextUid++;
		this.name = name;
		this.scene = scene;
		this.isDisable = false
		this.components = []
	}

	hasComponent(component: Component) {
		if (this.components.find(c => {return c instanceof (component as any)}))
			return true
		return false
	}

	addComponent(component: Component) {
		if (this.hasComponent(component))
			return this;
		this.components.push(component);
		return this;
	}

	getComponent(component: Component) {
		return this.components.find(c => {return c instanceof (component as any)})
	}

	removeComponent(component: Component) {
		this.components = this.components.filter(c => {return !(c instanceof (component as any))})
		return this
	}
}