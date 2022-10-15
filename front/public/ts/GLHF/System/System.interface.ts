interface System {
	onUpdate(entity: Entity, dtime: Number): void;
	onSelfUpdate(dtime: Number): void;
}