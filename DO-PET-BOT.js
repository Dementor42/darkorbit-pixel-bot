/* Templates and Data */

var template_dir = "templates/";
var minimap_dir = template_dir + "minimap/";
var mm_level_dir = minimap_dir + "levels/";
var mm_mapnames_dir = minimap_dir + "mapnames/";

var no_velocity_ref = new Image(new Size(62, 21), new Color("black"));

var mm_level_1_tpl = new Image(mm_level_dir + "1_tpl.png");
var mm_level_2_tpl = new Image(mm_level_dir + "2_tpl.png");
var mm_level_3_tpl = new Image(mm_level_dir + "3_tpl.png");
var mm_level_4_tpl = new Image(mm_level_dir + "4_tpl.png");
var mm_level_5_tpl = new Image(mm_level_dir + "5_tpl.png");
var mm_level_6_tpl = new Image(mm_level_dir + "6_tpl.png");
var mm_level_7_tpl = new Image(mm_level_dir + "7_tpl.png");
var mm_level_8_tpl = new Image(mm_level_dir + "8_tpl.png");
var mm_level_9_tpl = new Image(mm_level_dir + "9_tpl.png");

var mm_level_tpls = [
	mm_level_1_tpl, mm_level_2_tpl, mm_level_3_tpl,
	mm_level_4_tpl, mm_level_5_tpl, mm_level_6_tpl,
	mm_level_7_tpl, mm_level_8_tpl, mm_level_9_tpl,
];

var map_11 = new Image(mm_mapnames_dir + "11.png");
var map_12 = new Image(mm_mapnames_dir + "12.png");
var map_13 = new Image(mm_mapnames_dir + "13.png");
var map_14 = new Image(mm_mapnames_dir + "14.png");
var map_15 = new Image(mm_mapnames_dir + "15.png");
var map_16 = new Image(mm_mapnames_dir + "16.png");
var map_17 = new Image(mm_mapnames_dir + "17.png");
var map_18 = new Image(mm_mapnames_dir + "18.png");
var map_21 = new Image(mm_mapnames_dir + "21.png");
var map_22 = new Image(mm_mapnames_dir + "22.png");
var map_23 = new Image(mm_mapnames_dir + "23.png");
var map_24 = new Image(mm_mapnames_dir + "24.png");
var map_25 = new Image(mm_mapnames_dir + "25.png");
var map_26 = new Image(mm_mapnames_dir + "26.png");
var map_27 = new Image(mm_mapnames_dir + "27.png");
var map_28 = new Image(mm_mapnames_dir + "28.png");
var map_31 = new Image(mm_mapnames_dir + "31.png");
var map_32 = new Image(mm_mapnames_dir + "32.png");
var map_33 = new Image(mm_mapnames_dir + "33.png");
var map_34 = new Image(mm_mapnames_dir + "34.png");
var map_35 = new Image(mm_mapnames_dir + "35.png");
var map_36 = new Image(mm_mapnames_dir + "36.png");
var map_37 = new Image(mm_mapnames_dir + "37.png");
var map_38 = new Image(mm_mapnames_dir + "38.png");
var map_41 = new Image(mm_mapnames_dir + "41.png");
var map_42 = new Image(mm_mapnames_dir + "42.png");
var map_43 = new Image(mm_mapnames_dir + "43.png");
var map_44 = new Image(mm_mapnames_dir + "44.png");
var map_45 = new Image(mm_mapnames_dir + "45.png");
var map_51 = new Image(mm_mapnames_dir + "51.png");
var map_52 = new Image(mm_mapnames_dir + "52.png");
var map_53 = new Image(mm_mapnames_dir + "53.png");

var mapname_tpls = [
	map_11, map_12, map_13, map_14, map_15, map_16, map_17, map_18,
	map_21, map_22, map_23, map_24, map_25, map_26, map_27, map_28,
	map_31, map_32, map_33, map_34, map_35, map_36, map_37, map_38,
	map_41, map_42, map_43, map_44, map_45, map_51, map_52, map_53,
];

var MAPNAME_MAPPING = [ // Which mapname template in mapname_tpls corresponds to which mapname.
	'1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8',
	'2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8',
	'3-1', '3-2', '3-3', '3-4', '3-5', '3-6', '3-7', '3-8',
	'4-1', '4-2', '4-3', '4-4', '4-5', '5-1', '5-2', '5-3',
];

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

var OUTER_MM_TO_INNER_MM_OFFSET = {
	x: 28,
	y: 49
};

var VELOCITY_MARGIN = { x: 120, y: 26 };
var VELOCITY_SIZE = new Size(62, 21);

var MAPNAME_WIDTH = 51;
var MAPNAME_HEIGHT = 26;
var MAPNAME_MARGIN_TOP = 23;

var SUPPORTED_MAPS = [
	"1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7", "1-8",
	"2-1", "2-2", "2-3", "2-4", "2-5", "2-6", "2-7", "2-8",
	"3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8",
	"4-1", "4-2", "4-3", "4-4", "4-5",
];

