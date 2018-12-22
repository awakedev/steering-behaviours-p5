var font;
var vehicles = [];

function preload() {
    font = loadFont('./fonts/Bitter Mind.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);

    var points = font.textToPoints('>Awake Dev ', 500, 400, 192);
    console.log(points);

    for (var i = 0; i < points.length; i++) {;
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
     
    }
}


function draw() {
    background(51);

    for ( var i = 0 ; i < vehicles.length ; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}