let preloadState =function() {
	
};

preloadState.prototype.preload = function(){
	game.load.image("sky","assets/sky.png" );
	game.load.image("platform","assets/platform.png");
	game.load.image("star","assets/star.png");
	game.load.spritesheet("murph","assets/character.png",32,48);
	game.load.image("telescope", "assets/TelescopeOverlay.png");
	game.load.image("building", "assets/BuildingTest.png");
	game.load.image("Paper", "assets/Paper.png");
	game.load.image("test", "assests/test.png");
};
preloadState.prototype.create = function(){
	game.state.start("Radio");
};
preloadState.prototype.update = function(){

};