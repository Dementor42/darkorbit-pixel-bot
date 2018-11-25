// +-------------------------------------------+
// | User Configuration (feel free to edit it) |
// +-------------------------------------------+

var CONFIG_USE_AUTO_LOGIN = false;
var CONFIG_AUTO_LOGIN_USERNAME = "";
var CONFIG_AUTO_LOGIN_PASSWORD = "";

var CONFIG_AUTO_RECONNECT = true;

var CONFIG_AUTO_SHIP_REPAIR = true;
var CONFIG_AUTO_SHIP_REPAIR_LOCATION = "base"; // Possible locations: "stage", "gate", "base"
var CONFIG_MAX_SHIP_REPAIRS = 20; // The script will stop once they have been reached.

var CONFIG_USE_PET = false;
var CONFIG_MAX_PET_REPAIRS = 20;
var CONFIG_PET_GEAR_TO_USE = "autolooter"; // Allowed values: "autolooter", "collector", "passivemode", "guardmode"
var CONFIG_PET_CHECK_TIMEOUT_IN_MS = 5 * 60 * 1000; // minutes * seconds * milliseconds

var CONFIG_USE_GLOBAL_NAV = false;
var CONFIG_MAP = "4-1";

var CONFIG_COLLECT_LOOT = true; // Works only in 2D mode
var CONFIG_COLLECTOR_TIMEOUT_IN_MS = 200; // Increase to reduce CPU/GPU usage, lower to miss less loot.

// +---------------------------------------------------------------------+
// | Templates and Data (DON'T TOUCH ANYTHING BELOW THIS LINE AS A USER) |
// +---------------------------------------------------------------------+

var SCRIPT_VERSION = "1.1.1";

var TEMPLATE_DIR = "templates/";
var CLIENT_TPL_DIR = TEMPLATE_DIR + "client/";
var MINIMAP_DIR = TEMPLATE_DIR + "minimap/";
var PET_TPL_DIR = TEMPLATE_DIR + "pet/";
var MM_LEVEL_DIR = MINIMAP_DIR + "levels/";
var MM_MAPNAMES_DIR = MINIMAP_DIR + "mapnames/";

var JUMP_BUTTON_TPL = new Image(TEMPLATE_DIR + "jump_button.png");
var NO_VELOCITY_REF = new Image(new Size(62, 21), new Color("black"));

var LOGOUT_BUTTON_TPL = new Image(TEMPLATE_DIR + "logout_button.png");
var START_BUTTON_TPL = new Image(CLIENT_TPL_DIR + "start_button.png");

var REPAIR_CONFIRM_TPL = new Image(CLIENT_TPL_DIR + "confirm_repair_button_edge.png");
var REPAIR_ON_BASE_TPL = new Image(CLIENT_TPL_DIR + "repair_on_base_option.png");
var REPAIR_ON_GATE_TPL = new Image(CLIENT_TPL_DIR + "repair_on_gate_option.png");
var REPAIR_ON_STAGE_TPL = new Image(CLIENT_TPL_DIR + "repair_on_stage_option.png");

var DISCONNECTED_TPL = new Image(CLIENT_TPL_DIR + "disconnected.png");
var RECONNECTING_TPL = new Image(CLIENT_TPL_DIR + "reconnecting.png");

var PET_REPAIR_BTN_TPL = new Image(PET_TPL_DIR + "repair_button.png");
var PET_PLAY_BTN_TPL = new Image(PET_TPL_DIR + "play_button.png");
var PET_STOP_BTN_TPL = new Image(PET_TPL_DIR + "stop_button.png");
var GENERIC_PET_BTN_TPL = new Image(PET_TPL_DIR + "generic_button.png");
var GEAR_DROPDOWN_BTN_TPL = new Image(PET_TPL_DIR + "gear_dropdown_button.png");

var AUTOLOOTER_TPL = new Image(PET_TPL_DIR + "autolooter.png");
var PASSIVEMODE_TPL = new Image(PET_TPL_DIR + "passivemode.png");
var GUARDMODE_TPL = new Image(PET_TPL_DIR + "guardmode.png");
var COLLECTOR_TPL = new Image(PET_TPL_DIR + "collector.png");

var AUTOLOOTER_ENTRY_TPL = new Image(PET_TPL_DIR + "autolooter_entry.png");
var PASSIVEMODE_ENTRY_TPL = new Image(PET_TPL_DIR + "passivemode_entry.png");
var GUARDMODE_ENTRY_TPL = new Image(PET_TPL_DIR + "guardmode_entry.png");
var COLLECTOR_ENTRY_TPL = new Image(PET_TPL_DIR + "collector_entry.png");

var PET_WINDOW_CORNER_TPL = new Image(PET_TPL_DIR + "window_corner.png");
var PET_WINDOW_SIZE = new Size(272, 320); // Including the gear dropdown menu with max gears

var LOOT_SWF_URL = "https://pbdo-bot.net/magic/2D/circle_ffff00.swf";
var LOOT_MIN_HSV = new Color(55, 200, 200, "hsv");
var LOOT_MAX_HSV = new Color(70, 255, 255, "hsv");
var LOOT_BLOB_TPL = new BlobTpl(1200, 1220);

