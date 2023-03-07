let levelOneFurniture = {
    // THE UNITS OF MEASUREMENT FOR THE BELOW CODE ARE IN BLOCKWIDTHS!

    plainWalls: [
        // Start at x = 4.5 because the Room 1 left wall starts at 0 and a left wall takes up 4.5 BLOCKWIDTHS so 0 + 4.5 = 4.5.

        // office top wall
        {x: 4.5, y: -480, count: 8},

        // office bottom wall
        {x: 4.5, y: -240, count: 3},
        {x: 159.5, y:-240, count: 3},

        // entrance top wall
        {x: 4.5, y: 0, count: 3},
        {x: 159.5, y: 0, count: 3},

        // entrance bottom wall
        {x: 4.5, y: 240, count: 1},
        {x: 98, y: 240, count: 2},
        {x: 222, y: 240, count: 1},

        // kitchen top wall
        {x: 257, y: -480, count: 8},

        // Room row 1 col 2
        {x: 257, y: -240, count: 3},
        {x: 412, y: -240, count: 3},

        // closet within room
        {x: 256, y: -80, count: 3},

        // bathroom within room
        {x: 443, y: -150, count: 2},
        {x: 412, y: -80, count: 2},

        // bedroom top wall
        {x: 257, y: 0, count: 3},
        {x: 412, y: 0, count: 3},

        // bedroom bottom wall
        {x: 257, y: 240, count: 1},
        {x: 476, y: 240, count: 1},

        // green house top walls
        {x: -248, y: 0, count: 1},
        {x: -30, y: 0, count: 1},

        // green house bottom walls
        {x: -248, y: 240, count: 1},
        {x: -30, y: 240, count: 1},

        // patio top walls
        {x: -248, y: -240, count: 3},
        {x: -93, y: -240, count: 3}
    ],

    sideWallLefts: [ // Count makes them grow downwards
        {x: 0, y: 0, count: 7},
        {x: 0, y: 160, count: 7},

        {x: 0, y: -240, count: 7},
        {x: 0, y: -80, count: 5},

        {x: 0, y: -480, count: 7},
        {x: 0, y: -320, count: 5},

        {x: -252.5, y: 0, count: 17},
        {x: -252.5, y: -240, count: 15},
        {x: -252.5, y: -480, count: 15},

        // bathroom inner walls
        {x: 412, y: -240, count: 10}
    ],

    sideWallRights: [ // Count makes them grow downwards
        {x: 252.5, y: 0, count: 7},
        {x: 252.5, y: 160, count: 7},

        {x: 252.5, y: -240, count: 7},
        {x: 252.5, y: -80, count: 5},

        {x: 505, y: 0, count: 17},
        {x: 505, y: -240, count: 15},
        {x: 505, y: -480, count: 15},

        {x: 252.5, y: -480, count: 7},
        {x: 252.5, y: -320, count: 5}
    ],

    doorWallsLeft : [
        // left side of mansion
        {x: 0, y: -390},
        {x: 0, y: -150},
        {x: 0, y: 90},

        // bathroom door
        //{x: 412, y: -80, count: 10}

    ],

    doorWallsRight : [
        // right side of mansion
        {x: 252.5, y: -390},
        {x: 252.5, y: -150},
        {x: 252.5, y: 90}
    ],

    wallWindow : [
        // green house
        // top
        {x: -220, y: 0, count: 2},
        {x: -93, y: 0, count: 2},
        // bottom
        {x: -220, y: 240, count: 6},

        // entrance
        {x: 35, y: 240, count: 2},
        {x: 158, y: 240, count: 2},

        // bedroom
        {x: 287, y: 240, count: 6}
    ],

    marbleFloor : [
        // bathroom
        {x: 256, y: -209, count: 6},
        {x: 256, y: -169, count: 6},
        {x: 256, y: -129, count: 6},
        {x: 256, y: -89, count: 6},
        {x: 256, y: -49, count: 6},
        {x: 256, y: -9, count: 6},
        {x: 256, y: -31, count: 6},
        // one tile at end of each row
        // overlaps with prev tiles in row
        // since regular tiles don't fit in one row
        {x: 465, y: -209, count: 1},
        {x: 465, y: -169, count: 1},
        {x: 465, y: -129, count: 1},
        {x: 465, y: -89, count: 1},
        {x: 465, y: -49, count: 1},
        {x: 465, y: -9, count: 1},
        {x: 465, y: -31, count: 1},

        // entrance
        {x: 0, y: 31, count: 6},
        {x: 0, y: 71, count: 6},
        {x: 0, y: 111, count: 6},
        {x: 0, y: 151, count: 6},
        {x: 0, y: 191, count: 6},
        {x: 0, y: 231, count: 6},
        // add one tile to each row that overlaps
        {x: 213, y: 31, count: 1},
        {x: 213, y: 71, count: 1},
        {x: 213, y: 111, count: 1},
        {x: 213, y: 151, count: 1},
        {x: 213, y: 191, count: 1},
        {x: 213, y: 231, count: 1}
    ],

    woodFloor : [
        // office
        {x: 0, y: -444, count: 13},
        {x: 0, y: -424, count: 13},
        {x: 0, y: -404, count: 13},
        {x: 0, y: -464, count: 13},
        {x: 0, y: -384, count: 13},
        {x: 0, y: -364, count: 13},
        {x: 0, y: -344, count: 13},
        {x: 0, y: -324, count: 13},
        {x: 0, y: -304, count: 13},
        {x: 0, y: -284, count: 13},
        {x: 0, y: -264, count: 13},
        {x: 0, y: -244, count: 13},
        {x: 0, y: -224, count: 13},

        // kitchen
        {x: 248, y: -444, count: 13},
        {x: 248, y: -424, count: 13},
        {x: 248, y: -404, count: 13},
        {x: 248, y: -464, count: 13},
        {x: 248, y: -384, count: 13},
        {x: 248, y: -364, count: 13},
        {x: 248, y: -344, count: 13},
        {x: 248, y: -324, count: 13},
        {x: 248, y: -304, count: 13},
        {x: 248, y: -284, count: 13},
        {x: 248, y: -264, count: 13},
        {x: 248, y: -244, count: 13},
        {x: 248, y: -224, count: 13},

        // lounge
        {x: 0, y: -209, count: 13},
        {x: 0, y: -189, count: 13},
        {x: 0, y: -169, count: 13},
        {x: 0, y: -149, count: 13},
        {x: 0, y: -129, count: 13},
        {x: 0, y: -109, count: 13},
        {x: 0, y: -89, count: 13},
        {x: 0, y: -69, count: 13},
        {x: 0, y: -49, count: 13},
        {x: 0, y: -29, count: 13},
        {x: 0, y: -9, count: 13},
        {x: 0, y: 11, count: 13},

        // bedroom
        {x: 252, y: 31, count: 12},
        {x: 252, y: 51, count: 12},
        {x: 252, y: 71, count: 12},
        {x: 252, y: 91, count: 12},
        {x: 252, y: 111, count: 12},
        {x: 252, y: 131, count: 12},
        {x: 252, y: 151, count: 12},
        {x: 252, y: 171, count: 12},
        {x: 252, y: 191, count: 12},
        {x: 252, y: 211, count: 12},
        {x: 252, y: 231, count: 12},
        {x: 252, y: 251, count: 12},
        // add one tile to each row that overlaps
        {x: 488, y: 31, count: 1},
        {x: 488, y: 51, count: 1},
        {x: 488, y: 71, count: 1},
        {x: 488, y: 91, count: 1},
        {x: 488, y: 111, count: 1},
        {x: 488, y: 131, count: 1},
        {x: 488, y: 151, count: 1},
        {x: 488, y: 171, count: 1},
        {x: 488, y: 191, count: 1},
        {x: 488, y: 211, count: 1},
        {x: 488, y: 231, count: 1},
        {x: 488, y: 251, count: 1}
    ],

    bigRugs: [
        //{x: 234.25, y: 112},
        //{x: 234.25, y: 136},

        //{x: 234.25, y: -128},
        //{x: 234.25, y: -104},

        //{x: 234.25, y:-368},
        //{x: 234.25, y:-344},

        //{x: -18.25, y: 112},
        //{x: -18.25, y: 136},

        //{x: -18.25, y: -128},
        //{x: -18.25, y: -104},

        //{x: -18.25, y: -368},
        //{x: -18.25, y: -344}
    ],

    rugsHorizontal: [
        {x: 424, y: -192, count: 4, color: "Dark Blue"},
        {x: 424, y: -182, count: 4, color: "Dark Blue"},
        {x: 450, y: -101, count: 5, color: "Dark Blue"},
        {x: 450, y: -91, count: 5, color: "Dark Blue"},
        {x: -23, y: 130, count: 5, color: "Green"},
        {x: -23, y: 140, count: 5, color: "Green"},
        {x: 264, y: -32, count: 8, color: "Tan"},
        {x: 264, y: -22, count: 8, color: "Tan"},
        {x: 264, y: -12, count: 8, color: "Tan"},
        {x: 230, y: 130, count: 5, color: "Green"},
        {x: 230, y: 140, count: 5, color: "Green"},
        {x: -23, y: -110, count: 5, color: "Light Blue"},
        {x: -23, y: -100, count: 5, color: "Light Blue"},
        {x: 398, y: 228, count: 10, color: "Tan"},
        {x: 398, y: 238, count: 10, color: "Tan"},
        {x: 398, y: 248, count: 10, color: "Tan"},
        {x: 109.5, y: 230, count: 4, color: "Brown"},
    ],

    rugsVertical: [
        {x: 419, y: -160, count: 5, color: "Dark Blue"},
        {x: 429, y: -160, count: 5, color: "Dark Blue"}
    ],

    rugsSquare: [
        {x: 100, y: 80, count: 5, color: "Red"},
        {x: 100, y: 130, count: 5, color: "Red"},
    ],

    garageBackground: [
        {x: -248, y: -448, count: 25, color: "Grey"},
        //{x: -248, y: 200, count: 25, color: "Grey"}
    ],



    // ------------------------ GARAGE FURNITURE -------------------
    garageDoor : [
        {x: -248, y: -480}
    ],

    redCar : [
        {x: -230, y: -420}

    ],

    blackCar : [
        {x: -230, y: -360}

    ],

    greyCar : [
        {x: -230, y: -290}
    ],

    toolbox : [
        {x: -36, y: -444},
    ],

    shelf : [
        {x: -43, y: -440},

    ],



    // ------------------------ PATIO FURNITURE -------------------
    patioFloor : [
        {x: -248, y: -208, count: 25},
        {x: -248, y: -198, count: 25},
        {x: -248, y: -188, count: 25},
        {x: -248, y: -178, count: 25},
        {x: -248, y: -168, count: 25},
        {x: -248, y: -158, count: 25},
        {x: -248, y: -148, count: 25},
        {x: -248, y: -138, count: 25},
        {x: -248, y: -128, count: 25},
        {x: -248, y: -118, count: 25},
        {x: -248, y: -108, count: 25},
        {x: -248, y: -98, count: 25},
        {x: -248, y: -88, count: 25},
        {x: -248, y: -78, count: 25},
        {x: -248, y: -68, count: 25},
        {x: -248, y: -58, count: 25},
        {x: -248, y: -48, count: 25},
        {x: -248, y: -38, count: 25},
        {x: -248, y: -28, count: 25},
        {x: -248, y: -18, count: 25},
        {x: -248, y: -8, count: 25},
        {x: -248, y: 2, count: 25},
        {x: -248, y: 12, count: 25},
        {x: -248, y: 22, count: 25}
    ],

    trellis : [
        {x: -248, y: -240, count: 5},
        {x: -109, y: -240, count: 5}
    ],

    patioTable : [
        // upper left room section
        {x: -50, y: -175},
        // lower right room section
        {x: -195, y: -45}
    ],

    patioBench : [
        // upper left room section
        {x: -177, y: -190},
        {x: -225, y: -190},
        {x: -177, y: -130},
        {x: -225, y: -130},
        // lower right room section
        {x: -80, y: -80},
        {x: -35, y: -80},
        {x: -80, y: -30},
        {x: -35, y: -30}
    ],

    patioChairLeft : [
        // lower left room section
        {x: -230, y: -60},
        {x: -230, y: -40},
        // upper right room section
        {x: -80, y: -190},
        {x: -80, y: -170}
    ],



    // ------------------------ GREENHOUSE FURNITURE -------------------
    greenHouseFloor : [
        {x: -248, y: 32, count: 25},
        {x: -248, y: 42, count: 25},
        {x: -248, y: 52, count: 25},
        {x: -248, y: 62, count: 25},
        {x: -248, y: 72, count: 25},
        {x: -248, y: 82, count: 25},
        {x: -248, y: 92, count: 25},
        {x: -248, y: 102, count: 25},
        {x: -248, y: 112, count: 25},
        {x: -248, y: 122, count: 25},
        {x: -248, y: 132, count: 25},
        {x: -248, y: 142, count: 25},
        {x: -248, y: 152, count: 25},
        {x: -248, y: 162, count: 25},
        {x: -248, y: 172, count: 25},
        {x: -248, y: 182, count: 25},
        {x: -248, y: 192, count: 25},
        {x: -248, y: 202, count: 25},
        {x: -248, y: 212, count: 25},
        {x: -248, y: 222, count: 25},
        {x: -248, y: 232, count: 25},
        {x: -248, y: 242, count: 25},
        {x: -248, y: 252, count: 25},
        {x: -248, y: 262, count: 25}
    ],

    greenHouseTable : [
        // left
        {x: -93, y: 50},
        {x: -93, y: 93},
        // right
        {x: -22, y: 50},
        {x: -22, y: 93}
    ],

    greenHousePot: [
        {x: -89, y: 110, color: "Brown"},
        {x: -14, y: 50, color: "Yellow"}
    ],

    roses: [
        {x: -90, y: 58, color: "Dark Blue"},
        {x: -86, y: 47, color: "Pink"},
        {x: -22, y: 105, color: "Yellow"},
        {x: -14, y: 97, color: "Orange"},
        {x: -20, y: 86, color: "Green"},
    ],

    pottedRose: [
        {x: -89, y: 98, potColor: "Red", roseColor: "Red"},
        {x: -19, y: 68, potColor: "Purple", roseColor: "White"},
    ],

    pottedRoseColumn: [
        {x: -240, y: 60, potColor: "Pink", roseColor: "Green", count: 6},
        {x: -210, y: 60, potColor: "Purple", roseColor: "White", count: 6},
        {x: -180, y: 60, potColor: "Yellow", roseColor: "Light Blue", count: 6},
    ],

    pottedRoseRow: [
        {x: -150, y: 180, potColor: "Blue", roseColor: "Yellow", count: 5},
        {x: -150, y: 220, potColor: "Green", roseColor: "Pink", count: 5},
        {x: -150, y: 260, potColor: "Black", roseColor: "Orange", count: 5},
    ],



    // ------------------------ KITCHEN FURNITURE -------------------
    kitchenSet: [
        {x: 354, y: -481}
    ],

    waterTank: [
        {x: 485, y: -405}
    ],

    fridge: [
        {x: 257, y: -450}
    ],

    kitchenCounterLeft: [
        // left side
        {x: 257, y: -455},

        // right side
        {x: 433, y: -455},

        //bottom
        {x: 358, y: -400}
    ],

    kitchenCounterRight: [
        // left side
        {x: 329, y: -455},

        // right side
        {x: 481, y: -455},

        // bottom side
        {x: 480, y: -400},
    ],

    kitchenCounterMiddle: [
        //left side
        {x: 306, y: -455},
        {x: 282, y: -455},

        // right side
        {x: 456, y: -455},

        // bottom side
        {x: 383, y: -400},
        {x: 408, y: -400},
        {x: 433, y: -400},
        {x: 458, y: -400},
    ],

    microwave: [
        {x: 330, y: -465}
    ],

    kitchenCabinet: [
        {x: 441, y: -480},
        {x: 471, y: -480}
    ],

    tanChairRight: [
        {x: 325, y: -326},
    ],

    tanChairUp: [
        {x: 345, y: -315},
        {x: 385, y: -315},
        {x: 425, y: -315},
        {x: 465, y: -315},
    ],

    tanChairDown: [
        {x: 345, y: -343},
        {x: 385, y: -343},
        {x: 425, y: -343},
        {x: 465, y: -343},
    ],

    kitchenTable : [
        {x: 335, y: -330}
    ],

    plates : [
        //left
        {x: 335, y: -323},
        // top row
        {x: 349, y: -330},
        {x: 389, y: -330},
        {x: 429, y: -330},
        {x: 469, y: -330},
        // bottom row
        {x: 349, y: -318},
        {x: 389, y: -318},
        {x: 429, y: -318},
        {x: 469, y: -318}
    ],



    // ------------------------ BATHROOM FURNITURE -------------------
    shower: [
        {x: 430, y: -235}
    ],

    toilet: [
        {x: 482, y: -215}
    ],

    bathtub: [
        //{x: 456, y: -175}
    ],

    bathroomSink: [
        {x: 454, y: -128}
    ],

    bathroomMirror: [
        {x: 458, y: -145}
    ],

    trashcan: [
        {x: 465, y: -212}
    ],



    // ------------------------ ENTRANCE FURNITURE -------------------
    door: [
        {x: 114, y: 240}
    ],

    bigCubePainting: [
        {x: 190, y: 0}
    ],

    starryNight: [
        {x: 35, y: 0}
    ],

    billionaireStatue: [
        {x: 109, y: 90}
    ],

    // shoes
    tanShoe: [
        {x: 7, y: 160}
    ],

    rainbowShoe: [
        {x: 7, y: 170}
    ],

    goldenShoe: [
        {x: 7, y: 180}
    ],

    whiteShoe: [
        {x: 234, y: 160}
    ],

    greyShoe: [
        {x: 234, y: 170}
    ],

    blackShoe: [
        {x: 235, y: 180}
    ],

    // table
    longTanTable: [
        {x: 5, y: 160},
        {x: 233, y: 160},
    ],



    // ------------------------ BEDROOM CLOSET FURNITURE -------------------
    // in closet
    bedroomMirror: [
        {x: 293, y: -78}
    ],

    wardrobes: [
        {x: 261, y: -78},
        {x: 318, y: -78}
    ],



    // ------------------------ BEDROOM FURNITURE -------------------
    // white divider wall
    whiteDividerVert : [
        // queen bed
        {x: 340, y: 160, count: 2},
        // twin beds
        {x: 412, y: 160, count: 2},
        {x: 412, y: 90, count: 2},
        {x: 412, y: 20, count: 2}
    ],

    // Queen Bed
    queenBed : [
        {x: 286, y: 170}
    ],

    // Twin Bed
    twinBed : [
        {x: 435, y: 25},
        {x: 435, y: 90},
        {x: 435, y: 160},
        {x: 472, y: 25},
        {x: 472, y: 90},
        {x: 472, y: 160}
    ],

    // other items (in multiple rooms section below)
    // plant one
    // bookshelves
    // small dark table
    // white divider horiz



    // ------------------------ LOUNGE FURNITURE -------------------
    piano: [
        {x: 180, y: -66}
    ],

    woodCouch : [

    ],

    loungeSideTable : [

    ],

    // add skinny red rug that leads from risers to rose table
    ceremonyRisers : [
        {x: 160, y: -210, count: 10}
    ],

    roseTable : [

    ],



    // tanSofa: [
    //     {x: 40, y: -220},
    //     {x: 178, y: -220}
    // ],
    //
    // orangePatternedTable: [
    //     {x: 40, y: -190},
    //     {x: 178, y: -190}
    // ],
    //
    // pacManGame: [
    //     {x: 186, y: -70},
    //     {x: 208, y: -70},
    //     {x: 230, y: -70}
    // ],
    //
    // bigCouches: [
    //     {x: 42, y: -161},
    //     {x: 180, y: -161}
    // ],
    //
    // chairRights: [
    //     {x: 21, y: -188},
    //     {x: 159, y: -188}
    // ],
    //
    // chairLefts: [
    //     {x: 83, y: -188},
    //     x = 96 + 174
    //     {x: 220, y: -188}
    // ],



    // ------------------------ OFFICE FURNITURE -------------------
    wideBlueMonitor: [
        {x: 55, y: -471},
        {x: 117, y: -471},
        {x: 179, y: -471}
    ],

    flatscreenTV : [
        {x: 184, y: -310}
    ],

    squareOfficeDesk : [
        {x: 32, y: -274},
        {x: 188, y: -274}
    ],

    officeDesk: [
        {x: 52, y: -460},
        {x: 114, y: -460},
        {x: 176, y: -460}
    ],

    officeChair : [
        // top
        {x: 60, y: -453},
        {x: 184, y: -453},
        // by whiteboards
        {x: 38, y: -264},
        {x: 50, y: -264},
        // by TV
        {x: 194, y: -264},
        {x: 206, y: -264}
    ],

    sidewaysOfficeChair : [
        // top
        {x: 120, y: -450},
        // by whiteboards
        {x: 20, y: -272}
    ],

    whiteBoard: [
        {x: 4.5, y: -320},
        {x: 38, y: -320}
    ],



    // ------------ Multiple Rooms ---------------------
    bookshelves: [
        //office along desks
        {x: 23, y: -475},
        {x: 85, y: -475},
        {x: 147, y: -475},
        {x: 209, y: -475},
        // office by whiteboard
        {x: 72, y: -320},
        //office by TV
        {x: 160, y: -320},
        {x: 228, y: -320},
        // bedroom top left corner
        {x: 257, y: 6},
        {x: 280, y: 6},
        {x: 303, y: 6},
        {x: 326, y: 6},
    ],

    beds: [
        {x: 450, y: -126}
    ],

    // small tree plant
    plantOne : [
        // patio
        // upper right room section
        {x: -109, y: -200},
        {x: -109, y: -148},
        {x: -16, y: -148},
        // lower left room section
        //{x: -167, y: -22},
        {x: -245, y: -90},
        {x: -157, y: -90},
        // bathroom area
        {x: 335, y: -200},
        {x: 260, y: -185},
        {x: 335, y: -140},
        // office
        {x: 8, y: -455},
        {x: 237, y: -455},
        // bedroom by queen bed
        {x: 266, y: 165},
        {x: 323, y: 165},
        // bedroom by twin beds
        {x: 420, y: 25},
        {x: 420, y: 90},
        {x: 420, y: 160}
    ],

    // small potted plant
    plantTwo : [
        // patio upper right section
        {x: -108, y: -170},
        // patio lower left section
        {x: -213, y: -82},
        {x: -185, y: -82},
        // behind greenhouse window
        {x: -210, y: 10},
        {x: -180, y: 10},
        // out front of bathroom on table
        {x: 438, y: -62},
        // bedroom by bookshelves
        {x: 299, y: 62},
        // bathroom area
        {x: 336, y: -165}
    ],

    // green
    paintingOne : [
        {x: 288, y: -240}
    ],

    // pink
    paintingTwo : [
        // bedroom
        {x: 443, y: 0},
        // lounge
        {x: 36, y: -240}
    ],

    standardChair : [
        // bathroom area
        {x: 260, y: -205},
        {x: 260, y: -160},
        // bedroom by bookshelves
        {x: 260, y: 70}
    ],

    darkTable : [
        {x: 428, y: -55}
    ],

    smallDarkTable : [
        // bathroom area
        {x: 296, y: -165},
        {x: 296, y: -190},
        {x: 260, y: -135},
        // bedroom by bookshelves
        {x: 296, y: 70},
        {x: 260, y: 100},
        // bedroom by twin beds
        {x: 489, y: 25},
        {x: 489, y: 90},
        {x: 489, y: 160},
        {x: 452, y: 25},
        {x: 452, y: 90},
        {x: 452, y: 160}
    ],

    lamp: [
        // bedroom by twin beds
        // bedroom by bookshelves
        {x: 261, y: 88},
        // bathroom area
        {x: 261, y: -148}
    ],

    whiteDividerHoriz : [
        // bedroom queen bed
        {x: 257, y: 160, count: 3},
        // office
        {x: 35, y: -405, count: 2},
        //{x: 100, y: -405, count: 1},
        {x: 160, y: -405, count: 2}
    ],

    // redStool: [
    //     office
    //     {x: 155, y: -284},
    //     {x: 175, y: -265},
    //     {x: 200, y: -265},
    //     {x: 216, y: -284},
    //
    //     bedroom
    //     {x: 420, y: 60},
    //     {x: 420, y: 100},
    //     {x: 470, y: 60},
    //     {x: 470, y: 100}
    // ],
}



