// +---------------------------------------------------------------------+
// | Templates and Data (DON'T TOUCH ANYTHING BELOW THIS LINE AS A USER) |
// +---------------------------------------------------------------------+

var TEMPLATE_DIR = "templates/";
var CLIENT_TPL_DIR = TEMPLATE_DIR + "client/";
var MINIMAP_DIR = TEMPLATE_DIR + "minimap/";
var PET_TPL_DIR = TEMPLATE_DIR + "pet/";
var ITEMS_TPL_DIR = TEMPLATE_DIR + "items/";
var WINDOWS_DIR = TEMPLATE_DIR + "windows/";
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

var HPBAR_LEFT_TPL = new Image(CLIENT_TPL_DIR + "hpbar_left.png");
var HPBAR_RIGHT_TPL = new Image(CLIENT_TPL_DIR + "hpbar_right.png");
var HNSBAR_SIZE = new Size(51, 14);

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

var NPC_SWF_REPLACEMENT_URL = "https://pbdo-bot.net/magic/3D/sr-x-2.swf";
var NPC_MIN_HSV = new Color(0, 200, 200, "hsv");
var NPC_MAX_HSV = new Color(3, 255, 255, "hsv");
var NPC_BLOB_TPL = new BlobTpl(300, /*1400*/ 2800);

var X1_AMMO_TPL = new Image(ITEMS_TPL_DIR + "x1.png");
var X2_AMMO_TPL = new Image(ITEMS_TPL_DIR + "x2.png");
var X3_AMMO_TPL = new Image(ITEMS_TPL_DIR + "x3.png");
var X4_AMMO_TPL = new Image(ITEMS_TPL_DIR + "x4.png");

var NORMAL_CLOSE_BUTTON_TPL = new Image(WINDOWS_DIR + "normal_close_button.png");
var LARGER_CLOSE_BUTTON_TPL = new Image(WINDOWS_DIR + "larger_close_button.png");
var ASSEMBLY_CLOSE_BUTTON_TPL = new Image(WINDOWS_DIR + "assembly_close_button.png");
var CLOSE_BUTTON_TPLS = [NORMAL_CLOSE_BUTTON_TPL, LARGER_CLOSE_BUTTON_TPL, ASSEMBLY_CLOSE_BUTTON_TPL];

var MINIMAP_BUTTON_TPL = new Image(WINDOWS_DIR + "minimap_button.png");
var MINIMAP_ICON_TPL = new Image(WINDOWS_DIR + "minimap_icon.png");
var PET_BUTTON_TPL = new Image(WINDOWS_DIR + "pet_button.png");
var PET_ICON_TPL = new Image(WINDOWS_DIR + "pet_icon.png");
var USER_BUTTON_TPL = new Image(WINDOWS_DIR + "user_button.png");
var USER_ICON_TPL = new Image(WINDOWS_DIR + "user_icon.png");

var USER_WINDOW_SIZE = new Size(224, 108);

var USER_CREDITS_OFFSET = new Rect(new Point(114, 30), new Size(108, 16)); // Relative to the user windows borders

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
	new Size(228, 180),
	new Size(247, 192),
	new Size(270, 207),
	new Size(300, 225),
	new Size(337, 248),
	new Size(387, 279),
	new Size(457, 323),
	new Size(562, 389),
	new Size(737, 498),
];

