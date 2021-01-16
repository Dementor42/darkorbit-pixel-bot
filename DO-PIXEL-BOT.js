// +---------------------+
// | Version Information |
// +---------------------+

for (var i=0; i<3; i++) { Helper.log(" "); }
Helper.log("### BOTFATHER VERSION 6.6.0 OR LATER REQUIRED ###")
Helper.log("(You might need to update)");
for (var i=0; i<3; i++) { Helper.log(" "); }

// +---------------------------------------------------------------------+
// | Templates and Data (DON'T TOUCH ANYTHING BELOW THIS LINE AS A USER) |
// +---------------------------------------------------------------------+

var TEMPLATE_DIR = "templates/";
var CLIENT_TPL_DIR = TEMPLATE_DIR + "client/";
var MINIMAP_DIR = TEMPLATE_DIR + "minimap/";
var PET_TPL_DIR = TEMPLATE_DIR + "pet/";
var SHIP_TPL_DIR = TEMPLATE_DIR + "ship/";
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

var LOOT_SWF_URL = "https://pbdo-bot.net/magic/2D/circle_ffff00.swf";
var LOOT_MIN_HSV = new Color(55, 200, 200, "hsv");
var LOOT_MAX_HSV = new Color(70, 255, 255, "hsv");
var LOOT_BLOB_TPL = new BlobTpl(1200, 1220);

var NPC_SWF_REPLACEMENT_URL = "https://pbdo-bot.net/magic/3D/sr-x-2.swf";
var NPC_MIN_HSV = new Color(0, 200, 200, "hsv");
var NPC_MAX_HSV = new Color(3, 255, 255, "hsv");
var NPC_BLOB_TPL = new BlobTpl(300, /*1400*/ 2800);

var TARGET_MIN_HSV = new Color(300, 255, 255, "hsv");
var TARGET_MAX_HSV = new Color(300, 255, 255, "hsv");
var TARGET_BLOB_TPL = new BlobTpl(1000, 1400);

var X1_AMMO_TPL = new Image(ITEMS_TPL_DIR + "x1.png");
var X2_AMMO_TPL = new Image(ITEMS_TPL_DIR + "x2.png");
var X3_AMMO_TPL = new Image(ITEMS_TPL_DIR + "x3.png");
var X4_AMMO_TPL = new Image(ITEMS_TPL_DIR + "x4.png");
var XX_AMMO_TPL_TO_BTN_BORDER_OFFSET = new Point(-1, -9);
var XX_AMMO_TPL_SIZE = new Size(38, 38);

const REP1_TPL = new Image(ITEMS_TPL_DIR + "REP1.png");
const REP2_TPL = new Image(ITEMS_TPL_DIR + "REP2.png");
const REP3_TPL = new Image(ITEMS_TPL_DIR + "REP3.png");
const REP4_TPL = new Image(ITEMS_TPL_DIR + "REP4.png");
const REP_TPLS = [REP1_TPL, REP2_TPL, REP3_TPL, REP4_TPL];

var NORMAL_CLOSE_BUTTON_TPL = new Image(WINDOWS_DIR + "normal_close_button.png");
var LARGER_CLOSE_BUTTON_TPL = new Image(WINDOWS_DIR + "larger_close_button.png");
var ASSEMBLY_CLOSE_BUTTON_TPL = new Image(WINDOWS_DIR + "assembly_close_button.png");
var CLOSE_BUTTON_TPLS = [NORMAL_CLOSE_BUTTON_TPL, LARGER_CLOSE_BUTTON_TPL, ASSEMBLY_CLOSE_BUTTON_TPL];

var MINIMAP_BUTTON_TPL = new Image(WINDOWS_DIR + "minimap_button.png");
var MINIMAP_ICON_TPL = new Image(WINDOWS_DIR + "minimap_icon.png");

var PET_BUTTON_TPL = new Image(WINDOWS_DIR + "pet_button.png");
var PET_ICON_TPL = new Image(WINDOWS_DIR + "pet_icon.png");
var PET_WINDOW_CORNER_TPL = new Image(PET_TPL_DIR + "window_corner.png");
var PET_WINDOW_SIZE = new Size(272, 320); // Including the gear dropdown menu with max gears

var SHIP_BUTTON_TPL = new Image(WINDOWS_DIR + "ship_button.png");
var SHIP_ICON_TPL = new Image(WINDOWS_DIR + "ship_icon.png");
var SHIP_WINDOW_SIZE = new Size(224, 112);
var SHIP_HPBAR_GREEN_TPL = new Image(SHIP_TPL_DIR + "hpbar_green.png");
var SHIP_HPBAR_EMPTY_TPL = new Image(SHIP_TPL_DIR + "hpbar_empty.png");
var SHIP_HPBARS_SUBRECT = new Rect(new Point(31, 36), new Size(64, 15));

var MM_POSMARK_V_TPL = new Image(MINIMAP_DIR + "posmark_v.png");
var MM_POSMARK_H_TPL = new Image(MINIMAP_DIR + "posmark_h.png");

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

var INTERN_MAPNAME_MAPPING = [ // Which mapname template in MAPNAME_TPLS corresponds to which mapname.
	"1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7", "1-8",
	"2-1", "2-2", "2-3", "2-4", "2-5", "2-6", "2-7", "2-8",
	"3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8",
	"4-1", "4-2", "4-3", "4-4", "4-5", "5-1", "5-2", "5-3",
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
	"1-1": { "1-2": 1 },
	"1-2": { "1-1": 1, "1-3": 1, "1-4": 1 },
	"1-3": { "1-2": 1, "1-4": 1, "2-3": 1 },
	"1-4": { "1-2": 1, "1-3": 1, "3-4": 1, "4-1": 1 },
	"2-1": { "2-2": 1 },
	"2-2": { "2-1": 1, "2-3": 1, "2-4": 1 },
	"2-3": { "1-3": 1, "2-2": 1, "2-4": 1 },
	"2-4": { "2-2": 1, "2-3": 1, "3-3": 1, "4-2": 1 },
	"3-1": { "3-2": 1 },
	"3-2": { "3-1": 1, "3-3": 1, "3-4": 1 },
	"3-3": { "2-4": 1, "3-2": 1, "3-4": 1 },
	"3-4": { "1-4": 1, "3-2": 1, "3-3": 1, "4-3": 1 },
	"4-1": { "1-4": 1, "4-2": 1, "4-3": 1, "4-4": 1 },
	"4-2": { "2-4": 1, "4-1": 1, "4-3": 1, "4-4": 1 },
	"4-3": { "3-4": 1, "4-1": 1, "4-2": 1, "4-4": 1 },
	"4-4": { "1-5": 1, "2-5": 1, "3-5": 1, "4-1": 1, "4-2": 1, "4-3": 1 },
	"4-5": { "1-5": 1, "2-5": 1, "3-5": 1 },
	"1-5": { "1-6": 1, "1-7": 1, "4-4": 1, "4-5": 1 },
	"1-6": { "1-5": 1, "1-8": 1 },
	"1-7": { "1-5": 1, "1-8": 1 },
	"1-8": { "1-6": 1, "1-7": 1 },
	"2-5": { "2-6": 1, "2-7": 1, "4-4": 1, "4-5": 1 },
	"2-6": { "2-5": 1, "2-8": 1 },
	"2-7": { "2-5": 1, "2-8": 1 },
	"2-8": { "2-6": 1, "2-7": 1 },
	"3-5": { "3-6": 1, "3-7": 1, "4-4": 1, "4-5": 1 },
	"3-6": { "3-5": 1, "3-8": 1 },
	"3-7": { "3-5": 1, "3-8": 1 },
	"3-8": { "3-6": 1, "3-7": 1 }
};