let levelOne1 = {
    label: "Phase 1-1",

    //NPC PORTRAIT NUMBERS
    // 0 = neutral, 1 = happy, 2 = sad, 3 = mad, 4 = surprised

    butler: [
        {message: "Talk to Mr.Billionaire. He has a welcome message. Also, make sure to take a look around. You " +
                "never know what you might find in this mansion...",
            state: 0,
            portraitNumber: 0,
            stateIncr: false},
        {message: "Talk to Stephanie. She's also dating Mr. Billionaire.",
            state: 1,
            portraitNumber: 0,
            stateIncr: false},
        {message: "Talk to Richie. He is also dating Mr. Billionaire. I know I like to gossip, but Richie " +
                "has no filter...",
            state: 2,
            portraitNumber: 0,
            stateIncr: false},
        {message: "Keep getting to know the other contestants, that's what Mr. Billionaire wanted.",
            state: 3,
            portraitNumber: 0,
            stateIncr: false},
        {message: "Keep getting to know the other contestants, that's what Mr. Billionaire wanted.",
            state: 4,
            portraitNumber: 0,
            stateIncr: false},
        {message: "Keep getting to know the other contestants, that's what Mr. Billionaire wanted.",
            state: 5,
            portraitNumber: 0,
            stateIncr: false},
        {message: "Someone is going to give a toast. Go back to them to hear it. " +
                "And if you haven't found any extra tools, you might want to take another look around the mansion.",
            state: 6,
            portraitNumber: 0,
            stateIncr: false}
    ],

    billionaire: [
        { message: "Welcome to the mansion! I'm so glad you could make it. I'll be giving a toast soon. " +
                "Make yourself comfortable.",
            state: 0,
            portraitNumber: 1,
            stateIncr: true},
        { message: "It's mix and mingle time before we start the real party!",
            state: 1,
            portraitNumber: 0,
            stateIncr: false},
        { message: "It's mix and mingle time before we start the real party!",
            state: 2,
            portraitNumber: 0,
            stateIncr: false},
        { message: "It's mix and mingle time before we start the real party!",
            state: 3,
            portraitNumber: 0,
            stateIncr: false},
        { message: "It's mix and mingle time before we start the real party!",
            state: 4,
            portraitNumber: 0,
            stateIncr: false},
        { message: "It's mix and mingle time before we start the real party!",
            state: 5,
            portraitNumber: 0,
            stateIncr: false},
        { message: "*annoying clinking of silverware on a glass* I'd like to give a toast. " +
                "Welcome to my mansion! I know we'll have a great time. Later, I'll be handing " +
                "out the first impression rose. *wink* Let the sparks ignite!",
            state: 6,
            portraitNumber: 5,  // holding wine glass and smiling
            stateIncr: true}
    ],

    stephanie: [
        { message: "I think I'm like really starting to fall in love...",
            state: 0,
            portraitNumber: 0,
            stateIncr: false},
        { message: "So, you met Mr. Billionaire? Isn't he like so wonderful? " +
                "He's definitely a tall drink of water.",
            state: 1,
            portraitNumber: 1,
            stateIncr: true},
        { message: "*is suddenly thirsty*",
            state: 2,
            portraitNumber: 0,
            stateIncr: false},
        { message: "I don't think there is any reason for me not to get a rose tonight.",
            state: 3,
            portraitNumber: 0,
            stateIncr: true},
        { message: "I think I'm like really starting to fall in love...",
            state: 4,
            portraitNumber: 0,
            stateIncr: false},
        { message: "*is suddenly thirsty*",
            state: 5,
            portraitNumber: 0,
            stateIncr: false},
        { message: "Sharing Mr.Billionaire is like the hardest thing to like do, like yeah.",
            state: 6,
            portraitNumber: 0,
            stateIncr: false},
    ],

    richie: [
        { message: "Steph says that Mr. Billionaire said to talk to him first.",
            state: 0,
            portraitNumber: 0,
            stateIncr: false},
        { message: "I'm going to live up to my name...Richie Rich...and win Mr. Billionaire's heart!",
            state: 1,
            portraitNumber: 1,
            stateIncr: false},
        { message: "Oh, beware of the water here. That stuff I had earlier was nasty.",
            state: 2,
            portraitNumber: 2,
            stateIncr: true},
        { message: "Then again, maybe that water does wonders for the skin...",
            state: 3,
            portraitNumber: 0,
            stateIncr: true},
        { message: "I'm practicing my best \"Can I steal you for a sec?\"",
            state: 4,
            portraitNumber: 0,
            stateIncr: true},
        { message: "What drama is happening that I can just sit and watch?",
            state: 5,
            portraitNumber: 0,
            stateIncr: true},
        { message: "I'm practicing my best \"Can I steal you for a sec?\"",
            state: 6,
            portraitNumber: 0,
            stateIncr: false},
    ],

    kitchenWorker: [
        { message: "Hi! I'm Leah. I'm the kitchen worker here in the mansion.",
            state: 0,
            portraitNumber: 1,
            stateIncr: false},
        { message: "There's gonna be a lovely dinner for everyone.",
            state: 1,
            portraitNumber: 0,
            stateIncr: false},
        { message: "Cooking for everyone sure is a lot though...",
            state: 2,
            portraitNumber: 2,
            stateIncr: false},
        { message: "Cooking for everyone sure is a lot though...",
            state: 3,
            portraitNumber: 2,
            stateIncr: false},
        { message: "Cooking for everyone sure is a lot though...",
            state: 4,
            portraitNumber: 2,
            stateIncr: false},
        { message: "Cooking for everyone sure is a lot though...",
            state: 5,
            portraitNumber: 2,
            stateIncr: false},
        { message: "Cooking for everyone sure is a lot though...",
            state: 6,
            portraitNumber: 2,
            stateIncr: false},
        ],

    gardener: [
        { message: "I'm the gardener for this old place",
            state: 0,
            portraitNumber: 0,
            stateIncr: false},
        { message: "Are you messing with my plants?",
            state: 1,
            portraitNumber: 3,
            stateIncr: false},
        { message: "This all took a while to grow, you better not mess with it!",
            state: 2,
            portraitNumber: 3,
            stateIncr: false},
        { message: "Plants just make me feel happy.",
            state: 3,
            portraitNumber: 1,
            stateIncr: false},
        { message: "Gardening does take quite a bit.",
            state: 4,
            portraitNumber: 0,
            stateIncr: false},
        { message: "Gardening does take quite a bit.",
            state: 5,
            portraitNumber: 0,
            stateIncr: false},
        { message: "Gardening does take quite a bit.",
            state: 6,
            portraitNumber: 0,
            stateIncr: false},
        ],

    guard: [
        { message: "Just here to protect Mr.Billionaire.",
            state: 0,
            portraitNumber: 0,
            stateIncr: false},
        { message: "We're not really supposed to talk to guests much, we're here on guard duty.",
            state: 1,
            portraitNumber: 0,
            stateIncr: false},
        { message: "Please stop distracting us from doing our job.",
            state: 2,
            portraitNumber: 0,
            stateIncr: false},
        { message: "...",
            state: 3,
            portraitNumber: 0,
            stateIncr: false},
        { message: "...",
            state: 4,
            portraitNumber: 0,
            stateIncr: false},
        { message: "...",
            state: 5,
            portraitNumber: 0,
            stateIncr: false},
        { message: "...",
            state: 6,
            portraitNumber: 0,
            stateIncr: false},
    ],

    carMechanic: [
        { message: "I'm the car mechanic for Mr.Billionaire.",
            state: 0,
            portraitNumber: 0,
            stateIncr: false},
        { message: "Gotta make sure his cars are always running perfectly.",
            state: 1,
            portraitNumber: 1,
            stateIncr: false},
        { message: "We got the best of the best cars here in this garage.",
            state: 2,
            portraitNumber: 1,
            stateIncr: false},
        { message: "He has taken a couple joy rides that didn't end very well...",
            state: 3,
            portraitNumber: 2,
            stateIncr: false},
        { message: "Well, more work for me but I enjoy it!",
            state: 4,
            portraitNumber: 1,
            stateIncr: false},
        { message: "I've always been one to get my hands dirty.",
            state: 5,
            portraitNumber: 1,
            stateIncr: false},
        { message: "I've always been one to get my hands dirty.",
            state: 6,
            portraitNumber: 1,
            stateIncr: false},
    ],


    // --------------- OBJECTS ------------------
    billionaireStatue: [
        { message: "A larger than life statue of Mr. Billionaire, he clearly loves himself.",
            state: 0,
            portraitNumber: 0,
            stateIncr: false},
        { message: "He wasn't kidding on how much he enjoys wine.",
            state: 1,
            portraitNumber: 0,
            stateIncr: false},
        { message: "He wasn't kidding on how much he enjoys wine.",
            state: 2,
            portraitNumber: 0,
            stateIncr: false},
        { message: "He wasn't kidding on how much he enjoys wine.",
            state: 3,
            portraitNumber: 0,
            stateIncr: false},
        { message: "He wasn't kidding on how much he enjoys wine.",
            state: 4,
            portraitNumber: 0,
            stateIncr: false},
        { message: "He wasn't kidding on how much he enjoys wine.",
            state: 5,
            portraitNumber: 0,
            stateIncr: false},
        { message: "He wasn't kidding on how much he enjoys wine.",
            state: 6,
            portraitNumber: 0,
            stateIncr: false},
    ],

    fridge: [
        { message: "There looks to be food prepared by the kitchen worker Leah.",
            state: 0,
            portraitNumber: 0,
            stateIncr: false},
        { message: "There's a whole wine section it seems.",
            state: 1,
            portraitNumber: 0,
            stateIncr: false},
        { message: "They probably wouldn't notice if you took something as a snack...",
            state: 2,
            portraitNumber: 0,
            stateIncr: false},
        { message: "They probably wouldn't notice if you took something as a snack...",
            state: 3,
            portraitNumber: 0,
            stateIncr: false},
        { message: "They probably wouldn't notice if you took something as a snack...",
            state: 4,
            portraitNumber: 0,
            stateIncr: false},
        { message: "They probably wouldn't notice if you took something as a snack...",
            state: 5,
            portraitNumber: 0,
            stateIncr: false},
        { message: "They probably wouldn't notice if you took something as a snack...",
            state: 6,
            portraitNumber: 0,
            stateIncr: false},
    ],

    monitor: [
        { message: "There seems to be League of Legends installed on this computer...",
            state: 0,
            portraitNumber: 0,
            stateIncr: false},
        { message: "There seems to be League of Legends installed on this computer...",
            state: 1,
            portraitNumber: 0,
            stateIncr: false},
        { message: "There seems to be League of Legends installed on this computer...",
            state: 2,
            portraitNumber: 0,
            stateIncr: false},
        { message: "There seems to be League of Legends installed on this computer...",
            state: 3,
            portraitNumber: 0,
            stateIncr: false},
        { message: "There seems to be League of Legends installed on this computer...",
            state: 4,
            portraitNumber: 0,
            stateIncr: false},
        { message: "There seems to be League of Legends installed on this computer...",
            state: 5,
            portraitNumber: 0,
            stateIncr: false},
        { message: "There seems to be League of Legends installed on this computer...",
            state: 6,
            portraitNumber: 0,
            stateIncr: false},
    ],


    //ITEMS
    toolbox: [
        { message: "There seems to be a lot of cool things in this toolbox.",
            state: 0,
            portraitNumber: 0,
            stateIncr: false},
        { message: "Maybe something could be useful here for later.",
            state: 1,
            portraitNumber: 0,
            stateIncr: false},
        { message: "Gotta keep looking in this, there's a lot of nice tools in here.",
            state: 2,
            portraitNumber: 0,
            stateIncr: false},
        { message: "You found a flashlight!",
            state: 3,
            portraitNumber: 0,
            stateIncr: false},
        { message: "You found a flashlight!",
            state: 4,
            portraitNumber: 0,
            stateIncr: false},
        { message: "You found a flashlight!",
            state: 5,
            portraitNumber: 0,
            stateIncr: false},
        { message: "You found a flashlight!",
            state: 6,
            portraitNumber: 0,
            stateIncr: false},
    ],

    // sneakers: if state == 2 then stateIncr = true
    // cape: if state == 4 then stateIncr = true
    // flashlight: if state == 5 then stateIncr = true
};


