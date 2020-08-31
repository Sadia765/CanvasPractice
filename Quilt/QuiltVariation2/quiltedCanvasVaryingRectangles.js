var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

window.addEventListener("click", varyingRectangles);

var colors = ['red', 'navy', 'maroon', 'yellow', 'lime', 'fuchsia', 'green', 'olive', 'aqua', 'teal', 'blue', 'purple'];
/*
c.fillStyle = 'yellow';
c.fillRect(0,0,canvas.width/2, canvas.height/2);

c.fillStyle = 'olive';
c.fillRect(0,canvas.height/2,canvas.width/2, canvas.height/2);

c.fillStyle = 'navy';
c.fillRect(canvas.width/2,0,canvas.width/2, canvas.height/2);

c.fillStyle = 'fuchsia';
c.fillRect(canvas.width/2,canvas.height/2,canvas.width/2, canvas.height/2);
*/


var width;
var height;
var maxDim = canvas.width / 5;
var incrementDim = 50;
var dimArray = [];
for (var i = 0; i < 4; i++) {
    dimArray.push((maxDim - incrementDim) * Math.random() + incrementDim);
}

function EvenlyQuilted() {
    var x = 0;
    var y = 0;
    var fixedWidth = 100;
    var fixedHeight = 100;
    while (y < canvas.height) {
        while (x < canvas.width) {
            c.fillStyle = colors[Math.floor(colors.length * Math.random())];
            c.fillRect(x, y, fixedWidth, fixedHeight);
            x = x + fixedWidth;
        }
        x = 0;
        y = y + fixedHeight;
    }
}

function randomizedQuilt(pieces) {
    for (var i = 0; i < pieces; i++) {
        width = dimArray[Math.floor(dimArray.length * Math.random())];
        height = dimArray[Math.floor(dimArray.length * Math.random())];
        c.fillStyle = colors[Math.floor(colors.length * Math.random())];
        c.fillRect(canvas.width * Math.random(), canvas.height * Math.random(), width, height);
    }
}

function varyingRectangles() {
    EvenlyQuilted();
    randomizedQuilt(100);
}
