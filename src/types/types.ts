type SCENE_NAME = 
    "UC Boss";
type CAMERA_NAME = 
    "VC Boss Camera";

export type SHRINE_LOCATION = {
    name: string,
    position: [number, number],
    scene: SCENE_NAME,
    camera: CAMERA_NAME,
}


type WALL_NAME = 
    "New Bamboo Destructible WallCBF Intro1293.83647.338070" |
    "Bamboo Bat Blocker Container (1)CBF Cave Entrance1810.248-208.60" |
    "Bamboo Bat Blocker Container (5)CBF Cave Entrance2074.638-181.920" |
    "Bamboo Bat Blocker Container (3)UC Herder3638.09-847.280" |
    "Bamboo Bat Blocker Container (4)UC Herder3614.8-841.950" |
    "Bamboo Bat Blocker Container (5)UC Herder3589.8-838.250" |
    "Shita Key DoorUC Main Chamber3298.05-647.95010.28" |
    "Hit Box For Rock BlockUC North Puzzle3452.471-655.38050" |
    "Bamboo Bat Blocker ContainerUC North Puzzle3463.13-655.18890" |
    "Bamboo Bat Blocker Container (1)UC North Puzzle3475.61-643.49540" |
    "Hit Box For Rock BlockUC North Puzzle3466.688-631.1420" |
    "Bamboo Bat Blocker Container (2)UC North Puzzle3494.66-630.47540" |
    "Shita Key DoorUC North Puzzle3642.9-651.21530.28" |
    "Bamboo Bat Blocker Container (2)CBF Cave Entrance1915.478-13.900010";
    
type PUZZLE_NAME =
    "UC General Arena SetUC Arena Puzzle2913-484.80" |
    "New Puzzle SwitchUC Herder3414.1-716.20" |
    "New Puzzle SwitchUC Herder3562.044-710.93810";

type SIDE_QUEST_CREATURE_NAME =
    "First Save Trigger ContainerCBF Intro568.865652.078070" |
    "Asahi DarkCBF Intro638.455660.378069.5" |
    "First Talk Automatic Dialogue TriggerCBF Intro1260.95642.818070" |
    "Gasho Start TriggerCBF Intro1143.559.83807-0.003463745" |
    "Asahi SetCBF Intro1208.45643.878070" |
    "kiriKirigBG_0CBF Cave Entrance1883.37889.7999912.7" |
    "First Talk Automatic Dialogue TriggerCBF Cave Entrance2013.578-12.33850" |
    "kiriKirigBG_0CBF Cave Entrance1828.278-170.612.7" |
    "Shimeji CBF ContainerCBF Cave Entrance1771.157-225.30" |
    "Openned Cave Dialogue triggerCBF Cave Entrance2074.458-188.10" |
    "Automatic Dialogue Trigger IndependantCBF Cave Entrance2044.756-192.26190" |
    "Shimeji UC First Interaction ContainerUC Arena Puzzle2831.1-501.10.63" |
    "Automatic Dialogue Trigger IndependantUC Herder3414.545-789.5920" |
    "GoroGoro Armapillo SetUC Herder3373.451-739.68050" |
    "GoroGoro Quest FinishedUC Herder3442.406-803.4520.18" |
    "Ame Armapillo SetUC Herder3429.99-852.320" |
    "Ame Quest FinishedUC Herder3435.555-803.43190.18" |
    "Mamoru Armapillo SetUC Herder3598.884-766.80810" |
    "Mamoru Quest FinishedUC Herder3403.255-803.43190.18" |
    "Pendula Armapillo SetUC Herder3660.86-863.190" |
    "Pendula Quest FinishedUC Herder3410.676-803.4720.18" |
    "Automatic Dialogue Trigger IndependantUC North Puzzle3604-645.21540.82" |
    "AsahiUC North Puzzle3592.7-655.71540" |
    "First Talk Automatic Dialogue TriggerCoast 12328.5252.2380680.82" |
    "Dash Gap Dialogue TriggerCoast 12404.355-7.3519330.82";

