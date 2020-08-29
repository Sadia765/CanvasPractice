var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var colors = ['red','maroon', 'yellow', 'olive', 'lime', 'green', 'aqua', 'teal', 'blue', 'navy', 'fuchsia', 'purple'];


//c.fillStyle = colors[Math.floor(12*Math.random())];
//c.fillRect(0,0,20,20);
//c.fillStyle = colors[Math.floor(12*Math.random())];
//c.fillRect(20,0,20,20);
//c.fillStyle = colors[Math.floor(12*Math.random())];
//c.fillRect(0,20,20,20);
var x = 0;
var y = 0;
var fixedWidth;
var fixedHeight;
var incrementx = 50;
var incrementy = 50;
while(y<canvas.height){
    while(x<canvas.width){
        fixedWidth = incrementx*Math.random();
        fixedHeight = incrementy*Math.random();
        posMin = fixedHeight;
        c.fillStyle = colors[Math.floor(12*Math.random())];
        c.fillRect(x, y, fixedWidth, fixedHeight);
        x = x+incrementx; 
           
    }
    x = 0;
    y=y+incrementy;
}