var GATE_TL   = [new Point( 17,  17), new Point( 19,  19), new Point( 21,  21), new Point( 24,  24), new Point( 27,  27), new Point( 32,  32), new Point( 39,  39), new Point( 49,  49), new Point( 65,  65)];
var GATE_TR   = [new Point(167,  17), new Point(184,  19), new Point(204,  21), new Point(230,  24), new Point(263,  27), new Point(307,  32), new Point(369,  39), new Point(461,  49), new Point(615,  65)];
var GATE_BL   = [new Point( 17, 103), new Point( 19, 114), new Point( 21, 126), new Point( 24, 142), new Point( 27, 163), new Point( 32, 190), new Point( 39, 229), new Point( 49, 286), new Point( 65, 382)];
var GATE_BR   = [new Point(167, 103), new Point(184, 114), new Point(204, 125), new Point(230, 142), new Point(263, 163), new Point(307, 190), new Point(369, 229), new Point(461, 286), new Point(615, 382)];
var GATE_TRO  = [new Point(149,  12), new Point(164,  14), new Point(182,  15), new Point(205,  17), new Point(234,  20), new Point(274,  24), new Point(329,  29), new Point(411,  36), new Point(549,  49)];
var GATE_CT   = [new Point( 90,  12), new Point( 99,  14), new Point(110,  15), new Point(124,  17), new Point(141,  20), new Point(165,  24), new Point(199,  29), new Point(249,  36), new Point(332,  49)];
var GATE_CR   = [new Point(171,  53), new Point(189,  59), new Point(210,  65), new Point(236,  74), new Point(270,  84), new Point(315,  99), new Point(379, 119), new Point(474, 149), new Point(632, 199)];
var GATE_CB   = [new Point( 90, 108), new Point( 99, 119), new Point(110, 132), new Point(124, 149), new Point(141, 170), new Point(165, 199), new Point(199, 239), new Point(249, 299), new Point(332, 399)];
var GATE_CL   = [new Point( 12,  53), new Point( 14,  59), new Point( 15,  65), new Point( 17,  74), new Point( 20,  84), new Point( 24,  99), new Point( 29, 119), new Point( 36, 149), new Point( 49, 199)];
var GATE_CC   = [new Point( 94,  60), new Point(104,  66), new Point(115,  74), new Point(130,  83), new Point(149,  95), new Point(174, 111), new Point(209, 134), new Point(261, 167), new Point(349, 254)];
var GATE_44T  = [new Point(126,   5), new Point(139,   5), new Point(154,   6), new Point(174,   7), new Point(199,   8), new Point(232,  10), new Point(279,  12), new Point(350,  17), new Point(445,  22)];
var GATE_44L  = [new Point( 30,  60), new Point( 34,  66), new Point( 37,  74), new Point( 42,  83), new Point( 49,  95), new Point( 57, 111), new Point( 69, 134), new Point( 87, 168), new Point(115, 224)];
var GATE_44B  = [new Point(126, 113), new Point(139, 124), new Point(154, 138), new Point(174, 156), new Point(199, 178), new Point(232, 208), new Point(279, 250), new Point(350, 314), new Point(465, 417)];
var GATE_44TI = [new Point( 98,  53), new Point(108,  58), new Point(120,  65), new Point(135,  73), new Point(155,  84), new Point(181,  98), new Point(218, 118), new Point(272, 149), new Point(364, 198)];
var GATE_44LI = [new Point( 86,  60), new Point( 95,  66), new Point(105,  74), new Point(119,  83), new Point(136,  95), new Point(159, 111), new Point(191, 134), new Point(240, 168), new Point(319, 224)];
var GATE_44BI = [new Point( 97,  63), new Point(107,  69), new Point(119,  77), new Point(134,  88), new Point(153, 101), new Point(180, 119), new Point(217, 142), new Point(271, 179), new Point(363, 239)];
var GATE_45T  = [new Point(126,   5), new Point(139,   5), new Point(154,   6), new Point(174,   7), new Point(199,   8), new Point(232,  10), new Point(279,  12), new Point(349,  16), new Point(465,  22)];
var GATE_45L  = [new Point( 30,  60), new Point( 34,  66), new Point( 37,  74), new Point( 42,  83), new Point( 49,  95), new Point( 57, 111), new Point( 69, 134), new Point( 86, 167), new Point(115, 224)];
var GATE_45B  = [new Point(126, 115), new Point(139, 127), new Point(154, 141), new Point(174, 159), new Point(199, 182), new Point(232, 212), new Point(279, 254), new Point(349, 319), new Point(445, 426)];
var GATE_45TI = [new Point(112,  27), new Point(124,  30), new Point(137,  34), new Point(155,  38), new Point(177,  44), new Point(207,  51), new Point(249,  62), new Point(311,  77), new Point(415, 104)];
var GATE_45LI = [new Point( 54,  59), new Point( 60,  65), new Point( 66,  72), new Point( 75,  82), new Point( 86,  94), new Point(100, 109), new Point(121, 132), new Point(151, 165), new Point(202, 220)];
var GATE_45BI = [new Point(112,  93), new Point(124, 102), new Point(137, 114), new Point(155, 128), new Point(177, 146), new Point(207, 171), new Point(249, 206), new Point(311, 257), new Point(415, 344)];

