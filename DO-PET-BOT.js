/* Templates */

var template_dir = Helper.getAbsoluteScriptDirPath() + "/templates/";

var mm_level_1_tpl = Vision.loadImage(template_dir + "mm_level_1_tpl.png");
var mm_level_2_tpl = Vision.loadImage(template_dir + "mm_level_2_tpl.png");
var mm_level_3_tpl = Vision.loadImage(template_dir + "mm_level_3_tpl.png");
var mm_level_4_tpl = Vision.loadImage(template_dir + "mm_level_4_tpl.png");
var mm_level_5_tpl = Vision.loadImage(template_dir + "mm_level_5_tpl.png");
var mm_level_6_tpl = Vision.loadImage(template_dir + "mm_level_6_tpl.png");
var mm_level_7_tpl = Vision.loadImage(template_dir + "mm_level_7_tpl.png");
var mm_level_8_tpl = Vision.loadImage(template_dir + "mm_level_8_tpl.png");
var mm_level_9_tpl = Vision.loadImage(template_dir + "mm_level_9_tpl.png");

var mm_level_tpls = [
	mm_level_1_tpl, mm_level_2_tpl, mm_level_3_tpl,
	mm_level_4_tpl, mm_level_5_tpl, mm_level_6_tpl,
	mm_level_7_tpl, mm_level_8_tpl, mm_level_9_tpl,
];

var no_velocity_ref = Vision.loadImage(template_dir + "no_velocity_ref.png")

/* Geometry (Replace them with botfather types, once they are available) */

var Point = function(x, y) {
	this.x = x;
	this.y = y;
};

Point.prototype.getX = function() {
	return this.x;
}

Point.prototype.getY = function() {
	return this.y;
}

var Rect = function(left, top, width, height) {
	this.left = left;
	this.top = top;
	this.width = width;
	this.height = height;
};

Rect.prototype.getTop = function() {
	return this.top;
}

Rect.prototype.getLeft = function() {
	return this.left;
}

Rect.prototype.getRight = function() {
	return this.left + this.width;
}

Rect.prototype.getBottom = function() {
	return this.top + this.height;
}

Rect.prototype.getWidth = function() {
	return this.width;
}

Rect.prototype.getHeight = function() {
	return this.height;
}

/* Ingame Minimap */

var OUTER_MINIMAP_SIZES = [
	{ height: 228, width: 180 },
	{ height: 247, width: 192 },
	{ height: 270, width: 207 },
	{ height: 300, width: 225 },
	{ height: 337, width: 248 },
	{ height: 387, width: 279 },
	{ height: 457, width: 323 },
	{ height: 562, width: 389 },
	{ height: 737, width: 498 }
];

var INNER_MINIMAP_SIZES = [
	{ width: 187, height: 115 },
	{ width: 206, height: 127 },
	{ width: 229, height: 142 },
	{ width: 259, height: 160 },
	{ width: 296, height: 183 },
	{ width: 346, height: 214 },
	{ width: 416, height: 258 },
	{ width: 521, height: 324 },
	{ width: 696, height: 433 }
];

var OUTER_TO_INNER_OFFSET = {
	x: 28,
	y: 49
};

var VELOCITY_MARGIN = { x: 120, y: 26 };
var VELOCITY_SIZE = { width: 62, height: 21 };

var Minimap = function() {
	this.cached_level = -1;
	this.cached_position = new Point(-1, -1);
};

Minimap.prototype.calculateTelemetry = function(screenshot) {
	for (var i = mm_level_tpls.length - 1; i >= 0; i--) {
		var match = Vision.findMatch(screenshot, mm_level_tpls[i], 0.98);
		if (match.found()) {
			this.cached_level = i + 1;
			this.cached_position = new Point(match.getLeft(), match.getTop());
			return;
		}
	}
};

Minimap.prototype.getLevel = function(ignore_cache) {
	ignore_cache = (typeof ignore_cache !== 'undefined');
	if (ignore_cache || this.cached_level == -1) {
		var screenshot = Browser.takeScreenshot();
		this.calculateTelemetry(screenshot);
	}
	return this.cached_level;
}

Minimap.prototype.getPosition = function(ignore_cache) {
	ignore_cache = (typeof ignore_cache !== 'undefined');
	if (ignore_cache || this.cached_position.x == -1) {
		var screenshot = Browser.takeScreenshot();
		this.calculateTelemetry(screenshot);
	}
	return this.cached_position;
}