let levelOne2 = {
    label: "Phase 1-2",

    butler: [
        {message: "I've heard Richie complain about the water. Have you seen anything with water in it? You might want to check there.",
            state: 0,
            stateIncr: false},
        {message: "I've heard the Car Mechanic was supposed to not touch one of the cars for some reason.",
            state: 1,
            stateIncr: false},
        {message: "I've heard Mr. Billionaire likes to keep his very valuable items hidden away somewhere in his bedroom.",
            state: 2,
            stateIncr: false},
        {message: "The front door is located at the bottom of the Entrance room where you started. You better get there quick!",
            state: 3,
            stateIncr: false},
    ],


    // --------------- OBJECTS ------------------
    billionaireStatue: [
        { message: "A larger than life statue of Mr. Billionaire, he clearly loves himself.",
            state: 0,
            portraitNumber: 0,
            stateIncr: false},
        { message: "He wasn't kidding on how much he enjoys wine.",
            state: 1,
            portraitNumber: 0,
            stateIncr: false},
        { message: "He wasn't kidding on how much he enjoys wine.",
            state: 2,
            portraitNumber: 0,
            stateIncr: false},
    ],

    fridge: [
        { message: "There looks to be food prepared by the kitchen worker Leah.",
            state: 0,
            portraitNumber: 0,
            stateIncr: false},
        { message: "There's a whole wine section it seems.",
            state: 1,
            portraitNumber: 0,
            stateIncr: false},
        { message: "They probably wouldn't notice if you took something as a snack...",
            state: 2,
            portraitNumber: 0,
            stateIncr: false},
    ],

    monitor: [
        { message: "There seems to be League of Legends installed on this computer...",
            state: 0,
            portraitNumber: 0,
            stateIncr: false},
        { message: "There seems to be League of Legends installed on this computer...",
            state: 1,
            portraitNumber: 0,
            stateIncr: false},
        { message: "There seems to be League of Legends installed on this computer...",
            state: 2,
            portraitNumber: 0,
            stateIncr: false},
    ],


    //ITEMS
    greyCar: [
        { message: "You have found a Gps on a car in the garage that proves Mr.Billionaire was at the scene of the crime!",
            state: 0,
            portraitNumber: 0,
            stateIncr: true},
        { message: "You have found a Gps on a car in the garage that proves Mr.Billionaire was at the scene of the crime!",
            state: 1,
            portraitNumber: 0,
            stateIncr: true},
        { message: "You have found a Gps on a car in the garage that proves Mr.Billionaire was at the scene of the crime!",
            state: 2,
            portraitNumber: 0,
            stateIncr: true},
    ],

    waterTank: [
        { message: "You have found lighter fluid disguised as water!",
            state: 0,
            portraitNumber: 0,
            stateIncr: true},
        { message: "You have found lighter fluid disguised as water!",
            state: 1,
            portraitNumber: 0,
            stateIncr: true},
        { message: "You have found lighter fluid disguised as water!",
            state: 2,
            portraitNumber: 0,
            stateIncr: true},
    ],

    paintingTwo: [
        { message: "You have found the stolen patent!",
            state: 0,
            portraitNumber: 0,
            stateIncr: true},
        { message: "You have found the stolen patent!",
            state: 1,
            portraitNumber: 0,
            stateIncr: true},
        { message: "You have found the stolen patent!",
            state: 2,
            portraitNumber: 0,
            stateIncr: true},
    ],
};

let titleScreen = {
    label: "title screen"
};

let introCutscene = {
    label: "intro"
};

let levelOneCutscene = {
    label: "level one"
};

let endingPart1Cutscene = {
    label: "ending part 1"
};

let endingPart2Cutscene = {
    label: "ending part 2"
};

let loseScreen = {
    label: "lose screen"
};

let winScreen = {
    label: "win screen"
};