/* Templates */

var template_dir = Helper.getAbsoluteScriptDirPath() + "/templates";
var minimap_dir = template_dir + "/minimap";
var mm_level_dir = minimap_dir + "/levels";
var mm_mapnames_dir = minimap_dir + "/mapnames";

var no_velocity_ref = Vision.loadImage(minimap_dir + "/no_velocity_ref.png");

var mm_level_1_tpl = Vision.loadImage(mm_level_dir + "/1_tpl.png");
var mm_level_2_tpl = Vision.loadImage(mm_level_dir + "/2_tpl.png");
var mm_level_3_tpl = Vision.loadImage(mm_level_dir + "/3_tpl.png");
var mm_level_4_tpl = Vision.loadImage(mm_level_dir + "/4_tpl.png");
var mm_level_5_tpl = Vision.loadImage(mm_level_dir + "/5_tpl.png");
var mm_level_6_tpl = Vision.loadImage(mm_level_dir + "/6_tpl.png");
var mm_level_7_tpl = Vision.loadImage(mm_level_dir + "/7_tpl.png");
var mm_level_8_tpl = Vision.loadImage(mm_level_dir + "/8_tpl.png");
var mm_level_9_tpl = Vision.loadImage(mm_level_dir + "/9_tpl.png");

var mm_level_tpls = [
	mm_level_1_tpl, mm_level_2_tpl, mm_level_3_tpl,
	mm_level_4_tpl, mm_level_5_tpl, mm_level_6_tpl,
	mm_level_7_tpl, mm_level_8_tpl, mm_level_9_tpl,
];

var map_11 = Vision.loadImage(mm_mapnames_dir + "/11.png");
var map_12 = Vision.loadImage(mm_mapnames_dir + "/12.png");
var map_13 = Vision.loadImage(mm_mapnames_dir + "/13.png");
var map_14 = Vision.loadImage(mm_mapnames_dir + "/14.png");
var map_15 = Vision.loadImage(mm_mapnames_dir + "/15.png");
var map_16 = Vision.loadImage(mm_mapnames_dir + "/16.png");
var map_17 = Vision.loadImage(mm_mapnames_dir + "/17.png");
var map_18 = Vision.loadImage(mm_mapnames_dir + "/18.png");
var map_21 = Vision.loadImage(mm_mapnames_dir + "/21.png");
var map_22 = Vision.loadImage(mm_mapnames_dir + "/22.png");
var map_23 = Vision.loadImage(mm_mapnames_dir + "/23.png");
var map_24 = Vision.loadImage(mm_mapnames_dir + "/24.png");
var map_25 = Vision.loadImage(mm_mapnames_dir + "/25.png");
var map_26 = Vision.loadImage(mm_mapnames_dir + "/26.png");
var map_27 = Vision.loadImage(mm_mapnames_dir + "/27.png");
var map_28 = Vision.loadImage(mm_mapnames_dir + "/28.png");
var map_31 = Vision.loadImage(mm_mapnames_dir + "/31.png");
var map_32 = Vision.loadImage(mm_mapnames_dir + "/32.png");
var map_33 = Vision.loadImage(mm_mapnames_dir + "/33.png");
var map_34 = Vision.loadImage(mm_mapnames_dir + "/34.png");
var map_35 = Vision.loadImage(mm_mapnames_dir + "/35.png");
var map_36 = Vision.loadImage(mm_mapnames_dir + "/36.png");
var map_37 = Vision.loadImage(mm_mapnames_dir + "/37.png");
var map_38 = Vision.loadImage(mm_mapnames_dir + "/38.png");
var map_41 = Vision.loadImage(mm_mapnames_dir + "/41.png");
var map_42 = Vision.loadImage(mm_mapnames_dir + "/42.png");
var map_43 = Vision.loadImage(mm_mapnames_dir + "/43.png");
var map_44 = Vision.loadImage(mm_mapnames_dir + "/44.png");
var map_45 = Vision.loadImage(mm_mapnames_dir + "/45.png");
var map_51 = Vision.loadImage(mm_mapnames_dir + "/51.png");
var map_52 = Vision.loadImage(mm_mapnames_dir + "/52.png");
var map_53 = Vision.loadImage(mm_mapnames_dir + "/53.png");

var mapname_tpls = [
	map_11, map_12, map_13, map_14, map_15, map_16, map_17, map_18,
	map_21, map_22, map_23, map_24, map_25, map_26, map_27, map_28,
	map_31, map_32, map_33, map_34, map_35, map_36, map_37, map_38,
	map_41, map_42, map_43, map_44, map_45, map_51, map_52, map_53,
];

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
	{ width: 228, height: 180 },
	{ width: 247, height: 192 },
	{ width: 270, height: 207 },
	{ width: 300, height: 225 },
	{ width: 337, height: 248 },
	{ width: 387, height: 279 },
	{ width: 457, height: 323 },
	{ width: 562, height: 389 },
	{ width: 737, height: 498 }
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

var MAPNAME_WIDTH = 51;
var MAPNAME_HEIGHT = 26;
var MAPNAME_MARGIN_TOP = 23;

var MAPNAME_MAPPING = [
	'1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8',
	'2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8',
	'3-1', '3-2', '3-3', '3-4', '3-5', '3-6', '3-7', '3-8',
	'4-1', '4-2', '4-3', '4-4', '4-5', '5-1', '5-2', '5-3',
];

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

Minimap.prototype.getMinimapImage = function() {
	var screenshot = Browser.takeScreenshot();
	var position = this.getPosition();
	var outer_mm = this.getOuterRect();

	return Vision.cropImage(
		screenshot,
		position.getX(),
		position.getY(),
		outer_mm.getWidth(),
		outer_mm.getHeight()
	);
}

Minimap.prototype.getVelocityImage = function() {
	return Vision.cropImage(
		this.getMinimapImage(),
		VELOCITY_MARGIN.x,
		VELOCITY_MARGIN.y,
		VELOCITY_SIZE.width,
		VELOCITY_SIZE.height
	);
}

Minimap.prototype.getMapnameImage = function() {
	return Vision.cropImage(
		this.getMinimapImage(),
		0,
		MAPNAME_MARGIN_TOP,
		MAPNAME_WIDTH,
		MAPNAME_HEIGHT
	);
}

Minimap.prototype.getMapname = function() {
	var mapname_image = this.getMapnameImage();
	var min_hsv = new HSVColor(0, 0, 94);
	var max_hsv = new HSVColor(255, 15, 100);
	var monochrome_mn = Vision.isolateColor(mapname_image, min_hsv, max_hsv);

	for (var i = 0; i < mapname_tpls.length; i++) {
		var mapname_tpl = mapname_tpls[i];
		var match = Vision.findMatch(monochrome_mn, mapname_tpl, 0.99);
		
		if (match.found()) {
			return MAPNAME_MAPPING[i];
		}
	}
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