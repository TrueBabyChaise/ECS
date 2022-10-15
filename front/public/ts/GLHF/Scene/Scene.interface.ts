interface Scene {
	getId(): number;
	getEntities(): Array<Entity>;
	updateChanges(): void;
}