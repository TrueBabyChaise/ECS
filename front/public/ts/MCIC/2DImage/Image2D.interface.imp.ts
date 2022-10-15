interface Image2D {
	draw() : void;

	setImage(scene: Scene) : void;
	getImage() : String;

	setSize(vector2: Vector2) : void;
	getSize() : Vector2;

	setPosition(vector2: Vector2) : void;
	getPosition() : Vector2;
}