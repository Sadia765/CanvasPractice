var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

window.addEventListener("click", buildQuilt);
var colors = ['red','maroon', 'yellow', 'olive', 'lime', 'green', 'aqua', 'teal', 'blue', 'navy', 'fuchsia', 'purple'];


//c.fillStyle = colors[Math.floor(12*Math.random())];
//c.fillRect(0,0,20,20);
//c.fillStyle = colors[Math.floor(12*Math.random())];
//c.fillRect(20,0,20,20);
//c.fillStyle = colors[Math.floor(12*Math.random())];
//c.fillRect(0,20,20,20);
function buildQuilt(){
    var x = 0;
    var y = 0;
    var fixedWidth = 100;
    var fixedHeight = 100;
    while(y<canvas.height){
        while(x<canvas.width){
            c.fillStyle = colors[Math.floor(12*Math.random())];
            c.fillRect(x, y, fixedWidth, fixedHeight);
            x = x+fixedWidth;       
        }
        x = 0;
        y=y+fixedHeight;
    }
}