type MINING_ORE_NAME =
    "Static KitsunebiCBF Intro695.455656.888070" |
    "Static KitsunebiCBF Intro755.951265.138070" |
    "Static KitsunebiCBF Intro759.521266.538060" |
    "Static KitsunebiCBF Intro763.861266.538060" |
    "Static KitsunebiCBF Intro828.375651.938060" |
    "Static KitsunebiCBF Intro831.555651.938060" |
    "Static KitsunebiCBF Intro834.735651.938060" |
    "Static KitsunebiCBF Intro852.255652.438060" |
    "Static KitsunebiCBF Intro855.255652.438060" |
    "Static KitsunebiCBF Intro867.955656.228070" |
    "Static KitsunebiCBF Intro871.155656.228070" |
    "Static KitsunebiCBF Intro893.745661.638070" |
    "Static KitsunebiCBF Intro900.575661.538070" |
    "Static KitsunebiCBF Intro906.375661.698070" |
    "Static Kitsunebi (1)CBF Intro918.435552.838070" |
    "Static Kitsunebi (2)CBF Intro911.905652.838070" |
    "Bump LanternCBF Bump Intro1405.85668.05420" |
    "Bump LanternCBF Bump Intro1405.85679.888070" |
    "Bump LanternCBF Bump Intro1492.156113.73810" |
    "Bamboo Forest 1 Fox Flame 6CBF Bump Intro1587.055102.83810" |
    "Bump LanternCBF Bump Intro1788.35657.238070" |
    "Bump LanternCBF Bump Intro1801.05663.338070" |
    "Bump LanternCBF Cave Entrance2032.64-184.30" |
    "Bump LanternCBF Cave Entrance1827.238-191.46190" |
    "Arena Treasure Chest ContainerUC Arena Puzzle2906.656-492.950" |
    "Fox FlameUC Main Chamber3183.5-564.40" |
    "Bump LanternUC Herder3524.8-774.40" |
    "Bump LanternUC Herder3511.1-763.50010" |
    "Bump LanternUC Herder3336.156-856.0220" |
    "Bump LanternUC Herder3513.4-865.0040" |
    "Bump LanternUC Herder3513.4-850.0040" |
    "Bump LanternUC Herder3628.255-836.9620" |
    "Bump LanternUC Herder3599.444-784.53810" |
    "Bump LanternUC Herder3577.744-763.93810" |
    "Bump LanternUC Herder3577.744-749.43810" |
    "Bump LanternUC Main Chamber3164.245-733.4620" |
    "Bump LanternUC Main Chamber3164.245-717.0320" |
    "Bump LanternUC Main Chamber3196.755-668.9620" |
    "Bump LanternUC North Puzzle3508.055-617.77730" |
    "Teasure Chest ContainerUC Boss3750.236-654.29190" |
    "Armapillo EyeUC Boss3754.536-651.29190" |
    "Treasue Chest KitunebiUC Boss3746.046-651.29190" |
    "Bump LanternUC North Puzzle3629.655-621.47730" |
    "Bump LanternUC North Puzzle3583.155-609.07730" |
    "Bump LanternUC Main Chamber3168.155-674.9620" |
    "Bump LanternUC Shortcut2988.805-680.0720" |
    "Bump LanternUC Shortcut2970.276-671.3220" |
    "Bump LanternUC Shortcut2943.076-654.8620" |
    "Bump LanternUC Shortcut2764.176-605.1620" |
    "Bump LanternUC Shortcut2704.176-595.9620" |
    "Fox FlameUC Amaterasu2435.687-536.00010" |
    "Fox FlameUC Amaterasu2435.687-530.00010" |
    "Fox FlameUC Amaterasu2435.687-524.00010" |
    "Bump LanternUC Amaterasu2447.745-519.2620" |
    "Fox FlameUC Amaterasu2405.19-473.40010" |
    "Fox FlameUC Amaterasu2405.19-461.40010" |
    "Bump LanternUC Amaterasu2445.745-446.96190" |
    "Fox FlameUC Entrance2569.7-430.240" |
    "Fox FlameUC Entrance2569.7-418.240" |
    "Fox FlameUC Entrance2569.7-412.240" |
    "Bump LanternUC Entrance2557.9-399.40" |
    "Bump LanternUC Entrance2614.9-388.50" |
    "Bump LanternUC Entrance2660-376.60" |
    "Fox FlameUC Entrance2675.1-340.040" |
    "Bump LanternUC Entrance2680.8-320.380" |
    "Bump LanternUC Entrance2623.7-306.50" |
    "Fox FlameUC Entrance2675.1-352.040" |
    "Fox FlameUC Entrance2675.1-346.040" |
    "Fox FlameUC Entrance2675.1-334.040" |
    "Bump LanternUC Entrance2621-260.30" |
    "Bump LanternUC Entrance2702.5-240.50" |
    "Bump LanternUC Entrance2702.5-228.140" |
    "Bump LanternUC Entrance2654.7-206.90" |
    "Bump LanternUC Entrance2628.5-203.30" |
    "Bump LanternUC Entrance2435.356-186.6020" |
    "Bump LanternCBF Cave Entrance1868.861-134.27420" |
    "Bump LanternCBF Cave Entrance1829.826-116.92860" |
    "Bump LanternCBF Cave Entrance1749.5-76.899990" |
    "Bump LanternCBF Cave Entrance1798.7-57.399990" |
    "Bump LanternCBF Cave Entrance1778.8-16.599990" |
    "Bump LanternCBF Cave Entrance1883.7-15.600310" |
    "Fox Flame Coast 1Coast 12359.656-5.7619320" |
    "Fox Flame Coast 1 (1)Coast 12362.656-5.7619320" |
    "Fox Flame Coast 1 (2)Coast 12365.456-5.7619320" |
    "Fox Flame Coast 1 (3)Coast 12368.355-5.7619320" |
    "Bump LanternCoast 12375.156-6.4075150" |
    "Fox Flame Coast 1 (4)Coast 12371.256-5.7619320";

