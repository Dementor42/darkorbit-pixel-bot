/* Configuration */

var CONFIG_USE_GLOBAL_NAV = false;
var CONFIG_MAP = "1-2";

/* Templates and Data */

var template_dir = "templates/";
var minimap_dir = template_dir + "minimap/";
var mm_level_dir = minimap_dir + "levels/";
var mm_mapnames_dir = minimap_dir + "mapnames/";

var jump_button_tpl = new Image(template_dir + "jump_button.png");
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

// We use different mapnames to represent the space map as a javascript object.
// Instead of '4-1' we write '__4_1'.

var INTERN_MAPNAME_MAPPING = [ // Which mapname template in mapname_tpls corresponds to which mapname.
	'__1_1', '__1_2', '__1_3', '__1_4', '__1_5', '__1_6', '__1_7', '__1_8',
	'__2_1', '__2_2', '__2_3', '__2_4', '__2_5', '__2_6', '__2_7', '__2_8',
	'__3_1', '__3_2', '__3_3', '__3_4', '__3_5', '__3_6', '__3_7', '__3_8',
	'__4_1', '__4_2', '__4_3', '__4_4', '__4_5', '__5_1', '__5_2', '__5_3',
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

var MAP_GRAPH = {
	__1_1: { __1_2: 1 },
	__1_2: { __1_1: 1, __1_3: 1, __1_4: 1 },
	__1_3: { __1_2: 1, __1_4: 1, __2_3: 1 },
	__1_4: { __1_2: 1, __1_3: 1, __3_4: 1, __4_1: 1 },
	__2_1: { __2_2: 1 },
	__2_2: { __2_1: 1, __2_3: 1, __2_4: 1 },
	__2_3: { __1_3: 1, __2_2: 1, __2_4: 1 },
	__2_4: { __2_2: 1, __2_3: 1, __3_3: 1, __4_2: 1 },
	__3_1: { __3_2: 1 },
	__3_2: { __3_1: 1, __3_3: 1, __3_4: 1 },
	__3_3: { __2_4: 1, __3_2: 1, __3_4: 1 },
	__3_4: { __1_4: 1, __3_2: 1, __3_3: 1, __4_3: 1 },
	__4_1: { __1_4: 1, __4_2: 1, __4_3: 1, __4_4: 1 },
	__4_2: { __2_4: 1, __4_1: 1, __4_3: 1, __4_4: 1 },
	__4_3: { __3_4: 1, __4_1: 1, __4_2: 1, __4_4: 1 },
	__4_4: { __1_5: 1, __2_5: 1, __3_5: 1, __4_1: 1, __4_2: 1, __4_3: 1 },
	__4_5: { __1_5: 1, __2_5: 1, __3_5: 1 },
	__1_5: { __1_6: 1, __1_7: 1, __4_4: 1, __4_5: 1 },
	__1_6: { __1_5: 1, __1_8: 1 },
	__1_7: { __1_5: 1, __1_8: 1 },
	__1_8: { __1_6: 1, __1_7: 1 },
	__2_5: { __2_6: 1, __2_7: 1, __4_4: 1, __4_5: 1 },
	__2_6: { __2_5: 1, __2_8: 1 },
	__2_7: { __2_5: 1, __2_8: 1 },
	__2_8: { __2_6: 1, __2_7: 1 },
	__3_5: { __3_6: 1, __3_7: 1, __4_4: 1, __4_5: 1 },
	__3_6: { __3_5: 1, __3_8: 1 },
	__3_7: { __3_5: 1, __3_8: 1 },
	__3_8: { __3_6: 1, __3_7: 1 }
};

var GATE_TL   = [ [  17,  17 ], [  19,  19 ], [  21,  21 ], [  24,  24 ], [  27,  27 ], [  32,  32 ], [  39,  39 ], [  49,  49 ], [  65,  65 ] ];
var GATE_TR   = [ [ 167,  17 ], [ 184,  19 ], [ 204,  21 ], [ 230,  24 ], [ 263,  27 ], [ 307,  32 ], [ 369,  39 ], [ 461,  49 ], [ 615,  65 ] ];
var GATE_BL   = [ [  17, 103 ], [  19, 114 ], [  21, 126 ], [  24, 142 ], [  27, 163 ], [  32, 190 ], [  39, 229 ], [  49, 286 ], [  65, 382 ] ];
var GATE_BR   = [ [ 167, 103 ], [ 184, 114 ], [ 204, 125 ], [ 230, 142 ], [ 263, 163 ], [ 307, 190 ], [ 369, 229 ], [ 461, 286 ], [ 615, 382 ] ];
var GATE_TRO  = [ [ 149,  12 ], [ 164,  14 ], [ 182,  15 ], [ 205,  17 ], [ 234,  20 ], [ 274,  24 ], [ 329,  29 ], [ 411,  36 ], [ 549,  49 ] ];
var GATE_CT   = [ [  90,  12 ], [  99,  14 ], [ 110,  15 ], [ 124,  17 ], [ 141,  20 ], [ 165,  24 ], [ 199,  29 ], [ 249,  36 ], [ 332,  49 ] ];
var GATE_CR   = [ [ 171,  53 ], [ 189,  59 ], [ 210,  65 ], [ 236,  74 ], [ 270,  84 ], [ 315,  99 ], [ 379, 119 ], [ 474, 149 ], [ 632, 199 ] ];
var GATE_CB   = [ [  90, 108 ], [  99, 119 ], [ 110, 132 ], [ 124, 149 ], [ 141, 170 ], [ 165, 199 ], [ 199, 239 ], [ 249, 299 ], [ 332, 399 ] ];
var GATE_CL   = [ [  12,  53 ], [  14,  59 ], [  15,  65 ], [  17,  74 ], [  20,  84 ], [  24,  99 ], [  29, 119 ], [  36, 149 ], [  49, 199 ] ];
var GATE_CC   = [ [  94,  60 ], [ 104,  66 ], [ 115,  74 ], [ 130,  83 ], [ 149,  95 ], [ 174, 111 ], [ 209, 134 ], [ 261, 167 ], [ 349, 254 ] ];
var GATE_44T  = [ [ 126,   5 ], [ 139,   5 ], [ 154,   6 ], [ 174,   7 ], [ 199,   8 ], [ 232,  10 ], [ 279,  12 ], [ 350,  17 ], [ 445,  22 ] ];
var GATE_44L  = [ [  30,  60 ], [  34,  66 ], [  37,  74 ], [  42,  83 ], [  49,  95 ], [  57, 111 ], [  69, 134 ], [  87, 168 ], [ 115, 224 ] ];
var GATE_44B  = [ [ 126, 113 ], [ 139, 124 ], [ 154, 138 ], [ 174, 156 ], [ 199, 178 ], [ 232, 208 ], [ 279, 250 ], [ 350, 314 ], [ 465, 417 ] ];
var GATE_44TI = [ [  98,  53 ], [ 108,  58 ], [ 120,  65 ], [ 135,  73 ], [ 155,  84 ], [ 181,  98 ], [ 218, 118 ], [ 272, 149 ], [ 364, 198 ] ];
var GATE_44LI = [ [  86,  60 ], [  95,  66 ], [ 105,  74 ], [ 119,  83 ], [ 136,  95 ], [ 159, 111 ], [ 191, 134 ], [ 240, 168 ], [ 319, 224 ] ];
var GATE_44BI = [ [  97,  63 ], [ 107,  69 ], [ 119,  77 ], [ 134,  88 ], [ 153, 101 ], [ 180, 119 ], [ 217, 142 ], [ 271, 179 ], [ 363, 239 ] ];
var GATE_45T  = [ [ 126,   5 ], [ 139,   5 ], [ 154,   6 ], [ 174,   7 ], [ 199,   8 ], [ 232,  10 ], [ 279,  12 ], [ 349,  16 ], [ 465,  22 ] ];
var GATE_45L  = [ [  30,  60 ], [  34,  66 ], [  37,  74 ], [  42,  83 ], [  49,  95 ], [  57, 111 ], [  69, 134 ], [  86, 167 ], [ 115, 224 ] ];
var GATE_45B  = [ [ 126, 115 ], [ 139, 127 ], [ 154, 141 ], [ 174, 159 ], [ 199, 182 ], [ 232, 212 ], [ 279, 254 ], [ 349, 319 ], [ 445, 426 ] ];
var GATE_45TI = [ [ 112,  27 ], [ 124,  30 ], [ 137,  34 ], [ 155,  38 ], [ 177,  44 ], [ 207,  51 ], [ 249,  62 ], [ 311,  77 ], [ 415, 104 ] ];
var GATE_45LI = [ [  54,  59 ], [  60,  65 ], [  66,  72 ], [  75,  82 ], [  86,  94 ], [ 100, 109 ], [ 121, 132 ], [ 151, 165 ], [ 202, 220 ] ];
var GATE_45BI = [ [ 112,  93 ], [ 124, 102 ], [ 137, 114 ], [ 155, 128 ], [ 177, 146 ], [ 207, 171 ], [ 249, 206 ], [ 311, 257 ], [ 415, 344 ] ];

var JGATE_POS = {
	__1_1: { __1_2: GATE_BR },
	__1_2: { __1_1: GATE_TL, __1_3: GATE_TR, __1_4: GATE_BR },
	__1_3: { __1_2: GATE_BL, __1_4: GATE_BR, __2_3: GATE_TR },
	__1_4: { __1_2: GATE_TL, __1_3: GATE_TR, __1_5: GATE_CR, __3_4: GATE_BR },
	__1_5: { __1_4: GATE_CL, __2_5: GATE_TR, __3_5: GATE_BR, __4_1: GATE_CC },
	__2_1: { __2_2: GATE_BL },
	__2_2: { __2_1: GATE_TR, __2_3: GATE_BL, __2_4: GATE_BR },
	__2_3: { __2_2: GATE_TR, __2_4: GATE_BR, __1_3: GATE_BL },
	__2_4: { __2_2: GATE_TL, __2_3: GATE_TR, __2_5: GATE_CB, __3_3: GATE_BL },
	__2_5: { __2_4: GATE_CT, __1_5: GATE_BL, __3_5: GATE_BR, __4_1: GATE_CC },
	__3_1: { __3_2: GATE_TL },
	__3_2: { __3_1: GATE_BR, __3_3: GATE_TR, __3_4: GATE_TL },
	__3_3: { __3_2: GATE_BR, __3_4: GATE_BL, __2_4: GATE_TL },
	__3_4: { __3_2: GATE_BR, __3_3: GATE_TR, __3_5: GATE_CT, __1_4: GATE_TL },
	__3_5: { __3_4: GATE_CR, __1_5: GATE_BL, __2_5: GATE_TL, __4_1: GATE_CC },
	__4_1: { __1_5: GATE_44LI, __2_5: GATE_44TI, __3_5: GATE_44BI, __7_1: GATE_44L, __8_1: GATE_44T, __9_1: GATE_44B },
	__5_1: { __6_1: GATE_45BI, __7_1: GATE_45L, __8_1: GATE_45T, __9_1: GATE_45B },
	__7_1: { __4_1: GATE_CR, __5_1: GATE_BR, __7_2: GATE_TL, __7_3: GATE_BL },
	__7_2: { __7_1: GATE_BR, __7_4: GATE_BL },
	__7_3: { __7_1: GATE_TR, __7_4: GATE_TL },
	__7_4: { __7_2: GATE_TR, __7_3: GATE_BR },
	__8_1: { __4_1: GATE_BL, __5_1: GATE_BR, __8_2: GATE_TL, __8_3: GATE_TR },
	__8_2: { __8_1: GATE_BL, __8_4: GATE_TR },
	__8_3: { __8_1: GATE_BL, __8_4: GATE_TR },
	__8_4: { __8_2: GATE_BL, __8_3: GATE_BR },
	__9_1: { __4_1: GATE_TL, __5_1: GATE_TRO, __9_2: GATE_BL, __9_3: GATE_BR },
	__9_2: { __9_1: GATE_TL, __9_4: GATE_BR },
	__9_3: { __9_1: GATE_BL, __9_4: GATE_BR },
	__9_4: { __9_2: GATE_BL, __9_3: GATE_TL }
};

var SHIP_START_MOVING_TIME_IN_MS = 2000;
var SHIP_TRAVEL_TIMEOUT_IN_MS = 2000;
var JUMP_TIMEOUT_IN_MS = 5000;

/* Convenience Methods */

function debug() {
	var debug_message = "(ignore me)";
	for (var i = 0; i < arguments.length; i++) {
		debug_message += " " + arguments[i];
	}
	Helper.log(debug_message);
}

function convertInternToExternMapname(intern_mapname) {
	if (intern_mapname.indexOf("__") === -1) {
		debug(intern_mapname, "is not an intern mapname");
	}
	return intern_mapname.replace("__", "").replace("_", "-");
}

function convertExternToInternMapname(extern_mapname) {
	if (extern_mapname.indexOf("-") === -1) {
		debug(extern_mapname, "is not an extern mapname");
	}
	return "__" + extern_mapname.replace("-", "_");
}

/* Ingame Minimap */

var Minimap = function() {
	this.cached_level = -1;
	this.cached_position = new Point(-1, -1);
	this.cached_intern_mapname = undefined;
};

Minimap.prototype.calculateTelemetry = function(screenshot) {
	for (var i = mm_level_tpls.length - 1; i >= 0; i--) {
		var match = Vision.findMatch(screenshot, mm_level_tpls[i], 0.98);

		//Helper.log(match);

		if (match.isValid()) {
			this.cached_level = i;
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
	var outer_size = OUTER_MINIMAP_SIZES[level];
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
	var inner_size = INNER_MINIMAP_SIZES[level];
	return new Rect(
		position.getX() + OUTER_MM_TO_INNER_MM_OFFSET.x,
		position.getY() + OUTER_MM_TO_INNER_MM_OFFSET.y,
		inner_size.width,
		inner_size.height
	);
}

Minimap.prototype.leftClick = function(coords) {
	var inner_rect = this.getInnerRect();
	var onscreen_x = inner_rect.getLeft() + coords.getX();
	var onscreen_y = inner_rect.getTop() + coords.getY();
	var realcoords = new Point(onscreen_x, onscreen_y);
	Browser.leftClick(realcoords);
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

Minimap.prototype.getInternMapname = function(use_cache) {
	if (use_cache === true) {
		return this.cached_intern_mapname;
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
			this.cached_intern_mapname = INTERN_MAPNAME_MAPPING[i];
			return this.cached_intern_mapname;
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

	var pixel_equality = blacked_bg.pixelEquality(no_velocity_ref);
	return pixel_equality < 0.97;
}

Navigator.prototype.navigateToMap = function(dest_intern_mapname) {
	var current_intern_mapname = this.minimap.getInternMapname();
	
	if (current_intern_mapname === dest_intern_mapname) {
		Helper.log("We are already on the destination map.");
		return;
	}

	var ex_cm = convertInternToExternMapname(current_intern_mapname);
	var ex_dm = convertInternToExternMapname(dest_intern_mapname);

	var route = PathFinder.findShortestPath(MAP_GRAPH, current_intern_mapname, dest_intern_mapname);
	if (route.length == 0) {
		Helper.log("No route from", ex_cm, "to", ex_dm, "found.");
		return;
	}

	//Helper.log("Route to destination map:", route);
	route.shift(); // remove first element (the map were currently on)

	var route_found_message = "Route from " + ex_cm + " to " + ex_dm + " found: " + ex_cm;
	for (var i = 0; i < route.length; i++) {
		route_found_message += " -> " + convertInternToExternMapname(route[i]);
	}
	Helper.log(route_found_message);

	// Travel and jump from map to map.

	for (var i = 0; i < route.length; i++) {
		var waypoint = route[i];

		var ex_wp = convertInternToExternMapname(waypoint);
		Helper.log("Trying to navigate to", ex_wp);

		if (!this.jumpTo(waypoint)) {
			Helper.log("Unable to navigate to", ex_wp);
			return;
		}
	}
}

Navigator.prototype.jumpTo = function(dest_intern_mapname) {
	var current_intern_mapname = this.minimap.getInternMapname(false); // Do not use the cached mapname
	var mm_level = this.minimap.getLevel(false); // Do not use the cached level
	
	if (mm_level == -1 || current_intern_mapname === "") {
		return false;
	}

	var dest_jgate_arr = JGATE_POS[current_intern_mapname][dest_intern_mapname][mm_level];
	var dest_jgate_pos = new Point(dest_jgate_arr[0], dest_jgate_arr[1]);

	var rdm = convertInternToExternMapname(dest_intern_mapname);
	Helper.log("Trying to travel to", rdm);

	if (!this.travelTo(dest_jgate_pos)) {
		Helper.log("Unable to travel to", rdm);
		return false;
	}

	// TODO: Ask botfather devs to not only add keyboard support to their browser,
	// but make it availabe to the script engine, so that we can use the 'J'-key to jump.

	Helper.log("Waiting for the jump button to become clickable.");
	Helper.sleep(3);
	Helper.log("Trying to find and click the jump button.");

	var screenshot = Browser.takeScreenshot();
	var jump_button_match = Vision.findMatch(screenshot, jump_button_tpl, 0.92);

	if (!jump_button_match.isValid()) {
		Helper.log("Clicking the jump button failed.")
		return false;
	}

	Browser.leftClick(jump_button_match.getRect().getCenter());
	Helper.log("Clicked the jump button.");

	Helper.log("Wait for the jump to complete");
	Helper.msleep(JUMP_TIMEOUT_IN_MS); // Jumping takes some time. TODO: Make this dynamic
	return true;
}

Navigator.prototype.travelTo = function(dest_coords) {
	this.minimap.leftClick(dest_coords);
	Helper.msleep(SHIP_START_MOVING_TIME_IN_MS);

	while (this.shipIsMoving()) {
		// TODO: check connection
		// TODO: check ship health
		Helper.log("Traveling...");
		Helper.msleep(SHIP_TRAVEL_TIMEOUT_IN_MS);
	}

	Helper.log("Ship no longer traveling, destination reached");
	return true;
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

	// Make sure the bot is on the configured map
	if (CONFIG_USE_GLOBAL_NAV) {
		nav.navigateToMap(convertExternToInternMapname(CONFIG_MAP));
	}

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