Minimap.prototype.getOuterRect = function(ignore_cache) {
	ignore_cache = (typeof ignore_cache !== 'undefined');
	var level = this.getLevel(ignore_cache);
	var position = this.getPosition(ignore_cache);
	var outer_size = OUTER_MINIMAP_SIZES[level - 1];
	return new Rect(
		position.getX(),
		position.getY(),
		outer_size.width,
		outer_size.height
	)
}

Minimap.prototype.getInnerRect = function(ignore_cache) {
	ignore_cache = (typeof ignore_cache !== 'undefined');
	var level = this.getLevel(ignore_cache);
	var position = this.getPosition(ignore_cache);
	var inner_size = INNER_MINIMAP_SIZES[level - 1];
	return new Rect(
		position.getX() + OUTER_TO_INNER_OFFSET.x,
		position.getY() + OUTER_TO_INNER_OFFSET.y,
		inner_size.width,
		inner_size.height
	);
}

Minimap.prototype.getVelocityImage = function() {
	var screenshot = Browser.takeScreenshot();
	var position = this.getPosition();

	var velocity_image = Vision.cropImage(
		screenshot,
		position.getX() + VELOCITY_MARGIN.x,
		position.getY() + VELOCITY_MARGIN.y,
		VELOCITY_SIZE.width,
		VELOCITY_SIZE.height
	);
	return velocity_image;
}

/* Navigation */

var Navigator = function(minimap) {
	this.minimap = minimap;
	this.omm = minimap.getOuterRect();
	this.imm = minimap.getInnerRect();
}

Navigator.prototype.getRandomCoords = function() {
	return new Point(
		Math.random() * (this.imm.getWidth() - 0) + 0,
		Math.random() * (this.imm.getHeight() - 0) + 0
	);
}

Navigator.prototype.getNextDestination = function() {
	var destination = this.getRandomCoords();
	var dest_real_x = this.imm.getLeft() + destination.getX();
	var dest_real_y = this.imm.getTop() + destination.getY();
	return new Point(dest_real_x, dest_real_y);
}

Navigator.prototype.shipIsMoving = function() {
	var velocity_image = this.minimap.getVelocityImage();

	// Isolating white on the image will render it black with white numbers on.
	// We compare it to an black image. If they are the same, we're not moving.
	var min_hsv = new HSVColor(0, 0, 94); // 240);
	var max_hsv = new HSVColor(255, 15, 100); // 255);
	var blacked_bg = Vision.isolateColor(velocity_image, min_hsv, max_hsv);

	// TODO: Propose to the botfather devs a method that works with a similarity threshold.
	return !Vision.sameImages(blacked_bg, no_velocity_ref);
}

/* Main Algorithm */

function main() {

	// Ensure the user is logged in and in the map
	var current_url = Browser.getUrl();
	if (current_url.indexOf("internalMapRevolution") === -1) {
		Helper.log("### ! ! ! Please login manually and start the game. ! ! ! ###");
		Helper.log("The auto login feature is still missing in this bot script, sorry");
		return;
	}

	// Find and measure the minimap
	var minimap = new Minimap();

	Helper.log("### ! ! ! DO NOT RESIZE THE BROWSER WHILE RUNNING THIS SCRIPT ! ! ! ###")

	if (minimap.getLevel() === -1) {
		Helper.log("The bot script was unable to find your ingame minimap.")
		return;
	}

	var outer_minimap = minimap.getOuterRect();
	var inner_minimap = minimap.getInnerRect();
	
	Helper.log("Minimap level: " + minimap.getLevel());
	Helper.log("Minimap position: " + outer_minimap.getLeft() + " " + outer_minimap.getTop());
	Helper.log("Minimap size: " + outer_minimap.getWidth() + " " + outer_minimap.getHeight());

	// Configure the navigator
	var nav = new Navigator(minimap);
	Helper.log("Ready to bot. Don't forget to activate your PET with looter gear!");

	// The main loop playing the game until the user stops the script
	while (!Helper.stopRequested()) {

		// Navigate
		var dest = nav.getNextDestination();
		Helper.log("Flying to: " + dest.getX() + " " + dest.getY());
		Browser.leftClick(dest.getX(), dest.getY());

		do{
			// Wait for the ship to reach it's destination.
			// While doing so the pet can collect bonus boxes.
			Helper.sleep(2);
		}
		while (nav.shipIsMoving() && !Helper.stopRequested());
	}
}

main();