var GENERAL_CHECK_TIMEOUT_IN_MS = 1000 * 60 * 3; // Check every 3 minutes

var MM_LEVEL_1_TPL = new Image(MM_LEVEL_DIR + "1_tpl.png");
var MM_LEVEL_2_TPL = new Image(MM_LEVEL_DIR + "2_tpl.png");
var MM_LEVEL_3_TPL = new Image(MM_LEVEL_DIR + "3_tpl.png");
var MM_LEVEL_4_TPL = new Image(MM_LEVEL_DIR + "4_tpl.png");
var MM_LEVEL_5_TPL = new Image(MM_LEVEL_DIR + "5_tpl.png");
var MM_LEVEL_6_TPL = new Image(MM_LEVEL_DIR + "6_tpl.png");
var MM_LEVEL_7_TPL = new Image(MM_LEVEL_DIR + "7_tpl.png");
var MM_LEVEL_8_TPL = new Image(MM_LEVEL_DIR + "8_tpl.png");
var MM_LEVEL_9_TPL = new Image(MM_LEVEL_DIR + "9_tpl.png");

var MM_LEVEL_TPLS = [
	MM_LEVEL_1_TPL, MM_LEVEL_2_TPL, MM_LEVEL_3_TPL,
	MM_LEVEL_4_TPL, MM_LEVEL_5_TPL, MM_LEVEL_6_TPL,
	MM_LEVEL_7_TPL, MM_LEVEL_8_TPL, MM_LEVEL_9_TPL,
];

var MAP_11 = new Image(MM_MAPNAMES_DIR + "11.png");
var MAP_12 = new Image(MM_MAPNAMES_DIR + "12.png");
var MAP_13 = new Image(MM_MAPNAMES_DIR + "13.png");
var MAP_14 = new Image(MM_MAPNAMES_DIR + "14.png");
var MAP_15 = new Image(MM_MAPNAMES_DIR + "15.png");
var MAP_16 = new Image(MM_MAPNAMES_DIR + "16.png");
var MAP_17 = new Image(MM_MAPNAMES_DIR + "17.png");
var MAP_18 = new Image(MM_MAPNAMES_DIR + "18.png");
var MAP_21 = new Image(MM_MAPNAMES_DIR + "21.png");
var MAP_22 = new Image(MM_MAPNAMES_DIR + "22.png");
var MAP_23 = new Image(MM_MAPNAMES_DIR + "23.png");
var MAP_24 = new Image(MM_MAPNAMES_DIR + "24.png");
var MAP_25 = new Image(MM_MAPNAMES_DIR + "25.png");
var MAP_26 = new Image(MM_MAPNAMES_DIR + "26.png");
var MAP_27 = new Image(MM_MAPNAMES_DIR + "27.png");
var MAP_28 = new Image(MM_MAPNAMES_DIR + "28.png");
var MAP_31 = new Image(MM_MAPNAMES_DIR + "31.png");
var MAP_32 = new Image(MM_MAPNAMES_DIR + "32.png");
var MAP_33 = new Image(MM_MAPNAMES_DIR + "33.png");
var MAP_34 = new Image(MM_MAPNAMES_DIR + "34.png");
var MAP_35 = new Image(MM_MAPNAMES_DIR + "35.png");
var MAP_36 = new Image(MM_MAPNAMES_DIR + "36.png");
var MAP_37 = new Image(MM_MAPNAMES_DIR + "37.png");
var MAP_38 = new Image(MM_MAPNAMES_DIR + "38.png");
var MAP_41 = new Image(MM_MAPNAMES_DIR + "41.png");
var MAP_42 = new Image(MM_MAPNAMES_DIR + "42.png");
var MAP_43 = new Image(MM_MAPNAMES_DIR + "43.png");
var MAP_44 = new Image(MM_MAPNAMES_DIR + "44.png");
var MAP_45 = new Image(MM_MAPNAMES_DIR + "45.png");
var MAP_51 = new Image(MM_MAPNAMES_DIR + "51.png");
var MAP_52 = new Image(MM_MAPNAMES_DIR + "52.png");
var MAP_53 = new Image(MM_MAPNAMES_DIR + "53.png");

var MAPNAME_TPLS = [
	MAP_11, MAP_12, MAP_13, MAP_14, MAP_15, MAP_16, MAP_17, MAP_18,
	MAP_21, MAP_22, MAP_23, MAP_24, MAP_25, MAP_26, MAP_27, MAP_28,
	MAP_31, MAP_32, MAP_33, MAP_34, MAP_35, MAP_36, MAP_37, MAP_38,
	MAP_41, MAP_42, MAP_43, MAP_44, MAP_45, MAP_51, MAP_52, MAP_53,
];

// We use different mapnames to represent the space map as a javascript object.
// Instead of '4-1' we write '__4_1'.