var INNER_MINIMAP_SIZES = [
	new Size(187, 115),
	new Size(206, 127),
	new Size(229, 142),
	new Size(259, 160),
	new Size(296, 183),
	new Size(346, 214),
	new Size(416, 258),
	new Size(521, 324),
	new Size(696, 433),
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

function leftClickAndPreventHover(point) {
	Browser.leftClick(point);
	moveMouseToCenter();
}

function getClosestMatch(matches) {
	var closest_match = new Match();
	var center = Browser.getRect().getCenter();

	for (var i = 0; i < matches.length; i++) {
		var match = matches[i];

		var old_dist = closest_match.getRect().getCenter().pointSubtracted(center).manhattanDistance();
		var new_dist = match.getRect().getCenter().pointSubtracted(center).manhattanDistance();

		if (!closest_match.isValid() || new_dist < old_dist) {
			closest_match = match;
		}
	}

	return closest_match;
}

// +--------------------------+
// | Ingame Window Management |
// +--------------------------+

var IngameWindow = function(max_size, icon_tpl, button_tpl) {
	this.max_size = max_size;
	this.icon_tpl = icon_tpl;
	this.button_tpl = button_tpl;
	this.cached_window = new Rect();
	this.cached_button = new Point(-1, -1);
}

IngameWindow.prototype.getButtonMatch = function() {
	var screenshot = Browser.takeScreenshot();
	return Vision.findMatch(screenshot, this.button_tpl, 0.99);
}

IngameWindow.prototype.getIconMatch = function(pretaken_screenshot) {
	var screenshot = Browser.takeScreenshot(); // FIXME!!!
	return Vision.findMatch(screenshot, this.icon_tpl, 0.99);
}

IngameWindow.prototype.cacheWindow = function() {
	var icon_match = this.getIconMatch();
	if (icon_match.isValid()) {
		this.cached_window = new Rect(icon_match.getRect().getTopLeft(), this.max_size);
		return true;
	}
	Helper.debug("Caching a IngameWindow window failed");
	return false;
}

IngameWindow.prototype.cacheButton = function() {
	var button_match = this.getButtonMatch();
	if (button_match.isValid()) {
		this.cached_button = button_match.getRect().getCenter();
		return true;
	}
	Helper.debug("Caching a IngameWindow button failed");
	return false;
}

IngameWindow.prototype.isWindowCached = function() {
	return !this.cached_window.isEmpty();
}

IngameWindow.prototype.isButtonCached = function() {
	return this.cached_button.getX() != -1;
}

IngameWindow.prototype.isVisible = function(pretaken_screenshot) {
	var screenshot = pretaken_screenshot ? pretaken_screenshot : this.takeScreenshot();
	return this.getIconMatch(screenshot).isValid();
}

IngameWindow.prototype.clickButton = function() {
	if (!this.isButtonCached() && !this.cacheButton()) {
		return false;
	}
	leftClickAndPreventHover(this.cached_button);
	Helper.msleep(Config.getValue("window_animation_in_ms"));
	return true;
}

IngameWindow.prototype.beOpened = function(pretaken_screenshot) {
	if (!this.isVisible(pretaken_screenshot)) {
		return this.clickButton();
	}
	return true;
}

IngameWindow.prototype.beClosed = function(pretaken_screenshot) {
	if (this.isVisible(pretaken_screenshot)) {
		return this.clickButton();
	}
	return true;
}

IngameWindow.prototype.takeScreenshot = function() {
	if (!this.isWindowCached() && !this.cacheWindow()) {
		Helper.debug("Caching a window before taking a screenshot failed.");
		return Image(); // Empty, invalid image
	}

	// We have to assume the window has been opened before by calling beOpened().
	// Calling beVisible() within this method causes recursion.
	var screenshot = Browser.takeScreenshot();
	return screenshot.copy(this.cached_window);
}

IngameWindow.getAnyCloseButtonMatch = function() {
	for (var i = 0; i < CLOSE_BUTTON_TPLS.length; i++) {
		var screenshot = Browser.takeScreenshot();
		var tpl = CLOSE_BUTTON_TPLS[i];
		var match = Vision.findMatch(screenshot, tpl, 0.99);
		if (match.isValid()) {
			return match;
		}
	}
	return new Match(); // Invalid match
}

IngameWindow.closeAll = function() {
	while (true) {
		var close_button_match = IngameWindow.getAnyCloseButtonMatch();
		if (close_button_match.isValid()) {
			leftClickAndPreventHover(close_button_match.getRect().getCenter());
			Helper.msleep(Config.getValue("window_animation_in_ms"));
			continue;
		}
		break;
	}
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
		outer_size.getWidth(),
		outer_size.getHeight()
	)
}

Minimap.prototype.getInnerRect = function(ignore_cache) {
	var level = this.getLevel(ignore_cache === true);
	var position = this.getPosition(ignore_cache === true);
	var inner_size = INNER_MINIMAP_SIZES[level];
	return new Rect(
		position.getX() + OUTER_MM_TO_INNER_MM_OFFSET.x,
		position.getY() + OUTER_MM_TO_INNER_MM_OFFSET.y,
		inner_size.getWidth(),
		inner_size.getHeight()
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
	this.last_random_location = new Point();
}

Navigator.prototype.generateRandomLocation = function() {
	// Make sure we're not to close to our last random location.
	// That could cause issue in the edge case where we expect the
	// ship navigation to cancel the logout process but it doesn't
	// because we clicked our current minimap location again which
	// would not cause our ship to move.
	var random_location = this.minimap.getInnerRect().randomPoint();
	for (var i = 0; i < 20; i++) {
		if (Math.abs(this.last_random_location.getX() - random_location.getX()) < 3 ||
			Math.abs(this.last_random_location.getY() - random_location.getY()) < 3) {
			continue;
		}
		this.last_random_location = random_location;
		return random_location;
	}
	Helper.debug("The bot was unable to generate a random location within 20 tries. WTF?!");
	return random_location; // Return the last generated location anyway
}

Navigator.prototype.flyToRandomLocation = function() {
	var random_location = this.generateRandomLocation();
	Browser.leftClick(random_location);
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

	if (current_intern_mapname == "") {
		Helper.debug("Current map unknown (navigateToMap)");
		return;
	}
	
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
		Helper.log("Trying to navigate and jump to", ex_wp);

		if (!this.jumpTo(waypoint)) {
			Helper.log("Navigating and jumping to", ex_wp, "failed");
			return;
		}
	}
}

