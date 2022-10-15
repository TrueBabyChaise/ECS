class ConsolePrintSystem extends System {

	private text: String;
	
	constructor(glhf: GLHF, text: String) {
		super(glhf)
		this.text = text
	}

	onUpdate(entity: Entity, dtime: Number): void {
		console.log(this.text)
	}

	onSelfUpdate(dtime: Number): void {
		
	}
}