var JGATE_POS = {
	"1-1": { "1-2": GATE_BR },
	"1-2": { "1-1": GATE_TL, "1-3": GATE_TR, "1-4": GATE_BR },
	"1-3": { "1-2": GATE_BL, "1-4": GATE_BR, "2-3": GATE_TR },
	"1-4": { "1-2": GATE_TL, "1-3": GATE_TR, "4-1": GATE_CR, "3-4": GATE_BR },
	"1-5": { "4-4": GATE_CR, "4-5": GATE_BR, "1-6": GATE_TL, "1-7": GATE_BL },
	"1-6": { "1-5": GATE_BR, "1-8": GATE_BL },
	"1-7": { "1-5": GATE_TR, "1-8": GATE_TL },
	"1-8": { "1-6": GATE_TR, "1-7": GATE_BR },
	"2-1": { "2-2": GATE_BL },
	"2-2": { "2-1": GATE_TR, "2-3": GATE_BL, "2-4": GATE_BR },
	"2-3": { "2-2": GATE_TR, "2-4": GATE_BR, "1-3": GATE_BL },
	"2-4": { "2-2": GATE_TL, "2-3": GATE_TR, "4-2": GATE_CB, "3-3": GATE_BL },
	"2-5": { "4-4": GATE_BL, "4-5": GATE_BR, "2-6": GATE_TL, "2-7": GATE_TR },
	"2-6": { "2-5": GATE_BL, "2-8": GATE_TR },
	"2-7": { "2-5": GATE_BL, "2-8": GATE_TR },
	"2-8": { "2-6": GATE_BL, "2-7": GATE_BR },
	"3-1": { "3-2": GATE_TL },
	"3-2": { "3-1": GATE_BR, "3-3": GATE_TR, "3-4": GATE_TL },
	"3-3": { "3-2": GATE_BR, "3-4": GATE_BL, "2-4": GATE_TL },
	"3-4": { "3-2": GATE_BR, "3-3": GATE_TR, "4-3": GATE_CT, "1-4": GATE_TL },
	"3-5": { "4-4": GATE_TL, "4-5": GATE_TRO, "3-6": GATE_BL, "3-7": GATE_BR },
	"3-6": { "3-5": GATE_TL, "3-8": GATE_BR },
	"3-7": { "3-5": GATE_BL, "3-8": GATE_BR },
	"3-8": { "3-6": GATE_BL, "3-7": GATE_TL },
	"4-1": { "1-4": GATE_CL, "4-2": GATE_TR, "4-3": GATE_BR, "4-4": GATE_CC },
	"4-2": { "2-4": GATE_CT, "4-1": GATE_BL, "4-3": GATE_BR, "4-4": GATE_CC },
	"4-3": { "3-4": GATE_CR, "4-1": GATE_BL, "4-2": GATE_TL, "4-4": GATE_CC },
	"4-4": { "4-1": GATE_44LI, "4-2": GATE_44TI, "4-3": GATE_44BI, "1-5": GATE_44L, "2-5": GATE_44T, "3-5": GATE_44B },
	"4-5": { "5-1": GATE_45BI, "1-5": GATE_45L, "2-5": GATE_45T, "3-5": GATE_45B }
}

var OPTIMISTIC_ACCELERATION_TIME_IN_MS = 500;
var SAFE_ACCELERATION_TIME_IN_MS = 2000;
var JUMP_TIMEOUT_IN_MS = 5000;

// +----------------------------+
// | Global MAIN_BROWSER.Definitions |
// +----------------------------+

var MAIN_BROWSER_SIZE_ARRAY = Config.getValue("main_browser_size").split("x");
var MAIN_BROWSER_SIZE = new Size(
    parseInt(MAIN_BROWSER_SIZE_ARRAY[0]),
    parseInt(MAIN_BROWSER_SIZE_ARRAY[1])
);
var MAIN_BROWSER = new Browser("Main Browser", MAIN_BROWSER_SIZE);
MAIN_BROWSER.setUserAgent(Config.getValue("main_browser_agent"))

// +--------------------------------+
// | Convenience Methods and Helper |
// +--------------------------------+

function moveMouseToCenter() {
	// This methods helps prevents unwished popups of ingame objects.
	MAIN_BROWSER.moveMouse(MAIN_BROWSER.getRect().getCenter());
}

function leftClickAndPreventHover(point) {
	MAIN_BROWSER.leftClick(point);
	moveMouseToCenter();
}