/* Ingame Minimap */

var Minimap = function() {
	this.cached_level = -1;
	this.cached_position = new Point(-1, -1);
	this.cached_mapname = undefined;
};

Minimap.prototype.calculateTelemetry = function(screenshot) {
	for (var i = mm_level_tpls.length - 1; i >= 0; i--) {
		var match = Vision.findMatch(screenshot, mm_level_tpls[i], 0.98);
		if (match.isValid()) {
			this.cached_level = i + 1;
			this.cached_position = match.getRect().getTopLeft();
			return;
		}
	}
};

Minimap.prototype.getLevel = function(ignore_cache) {
	if (ignore_cache === true || this.cached_level == -1) {
		var screenshot = Browser.takeScreenshot();
		this.calculateTelemetry(screenshot);
	}
	return this.cached_level;
}

Minimap.prototype.getPosition = function(ignore_cache) {
	if (ignore_cache === true || this.cached_position.x == -1) {
		var screenshot = Browser.takeScreenshot();
		this.calculateTelemetry(screenshot);
	}
	return this.cached_position;
}

Minimap.prototype.getOuterRect = function(ignore_cache) {
	var level = this.getLevel(ignore_cache === true);
	var position = this.getPosition(ignore_cache === true);
	var outer_size = OUTER_MINIMAP_SIZES[level - 1];
	return new Rect(
		position.getX(),
		position.getY(),
		outer_size.width,
		outer_size.height
	)
}

Minimap.prototype.getInnerRect = function(ignore_cache) {
	var level = this.getLevel(ignore_cache === true);
	var position = this.getPosition(ignore_cache === true);
	var inner_size = INNER_MINIMAP_SIZES[level - 1];
	return new Rect(
		position.getX() + OUTER_MM_TO_INNER_MM_OFFSET.x,
		position.getY() + OUTER_MM_TO_INNER_MM_OFFSET.y,
		inner_size.width,
		inner_size.height
	);
}

Minimap.prototype.getMinimapImage = function() {
	var screenshot = Browser.takeScreenshot();
	var position = this.getPosition();
	var outer_mm = this.getOuterRect();

	return screenshot.copy(new Rect(
		position.getX(),
		position.getY(),
		outer_mm.getWidth(),
		outer_mm.getHeight()
	));
}

Minimap.prototype.getVelocityImage = function() {
	return this.getMinimapImage().copy(new Rect(
		VELOCITY_MARGIN.x,
		VELOCITY_MARGIN.y,
		VELOCITY_SIZE.getWidth(),
		VELOCITY_SIZE.getHeight()
	));
}

Minimap.prototype.getMapnameImage = function() {
	return this.getMinimapImage().copy(new Rect(
		0,
		MAPNAME_MARGIN_TOP,
		MAPNAME_WIDTH,
		MAPNAME_HEIGHT
	));
}

Minimap.prototype.getMapname = function(use_cache) {
	if (use_cache === true) {
		return this.cached_mapname;
	}

	var mapname_image = this.getMapnameImage();
	var min_hsv = new Color(0, 0, 100, "hsv");
	var max_hsv = new Color(200, 15, 255, "hsv");
	var monochrome_mn = mapname_image.isolateColorRange(min_hsv, max_hsv);

	for (var i = 0; i < mapname_tpls.length; i++) {
		var mapname_tpl = mapname_tpls[i];
		var match = Vision.findMatch(monochrome_mn, mapname_tpl, 0.95);
		
		//Helper.log(match);

		if (match.isValid()) {
			this.cached_mapname = MAPNAME_MAPPING[i];
			return this.cached_mapname;
		}
	}

	return "";
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
	var min_hsv = new Color(0, 0, 0, "hsv");
	var max_hsv = new Color(10, 255, 255, "hsv");

	var blacked_bg = velocity_image.isolateColorRange(min_hsv, max_hsv);

	var pixel_equality = blacked_bg.pixelEqualityTo(no_velocity_ref);
	return pixel_equality < 0.97;
}

/* Main Algorithm */

function main() {

	// Ensure the user is logged in and in the map
	var current_url = Browser.getUrl();
	if (current_url.getQuery().indexOf("internalMapRevolution") === -1) {
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
	
	Helper.log("Minimap level:", minimap.getLevel());
	Helper.log("Minimap position:", outer_minimap.getLeft(), outer_minimap.getTop());
	Helper.log("Minimap size:", outer_minimap.getWidth(), outer_minimap.getHeight());

	// Configure the navigator
	var nav = new Navigator(minimap);
	Helper.log("Ready to bot. Don't forget to activate your PET with looter gear!");

	// The main loop playing the game until the user stops the script
	while (true) {

		// Navigate
		var dest = nav.getNextDestination();
		Helper.log("Flying to: ", dest.getX(), dest.getY());
		Browser.leftClick(dest);

		do{
			// Wait for the ship to reach it's destination.
			// While doing so the pet can collect bonus boxes.
			Helper.sleep(2);
		}
		while (nav.shipIsMoving());
	}
}

main();