Navigator.prototype.jumpTo = function(dest_intern_mapname) {
	var current_intern_mapname = this.minimap.getInternMapname(false); // Do not use the cached mapname
	var mm_level = this.minimap.getLevel(true); // Use the cached level
	var dest_jgate_arr;
	
	try {
		dest_jgate_arr = JGATE_POS[current_intern_mapname][dest_intern_mapname][mm_level];		
	} catch (err) {
		Helper.debug("Getting the JGATE pos for", current_intern_mapname, dest_intern_mapname, mm_level, "failed");
		Helper.debug("^", err);
		return false;
	}

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
		Helper.log("Client is not ingame. Looking for the start button...");

		var screenshot = Browser.takeScreenshot();
		var start_button_match = Vision.findMatch(screenshot, START_BUTTON_TPL, 0.94);
		
		if (start_button_match.isValid()) {
			Browser.leftClick(start_button_match.getRect().getCenter());
			Helper.log("Game start button clicked.");
		} else {
			Helper.log("Start button not found. Checking again in 3 seconds.");
		}

		Helper.sleep(3);
	}
}

Client.prototype.modifyResources2D = function() {
	Browser.replaceResource("box2.swf", LOOT_SWF_URL);
	Browser.replaceResource("orangePumpkin.swf", LOOT_SWF_URL);
	Browser.replaceResource("winterGiftBox.swf", LOOT_SWF_URL);
	Browser.replaceResource("icyBox.swf", LOOT_SWF_URL);
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

		leftClickAndPreventHover(real_coords);
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

	leftClickAndPreventHover(real_coords);
	Helper.log("Gear selected:", gear_name);

	Helper.sleep(1);
	return true;
}