function getClosestMatch(matches) {
	var closest_match = new Match();
	var center = MAIN_BROWSER.getRect().getCenter();

	for (var i = 0; i < matches.length; i++) {
		var match = matches[i];
        var old_dist = closest_match.rect.center.distanceTo(center);
        var new_dist = match.rect.center.distanceTo(center);

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
	var screenshot = MAIN_BROWSER.takeScreenshot();
	return Vision.findMatch(screenshot, this.button_tpl, 0.99);
}

IngameWindow.prototype.getIconMatch = function(pretaken_screenshot) {
	var screenshot = MAIN_BROWSER.takeScreenshot(); // FIXME!!!
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
	var screenshot = MAIN_BROWSER.takeScreenshot();
	return screenshot.copy(this.cached_window);
}

IngameWindow.getAnyCloseButtonMatch = function() {
	for (var i = 0; i < CLOSE_BUTTON_TPLS.length; i++) {
		var screenshot = MAIN_BROWSER.takeScreenshot();
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
	this.cached_mapname = "";
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
		var screenshot = MAIN_BROWSER.takeScreenshot();
		this.calculateTelemetry(screenshot);
	}
	return this.cached_level;
}

Minimap.prototype.getPosition = function(ignore_cache) {
	if (ignore_cache === true || this.cached_position.x == -1) {
		var screenshot = MAIN_BROWSER.takeScreenshot();
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
	MAIN_BROWSER.leftClick(realcoords);
}

Minimap.prototype.getOuterImage = function() {
	var screenshot = MAIN_BROWSER.takeScreenshot();
	var outer_mm = this.getOuterRect();
	return screenshot.copy(outer_mm);
}

Minimap.prototype.getInnerImage = function() {
	var screenshot = MAIN_BROWSER.takeScreenshot();
	var inner_mm = this.getInnerRect();
	return screenshot.copy(inner_mm);
}

Minimap.prototype.getInnerImageIsolate = function() {
	var inner_image = this.getInnerImage();

	// When the minimaps background image is turned off in the games settings,
	// its roughtly black. rgb(7, 7, 7) to be precise. Unfortunately this value
	// may differ minimaly on different devices and operating systems.
	// For more robustness we manipulate the image in a way that all black-ish
	// spots are marked white and everything else black. (yeah, its reversed).

	var min_hsv = new Color(0, 0, 0, "hsv");
	var max_hsv = new Color(180, 255, 30, "hsv");
	var isolate = inner_image.isolateColorRange(min_hsv, max_hsv);

	return isolate;
}

Minimap.prototype.getVelocityImage = function() {
	return this.getOuterImage().copy(new Rect(
		VELOCITY_MARGIN.x,
		VELOCITY_MARGIN.y,
		VELOCITY_SIZE.getWidth(),
		VELOCITY_SIZE.getHeight()
	));
}

Minimap.prototype.getMapnameImage = function() {
	return this.getOuterImage().copy(new Rect(
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

	for (var i = 0; i < MAPNAME_TPLS.length; i++) {
		var mapname_tpl = MAPNAME_TPLS[i];
		var match = Vision.findMatch(monochrome_mn, mapname_tpl, 0.95);
		
		Helper.debug("Mapname match, #" + i + ":", match);

		if (match.isValid()) {
			this.cached_mapname = INTERN_MAPNAME_MAPPING[i];
			return this.cached_mapname;
		}
	}

	Helper.debug("No mapname matched.");
	return "";
}

Minimap.prototype.isBackgroundVisible = function() {
	var inner_image = this.getInnerImageIsolate(); // !! using the isolate
	var white_image = new Image(inner_image.getSize(), new Color("white"));
	var equality = inner_image.pixelEquality(white_image);
	return equality < 0.92;
}

Minimap.prototype.getShipPosition = function() {
	var inner_image = this.getInnerImageIsolate(); // !! using the isolate
	var posmark_v_match = Vision.findMatch(inner_image, MM_POSMARK_V_TPL, 0.99);
	var posmark_h_match = Vision.findMatch(inner_image, MM_POSMARK_H_TPL, 0.99);
	return new Point(
		posmark_v_match.getRect().getCenter().getX(),
		posmark_h_match.getRect().getCenter().getY()
	);
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
	MAIN_BROWSER.leftClick(random_location);
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

Navigator.prototype.navigateToMap = function(dest_mapname) {
	var current_mapname = this.minimap.getMapname();

	if (current_mapname == "") {
		Helper.debug("Current map unknown (navigateToMap)");
		return;
	}
	
	if (current_mapname === dest_mapname) {
		Helper.log("We are already on the destination map.");
		return;
	}

	var route = Algorithm.dijkstra(MAP_GRAPH, current_mapname, dest_mapname);
	if (route.length == 0) {
		Helper.log("No route from", current_mapname, "to", dest_mapname, "found.");
		return;
	}

	Helper.log("Route from", current_mapname, "to", dest_mapname, "found:", route);
	route.shift(); // remove first element (the map were currently on)

	// Travel and jump from map to map.
	for (var i = 0; i < route.length; i++) {
		var waypoint = route[i];
		Helper.log("Trying to navigate and jump to", waypoint);

		if (!this.jumpFromTo(current_mapname, waypoint)) {
			Helper.log("Navigating and jumping to", waypoint, "failed");
			return;
		}
		current_mapname = waypoint;
	}
}

Navigator.prototype.jumpFromTo = function(current_mapname, dest_mapname) {
	var mm_level = this.minimap.getLevel(true); // Use the cached level
	
	if (mm_level == -1) {
		Helper.log("Unable to travel and jump to", dest_mapname);
		return false;
	}
	
	var dest_jgate_pos = JGATE_POS[current_mapname][dest_mapname][mm_level];
	Helper.log("Trying to travel to", dest_mapname);

	if (!this.travelTo(dest_jgate_pos)) {
		Helper.log("Unable to travel to", dest_mapname);
		return false;
	}

	// TODO: Ask botfather devs to not only add keyboard support to their browser,
	// but make it availabe to the script engine, so that we can use the 'J'-key to jump.

	Helper.log("Waiting for the jump button to become clickable.");
	Helper.sleep(3);
	Helper.log("Trying to find and click the jump button.");

	var screenshot = MAIN_BROWSER.takeScreenshot();
	var jump_button_match = Vision.findMatch(screenshot, JUMP_BUTTON_TPL, 0.8);
	Helper.debug("Best jump button match found:", jump_button_match);

	if (!jump_button_match.isValid()) {
		Helper.log("Clicking the jump button failed.");
		return false;
	}

	MAIN_BROWSER.leftClick(jump_button_match.getRect().getCenter());
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
	Helper.debug("Flying somewhere quickly...");
	var timer = new Timer();
	timer.start();	

	while (this.shipIsMoving()) {
		if (timer.hasExpired(max_flight_time_in_ms)) {
			return false; // max flight time reached
		}
		Helper.msleep(100);
	}

	Helper.debug("Destination reached, quick flight done.");
	return true; // Ship reached destination
}

Navigator.prototype.getPosOfNextDemilitarizedZone = function() {
	var current_mapname = this.minimap.getMapname(false);
	var mm_level = this.minimap.getLevel(true);
	var ship_pos = this.minimap.getShipPosition();

	if (current_mapname === "" || mm_level === -1) {
		Helper.debug("Unable to get the position of the next demilitarized zone.");
		return new Point(-1, -1);
	}

	var gate_positions = JGATE_POS[current_mapname];
	var keys = Object.keys(gate_positions);

	// Provide a valid value we can compare other gates positions to.
	// This value (index 0) is ignored by the for loop (> instead of >=).
	var closest_gate_pos = gate_positions[keys[0]][mm_level];

	for (var i = keys.length - 1; i > 0; i--) {
		var current_gate_pos = gate_positions[keys[i]][mm_level];
		
		var old_dist = ship_pos.distanceTo(closest_gate_pos);
		var new_dist = ship_pos.distanceTo(current_gate_pos);
		
		if (new_dist < old_dist) {
			closest_gate_pos = current_gate_pos;
		}
	}

	return closest_gate_pos;
}

Navigator.prototype.travelToNextDemilitarizedZone = function() {
	var gate_pos = this.getPosOfNextDemilitarizedZone();
	if (gate_pos.getX() === -1) {
		Helper.debug("Unable to travel to the next demilitarized zone.");
		return false;
	}
	this.travelTo(gate_pos);
	return true;
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
	var screenshot = MAIN_BROWSER.takeScreenshot();
	return Vision.findMatch(screenshot, REPAIR_ON_BASE_TPL, 0.95).isValid();
}

Client.prototype.revive = function(location) {
	var screenshot = MAIN_BROWSER.takeScreenshot();
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
		MAIN_BROWSER.leftClick(option_match.getRect().getCenter());
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

	MAIN_BROWSER.leftClick(button_match.getRect().getCenter());
	Helper.sleep(1);

	Helper.log("Ship repair confirmed.");

	this.revives_done++;
	return true;
}

Client.prototype.isDisconnected = function(pretaken_screenshot) {
	var screenshot = pretaken_screenshot ? pretaken_screenshot : MAIN_BROWSER.takeScreenshot();
	return Vision.findMatch(screenshot, DISCONNECTED_TPL, 0.95).isValid();
}

Client.prototype.reconnect = function(pretaken_screenshot) {
	var screenshot = pretaken_screenshot ? pretaken_screenshot : MAIN_BROWSER.takeScreenshot();
	var disconnected_match = Vision.findMatch(screenshot, DISCONNECTED_TPL, 0.95);

	if (!disconnected_match.isValid()) {
		Helper.debug("The client seems to be not disconnected.");
		return false;
	}

	// The reconnect button is slightly below the match (we're looking for the big X icon)
	var tpl_bl = disconnected_match.getRect().getBottomLeft();
	var new_connection_btn = tpl_bl.pointAdded(new Point(10, 10));

	MAIN_BROWSER.leftClick(new_connection_btn);
	Helper.log("Reconnect button clicked.");

	do {
		Helper.log("Reconnecting...");
		Helper.sleep(1);
	}
	while (Vision.findMatch(MAIN_BROWSER.takeScreenshot(), RECONNECTING_TPL, 0.95).isValid());

	Helper.log("Reconnected.");
	return true;
}

Client.prototype.isIngame = function() {
	if (MAIN_BROWSER.getUrl().getQuery().indexOf("internalMapRevolution") === -1) {
		Helper.debug("Client not ingame. Url does not contain internalMapRevolution");
		return false;
	}

	var screenshot = MAIN_BROWSER.takeScreenshot();
	var logout_button_match = Vision.findMatch(MAIN_BROWSER.takeScreenshot(), LOGOUT_BUTTON_TPL, 0.99);

	Helper.debug("Logout button match (isIngame check):", logout_button_match);
	return logout_button_match.isValid() || this.isDisconnected() || this.isDestroyed();
}

Client.prototype.autoLogin = function(username, password) {
	Helper.log("Loading game website...");
	
	MAIN_BROWSER.loadUrl("http://darkorbit.com/?lang=en");
    Helper.sleep(Config.getValue("login_delay_in_secs"));
	MAIN_BROWSER.finishLoading();

	Helper.log("Entering account credentials...");

	var fill_uname_js = "document.getElementById('bgcdw_login_form_username').value = '" + username + "';";
	MAIN_BROWSER.executeJavascript(fill_uname_js);
	Helper.sleep(1);
	
	var fill_pword_js = "document.getElementById('bgcdw_login_form_password').value = '" + password + "';";
	MAIN_BROWSER.executeJavascript(fill_pword_js);
	Helper.sleep(1);
	
	var formsubmit_js = "document.bgcdw_login_form.submit();";
	MAIN_BROWSER.executeJavascript(formsubmit_js);

	Helper.log("Form submitted.");
	Helper.sleep(2);

	MAIN_BROWSER.finishLoading();
	this.getIngame();
}

Client.prototype.getIngame = function() {
	var ingame_url = MAIN_BROWSER.getUrl().getHost() + "/indexInternal.es?action=internalMapRevolution";

	MAIN_BROWSER.loadUrl(ingame_url);
	MAIN_BROWSER.finishLoading();

	do {
		Helper.log("Client is not ingame. Looking for the start button...");

		var screenshot = MAIN_BROWSER.takeScreenshot();
		var start_button_match = Vision.findMatch(screenshot, START_BUTTON_TPL, 0.94);
		
		if (start_button_match.isValid()) {
			// The start buttons match score is configured low, so the chance that
			// the game start succeeds is increased. However, a low score results
			// in the bot clicking faulty matches multiple times.
			MAIN_BROWSER.leftClick(start_button_match.getRect().getCenter());
			Helper.log("Tried to click the game start button.");
		} else {
			Helper.log("Start button not found. Checking again in 3 seconds.");
		}

		Helper.sleep(3);
	} while (!this.isIngame());
}

Client.prototype.modifyResources2D = function() {
	MAIN_BROWSER.replaceResource("box2.swf", LOOT_SWF_URL);
	MAIN_BROWSER.replaceResource("orangePumpkin.swf", LOOT_SWF_URL);
	MAIN_BROWSER.replaceResource("winterGiftBox.swf", LOOT_SWF_URL);
	MAIN_BROWSER.replaceResource("icyBox.swf", LOOT_SWF_URL);
    MAIN_BROWSER.replaceResource("prometheusBox.swf", LOOT_SWF_URL);
}

Client.prototype.haltShip = function(ignore_cache) {
	// TODO: move this once a Ship class exists
	if (ignore_cache === true || !this.cached_logout_button.isValid()) {
		this.cached_logout_button = Vision.findMatch(MAIN_BROWSER.takeScreenshot(), LOGOUT_BUTTON_TPL, 0.99);
		Helper.debug("Cached logout button (haltShip):", this.cached_logout_button);
	}
	if (this.cached_logout_button.isValid()) {
		// Triggering the logout process makes the ship stop moving instantly
		MAIN_BROWSER.leftClick(this.cached_logout_button.getRect().getCenter());
		// It takes a moment for the ship to stop
		Helper.msleep(Config.getValue("logout_halt_delay_in_ms"));
		return true;
	}
	return false;
}

// +----------------+
// | Ship Managment |
// +----------------+

var Ship = function(ship_window, navi) {
	this.ship_window = ship_window;
	this.navi = navi;
}

Ship.prototype.getHPDisplayImage = function() {
	var screenshot = this.ship_window.takeScreenshot();
	return screenshot.copy(SHIP_HPBARS_SUBRECT);
}

Ship.prototype.getGreenHPBarsMatches = function() {
	var hp_image = this.getHPDisplayImage();
	return Vision.findMatches(hp_image, SHIP_HPBAR_GREEN_TPL, 0.99);
}

Ship.prototype.getEmptyHPBarsMatches = function() {
	var hp_image = this.getHPDisplayImage();
	return Vision.findMatches(hp_image, SHIP_HPBAR_EMPTY_TPL, 0.99);	
}

Ship.prototype.isHPDisplayConfigured = function() {
	return this.getGreenHPBarsMatches().length + this.getEmptyHPBarsMatches().length > 0;
}

Ship.prototype.configureHPDisplay = function() {
	if (this.isHPDisplayConfigured()) {
		Helper.debug("Ship HP display was already correctly configured.");
		return true;
	}
	var ship_window_icon_match = this.ship_window.getIconMatch();
	if (!ship_window_icon_match.isValid()) {
		Helper.debug("Could not get ship window icon match to configure the hp display.");
		return false;
	}
	// Click the ship windows hp display to change it from numbers to bars.
	MAIN_BROWSER.leftClick(ship_window.getTopLeft().pointAdded(SHIP_HPBARS_SUBRECT.getCenter()));
	return true;
}

Ship.prototype.numSeventhHPBars = function() {
	return this.getGreenHPBarsMatches().length;
}

Ship.prototype.isOnLowHP = function() {
	return this.numSeventhHPBars() < Config.getValue("low_hp_threshold");
}

Ship.prototype.isOnCriticalHP = function() {
	return this.numSeventhHPBars() < Config.getValue("critical_hp_threshold");
}

Ship.prototype.findAndCacheRepairCPU = function() {
	var screenshot = MAIN_BROWSER.takeScreenshot();
	this.rep_match = new Match(); // Default
	
	for (var i = 0; i < REP_TPLS.length; i++) {
		var rep_tpl = REP_TPLS[i];
		this.rep_match = Vision.findMatch(screenshot, rep_tpl, 0.999);

		if (this.rep_match.isValid()) {
			Helper.debug("Repair robot CPU found and cached!");
			return true;
		}
	}

	return false;
}

Ship.prototype.triggerRepair = function() {
	if (this.rep_match === undefined) {
		this.findAndCacheRepairCPU()
	}
	if (!this.rep_match.isValid()) {
		Helper.debug("No repair CPU in the hotbar. Hope, that the user has an auto-repair CPU.");
		return false;
	}
	leftClickAndPreventHover(this.rep_match.getRect().getCenter());
	return true;
}

Ship.prototype.waitForFullHP = function() {
	var last_hp_display_image = this.getHPDisplayImage();

	var timer = new Timer();
	timer.start();

	const timeout = 45;
	const timeout_in_ms = timeout * 1000;

	while (!timer.hasExpired(timeout_in_ms)) {

		var current_seventh_hpbars = this.numSeventhHPBars();
		if (current_seventh_hpbars === 7) {
			return true; // Ship now has full HP
		}

		Helper.log("Waiting for full HP...", current_seventh_hpbars + "/7");
		Helper.sleep(2);

		var current_hp_display_image = this.getHPDisplayImage();
		var pixel_equality = current_hp_display_image.pixelEquality(last_hp_display_image);

		if (pixel_equality < 1) {
			Helper.debug("The ships HP changed, resetting the timer.");
			timer.restart();
		} else {
			// Find and click the user repair CPU if visible. (most user dont rely on this as the have the auto-repair CPU).
			this.triggerRepair();
		}
	}

	Helper.log("No longer waiting for full HP. The ships HP did no change within the last", timeout, "seconds");
	return false;
}

Ship.prototype.repairOnNextGate = function() {
	if (!this.navi.travelToNextDemilitarizedZone()) {
		Helper.debug("Unable to repair on next gate.");
		return false;
	}
	this.waitForFullHP();
	return true;
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
	var screenshot = MAIN_BROWSER.takeScreenshot();
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
	var screenshot = MAIN_BROWSER.takeScreenshot();
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
	var browser_center = MAIN_BROWSER.getRect().getCenter();

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
	var screenshot = MAIN_BROWSER.takeScreenshot();
	var isolated = screenshot.isolateColorRange(LOOT_MIN_HSV, LOOT_MAX_HSV);
	var loot_matches = Vision.findBlobs(isolated, LOOT_BLOB_TPL);

	if (prevent_animation_detection) {
		loot_matches = this.filterAnimationMatches(loot_matches);
	}

	return getClosestMatch(loot_matches);
}

Collector.prototype.collectLoot = function() {
	for (var loot_in_a_row = 0; loot_in_a_row < 20; loot_in_a_row++) {

		if (loot_in_a_row == 0) {
			if (this.findClosestLoot().isValid()) {
				// Initially found something. Stop the ship inflight and take another
				// screenshot to get the loots precise position.
				this.client.haltShip(); // by triggering the logout process

				// We assume that the logout will be canceled by the collector clicking loot
				// or the navigator clicking on the minimap.
				Helper.debug("Hope that the navigator cancels the logout-process.");
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
			// Could not find the loot again. If we found loot before, the logout process
			// has already been canceled by the ship moving to the loot. However if
			// loot_in_a_row is 0, we have to cancel the logout process explicitly.
			if (loot_in_a_row == 0) {
				// Cancel the logout process explicitly by moving
				Helper.debug("Cancel logout process by flying somewhere.");
				this.navi.flyToRandomLocation();
				return false;
			}
			return true;
		}

		Helper.debug("Closest loot found:", closest_loot);

		MAIN_BROWSER.leftClick(closest_loot.getRect().getCenter());
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

var Hunter = function(pet, navi, client, ship) {
	this.pet = pet;
	this.navi = navi;
	this.client = client;
	this.ship = ship;
	this.cached_x1_ammo_match = new Match();
	this.cached_x2_ammo_match = new Match();
	this.cached_x3_ammo_match = new Match();
	this.cached_x4_ammo_match = new Match();
	this.last_ammo_icon_image = new Image();
}

Hunter.prototype.cacheAmmoMatch = function(ammo_tpl, current) {
	var screenshot = MAIN_BROWSER.takeScreenshot();
	var ammo_match = current;

	if (!ammo_match.isValid()) {
		Helper.debug("Selected ammo not cached yet.");

		var ammo_match = Vision.findMatch(screenshot, ammo_tpl, 0.99);
		if (!ammo_match.isValid()) {
			Helper.debug("Couldn't find and cache selected ammo.");
		}
	}
	return ammo_match;
}

Hunter.prototype.getAmmoMatch = function() {
	switch (Config.getValue("hunter_ammo")) {
		case "x4":
			this.cached_x4_ammo_match = this.cacheAmmoMatch(X4_AMMO_TPL, this.cached_x4_ammo_match);
			return this.cached_x4_ammo_match;
		case "x3":
			this.cached_x3_ammo_match = this.cacheAmmoMatch(X3_AMMO_TPL, this.cached_x3_ammo_match);
			return this.cached_x3_ammo_match;
		case "x2":
			this.cached_x2_ammo_match = this.cacheAmmoMatch(X2_AMMO_TPL, this.cached_x2_ammo_match);
			return this.cached_x2_ammo_match;
		default: // x1
			this.cached_x1_ammo_match = this.cacheAmmoMatch(X1_AMMO_TPL, this.cached_x1_ammo_match);
			return this.cached_x1_ammo_match;
	}
}

Hunter.prototype.toggleAttack = function() {
	var ammo_match = this.getAmmoMatch();
	if (!ammo_match.isValid()) {
		Helper.log("Unable to start shooting.");
		return false;
	}
	MAIN_BROWSER.leftClick(ammo_match.getRect().getCenter());
	return true;
}

Hunter.prototype.findSelection = function() {
	var screenshot = MAIN_BROWSER.takeScreenshot();
	var isolated = screenshot.isolateColorRange(TARGET_MIN_HSV, TARGET_MAX_HSV);
	var matches = Vision.findBlobs(isolated, TARGET_BLOB_TPL);
	if (matches.length == 0) {
		return new Match();
	}
	return matches[0];
}

Hunter.prototype.findClosestNPCs = function() {
	var screenshot = MAIN_BROWSER.takeScreenshot();
	var isolated = screenshot.isolateColorRange(NPC_MIN_HSV, NPC_MAX_HSV);
	var matches = Vision.findBlobs(isolated, NPC_BLOB_TPL);
	return getClosestMatch(matches);
}

Hunter.prototype.getAmmoIconImage = function() {
	var ammo_match = this.getAmmoMatch();
	if (!ammo_match.isValid()) return new Image(); // invalid image

	var ammo_real_tl = ammo_match.getRect().getTopLeft().pointAdded(XX_AMMO_TPL_TO_BTN_BORDER_OFFSET);
	var ammo_subrect = new Rect(ammo_real_tl, XX_AMMO_TPL_SIZE);

	var screenshot = MAIN_BROWSER.takeScreenshot();
	return screenshot.copy(ammo_subrect);
}

Hunter.prototype.rememberAmmoIconImage = function() {
	var ammo_icon_image = this.getAmmoIconImage();
	if (ammo_icon_image.isNull()) {
		Helper.debug("The NPC hunter was unable to take a screenshot of the ammo icon.");
		return false;
	}
	this.last_ammo_icon_image = ammo_icon_image;
	return true;
}

Hunter.prototype.ammoIconImageChanged = function() {
	var new_ammo_icon_image = this.getAmmoIconImage();
	var pixel_equality = new_ammo_icon_image.pixelEquality(this.last_ammo_icon_image);
	return pixel_equality < 1;
}

Hunter.prototype.NOTHING_ATTACKED = 0;
Hunter.prototype.ATTACKED_SOMETHING = 1;
Hunter.prototype.CRITICAL_SHIP_STATE = 2;

Hunter.prototype.huntNPCs = function() {
	var npc_match = this.findClosestNPCs();
	if (!npc_match.isValid()) {
		//Helper.debug("No NPCs found.");
		return this.NOTHING_ATTACKED;
	}

	var ship_was_moving = this.navi.shipIsMoving();

	while (true) {
		// Try to select the NPC. This might fail when our ship and the NPC are both moving.
		// However, if the ship was not moving, we consider the selection attempt a success.
		// Because if the bot can't select an NPC reliably while standing still, it won't be
		// able to select and attack NPCs at all due to low hardware specs.
		MAIN_BROWSER.leftClick(npc_match.getRect().getCenter());

		if (!ship_was_moving) {
			Helper.log("NPC selected."); // Keep the "." in contrast to the "!" below
			break;
		}

		// We need to give the marker time to fade in, otherwise the algorithm won't notice
		// the NPC and it will instantly look for new NPCs. This can lead to a situation where
		// hunter is rapidly changing targets without attacking them.
		Helper.msleep(Config.getValue("marker_fade_in_delay_in_ms"));

		if (this.findSelection().isValid()) {
			Helper.log("NPC selected!"); // Keep the "!" in contrast to the "." above
			break;
		}

		// The ship and the NPC probably moved. Get a new match.
		npc_match = this.findClosestNPCs();

		if (!npc_match.isValid()) {
			Helper.debug("The NPC disappeared.");
			return this.ATTACKED_SOMETHING;
		}
	}

	// Start the attack
	this.toggleAttack();

	// If the ship was not moving, the marker had no time to fade in since we selected
	// the already attacked NPC. We need to give the marker time to fade in, otherwise
	// the algorithm will consider the NPC escaped and it will instantly look for new
	// NPCs. This can lead to a situation where NPCs are no longer attacked properly
	// and the ship is changing targets rapidly without killing them.
	// NOTE: We wait half the markes fade in delay to speed up the hunter when the
	// ship is stationary fighting NPCs. We assume enough time passed until the hunter
	// checks whether the enemy escaped. In the "NPC select loop" above, we need to
	// wait the full duration, because the hunter needs to know whether we managed to
	// actually selected the found NPC.
	if (!ship_was_moving) {
		Helper.msleep(Config.getValue("marker_fade_in_delay_in_ms") / 2);
	}

	// Under strange conditions the bot might fail to properly attack the selected NPC.
	// The bot will check that edge case from time to time.
	// This can also happen when the hunter selects an NPC which then leaves the screen
	// but reapears before the hunter managed to select different NPC.
	var edge_case_check_timer = new Timer();
	edge_case_check_timer.start();
	const EDGE_CASE_CHECK_TIMER_TIMEOUT = 5 * 1000;

	var hp_check_timer = new Timer();
	hp_check_timer.start();
	const HP_CHECK_TIMER_TIMEOUT = 3 * 1000;

	var life_check_timer = new Timer();
	life_check_timer.start();
	const LIFE_CHECK_TIMER_TIMEOUT = 15 * 1000;

	while (true) {

		// Check whether the NPC escaped
		var selection_match = this.findSelection();
		if (!selection_match.isValid()) {
			// It takes about 500ms for the credits to update. To inform the user about whether
			// an NPC got killed or escaped, we would have to wait atleast these 500 ms to make
			// sure the display got update properly. I decided against this to save the 500 ms.
			Helper.log("NPC killed (or escaped).");
			return this.ATTACKED_SOMETHING;
		}

		// Chase the NPC if necessary
		var player_to_npc_distance = selection_match.getRect().getCenter().distanceTo(MAIN_BROWSER.getRect().getCenter());
		var shooting_range = Math.min(MAIN_BROWSER.getSize().getWidth(), MAIN_BROWSER.getSize().getHeight()) / 4;

		if (player_to_npc_distance > shooting_range) {
			Helper.log("Chasing the attacked NPC");
			MAIN_BROWSER.leftClick(selection_match.getRect().getCenter().pointAdded(new Point(0, 22)));
			Helper.msleep(OPTIMISTIC_ACCELERATION_TIME_IN_MS);
		}

		if (hp_check_timer.hasExpired(HP_CHECK_TIMER_TIMEOUT)) {
			Helper.debug("Performing a HP check while hunting.");

			if (this.ship.isOnCriticalHP()) {
				// Stop attacking to allow the ship to heal.
				this.toggleAttack();
				Helper.log("Hunting stopped because the ship is on critical HP.");
				// Indicate that we hunted an NPC, this will make the scheduler perform a HP check
				return this.CRITICAL_SHIP_STATE;
			}

			hp_check_timer.restart();
		}

		if (life_check_timer.hasExpired(LIFE_CHECK_TIMER_TIMEOUT)) {
			Helper.debug("Performing a aliveness and connection check while hunting.");
			if (this.client.isDestroyed() || this.client.isDisconnected()) {
				return this.CRITICAL_SHIP_STATE;
			}

			life_check_timer.restart();
		}

		// Check whether we're still attacking. We consider the ship no longer attacking if the
		// ammo icon isn't animated. In order to check this we take an image of it and compare
		// it to an image take one second later.
		if (edge_case_check_timer.hasExpired(EDGE_CASE_CHECK_TIMER_TIMEOUT)) {
			Helper.debug("Performing an edge case check while hunting.");

			this.rememberAmmoIconImage();
			Helper.msleep(1000);

			if (!this.ammoIconImageChanged() && this.findSelection().isValid()) {
				Helper.log("The ship stopped shooting the NPC. Restarting the attack.");
				this.toggleAttack();
			}

			edge_case_check_timer.restart();
		}

		Helper.log("Still shooting the NPC...");
		Helper.msleep(250);
	}

	// Fallback
	return this.NOTHING_ATTACKED;
}

Hunter.registerResourceRules = function() {
	MAIN_BROWSER.blockResource("spacemap/3d/textures/");
	MAIN_BROWSER.blockResource("spacemap/3d/meshes/");

	var replacement_ships_url = "https://pbdo-bot.net/magic/XD/" + Config.getValue("hunter_targets") + ".swf"
	MAIN_BROWSER.replaceResource("bpsecure.com/spacemap/graphics/assets/replacementShips.swf", replacement_ships_url);
	MAIN_BROWSER.replaceResource("bpsecure.com/spacemap/graphics/ui/ui.swf", "https://pbdo-bot.net/magic/XD/ui.swf");
}

// +----------------+
// | Task Scheduler |
// +----------------+

var Scheduler = function(client, minimap, pet, collector, hunter, navi, ship) {
	this.client = client;
	this.minimap = minimap;
	this.pet = pet;
	this.collector = collector;
	this.hunter = hunter;
	this.navi = navi;
	this.ship = ship;

	this.just_collected_something = false;
	this.just_hunted_an_npc = false;

	this.script_stop_requested = false;
	this.client_check_requested = true; // true => check on startup
	this.pet_check_requested = true; // true => check on startup
	this.map_check_requested = true; // true => check on startup
	this.ship_hp_check_requested = true; // true => check on startup

	this.client_check_timer = new Timer();
	this.pet_check_timer = new Timer();
	this.ship_hp_check_timer = new Timer();

	this.client_check_timer.start();
	this.pet_check_timer.start();
	this.ship_hp_check_timer.start();
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

Scheduler.prototype.requestShipHPCheck = function() {
	this.ship_hp_check_requested = true;
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

Scheduler.prototype.doneCheckingTheShipsHP = function() {
	this.ship_hp_check_timer.restart();
	this.ship_hp_check_requested = false;
}

Scheduler.prototype.itsTimeToCheckTheClient = function() {
	var good_idea = !this.just_collected_something;
	var necessary = this.client_check_requested || this.client_check_timer.hasExpired(Config.getValue("client_check_timeout_in_seconds") * 1000);
	return good_idea && necessary;
}

Scheduler.prototype.itsTimeToCheckThePET = function() {
	var good_idea = !this.just_collected_something && Config.getValue("manage_pet") === true;
	var necessary = this.pet_check_requested || this.pet_check_timer.hasExpired(Config.getValue("pet_check_timeout_in_min") * 60 * 1000);
	return good_idea && necessary;
}

Scheduler.prototype.itsTimeToCheckTheMap = function() {
	var good_idea = !this.just_collected_something && !this.just_hunted_an_npc && Config.getValue("do_global_nav");
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
	// If we just collected loot or killed an NPC we want to look for more.
	var good_idea = !this.just_collected_something && !this.just_hunted_an_npc;
	var necessary = !this.navi.shipIsMoving();
	return good_idea && necessary;
}

Scheduler.prototype.itsTimeToCheckTheShipsHP = function() {
	var timeout_in_ms = 5 * 1000;
	var timeout_expired = this.ship_hp_check_timer.hasExpired(timeout_in_ms);
	return this.just_hunted_an_npc || this.ship_hp_check_requested || timeout_expired;
}

Scheduler.prototype.checkTheShipsHP = function() {
	if (this.ship.isOnCriticalHP() || this.ship.isOnLowHP()) {
		Helper.log("Ship is on critical or low HP, going to repair it.");
		this.ship.repairOnNextGate();
	}
	this.doneCheckingTheShipsHP();
}

Scheduler.prototype.checkTheClient = function() {
	// Reconnect, if disconnected and auto-reconnect is enabled
	this.checkTheConnection();
	if (this.script_stop_requested) return;

	// Repair the ship, if destroyed and auto repair is enabled
	this.checkTheShipStatus();
	if (this.script_stop_requested) return;
	
	// Reset check triggers
	this.doneClientChecking();
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
	var dest_mapname = Config.getValue("map");
	this.navi.navigateToMap(dest_mapname);

	if (this.minimap.getMapname() === dest_mapname) {
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

Scheduler.prototype.checkForNPCs = function() {
	switch (this.hunter.huntNPCs()) {
		case this.hunter.ATTACKED_SOMETHING:
			this.just_hunted_an_npc = true;
			break;
		case this.hunter.NOTHING_ATTACKED:
			this.just_hunted_an_npc = false;
			break;
		case this.hunter.CRITICAL_SHIP_STATE:
			this.checkTheShipsHP();
			this.checkTheClient();
			return;
	}
	Helper.msleep(Config.getValue("hunter_timeout_in_ms"));
}

Scheduler.prototype.moveTheShip = function() {
	Helper.log("Flying to a random location on the current map...");
	this.navi.flyToRandomLocation();
	Helper.msleep(OPTIMISTIC_ACCELERATION_TIME_IN_MS);
}

Scheduler.prototype.runMainAlgorithm = function() {

	while (!this.script_stop_requested) {

		if (this.itsTimeToCheckTheClient()) {
			Helper.debug("Time to check the client...");
			this.checkTheClient();
		}

		if (this.itsTimeToCheckTheShipsHP()) {
			Helper.debug("Time to check the ships HP.");
			this.checkTheShipsHP();
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
			//Helper.debug("Time to hunt NPCs...");
			this.checkForNPCs();
		}
		
		if (this.itsTimeToMoveTheShip()) {
			Helper.debug("Time to move the ship...");
			this.moveTheShip();
		}
		else if (Config.getValue("collect_loot") === false && Config.getValue("hunt_npcs") === false) {
			// Sleep if we're moving and not looking for loot or hunting NPCs
			Helper.sleep(2);
		}
	}

	Helper.debug("The scheduler returned.");
}

// +---------------------------------------------------------------+
// | Main Method and Algorithm, this uses everything defined above |
// +---------------------------------------------------------------+

function main() {

	// +------------------------------+
	// | Prepare the client and login |
	// +------------------------------+

	var client = new Client();

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
		Helper.log("REMEMBER: To turn your settings to low and play in 2D mode.");
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
	var pet_window = new IngameWindow(PET_WINDOW_SIZE, PET_ICON_TPL, PET_BUTTON_TPL);
    var ship_window = new IngameWindow(SHIP_WINDOW_SIZE, SHIP_ICON_TPL, SHIP_BUTTON_TPL);

	var minimap = new Minimap();
	var pet = new PET();
	var navi = new Navigator(minimap);
	var collector = new Collector(client, navi);
    var ship = new Ship(ship_window, navi);
	var hunter = new Hunter(pet, navi, client, ship);

	// +----------------------------------+
	// | Close unnecessary ingame windows |
	// +----------------------------------+

	if (Config.getValue("close_unnecessary_windows") === true) {
		Helper.log("Closing all windows.");
		IngameWindow.closeAll();
		Helper.log("All windows closed.");
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
        if (!ship_window.beOpened()) {
            Helper.log("FATAL! The bot was unable to open the Ship window.");
            return; 
        }
	}

	// +------------------------------+
	// | Find and measure the minimap |
	// +------------------------------+	

	if (minimap.getLevel() === undefined) {
		Helper.log("FATAL! Minimap not found. Make sure ingame windows don't overlap and that window borders are enabled.");
		return;
	}

	var outer_minimap = minimap.getOuterRect();
	var inner_minimap = minimap.getInnerRect();
	var mapname = minimap.getMapname();
	
	Helper.log("Minimap level:", minimap.getLevel());
	Helper.log("Minimap position:", outer_minimap.getLeft(), outer_minimap.getTop());
	Helper.log("Minimap size:", outer_minimap.getWidth(), outer_minimap.getHeight());
	Helper.log("Minimap mapname:", mapname);

	if (minimap.isBackgroundVisible()) {
		Helper.log("FATAL! Turn off your minimap background. Otherwise ship position detection may fail.");
		return;
	}

	if (SUPPORTED_MAPS.indexOf(mapname) === -1) {
		Helper.log("FATAL! Map", mapname, "is unsupported. Please start from one of these supported maps:", SUPPORTED_MAPS);
		return;
	}

	// +---------------------------------+
	// | Find and measure the PET window |
	// +---------------------------------+

	if (Config.getValue("manage_pet") === true && !pet.findWindow()) {
		Helper.log("FATAL! The bot was unable to find the PET window. Stopping now.");
		return;
	}

	// +-------------------------+
	// | Prepare the Ship window |
	// +-------------------------+

	if (!ship.configureHPDisplay()) {
		Helper.log("FATAL! The bot was unable to find the Ship window and set the HP display from numbers to bars.");
		return;
	}

	// +-------------------------------------+
	// | Ready to bot, running bot algorithm |
	// +-------------------------------------+
	
	Helper.log("Starting to bot.");
	var scheduler = new Scheduler(client, minimap, pet, collector, hunter, navi, ship);
	scheduler.runMainAlgorithm();
}

main();