type MAP_NAME =
    "CBFIntro_MapChunk_01" |
    "CBFBumpIntro_MapChunk_01" |
    "CBFCaveEntrance_MapChunk_01" |
    "CBFCaveEntrance_MapChunk_05" |
    "UCEntrance_MapChunk_01" |
    "UCArena_MapChunk_01" |
    "UCArena_MapChunk_02" |
    "UCMainChamber_MapChunk_01" |
    "UCHerder_MapChunk_01" |
    "UCHerder_MapChunk_05" |
    "UCHerder_MapChunk_02" |
    "UCHerder_MapChunk_03" |
    "UCHerder_MapChunk_04" |
    "UCNorthPuzzle_MapChunk_01" |
    "UCBoss_MapChunk_01" |
    "UCShorcut_MapChunk_02" |
    "UCShorcut_MapChunk_01" |
    "UCAmateratsu_MapChunk_01" |
    "CBFCaveEntrance_MapChunk_03" |
    "Coast1_MapChunk_01";

type MAP_ICON_NAME =
    "CBFIntro_MapIcon_Kodama" |
    "CBFIntro_MapIcon_Secret_Bamboo" |
    "UC Shorcut_MapIcon_Shrine" |
    "CBFIntro_MapIcon_Secret_Bamboo (2)" |
    "CBFIntro_MapIcon_Secret_Bamboo (3)" |
    "CBFBumpIntro_MapIcon_Shrine01" |
    "CBFCaveEntrance_MapIcon_Shrine01" |
    "CBFIntro_MapIcon_Secret_Bamboo (6)" |
    "CBFIntro_MapIcon_Secret_Bamboo (7)" |
    "CBFBumpIntro_MapIcon_Kodama03" |
    "CBFBumpIntro_MapIcon_Kodama01" |
    "CBFBumpIntro_MapIcon_Kodama02" |
    "CBFBumpIntro_MapIcon_Secret_Bamboo" |
    "CBFBumpIntro_MapIcon_Secret_Bamboo (1)" |
    "CBFBumpIntro_MapIcon_Secret_Bamboo (2)" |
    "CBFBumpIntro_MapIcon_Secret_Bamboo (3)" |
    "CBFBumpIntro_MapIcon_Secret_Bamboo (4)" |
    "CBFBumpIntro_MapIcon_Secret_Bamboo (5)" |
    "CBFBumpIntro_MapIcon_Secret_Bamboo (6)" |
    "CBFBumpIntro_MapIcon_Secret_Bamboo (7)" |
    "CBFBumpIntro_MapIcon_Secret_Bamboo (8)" |
    "CBFCaveEntrance_MapIcon_Chest01" |
    "CBFCaveEntrance_MapIcon_Chest" |
    "CBFCaveEntrance_MapIcon_Kodama01" |
    "CBFCaveEntrance_MapIcon_Confidence" |
    "CBFCaveEntrance_MapIcon_blossom" |
    "CBFCaveEntrance_MapIcon_Secret_Bamboo" |
    "CBFCaveEntrance_MapIcon_Secret_Bamboo (1)" |
    "CBFCaveEntrance_MapIcon_Secret_Bamboo (2)" |
    "CBFCaveEntrance_MapIcon_Secret_Bamboo (3)" |
    "UC Entrance_MapIcon_Kodama" |
    "UC Entrance_MapIcon_Kodama (1)" |
    "UC Entrance_MapIcon_Secret_Ore (1)" |
    "UC Entrance_MapIcon_Secret_Ore" |
    "UC Amateratsu_MapIcon_Kodama" |
    "UC Amateratsu_MapIcon_Blossom" |
    "UC Amateratsu_MapIcon_Secret_Ore" |
    "UC Shorcut_MapIcon_Secret_Ore" |
    "UC Arena_MapIcon_Kodama01" |
    "UCMainChamber_MapIcon_Secret_Kodama" |
    "UCMainChamber_MapIcon_Secret_Ore" |
    "UC Shorcut_MapIcon_Dodomeki" |
    "SACIWalls_MapIcon_Kodama" |
    "SACITier1_MapIcon_LotusSeed" |
    "SACITIer1_MapIcon_Kodama" |
    "MFAsahi_MapIcon_Chest" |
    "MFAsahi_MapIcon_Kodama" |
    "MFAsahi_MapIcon_Secret_MumPetal" |
    "MFArena_MapIcon_DeliberationOmamori" |
    "MFArena_MapIcon_Kodama01" |
    "MFArena_MapIcon_Secret_MumPetal" |
    "MFShrine_MapIcon_Secret_Kodama_01" |
    "MFShrine_MapIcon_Secret_MumPetal" |
    "MFTreetops_MapIcon_Kodama" |
    "MFTreetops_MapIcon_Kodama01" |
    "MFTreetops_MapIcon_Chest" |
    "MFTreetops_MapIcon_Secret_MumPetal" |
    "MFTreetops_MapIcon_Secret_MumPetal (1)" |
    "MFMaze_MapIcon_Kodama" |
    "MFMaze_MapIcon_Secret_DarumaChest" |
    "MFMaze_MapIcon_Secret_Blossom" |
    "MFMaze_MapIcon_Secret_MumPetal" |
    "MFBurrowsEntry_MapIcon_Secret_Blossom" |
    "MFBoss_MapIcon_Secret_DarumaChest" |
    "KBEntrance_MapIcon_Kodama" |
    "KBEntrance_MapIcon_Kodama01" |
    "KBEntrance_MapIcon_GraceOmamori" |
    "KBEntrance_MapIcon_Kodama_Mean" |
    "KBEntrance_MapIcon_LotusSeed" |
    "KBEntrance_MapIcon_Secret_Silk" |
    "KBEntrance_MapIcon_Secret_Silk (1)" |
    "KBEntrance_MapIcon_Secret_Silk (2)" |
    "KBWest_MapIcon_Chest" |
    "KBWest_MapIcon_Secret_Kodama_01" |
    "KBWest_MapIcon_Secret_Kodama_02" |
    "KBWest_MapIcon_Secret_Silk" |
    "KBWest_MapIcon_Secret_Silk (1)" |
    "KBWest_MapIcon_Secret_Silk (2)" |
    "KBWest_MapIcon_Secret_Omamori" |
    "KBSouth_MapIcon_Kodama" |
    "KBSouth_MapIcon_Secret_Silk" |
    "KBSouth_MapIcon_Secret_Vermillion" |
    "KBMochiBugNest_MapIcon_Kodama" |
    "KBJorogumo_MapIcon_Chest" |
    "MMBase_MapIcon_Kodama" |
    "MMBase_MapIcon_Secret_Root" |
    "MMVista_MapIcon_Secret_Kodama_01" |
    "MMVista_MapIcon_Secret_Omamori_01" |
    "MMVista_MapIcon_Secret_Root" |
    "MMVillage_MapIcon_Secret_Chest" |
    "MM Training Grounds_MapIcon_MiniGameChest" |
    "MM Training Grounds_Secret_Kodama" |
    "MM Main Ascent_MapIcon_Chest_01" |
    "MMMainAscent_MapIcon_Secret_Kodama_01" |
    "MMUnderground_MapIcon_Secret_Chest" |
    "MMUnderground_MapIcon_Secret_Root" |
    "MMOptionalPuzzle_MapIcon_Secret_Omamori_01" |
    "MMOptionalPuzzle_MapIcon_Secret_Root" |
    "MMOptionalPuzzle_MapIcon_Secret_Root (1)" |
    "MMGunbai_MapIcon_Secret_Kodama_01" |
    "MMGunbai_MapIcon_Blossom" |
    "MMGunbai_MapIcon_Secret_Root" |
    "ICCentral_MapIcon_Secret_Vermillion" |
    "ICWest_MapIcon_Secret_Kodama_" |
    "ICWest_MapIcon_Secret_Vermillion" |
    "ICWest_MapIcon_Secret_Vermillion (1)" |
    "ICWest_MapIcon_Secret_Vermillion (2)" |
    "ICEast_MapIcon_Secret_Kodama_01" |
    "ICEast_MapIcon_Secret_Kodama_02" |
    "ICEast_MapIcon_Secret_Vermillion" |
    "ICVolcano_MapIcon_Secret_Kodama_01" |
    "CBFIntro_MapIcon_Shrine01" |
    "CBFIntro_MapIcon_Shrine02" |
    "Coast1_MapIcon_FastTravel" |
    "UC Arena_MapIcon_Shrine" |
    "UC Herder_MapIcon_Shrine" |
    "UC Herder_MapIcon_Shimeji" |
    "UC North Puzzle_MapIcon_Shrine" |
    "UCBoss_MapIcon_Shrine" |
    "Coast1_MapIcon_Rozu" |
    "Coast1_MapIcon_Shrine" |
    "CBFIntro_MapIcon_Secret_Bamboo (5)" |
    "CBFIntro_MapIcon_Secret_Bamboo (1)" |
    "CBFIntro_MapIcon_Secret_Bamboo (4)" |
    "CBFIntro_MapIcon_Asahi" |
    "CBFBumpIntro_MapIcon_Tori" |
    "CBFCaveEntrance_MapIcon_Shimeji" |
    "UC Main Chamber_MapIcon_LockedDoor" |
    "UC North Puzzle_MapIcon_LockedDoor" |
    "UCBoss_MapIcon_Secret_Chest" |
    "CBFCaveEntrance_MapIcon_Asahi" |
    "UC North PuzzleMapIcon_Asahi" |
    "CBFCaveEntrance_MapIcon_Tori" |
    "CBFIntro_MapIcon_Secret_Bamboo (5)" |
    "CBFIntro_MapIcon_Secret_Bamboo (1)" |
    "CBFIntro_MapIcon_Secret_Bamboo (4)" |
    "UCBoss_MapIcon_Secret_Chest";

