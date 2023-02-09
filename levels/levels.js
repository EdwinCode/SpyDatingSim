let levelOne = {
    label: "Phase 1",
    butler: false,
    guards: false,

    //background
    plainWalls: [{x:-370, y: -200}, {x:-235, y: -200}, {x:-100, y: -200}, {x:35, y: -200}, {x:170, y: -200}],
    sideWallLefts:
    //upper side wall left
    [{x:-393, y: -200}, {x:-393, y: -128}, {x:-393, y: -56}, {x:-393, y: 16},
    //lower side wall left
        {x:-393, y: 200}, {x:-393, y: 272}, {x:-393, y: 344}, {x:-393, y: 416}
    ],

    sideWallRights:
    //upper side wall right
        [{x:307, y: -200}, {x:307, y: -128}, {x:307, y: -56}, {x:307, y: 16},
            //lower side wall right
            {x:307, y: 200}, {x:307, y: 272}, {x:307, y: 344}, {x:307, y: 416}
        ],

    wallBottoms: [{x:-370, y: 471}, {x:-352, y: 471}, {x:-334, y: 471}, {x:-316, y: 471}, {x:-298, y: 471},
        {x:-280, y: 471}, {x:-262, y: 471}, {x:-244, y: 471}, {x:-226, y: 471}, {x:-208, y: 471},
        {x:-190, y: 471}, {x:-172, y: 471}, {x:-154, y: 471}, {x:-136, y: 471}, {x:-118, y: 471},
        {x:-100, y: 471}, {x:-82, y: 471}, {x:-64, y: 471}, {x:-46, y: 471}, {x:-28, y: 471},
        {x:-10, y: 471}, {x:8, y: 471}, {x:26, y: 471}, {x:44, y: 471}, {x:62, y: 471},
        {x:80, y: 471}, {x:98, y: 471}, {x:116, y: 471}, {x:134, y: 471}, {x:152, y: 471},
        {x:170, y: 471}, {x:188, y: 471}, {x:206, y: 471}, {x:224, y: 471}, {x:242, y: 471},
        {x:260, y: 471}, {x:278, y: 471}, {x:296, y: 471}
    ],

    bigRugs: [{x:-470, y: 89}, {x: 230, y: 89}],

    //furniture
    bigTables: [{x: -15, y: 200}, {x: 500, y: 200}],
    bigCouches: [{x: -25, y: 380}],
    chairRights: [{x: -100, y: 210}],
    chairLefts: [{x: 100, y: 210}],

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