var INTERN_MAPNAME_MAPPING = [ // Which mapname template in MAPNAME_TPLS corresponds to which mapname.
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

var JGATE_POS = {
	__1_1: { __1_2: GATE_BR },
	__1_2: { __1_1: GATE_TL, __1_3: GATE_TR, __1_4: GATE_BR },
	__1_3: { __1_2: GATE_BL, __1_4: GATE_BR, __2_3: GATE_TR },
	__1_4: { __1_2: GATE_TL, __1_3: GATE_TR, __4_1: GATE_CR, __3_4: GATE_BR },
	__4_1: { __1_4: GATE_CL, __4_2: GATE_TR, __4_3: GATE_BR, __4_4: GATE_CC },
	__2_1: { __2_2: GATE_BL },
	__2_2: { __2_1: GATE_TR, __2_3: GATE_BL, __2_4: GATE_BR },
	__2_3: { __2_2: GATE_TR, __2_4: GATE_BR, __1_3: GATE_BL },
	__2_4: { __2_2: GATE_TL, __2_3: GATE_TR, __4_2: GATE_CB, __3_3: GATE_BL },
	__4_2: { __2_4: GATE_CT, __4_1: GATE_BL, __4_3: GATE_BR, __4_4: GATE_CC },
	__3_1: { __3_2: GATE_TL },
	__3_2: { __3_1: GATE_BR, __3_3: GATE_TR, __3_4: GATE_TL },
	__3_3: { __3_2: GATE_BR, __3_4: GATE_BL, __2_4: GATE_TL },
	__3_4: { __3_2: GATE_BR, __3_3: GATE_TR, __4_3: GATE_CT, __1_4: GATE_TL },
	__4_3: { __3_4: GATE_CR, __4_1: GATE_BL, __4_2: GATE_TL, __4_4: GATE_CC },
	__4_4: { __4_1: GATE_44LI, __4_2: GATE_44TI, __4_3: GATE_44BI, __1_5: GATE_44L, __2_5: GATE_44T, __3_5: GATE_44B },
	__4_5: { __5_1: GATE_45BI, __1_5: GATE_45L, __2_5: GATE_45T, __3_5: GATE_45B },
	__1_5: { __4_4: GATE_CR, __4_5: GATE_BR, __1_6: GATE_TL, __1_7: GATE_BL },
	__1_6: { __1_5: GATE_BR, __1_8: GATE_BL },
	__1_7: { __1_5: GATE_TR, __1_8: GATE_TL },
	__1_8: { __1_6: GATE_TR, __1_7: GATE_BR },
	__2_5: { __4_4: GATE_BL, __4_5: GATE_BR, __2_6: GATE_TL, __2_7: GATE_TR },
	__2_6: { __2_5: GATE_BL, __2_8: GATE_TR },
	__2_7: { __2_5: GATE_BL, __2_8: GATE_TR },
	__2_8: { __2_6: GATE_BL, __2_7: GATE_BR },
	__3_5: { __4_4: GATE_TL, __4_5: GATE_TRO, __3_6: GATE_BL, __3_7: GATE_BR },
	__3_6: { __3_5: GATE_TL, __3_8: GATE_BR },
	__3_7: { __3_5: GATE_BL, __3_8: GATE_BR },
	__3_8: { __3_6: GATE_BL, __3_7: GATE_TL }
}

var OPTIMISTIC_ACCELERATION_TIME_IN_MS = 500;
var SAFE_ACCELERATION_TIME_IN_MS = 2000;
var JUMP_TIMEOUT_IN_MS = 5000;

// +--------------------------------+
// | Convenience Methods and Helper |
// +--------------------------------+

function convertInternToExternMapname(intern_mapname) {
	if (intern_mapname.indexOf("__") === -1) {
		Helper.debug(intern_mapname, "is not an intern mapname");
	}
	return intern_mapname.replace("__", "").replace("_", "-");
}

function convertExternToInternMapname(extern_mapname) {
	if (extern_mapname.indexOf("-") === -1) {
		Helper.debug(extern_mapname, "is not an extern mapname");
	}
	return "__" + extern_mapname.replace("-", "_");
}

function moveMouseToCenter() {
	// This methods helps prevents unwished popups of ingame objects.
	Browser.moveMouseTo(Browser.getRect().getCenter());
}

function getClosestMatch(matches) {
	var closest_match = new Match();
	var center = Browser.getRect().getCenter();

	for (var i = 0; i < matches.length; i++) {
		var match = matches[i];

		if (!closest_match.isValid() || match.getRect().getCenter().manhattanDistance(center) 
			< closest_match.getRect().getCenter().manhattanDistance(center)) {
			closest_match = match;
		}
	}

	return closest_match;
}

// +--------------------------+
// | Ingame Minimap Managment |
// +--------------------------+

var Minimap = function() {
	this.cached_level = undefined;
	this.cached_position = new Point(-1, -1);
	this.cached_intern_mapname = undefined;
};

Minimap.prototype.calculateTelemetry = function(screenshot) {
	for (var i = MM_LEVEL_TPLS.length - 1; i >= 0; i--) {
		var match = Vision.findMatch(screenshot, MM_LEVEL_TPLS[i], 0.98);

		Helper.debug("Minimap icon:", match);

		if (match.isValid()) {
			this.cached_level = i;
			this.cached_position = match.getRect().getTopLeft();
			return;
		}
	}
};

Minimap.prototype.getLevel = function(ignore_cache) {
	if (ignore_cache === true || this.cached_level === undefined) {
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

	for (var i = 0; i < MAPNAME_TPLS.length; i++) {
		var mapname_tpl = MAPNAME_TPLS[i];
		var match = Vision.findMatch(monochrome_mn, mapname_tpl, 0.95);
		
		Helper.debug("Mapname match, #" + i + ":", match);

		if (match.isValid()) {
			this.cached_intern_mapname = INTERN_MAPNAME_MAPPING[i];
			return this.cached_intern_mapname;
		}
	}

	Helper.debug("No mapname matched.");
	return "";
}

// +-----------------------------+
// | Local and Global Navigation |
// +-----------------------------+

var Navigator = function(minimap) {
	this.minimap = minimap;
}

Navigator.prototype.getNextDestination = function() {
	return this.minimap.getInnerRect().randomPoint();
}

Navigator.prototype.shipIsMoving = function() {
	// TODO: move this once a Ship class exists

	// Isolating white on the image will render it black with white numbers on.
	// We compare it to an black image. If they are the same, we're not moving.
	var min_hsv = new Color(0, 0, 0, "hsv");
	var max_hsv = new Color(10, 255, 255, "hsv");

	var velocity_image = this.minimap.getVelocityImage();
	var blacked_bg = velocity_image.isolateColorRange(min_hsv, max_hsv);

	var pixel_equality = blacked_bg.pixelEquality(NO_VELOCITY_REF);
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

	var route = Algorithm.dijkstra(MAP_GRAPH, current_intern_mapname, dest_intern_mapname);
	if (route.length == 0) {
		Helper.log("No route from", ex_cm, "to", ex_dm, "found.");
		return;
	}

	Helper.debug("Disjkstra path to destination map:", route);
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
	var jump_button_match = Vision.findMatch(screenshot, JUMP_BUTTON_TPL, 0.8);
	Helper.debug("Best jump button match found:", jump_button_match);

	if (!jump_button_match.isValid()) {
		Helper.log("Clicking the jump button failed.");
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
	Helper.msleep(SAFE_ACCELERATION_TIME_IN_MS);

	// TODO: Come up with something "better"?
	if (!this.monitorQuickFlight(1000 * 90)) {
		// The monitor method aborded after 90 seconds. Thats super long, something might went wrong.
		Helper.log("A flight took too long, something might went wrong.");
		return false;
	}

	Helper.log("Ship no longer traveling, destination reached");
	return true;
}

Navigator.prototype.monitorQuickFlight = function(max_flight_time_in_ms) {
	var timer = new Timer();
	timer.start();

	while (this.shipIsMoving()) {
		if (timer.hasExpired(max_flight_time_in_ms)) {
			return false; // max flight time reached
		}

		Helper.debug("Flying somewhere quickly...");
		Helper.msleep(100);
	}

	Helper.debug("Destination reached, quick flight done.");
	return true; // Ship reached destination
}

// +------------------+
// | Client Managment |
// +------------------+

var Client = function() {
	this.revives_done = 0;
	this.cached_logout_button = new Match();
}

Client.prototype.numRevivesDone = function() {
	return this.revives_done;
}

Client.prototype.isDestroyed = function() {
	var screenshot = Browser.takeScreenshot();
	return Vision.findMatch(screenshot, REPAIR_ON_BASE_TPL, 0.95).isValid();
}

Client.prototype.revive = function(location) {
	var screenshot = Browser.takeScreenshot();
	var option_match = new Match();

	switch (location) {
		case "stage":
			option_match = Vision.findMatch(screenshot, REPAIR_ON_STAGE_TPL, 0.95);
			break;
		case "gate":
			option_match = Vision.findMatch(screenshot, REPAIR_ON_GATE_TPL, 0.95);
			break;
		case "base":
			option_match = Vision.findMatch(screenshot, REPAIR_ON_BASE_TPL, 0.95);
			break;
		// base is selected by default anyway
	}

	if (option_match.isValid()) {
		Browser.leftClick(option_match.getRect().getCenter());
		Helper.sleep(1);
		Helper.log("Selected ship repair location...");
	}

	else {
		Helper.log("Couldn't select the desired ship repair location.");
		// This either means the ship is not destroyed or there is only the "base" location available.
	}

	var button_match = Vision.findMatch(screenshot, REPAIR_CONFIRM_TPL, 0.95);
	if (!button_match.isValid())
	{
		Helper.log("Unable to find the ship repair confirm button.");
		return false;
	}

	Browser.leftClick(button_match.getRect().getCenter());
	Helper.sleep(1);

	Helper.log("Ship repair confirmed.");

	this.revives_done++;
	return true;
}

Client.prototype.isDisconnected = function(pretaken_screenshot) {
	var screenshot = pretaken_screenshot ? pretaken_screenshot : Browser.takeScreenshot();
	return Vision.findMatch(screenshot, DISCONNECTED_TPL, 0.95).isValid();
}

Client.prototype.reconnect = function(pretaken_screenshot) {
	var screenshot = pretaken_screenshot ? pretaken_screenshot : Browser.takeScreenshot();
	var disconnected_match = Vision.findMatch(screenshot, DISCONNECTED_TPL, 0.95);

	if (!disconnected_match.isValid()) {
		Helper.debug("The client seems to be not disconnected.");
		return false;
	}

	// The reconnect button is slightly below the match (we're looking for the big X icon)
	var tpl_bl = disconnected_match.getRect().getBottomLeft();
	var new_connection_btn = tpl_bl.pointAdded(new Point(10, 10));

	Browser.leftClick(new_connection_btn);
	Helper.log("Reconnect button clicked.");

	do {
		Helper.log("Reconnecting...");
		Helper.sleep(1);
	}
	while (Vision.findMatch(Browser.takeScreenshot(), RECONNECTING_TPL, 0.95).isValid());

	Helper.log("Reconnected.");
	return true;
}

Client.prototype.isIngame = function() {
	if (Browser.getUrl().getQuery().indexOf("internalMapRevolution") === -1) {
		Helper.debug("Client not ingame. Url does not contain internalMapRevolution");
		return false;
	}

	var screenshot = Browser.takeScreenshot();
	var logout_button_match = Vision.findMatch(Browser.takeScreenshot(), LOGOUT_BUTTON_TPL, 0.99);

	Helper.debug("Logout button match (isIngame check):", logout_button_match);
	return logout_button_match.isValid() || this.isDisconnected() || this.isDestroyed();
}

Client.prototype.autoLogin = function(username, password) {
	Helper.log("Loading game website...");
	
	Browser.loadUrl("http://darkorbit.com/?lang=en");
	Browser.finishLoading();

	Helper.log("Entering account credentials...");

	var fill_uname_js = "document.getElementById('bgcdw_login_form_username').value = '" + username + "';";
	Browser.executeJavascript(fill_uname_js);
	Helper.sleep(1);
	
	var fill_pword_js = "document.getElementById('bgcdw_login_form_password').value = '" + password + "';";
	Browser.executeJavascript(fill_pword_js);
	Helper.sleep(1);
	
	var formsubmit_js = "document.bgcdw_login_form.submit();";
	Browser.executeJavascript(formsubmit_js);

	Helper.log("Form submitted.");
	Helper.sleep(2);

	Browser.finishLoading();
	this.getIngame();
}

Client.prototype.getIngame = function() {
	var ingame_url = Browser.getUrl().getHost() + "/indexInternal.es?action=internalMapRevolution";

	Browser.loadUrl(ingame_url);
	Browser.finishLoading();

	while (!this.isIngame()) {
		Helper.log("Waiting for the game to load...")

		var screenshot = Browser.takeScreenshot();
		var start_button_match = Vision.findMatch(screenshot, START_BUTTON_TPL, 0.97);
		
		if (start_button_match.isValid()) {
			Browser.leftClick(start_button_match.getRect().getCenter());
			Helper.log("Game start button clicked.");
		}

		Helper.sleep(3);
	}
}

Client.prototype.modifyResources2D = function() {
	Browser.replaceResource("box2.swf", LOOT_SWF_URL);
	Browser.replaceResource("orangePumpkin.swf", LOOT_SWF_URL);
}

Client.prototype.haltShip = function(ignore_cache) {
	// TODO: move this once a Ship class exists
	if (ignore_cache === true || !this.cached_logout_button.isValid()) {
		this.cached_logout_button = Vision.findMatch(Browser.takeScreenshot(), LOGOUT_BUTTON_TPL, 0.99);
		Helper.debug("Cached logout button (haltShip):", this.cached_logout_button);
	}
	if (this.cached_logout_button.isValid()) {
		// Triggering the logout process makes the ship stop moving instantly
		Browser.leftClick(this.cached_logout_button.getRect().getCenter());
		Helper.msleep(50); // It takes a moment for the ship to stop
		return true;
	}
	return false;
}

// +---------------+
// | PET Managment |
// +---------------+

var PET = function() {
	this.cached_window_position = undefined;
	this.revives_done = 0;
}

PET.prototype.numRevivesDone = function() {
	return this.revives_done;
}

PET.prototype.findWindow = function() {
	var screenshot = Browser.takeScreenshot();
	var corner_match = Vision.findMatch(screenshot, PET_WINDOW_CORNER_TPL, 0.99);
	if (corner_match.isValid()) {
		this.cached_window_position = corner_match.getRect().getTopLeft();
		return true;
	}
	return false;
}

PET.prototype.getWindowRect = function(ignore_cache) {
	if (ignore_cache === true || this.cached_window_position === undefined) {
		this.findWindow();
	}
	if (this.cached_window_position === undefined) {
		return new Rect();
	}
	return new Rect(
		this.cached_window_position.getX(),
		this.cached_window_position.getY(),
		PET_WINDOW_SIZE.getWidth(),
		PET_WINDOW_SIZE.getHeight() // Including the dropdown with max amount of gears
	);
}

PET.prototype.relativeToRealCoords = function(relative_coords) {
	return this.cached_window_position.pointAdded(relative_coords);
}

PET.prototype.getWindowImage = function() {
	var screenshot = Browser.takeScreenshot();
	return screenshot.copy(this.getWindowRect());
}

PET.prototype.hasFuel = function() {
	// The play/stop/repair button is only visible if there is enough fuel.
	// Those 3 buttons left part look the same, so if the find the left part
	// of one of the buttons, there is fuel.
	var window_image = this.getWindowImage();
	return Vision.findMatch(window_image, GENERIC_PET_BTN_TPL, 0.98).isValid();
}

PET.prototype.isDestroyed = function() {
	var window_image = this.getWindowImage();
	return Vision.findMatch(window_image, PET_REPAIR_BTN_TPL, 0.98).isValid();
}

PET.prototype.isActivated = function() {
	var window_image = this.getWindowImage();
	return Vision.findMatch(window_image, PET_STOP_BTN_TPL, 0.98).isValid();
}

PET.prototype.clickButton = function(btn_tpl, min_score) {
	var window_image = this.getWindowImage();
	var btn_match = Vision.findMatch(window_image, btn_tpl, min_score);

	if (btn_match.isValid()) {
		var in_window_pos = btn_match.getRect().getCenter();
		var real_coords = this.relativeToRealCoords(in_window_pos);

		Browser.leftClick(real_coords);
		Helper.sleep(1);

		moveMouseToCenter();
		return true;
	}

	Helper.debug("Button not found in PET.clickButton:", btn_match);
	return false;
}

PET.prototype.revive = function() {
	var revived = this.clickButton(PET_REPAIR_BTN_TPL, 0.98);
	if (revived) {
		this.revives_done++;
		return true;
	}
	return false;
}

PET.prototype.activate = function() {
	return this.clickButton(PET_PLAY_BTN_TPL, 0.98);
}

PET.prototype.deactivate = function() {
	return this.clickButton(PET_STOP_BTN_TPL, 0.98);
}

PET.prototype.openGearDropdown = function() {
	return this.clickButton(GEAR_DROPDOWN_BTN_TPL, 0.99);;
}

PET.prototype.selectedGear = function() {
	var window_image = this.getWindowImage();
	if (Vision.findMatch(window_image, AUTOLOOTER_TPL, 0.99).isValid()) {
		return "autolooter";
	}
	else if (Vision.findMatch(window_image, PASSIVEMODE_TPL, 0.99).isValid()) {
		return "passivemode";
	}
	else if (Vision.findMatch(window_image, GUARDMODE_TPL, 0.99).isValid()) {
		return "guardmode";
	}
	else if (Vision.findMatch(window_image, COLLECTOR_TPL, 0.99).isValid()) {
		return "collector"; // Ressource-Collector
	}
	Helper.debug("Unknown gear selected");
	return "";
}

PET.prototype.selectGear = function(gear_name) {
	var gear_entry_tpl = undefined;

	switch (gear_name) {
		case "autolooter":
			gear_entry_tpl = AUTOLOOTER_ENTRY_TPL;
			break;

		case "passivemode":
			gear_entry_tpl = PASSIVEMODE_ENTRY_TPL;
			break;

		case "guardmode":
			gear_entry_tpl = GUARDMODE_ENTRY_TPL;
			break;

		case "collector":
			gear_entry_tpl = COLLECTOR_ENTRY_TPL;
			break;

		default:
			Helper.debug("Unknown gear name:", gear_name);
			return false;
	}

	if (!this.openGearDropdown()) {
		Helper.log("Couldn't open the PETs gear dropdown.");
		return false;
	}

	var window_image = this.getWindowImage();
	var gear_entry_match = Vision.findMatch(window_image, gear_entry_tpl, 0.99);

	if (!gear_entry_match.isValid()) {
		Helper.log("Couldn't find the gear entry in the gear list.");
		return false;
	}

	var in_window_pos = gear_entry_match.getRect().getCenter();
	var real_coords = this.relativeToRealCoords(in_window_pos);

	Browser.leftClick(real_coords);
	Helper.log("Gear selected:", gear_name);

	Helper.sleep(1);
	return true;
}

PET.prototype.manage = function() {
	if (this.isDestroyed()) {
		Helper.log("The PET is destroyed!");

		if (this.numRevivesDone() >= CONFIG_MAX_PET_REPAIRS) {
			Helper.log("Max PET repairs already reached.");
			return;
		}

		this.revive();
		Helper.log("Your PET has been repaired.");
	}

	if (!this.isActivated()) {
		this.activate();
		Helper.log("PET activated!");
	}

	if (this.selectedGear() != CONFIG_PET_GEAR_TO_USE) {
		Helper.log("The wrong PET gear is selected.");

		if (this.selectGear(CONFIG_PET_GEAR_TO_USE)) {
			Helper.log("Correct PET gear selected");
		} else {
			Helper.log("Couldn't select the PET gear:", CONFIG_PET_GEAR_TO_USE);
		}
	}
}

// +---------------------+
// | Bonusbox Collection |
// +---------------------+

var Collector = function(client, navi) {
	this.client = client;
	this.navi = navi; // Navigator
}

Collector.prototype.filterAnimationMatches = function(matches) {
	var filtered_matches = [];
	var browser_center = Browser.getRect().getCenter();

	for (var i = 0; i < matches.length; i++) {
		var match = matches[i];
		var match_center = match.getRect().getCenter();
		
		// Ignore centered matches below the ship
		if (match_center.getY() > browser_center.getY() && match_center.getY() < browser_center.getY() + 100
			&& match_center.getX() > browser_center.getX() - 10 && match_center.getX() < browser_center.getX() + 10) {

			Helper.debug("Loot match blow ship ignored:", match);
			continue;
		}

		filtered_matches.push(match);
	}

	return filtered_matches;
}

Collector.prototype.findClosestLoot = function(prevent_animation_detection) {
	var screenshot = Browser.takeScreenshot();
	var isolated = screenshot.isolateColorRange(LOOT_MIN_HSV, LOOT_MAX_HSV);
	var loot_matches = Vision.findBlobs(isolated, LOOT_BLOB_TPL);

	if (prevent_animation_detection) {
		loot_matches = this.filterAnimationMatches(loot_matches);
	}

	return getClosestMatch(loot_matches);
}

Collector.prototype.collectLoot = function() {
	for (var loot_in_a_row = 0; loot_in_a_row < 20; loot_in_a_row++) {

		if (loot_in_a_row == 0 && this.findClosestLoot().isValid()) {
			this.client.haltShip(); // by triggering the logout process

			// We assume that the logout will be canceled by the collector clicking loot
			// or the navigator clicking on the minimap.
			Helper.debug("Hope that the navigator cancels the logout-process.");
		}

		// After the first match try to prevent to find matches of loot we
		// just collected but whichs animation is not finished yet.
		// We could do a timeout instead, but that would slow us down.
		var closest_loot = this.findClosestLoot(loot_in_a_row > 0);
		
		if (!closest_loot.isValid()) {
			// Nothing found and clicked this time, but maybe we found something before.
			return loot_in_a_row > 0;
		}

		Helper.debug("Closest loot found:", closest_loot);

		Browser.leftClick(closest_loot.getRect().getCenter());
		Helper.msleep(OPTIMISTIC_ACCELERATION_TIME_IN_MS);

		if (!this.navi.monitorQuickFlight(10 * 1000)) {
			Helper.debug("It took longer than 10 seconds to reach the loot. Something might went wrong.");
			return false;
		}

		Helper.log("Just collected something, looking for more...");
		Helper.msleep(CONFIG_COLLECTOR_TIMEOUT_IN_MS);
	}

	Helper.debug("Finding more than 20 collectable in one spot is unlikely. We might be stuck somehow.");
	return false;
}

// +---------------------------------------------------------------+
// | Main Method and Algorithm, this uses everything defined above |
// +---------------------------------------------------------------+

function main() {

	// +--------------------------+
	// | Inform and warn the user |
	// +--------------------------+

	Helper.log("### ! ! ! DO NOT RESIZE THE BROWSER WHILE RUNNING THIS SCRIPT ! ! ! ###");
	Helper.log("Used script version:", SCRIPT_VERSION, "(You have to check for updates manually)");
	var client = new Client();

	// +----------------------------+
	// | Timers, counters and flags |
	// +----------------------------+

	var map_checked_after_death = false; // false => check on startup
	var pet_checked_after_death = false; // false => check on startup

	var general_checks_urgend = true; // true => check on startup
	var just_collected_something = false;

	// Things to check from time to time.
	var last_general_check = new Timer();
	var last_pet_check = new Timer();
	var movement_timer = new Timer();

	last_general_check.start();
	last_pet_check.start();
	movement_timer.start();

	// +------------------------------+
	// | Prepare the client and login |
	// +------------------------------+

	if (CONFIG_COLLECT_LOOT) {
		client.modifyResources2D();
		Helper.log("REMEMBER: The loot collector currently only works in 2D mode.");
	}

	if (!client.isIngame()) {
		if (CONFIG_USE_AUTO_LOGIN) {
			Helper.log("Logging in automatically");
			client.autoLogin(CONFIG_AUTO_LOGIN_USERNAME, CONFIG_AUTO_LOGIN_PASSWORD);
			Helper.log("Logged in automatically.");
		} else {
			Helper.log("### ! ! ! Please login manually and start the game or configure the auto login feature ! ! ! ###");
			return;
		}
	}

	else if (CONFIG_COLLECT_LOOT) {
		// The client is already ingame. Reload to make sure ressource modification works.
		Helper.log("Reloading to make the loot collector work...");

		Browser.reload();
		Browser.finishLoading();

		client.getIngame();
		Helper.sleep(2);

		Helper.log("Loot collector prepared.");
	}

	// +----------------------+
	// | Bot components setup |
	// +----------------------+

	var minimap = new Minimap();
	var pet = new PET();
	var navi = new Navigator(minimap);
	var collector = new Collector(client, navi);

	// +------------------------------+
	// | Find and measure the minimap |
	// +------------------------------+	

	for (var tries = 1; tries <= 4; tries++) {
		Helper.debug(tries, "time trying to find the minimap on startup.");
		
		if (minimap.getLevel() !== undefined) {
			Helper.debug("Minimap found on", tries, "try");
			break;
		}

		Helper.log("Minimap not found", tries, "out of 4 tries. Trying again after 3 seconds");
		Helper.sleep(3); // Try in 3 seconds again
	}

	if (minimap.getLevel() === undefined) {
		Helper.log("FATAL! The bot was unable to find the ingame Minimap. Stopping now.")
		return;
	}

	var outer_minimap = minimap.getOuterRect();
	var inner_minimap = minimap.getInnerRect();
	
	Helper.log("Minimap level:", minimap.getLevel());
	Helper.log("Minimap position:", outer_minimap.getLeft(), outer_minimap.getTop());
	Helper.log("Minimap size:", outer_minimap.getWidth(), outer_minimap.getHeight());

	// +---------------------------------+
	// | Find and measure the PET window |
	// +---------------------------------+

	if (CONFIG_USE_PET && !pet.findWindow()) {
		Helper.log("FATAL! The bot was unable to find the PET window. Stopping now.");
		return;
	}

	// +-------------------------------------+
	// | Ready to bot, running bot algorithm |
	// +-------------------------------------+
	
	Helper.log("Starting to bot.");

	// The main loop playing the game until the user stops the script
	while (true) {

		// +-------------------+
		// | Do general checks |
		// +-------------------+

		if (general_checks_urgend || last_general_check.hasExpired(GENERAL_CHECK_TIMEOUT_IN_MS)) {

			// Reset genereal checks triggers
			general_checks_urgend = false;
			last_general_check.restart();

			// Reconnect, if disconnected and auto-reconnect is enabled
			if (client.isDisconnected()) {
				Helper.log("Client disconnected.");

				if (!CONFIG_AUTO_RECONNECT) {
					Helper.log("Auto-reconnect disabled. Stopping the script...");
					return;
				}

				Helper.log("Trying to reconnect...");
				client.reconnect();
			}

			// Repair the ship, if destroyed and auto repair is enabled
			if (client.isDestroyed()) {
				Helper.log("Ship destroyed.");

				if (!CONFIG_AUTO_SHIP_REPAIR) {
					Helper.log("Auto-ship-repair disabled. Stopping the script...");
					return;
				}

				if (client.numRevivesDone() >= CONFIG_MAX_SHIP_REPAIRS) {
					Helper.log("Max configured ship repairs reached. Stopping...");
					return;
				}

				Helper.log("Trying to repair the ship...");
				client.revive(CONFIG_AUTO_SHIP_REPAIR_LOCATION);

				Helper.sleep(2);
				map_checked_after_death = false;
				pet_checked_after_death = false;
			}

			// Make sure the bot is on the configured map
			if (!map_checked_after_death && CONFIG_USE_GLOBAL_NAV) {
				Helper.debug("Time to check whether we're on the correct map.");
				navi.navigateToMap(convertExternToInternMapname(CONFIG_MAP));
				map_checked_after_death = true;
			}

			// Make sure the pet is working correctly
			if (CONFIG_USE_PET && (!pet_checked_after_death || last_pet_check.hasExpired(CONFIG_PET_CHECK_TIMEOUT_IN_MS))) {
				Helper.log("Time to check the PET...");
				pet.manage();
				pet_checked_after_death = true;
				last_pet_check.restart();
			}
		}

		// +--------------+
		// | Collect loot |
		// +--------------+

		var just_tried_to_collect_something = false;

		if (CONFIG_COLLECT_LOOT) {
			just_tried_to_collect_something = collector.collectLoot();
			Helper.msleep(CONFIG_COLLECTOR_TIMEOUT_IN_MS);
		}

		// +------------------+
		// | Local navigation |
		// +------------------+

		// We need to check whether we're not moving every 3 seconds.
		// Otherwise the bonus box collector may accidently log the user out
		// after the logout button has been clicked to make the ship stop moving.
		var time_to_check_navi = movement_timer.hasExpired(3000);

		if (just_tried_to_collect_something || (time_to_check_navi && !navi.shipIsMoving())) {

			// Restart the movement timer
			movement_timer.restart();

			// Move
			Helper.log("Flying to a random location on the current map...");
			Browser.leftClick(navi.getNextDestination());
			continue;
		}

		// Sleep if we're moving and not collecting
		else if (!CONFIG_COLLECT_LOOT) {
			Helper.sleep(2);
		}
	}
}

main();