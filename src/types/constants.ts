import { SHRINE_LOCATION } from '../types/types';

export const VERSION = 0.1;

export const ABILITY_NAMES = [
    "Unknown (break walls?)",
    "Equinox Staff",
    "Bamboo Bat",
    "Dash",
    "Tsuki Dash",
    "Grappling Gun",
    "Mochi Mallet",
    "Kabuto Wings",
    "Ice Picks",
    "Unknown"
]

/**
 * Unknown InventoryCount indices
 * 13
 * 16
 */
export const INVENTORY_COUNTS = [
    { countIndex: 0, name: "Current Health"},
    { countIndex: 1, name: "Max Health (capped at 9)"},
    { countIndex: 2, name: "Ramen Shield (visually capped at 1)"},
    { countIndex: 3, name: "Current Tea"},
    { countIndex: 4, name: "Max Tea"},
    { countIndex: 5, name: "Fox fire"},
    { countIndex: 12, name: "Tablet Fragment" },
    { countIndex: 15, name: "Music Sheet" },
    { countIndex: 16, name: "Omamori Strap" },
    { countIndex: 18, name: "Feather Key"},
    { countIndex: 19, name: "Kettle Fragment"},
    { countIndex: 20, name: "Bunny Blossom"},
]

// based on the inventoryCount array's indices, not inventoryBooleans
export const INVENTORY_LINKS = [
    { boolIndex: 15, countIndex: 6, name: "Bamboo"},
    { boolIndex: 16, countIndex: 7, name: "Teal Ore"},
    { boolIndex: 17, countIndex: 8, name: "Vermillion Crystal"},
    { boolIndex: 18, countIndex: 9, name: "Crystal Mum Petal"},
    { boolIndex: 19, countIndex: 10, name: "Spider Silk"},
    { boolIndex: 20, countIndex: 11, name: "Pungent Root"},
    { boolIndex: 22, countIndex: 14, name: "Lotus Seed"},
    { boolIndex: 23, countIndex: 17, name: "Awakening Ink"},
];

// boolean links:
/*
    0 - unknown
    1 - unknown
    3 - unknown, resets to false when game is closed
    9 - unknown
    11 - mirror
    12 - the sword
    13 - the jewel
    21 - unknown
    24 - unknown
*/
export const INVENTORY_BOOLS = [
    { boolIndex: 2, name: "Infinite Kettle"},
    { boolIndex: 4, name: "Tea Kettle"},
    { boolIndex: 5, name: "Shita Key"},
    { boolIndex: 6, name: "Armapillo Eye"},
    { boolIndex: 7, name: "Scuffed Gunbai"},
    { boolIndex: 8, name: "Kodama Charcoal"},
    { boolIndex: 10, name: "Usagi Scroll"},
    { boolIndex: 14, name: "Kitsune Kifuda"},
    //{ boolIndex: 21, name: "Unknown"},
    //{ boolIndex: 24, name: "Unknown"},
]

export const DARUMA_NAMES = [ 
    "Chomper",
    "Mamori",
    "Kaboomaru",
    "Ken",
    "Pyro-kun",
    "Yuki",
    "Jingu",
    "Toge-chan"
]

export const OMAMORI_NAMES = [ 
    { name:"Prosperity", description:"Currency magnet" },
    { name:"Finesse", description:"+Attack range" },
    { name:"Refinement", description:"+Basic attack speed" },
    { name:"Health", description:"+1 Max health" },
    { name:"Stability", description:"Dash resets when hovering in updraft" },
    { name:"Initiative", description:"Increased damage when cancelling out of dash" },
    { name:"Confidence", description:"x2 Damage dealt and taken" },
    { name:"Serenity", description: "+Damage at full health" },
    { name:"Perseverance", description: "+Damage at 1 health" },
    { name:"Resilience", description: "Dash and jump reset on taking damage" },
    { name:"Vigor", description: "Increases heat gain while in air" },
    { name:"Elegance", description: "+Hover speed" }, 
    { name:"Punctuality", description: "+Run speed" },
    { name:"Ambition", description: "+Fox fire, -Damage" },
    { name:"Abundance", description: "+2 Tea capacity" },
    { name:"Fortitude", description: "+Knockback" },
    { name:"Gravitas", description: "Mochi mallet creates shockwaves on hit" },
    { name:"Vitality", description: "Heal once every 5 kills" },
    { name:"Providence", description: "+Damage based on fox fire" },
    { name:"Deliberation", description: "Removes timer while batting" },
    { name:"Favor", description: "+Daruma damage" },
    { name:"Efficiency", description: "Drop damaging stardust while hovering" },
    { name:"Composure", description: "Move slowly while drinking tea" },
    { name:"Poise", description: "+Damage from battable objects" }, 
    { name:"Ingenuity", description: "Allows using fox fire as tea" },
    { name:"Innovation", description: "If kettle is full, summons damaging fan on jump reset" },
    { name:"Optimism", description: "Daruma cost half tea while boiling" },
    { name:"Focus", description: "Stops time when switching daruma" },
    { name:"Potency", description: "Increases health healed per sip when boiling" },
    { name:"Proficiency", description: "Extra tea every certain number of hits" },
    { name:"Progress", description: "Heal over time" },
    { name:"Intuition", description: "See collectibles on map" }
]

export const SHRINE_PRESETS = [
    {name:"Armapillo bossfight room",camera:'VC Boss Camera',position: [513.85546875, -2.2900390625],scene:'UC Boss'},
    {name:"Megumi Mountain entrance",camera:'VC Main',position: [-6.615234375, -4.1917266845703125],scene:'MM Base'},
    {name:"Yokozuna bossfight",camera:'VC intamateEntrance',position: [606.8997802734375, 36.348411560058594],scene: 'MM Yokuzuna Boss'},
    {name:"Sakura City Entrance",camera:"VC Main",position:[524.791259765625,-56.274173736572266],scene:"Coast 2"},
    {name:"Shogun bossfight",camera:"VC Main",position:[-344.9992980957031,776.9672241210938],scene:"IMC Final Ascent"},
    {name:"Sencho Bridge entrance",camera:"VC Rozu Dash ",position:[605.66650390625,-56.73704147338867],scene:"Coast 1"},
    {name:"Castle elevator middle floor",camera:"VC elevator ",position:[9.3607177734375,241.7854461669922],scene:"IMC Floor 2"},
    {name:"Castle elevator bottom floor",camera:"VC ElevatorStart ",position:[4.1605224609375,599.1856079101562],scene:"IMC Floor 3"},
    {name:"Castle entrance",camera:"VC Main",position:[-128.3321533203125,-206.6874542236328],scene:"IMC Entrance"},
    {name:"Dai Tengu bossfight",camera:"VC Main",position:[-332.68304443359375,-12.358484268188477],scene:"IC Dai Tengu"},
] as SHRINE_LOCATION[];