type FAST_TRAVEL_NAME =
    "FastTravelCoast 1";

type RESOURCE_BLOCK_NAME =
    "Bamboo_Mining (6)CBF Intro895.555658.158070" |
    "Bamboo_Mining (2)CBF Intro907.975650.368070" |
    "Bamboo_MiningCBF Intro967.055655.348070" |
    "Bamboo_Mining (5)CBF Intro1034.49650.378070";

type RESOURCE_BLOCK_HITS = 1 | 2 | 3;

export type SAVE_FILE = {
    shrinePos: [number, number],
    sceneName: SCENE_NAME,
    cameraName: CAMERA_NAME,
    narrativeBools: boolean[],
    wallsDestroyed: WALL_NAME[],
    puzzlesCompleted: PUZZLE_NAME[],

    kodamasCollected: any[],
    sideQuestCreaturesFinished: SIDE_QUEST_CREATURE_NAME[],

    foxFlameTrailsCollected: any[],
    miningOreCollected: MINING_ORE_NAME[],

    bambooCollected: any[],
    mapsDiscovered: MAP_NAME[],
    mapActiveIcons: MAP_ICON_NAME[],
    mapInactiveIcons: MAP_ICON_NAME[],
    mapSecretIcons: MAP_ICON_NAME[],
    fastTravel: FAST_TRAVEL_NAME[],
    continuity: any[],
    collectibles: any[],
    resourceBlockNames: RESOURCE_BLOCK_NAME[],
    resourceBlockHits: RESOURCE_BLOCK_HITS[],
    worldArea: number,
    blessing: number,
    gamePercentage: number,
    mapMarkerPos: number [],
    mapMarkerActive: boolean,
    // the evil types begin >:)
    dialogueSystemBooleans: [ 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean
    ],
    inventoryBooleans: [ 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean
    ],
    inventoryInts: [
        number, number, number, number, number, number, number, number, number, number, number, number, number, 
        number, number, number, number, number, number, number, number
    ],
    darumaAvailableBooleans: [ boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean ],
    darumaActiveBooleans: [ boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean ],
    darumaTwoEyesBooleans: [ boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean ],
    omamoriAvailableBooleans: [ 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean
    ],
    omamoriActiveBooleans: [ 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean
    ],
    abilityBooleans: [ boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean ],
    questBooleans: [ 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, 
        boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean
    ],
    shimejiArmapilloCount: number,
    mfProgressNum: number,
    bossDefeatedBooleans: [ boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean ],
    bossInProgressBooleans: [ boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean ],
    gameSessionTime: number,
    deaths: number,
    invincibilityUsed: boolean,
    healingUsed: boolean
}

// TODO - implement real typechecking
export function isSaveFile(obj: any): obj is SAVE_FILE {
    return true;
}