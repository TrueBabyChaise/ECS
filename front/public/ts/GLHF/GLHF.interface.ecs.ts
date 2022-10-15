interface GLHF {
	getScene() : Scene;
	changeScene(scene: Scene) : void;
	removeSystem(system: System) : GLHF;
	addSystem(system: System) : GLHF;
	getSystem(system: System) : System;
	getSystems() : Array<System>;
	run(callback: Function, state: LevelState) : void;
	shouldEnd : boolean;
}