PET.prototype.manage = function() {
	if (this.isDestroyed()) {
		Helper.log("The PET is destroyed!");

		if (Config.getValue("auto_pet_revive") === false) {
			Helper.log("PET repair not allowed.");
			return;
		}

		if (this.numRevivesDone() >= Config.getValue("max_pet_repairs")) {
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

	if (this.selectedGear() != Config.getValue("pet_gear")) {
		Helper.log("The wrong PET gear is selected.");

		if (this.selectGear(Config.getValue("pet_gear"))) {
			Helper.log("Correct PET gear selected");
		} else {
			Helper.log("Couldn't select the PET gear:", Config.getValue("pet_gear"));
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

		if (loot_in_a_row == 0) {
			if (this.findClosestLoot().isValid()) {
				// Initially found something. Stop the ship inflight and take another
				// screenshot to get the loots precise position.
				this.client.haltShip(); // by triggering the logout process

				// The logout process will be canceled by either the collector
				// clicking loot or the navigator clicking on the minimap.
			}
			else {
				Helper.debug("No loot found");
				return false;
			}
		}

		// After the first match try to prevent to find matches of loot we
		// just collected but whichs animation is not finished yet.
		// We could do a timeout instead, but that would slow us down.
		var closest_loot = this.findClosestLoot(loot_in_a_row > 0);
		
		if (!closest_loot.isValid()) {
			// Nothing found this time. Cancel the triggered logout process when the
			// ship has not been moved so far which would have canceled the process already.
			if (loot_in_a_row == 0) {
				// Cancel the logout process explicitly by moving
				Helper.debug("Cancel logout process by flying somewhere.");
				this.navi.flyToRandomLocation();
				return false;
			}
			return true;
		}

		Helper.debug("Closest loot found:", closest_loot);

		Browser.leftClick(closest_loot.getRect().getCenter());
		Helper.msleep(OPTIMISTIC_ACCELERATION_TIME_IN_MS);

		if (!this.navi.monitorQuickFlight(10 * 1000)) {
			Helper.debug("It took longer than 10 seconds to reach the loot. Something might went wrong.");
			return true;
		}

		Helper.log("Just collected something, looking for more...");
		Helper.msleep(Config.getValue("collector_timeout_in_ms"));
	}

	Helper.debug("Finding more than 20 collectable in one spot is unlikely. We might be stuck somehow.");
	return true;
}

// +------------+
// | NPC Hunter |
// +------------+

var Hunter = function(pet, navi, client, user_window) {
	this.pet = pet;
	this.navi = navi;
	this.client = client;
	this.user_window = user_window;
	this.last_credits_image = new Image();
	this.cached_x1_ammo = new Point(-1, -1);
	this.cached_x2_ammo = new Point(-1, -1);
	this.cached_x3_ammo = new Point(-1, -1);
	this.cached_x4_ammo = new Point(-1, -1);
	this.cached_hnsbar = new Rect(); // TODO: maybe move this into a dedicated Ship class
}

Hunter.prototype.cacheAmmoPosition = function(ammo_tpl, current_and_fallback) {
	var ammo_position = current_and_fallback;
	var screenshot = Browser.takeScreenshot();

	if (current_and_fallback.getX() == -1) {
		Helper.debug("Selected ammo not cached yet.");

		var ammo_match = Vision.findMatch(screenshot, ammo_tpl, 0.99);
		if (ammo_match.isValid()) {
			ammo_position = ammo_match.getRect().getCenter();
		} else {
			Helper.debug("Couldn't find and cache selected ammo.");
		}
	}
	return ammo_position;
}

Hunter.prototype.getAmmoPosition = function() {
	switch (Config.getValue("hunter_ammo")) {
		case "x4":
			this.cached_x4_ammo = this.cacheAmmoPosition(X4_AMMO_TPL, this.cached_x4_ammo);
			return this.cached_x4_ammo;
		case "x3":
			this.cached_x3_ammo = this.cacheAmmoPosition(X3_AMMO_TPL, this.cached_x3_ammo);
			return this.cached_x3_ammo;
		case "x2":
			this.cached_x2_ammo = this.cacheAmmoPosition(X2_AMMO_TPL, this.cached_x2_ammo);
			return this.cached_x2_ammo;
		default: // x1
			this.cached_x1_ammo = this.cacheAmmoPosition(X1_AMMO_TPL, this.cached_x1_ammo);
			return this.cached_x1_ammo;
	}
}

Hunter.prototype.startFiringLasers = function() {
	var ammo_position = this.getAmmoPosition();
	if (ammo_position.getX() == -1) {
		Helper.log("Unable to start shooting.");
		return false;
	}
	Browser.leftClick(ammo_position);
	return true;
}

Hunter.prototype.rememberOurHNSBar = function() {
	// When calling this method the PET must not be activated and the ship must not be on low HP.
	// HSN bar := HP-Nano-Shield-Bar
	var screenshot = Browser.takeScreenshot();
	var matches = this.getNormalisedLeftHNSBarMatches(screenshot);
	if (matches.length != 1) {
		Helper.debug("Found", matches.length, "HSN bars. Expected 1.");
		return false;
	}

	this.cached_hnsbar = matches[0].getRect();
	return true;
}

Hunter.prototype.filterOurHNSBar = function(matches) {
	var filtered_matches = [];
	for (var i = matches.length - 1; i >= 0; i--) {
		var match = matches[i];
		if (!this.cached_hnsbar.contains(match.getRect().getCenter())) {
			filtered_matches.push(match);
		}
	}
	return filtered_matches;
}

Hunter.prototype.getNormalisedLeftHNSBarMatches = function(screenshot) {
	var matches = Vision.findMatches(screenshot, HPBAR_LEFT_TPL, 0.999);
	for (var i = matches.length - 1; i >= 0; i--) {
		var match = matches[i];
		match.setRect(new Rect(match.getRect().getTopLeft(), HNSBAR_SIZE));
	}
	return matches;
}

Hunter.prototype.getNormalisedRightHNSBarMatches = function(screenshot) {
	var matches = Vision.findMatches(screenshot, HPBAR_RIGHT_TPL, 0.999);
	for (var i = matches.length - 1; i >= 0; i--) {
		var match = matches[i];
		var left = match.getRect().getRight() - HNSBAR_SIZE.getWidth();
		var top = match.getRect().getTop();
		match.setRect(new Rect(new Point(left, top), HNSBAR_SIZE));
	}
	return matches;
}

Hunter.prototype.numOfOtherHNSBars = function() {
	var screenshot = Browser.takeScreenshot();
	var hpbar_left_matches = this.getNormalisedLeftHNSBarMatches(screenshot);
	var hpbar_right_matches = this.getNormalisedRightHNSBarMatches(screenshot);
	var all_matches = hpbar_left_matches.concat(hpbar_right_matches);
	var filtered_matches = this.filterOurHNSBar(all_matches);
	var unique_matches = [];

	for (var a = 0; a < filtered_matches.length; a++) {
		var a_match = filtered_matches[a];
		var is_unique = true;

		for (var u = 0; u < unique_matches.length; u++) {
			var u_match = unique_matches[u];

			// Filter duplicated matches
			if (a_match.getRect().intersects(u_match.getRect())) {
				is_unique = false;
				break;
			}
		}

		if (is_unique) {
			unique_matches.push(a_match);
		}
	}

	return unique_matches.length;
}

Hunter.prototype.getCreditsScreenshot = function() {
	var screenshot = this.user_window.takeScreenshot();
	var credits_image = screenshot.copy(USER_CREDITS_OFFSET);
	// Isolate the white text
	var min_hsv = new Color(0, 0, 0, "hsv");
	var max_hsv = new Color(10, 255, 255, "hsv");
	return credits_image.isolateColorRange(min_hsv, max_hsv);
}

Hunter.prototype.rememberCredits = function() {
	var credits_image = this.getCreditsScreenshot();
	if (!credits_image.isNull()) {
		this.last_credits_image = credits_image;
		return true;
	}
	Helper.debug("The NPC Hunter was unable to remember how many credits to had.");
	return false;
}

Hunter.prototype.hasCreditsEarned = function() {
	var new_credits_image = this.getCreditsScreenshot();
	var pixel_equality = new_credits_image.pixelEquality(this.last_credits_image);
	return pixel_equality < 1;
}

Hunter.prototype.findClosestNPCs = function() {
	var screenshot = Browser.takeScreenshot();
	var isolated = screenshot.isolateColorRange(NPC_MIN_HSV, NPC_MAX_HSV);
	var matches = Vision.findBlobs(isolated, NPC_BLOB_TPL);
	return getClosestMatch(matches);
}

Hunter.prototype.isActuallyAttacking = function() {
	// Sometimes starting an attack doesnt work. We need this method to detect
	// such situations.
	return true; // TODO: Implement me!
}

Hunter.prototype.huntNPCs = function() {
	// Algorithm:
	// We check whether NPCs are around.
	// If there are and we are moving, we stop and look for NPCs again.
	// If we found an NPC and are not moving, we select it.
	// Then we remember how much XP we have. Later checking the XP will tell us whether we killed the NPC.
	// Now we start firing.
	// We keep firing as long as we have no XP earned or there is one HP/Nano/Shield bar less visible.
	//
	// "Issues":
	// - The Hunter will assume the NPC escaped when our PET leaves the screen.
	// - It's hard to filter the the PETs HP/Nano/Shield bar though.
	// - We filter our own HNS bar by remembering it's location when starting the bot.
	// - When our ship gets hit by an Witz-Rocket our HSN bar might move and the Hunter will no longer work.

	for (var npcs_in_a_row = 0; npcs_in_a_row < 20; npcs_in_a_row++) {

		var npc_match = this.findClosestNPCs();
		if (!npc_match.isValid()) {
			return false;
		}

		if (npcs_in_a_row == 0 && npc_match.isValid() && this.navi.shipIsMoving()) {
			// We need to halt the ship if its moving by triggering the logout process.
			// Starting to fire doesn't cancel the logout process though.
			this.client.haltShip();
			Helper.msleep(Config.getValue("window_animation_in_ms"));
			this.client.haltShip();
			continue;
		}

		Browser.leftClick(npc_match.getRect().getCenter());
		Helper.log("Found and selected an NPC.");

		this.rememberCredits();
		Helper.debug("Remembered credits.");

		this.startFiringLasers();
		Helper.log("Started firing lasers.");

		// Make sure health and connection are checked after some time
		var checks_timer = new Timer();
		checks_timer.start();

		// Check every few seconds whether the NPC excaped. (expensive check)
		var escape_check_timer = new Timer();
		escape_check_timer.start();

		while (true) {

			// Check whether the NPC has been killed
			if (this.hasCreditsEarned()) {
				Helper.log("NPC killed.");
				break;
			}

			// Check whether the ship failed to attack
			if (!this.isActuallyAttacking() && !this.hasCreditsEarned()) {
				Helper.log("The ship has failed to start attacking.");
				break;
			}

			// Check whether the NPC has escaped
			if (escape_check_timer.hasExpired(Config.getValue("escape_check_delay_in_secs") * 1000)) {
				Helper.log("Checking whether the NPC escaped...");
				escape_check_timer.restart();

				var cur_num_hnsbars = this.numOfOtherHNSBars();
				Helper.debug("Current number of hnsbars:", cur_num_hnsbars);

				// When we use a PET we assume it's HP bar is visible.
				var pet_activated = Config.getValue("manage_pet") === true && this.pet.isActivated();

				if ((!pet_activated && cur_num_hnsbars == 0) || (pet_activated && cur_num_hnsbars == 1)) {
					Helper.log("The NPC escaped.");
					break;
				}
			}

			// Check whether we lost connection or got killed
			if (checks_timer.hasExpired(20 * 1000)) {
				Helper.debug("We were shooting an NPC for 20 seconds. Time to do some checks.");
				checks_timer.restart();

				if (this.client.isDestroyed() || this.client.isDisconnected()) {
					Helper.log("Got interrupted hunting an NPC.");
					return true;
				}
				continue;
			}

			Helper.log("Still shooting the NPC...");
			Helper.msleep(100);
		}
	}

	Helper.debug("Finding more than 20 NPCs in one spot is unlikely. We might be stuck somehow.");
	return true;
}

Hunter.registerResourceRules = function() {
	if (Config.getValue("hunter_mode") == "x-2-all") {
		Browser.blockResource("spacemap/3d/textures/streuner-soldier_diffuse_128.atf");
		Browser.blockResource("spacemap/3d/meshes/streuner-soldier.awd");
		Browser.blockResource("spacemap/3d/textures/streunerr-boss_diffuse_128.atf");
		Browser.blockResource("spacemap/3d/meshes/streunerr-boss.awd");
		Browser.blockResource("spacemap/3d/textures/streuner_diffuse_128.atf");
		Browser.blockResource("spacemap/3d/meshes/streuner.awd");
		Browser.blockResource("spacemap/3d/textures/streuner-specialist_diffuse_128.atf");
		Browser.blockResource("spacemap/3d/meshes/streuner-specialist.awd");
		Browser.blockResource("spacemap/3d/textures/lordakia_diffuse_128.atf");
		Browser.blockResource("spacemap/3d/meshes/lordakia.awd");
		Browser.blockResource("spacemap/3d/textures/lordakia-boss_diffuse_128.atf");
		Browser.blockResource("spacemap/3d/meshes/lordakia-boss.awd");
		Browser.replaceResource("replacementShips", NPC_SWF_REPLACEMENT_URL);
	}
}

// +----------------+
// | Task Scheduler |
// +----------------+

var Scheduler = function(client, minimap, pet, collector, hunter, navi) {
	this.client = client;
	this.minimap = minimap;
	this.pet = pet;
	this.collector = collector;
	this.hunter = hunter;
	this.navi = navi;

	this.just_collected_something = false;
	this.script_stop_requested = false;

	this.client_check_requested = true; // true => check on startup
	this.pet_check_requested = true; // true => check on startup
	this.map_check_requested = true; // true => check on startup

	this.client_check_timer = new Timer();
	this.pet_check_timer = new Timer();

	this.client_check_timer.start();
	this.pet_check_timer.start();
}

Scheduler.prototype.requestScriptStop = function() {
	this.script_stop_requested = true;
}

Scheduler.prototype.requestClientCheck = function() {
	this.client_check_requested = true;
}

Scheduler.prototype.requestPetCheck = function() {
	this.pet_check_requested = true;
}

Scheduler.prototype.requestMapCheck = function() {
	this.map_check_requested = true;
}

Scheduler.prototype.doneClientChecking = function() {
	this.client_check_requested = false;
	this.client_check_timer.restart();
}

Scheduler.prototype.donePetChecking = function() {
	this.pet_check_requested = false;
	this.pet_check_timer.restart();
}

Scheduler.prototype.doneMapChecking = function() {
	this.map_check_requested = false;
}

Scheduler.prototype.itsTimeToCheckTheClient = function() {
	var good_idea = !this.just_collected_something;
	var necessary = this.client_check_requested || this.client_check_timer.hasExpired(Config.getValue("general_check_timeout_in_min") * 60 * 1000);
	return good_idea && necessary;
}

Scheduler.prototype.itsTimeToCheckThePET = function() {
	var good_idea = !this.just_collected_something && Config.getValue("manage_pet") === true;
	var necessary = this.pet_check_requested || this.pet_check_timer.hasExpired(Config.getValue("pet_check_timeout_in_min") * 60 * 1000);
	return good_idea && necessary;
}

Scheduler.prototype.itsTimeToCheckTheMap = function() {
	var good_idea = !this.just_collected_something && Config.getValue("do_global_nav");
	var necessary = this.map_check_requested;
	return good_idea && necessary;
}

Scheduler.prototype.itsTimeToCollectLoot = function() {
	var good_idea = Config.getValue("collect_loot") === true;
	var necessary = good_idea;
	return good_idea && necessary;
}

Scheduler.prototype.itsTimerToHuntNPCs = function() {
	var good_idea = Config.getValue("hunt_npcs") === true;
	var necessary = good_idea;
	return good_idea && necessary;
}

Scheduler.prototype.itsTimeToMoveTheShip = function() {
	var good_idea = this.just_collected_something || !this.navi.shipIsMoving();
	var necessary = good_idea;
	return good_idea && necessary;
}

Scheduler.prototype.checkTheConnection = function() {
	if (!this.client.isDisconnected()) {
		Helper.debug("Client is connected; check done.");
		return;
	}
	
	Helper.log("Client disconnected.");

	if (!Config.getValue("auto_reconnect") === true) {
		Helper.log("Auto-reconnect disabled. Stopping the script...");
		this.requestScriptStop();
		return;
	}

	Helper.log("Trying to reconnect...");
	this.client.reconnect();
}

Scheduler.prototype.checkTheShipStatus = function() {
	if (!this.client.isDestroyed()) {
		Helper.debug("Client is alive; check done.");
		return;
	}

	Helper.log("Ship destroyed.");

	if (Config.getValue("auto_ship_repair") === false) {
		Helper.log("Auto-ship-repair disabled. Stopping the script...");
		this.requestScriptStop();
		return;
	}

	if (this.client.numRevivesDone() >= Config.getValue("max_auto_ship_repairs")) {
		Helper.log("Max configured ship repairs reached. Stopping...");
		this.requestScriptStop();
		return;
	}

	Helper.log("Trying to repair the ship...");
	this.client.revive(Config.getValue("auto_ship_repair_location"));

	Helper.sleep(2); // Wait for the revive animation to finish

	this.requestMapCheck();
	this.requestPetCheck();
}

Scheduler.prototype.checkTheCurrentMap = function() {
	var dest_intern_mapname = convertExternToInternMapname(Config.getValue("map"));
	this.navi.navigateToMap(dest_intern_mapname);

	if (this.minimap.getInternMapname() === dest_intern_mapname) {
		Helper.debug("We're on the correct map. Map check done.");
		this.doneMapChecking();
	} else {
		Helper.debug("Map check not done.");
	}
}

Scheduler.prototype.checkThePET = function() {
	this.pet.manage();
	this.donePetChecking();
}

Scheduler.prototype.checkForLoot = function() {
	this.just_collected_something = this.collector.collectLoot();
	Helper.msleep(Config.getValue("collector_timeout_in_ms"));
}

Scheduler.prototype.moveTheShip = function() {
	Helper.log("Flying to a random location on the current map...");
	this.navi.flyToRandomLocation();
}

Scheduler.prototype.runMainAlgorithm = function() {

	while (!this.script_stop_requested) {

		if (this.itsTimeToCheckTheClient()) {
			Helper.debug("Time to check the client...");

			// Reconnect, if disconnected and auto-reconnect is enabled
			this.checkTheConnection();
			if (this.script_stop_requested) return;

			// Repair the ship, if destroyed and auto repair is enabled
			this.checkTheShipStatus();
			if (this.script_stop_requested) return;
			
			// Reset check triggers
			this.doneClientChecking();
		}

		if (this.itsTimeToCheckTheMap()) {
			Helper.debug("Time to check whether we're on the correct map.");
			this.checkTheCurrentMap();
		}
		
		if (this.itsTimeToCheckThePET()) {
			Helper.debug("Time to check the PET...");
			this.checkThePET();
		}
		
		if (this.itsTimeToCollectLoot()) {
			Helper.debug("Time to check for loot...");
			this.checkForLoot();
		}

		if (this.itsTimerToHuntNPCs()) {
			Helper.debug("Time to hunt NPCs...");
			this.hunter.huntNPCs();
		}
		
		if (this.itsTimeToMoveTheShip()) {
			Helper.debug("Time to move the ship...");
			this.moveTheShip();
		}
		
		else if (Config.getValue("collect_loot") === false) {
			// Sleep if we're moving and not looking for loot
			Helper.sleep(2);
		}
	}

	Helper.debug("The scheduler returned.");
}

// +---------------------------------------------------------------+
// | Main Method and Algorithm, this uses everything defined above |
// +---------------------------------------------------------------+

function main() {

	// +--------------------------+
	// | Inform and warn the user |
	// +--------------------------+

	Helper.log("### ! ! ! DO NOT RESIZE THE BROWSER WHILE RUNNING THIS SCRIPT ! ! ! ###");
	var client = new Client();

	// +------------------------------+
	// | Prepare the client and login |
	// +------------------------------+

	if (Config.getValue("collect_loot") === true && Config.getValue("hunt_npcs") === true) {
		Helper.log("FATAL: The Loot Collector and NPC Hunter currently can't be used at the same time.");
		return;
	}

	if (Config.getValue("collect_loot") === true) {
		client.modifyResources2D();
		Helper.log("REMEMBER: The loot collector currently only works in 2D mode.");
	}

	if (Config.getValue("hunt_npcs") === true) {
		Hunter.registerResourceRules();
		Helper.log("REMEMBER: To turn your settings to low.");

		// TODO: Remove this once the issues has been fixed
		Helper.log("REMEMBER: Make the PET window show numbers, not bars!");
		Helper.log("REMEMBER: Sometimes the ship doesnt start shooting, then the bot is kinda stuck.");
		Helper.log("REMEMBER: A check to prevent this from happening will be added soon.");
	}

	if (!client.isIngame()) {
		if (Config.getValue("auto_login") === true) {
			Helper.log("Logging in automatically");
			client.autoLogin(Config.getValue("auto_login_username"), Config.getValue("auto_login_password"));
			Helper.log("Logged in automatically.");
		} else {
			Helper.log("### ! ! ! Please login manually and start the game or configure the auto login feature ! ! ! ###");
			return;
		}
	}

	else if (Config.getValue("collect_loot") === true || Config.getValue("hunt_npcs") === true) {
		// The client is already ingame. Reload to make sure ressource modification works.
		Helper.log("Reloading to make the loot collector or the NPC hunter work...");

		client.getIngame(); // Will reload the page
		Helper.sleep(2);

		Helper.log("Loot collector/NPC hunter prepared.");
	}

	// +-----------------------+
	// | Wait for slow clients |
	// +-----------------------+

	Helper.log("Waiting", Config.getValue("start_delay_in_secs"), "seconds for the game to load completely.");
	Helper.sleep(Config.getValue("start_delay_in_secs"));
	Helper.log("The game should now be completely loaded. If not increase the 'Max. game load time in seconds'");

	// +----------------------+
	// | Bot components setup |
	// +----------------------+

	var minimap_window = new IngameWindow(OUTER_MINIMAP_SIZES.slice(-1)[0], MINIMAP_ICON_TPL, MINIMAP_BUTTON_TPL);
	var user_window = new IngameWindow(USER_WINDOW_SIZE, USER_ICON_TPL, USER_BUTTON_TPL);
	var pet_window = new IngameWindow(PET_WINDOW_SIZE, PET_ICON_TPL, PET_BUTTON_TPL);

	var minimap = new Minimap();
	var pet = new PET();
	var navi = new Navigator(minimap);
	var collector = new Collector(client, navi);
	var hunter = new Hunter(pet, navi, client, user_window);

	// +----------------------------------+
	// | Close unnecessary ingame windows |
	// +----------------------------------+

	if (Config.getValue("close_unnecessary_windows") === true) {
		Helper.log("Closing all windows.");
		IngameWindow.closeAll();
		Helper.log("All windows closed.");
	}

	// At this point the PET window is closed. So we won't confuse the HP bar
	// shown in the PET window with the ships HP bar.
	if (!hunter.rememberOurHNSBar()) {
		Helper.log("FATAL! The bot was unable to find the ships HP bar! Make sure you're not on low HP.");
		return;
	}

	// +------------------------------+
	// | Open required ingame windows |
	// +------------------------------+

	if (Config.getValue("close_unnecessary_windows") === true) {
		Helper.log("Opening required windows. (Increase the window animation time if this fails).");

		if (!minimap_window.beOpened()) {
			Helper.log("FATAL! The bot was unable to open the Minimap window.");
			return;
		}
		if (Config.getValue("manage_pet") === true && !pet_window.beOpened()) {
			Helper.log("FATAL! The bot was unable to open the PET window.");
			return;
		}
		if (Config.getValue("hunt_npcs") === true && !user_window.beOpened()) {
			Helper.log("DATAL! The bot was unable to open the User windows.");
			return;
		}
	}

	// +------------------------------+
	// | Find and measure the minimap |
	// +------------------------------+	

	if (minimap.getLevel() === undefined) {
		Helper.log("FATAL! Minimap not found. Make sure you turned the games quality to low.");
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

	if (Config.getValue("manage_pet") === true && !pet.findWindow()) {
		Helper.log("FATAL! The bot was unable to find the PET window. Stopping now.");
		return;
	}

	// +-------------------------------------+
	// | Ready to bot, running bot algorithm |
	// +-------------------------------------+
	
	Helper.log("Starting to bot.");
	var scheduler = new Scheduler(client, minimap, pet, collector, hunter, navi);
	scheduler.runMainAlgorithm();
}

main();