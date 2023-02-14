let levelOne = {
    label: "Phase 1",
    butler: false,
    guards: false,

    //background
    plainWalls: [
        {x:-370, y: -200}, {x:-235, y: -200}, {x:-100, y: -200}, {x:35, y: -200}, {x:170, y: -200}
    ],

    sideWallLefts: [
        //upper side wall left
        {x:-392, y: -200}, {x:-392, y: -128}, {x:-392, y: -56}, {x:-392, y: 16},
        //lower side wall left
        {x:-392, y: 200}, {x:-392, y: 272}, {x:-392, y: 344}, {x:-392, y: 416}
    ],

    sideWallRights: [
        //upper side wall right
        {x:312, y: -200}, {x:312, y: -128}, {x:312, y: -56}, {x:312, y: 16},
        //lower side wall right
        {x:312, y: 200}, {x:312, y: 272}, {x:312, y: 344}, {x:312, y: 416}
        ],

    wallBottoms: [
        {x:-370, y: 471}, {x:-235, y: 471}, {x:-100, y: 471}, {x:35, y: 471}, {x:170, y: 471}
    ],

    bigRugs: [
        {x:-470, y: 89}, {x: 230, y: 89}
    ],

    //furniture
    bigTables: [
        {x: -15, y: 200}, {x: 500, y: 200}
    ],

    bigCouches: [
        {x: -25, y: 380}
    ],

    chairRights: [
        {x: -100, y: 210}
    ],

    chairLefts: [
        {x: 100, y: 210}
    ],

};

let credits = {
    label: "credits",
    text: [
        "Felon For You"
    ]
};

let titleScreen = {
    label: "title screen"
};

let introCutscene = {
    label: "intro"
};