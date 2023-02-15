let levelOne = {
    label: "Phase 1",
    butler: false,
    guards: false,

    //background
    plainWalls: [
        //{x: -400, y: -200, count: 5}, {x: -400, y: 500, count: 5}
    ],

    sideWallLefts: [
        {x: 0, y: 0, count: 5}
    ],

    sideWallRights: [
        //upper side wall right
        {x:312, y: -200}, {x:312, y: -128}, {x:312, y: -56}, {x:312, y: 16},
        //lower side wall right
        {x:312, y: 200}, {x:312, y: 272}, {x:312, y: 344}, {x:312, y: 416},
        {x:312, y: 488}, {x:312, y: 560}
        ],

    wallBottoms: [
    ],

    bigRugs: [
        //{x:-470, y: 89}, {x: 230, y: 89}
    ],

    //furniture
    bigTables: [
        //{x: -15, y: 200}, {x: 500, y: 200}
    ],

    bigCouches: [
        {x: -25, y: 380}
    ],

    chairRights: [
        //{x: -100, y: 210}
    ],

    chairLefts: [
        //{x: 100, y: 210}
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

let loseScreen = {
    label: "lose screen"
};