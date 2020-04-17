var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var colors = ['red','maroon', 'lime', 'green', 'aqua', 'teal', 'blue', 'purple'];

c.fillStyle = 'yellow';
c.fillRect(0,0,canvas.width/2, canvas.height/2);

c.fillStyle = 'olive';
c.fillRect(0,canvas.height/2,canvas.width/2, canvas.height/2);

c.fillStyle = 'navy';
c.fillRect(canvas.width/2,0,canvas.width/2, canvas.height/2);

c.fillStyle = 'fuchsia';
c.fillRect(canvas.width/2,canvas.height/2,canvas.width/2, canvas.height/2);


var counter = 0;
var width;
var height;
var maxDim = canvas.width/5;
var incrementDim = 50;
var dimArray = [];
for(var i = 0; i<4; i++){
    dimArray.push((maxDim-incrementDim)*Math.random() + incrementDim);
}
function boarderQuilt(){
    var x = 0;
    var y = 0;
    for(var i = 0; i<pieces; i++){
        x= canvas.width*Math.random();
        width = 100*Math.random()+50;
        height = 100*Math.random()+50;        
        c.fillStyle = colors[Math.floor(colors.length*Math.random())];
        c.fillRect(x,y,width, height);
        i+=1;
    }
    x=0;
    y=0;
    while(y<canvas.height){
        width = 100*Math.random()+50;
        height = 100*Math.random()+50;
    
        c.fillStyle = colors[Math.floor(colors.length*Math.random())];
        c.fillRect(x,y,width, height);
        y+=height;
    }
}
function randomizedQuilt(pieces){
    for(var i = 0; i<pieces; i++){
        width = dimArray[Math.floor(dimArray.length*Math.random())];
        height = dimArray[Math.floor(dimArray.length*Math.random())];
        c.fillStyle = colors[Math.floor(colors.length*Math.random())];
        c.fillRect(canvas.width*Math.random(), canvas.height*Math.random(), width, height);
    }       
}

//boarderQuilt();
randomizedQuilt(500);

/*width = dimArray[Math.floor(dimArray.length*Math.random())];
height = dimArray[Math.floor(dimArray.length*Math.random())];
c.fillStyle = colors[Math.floor(colors.length*Math.random())];
c.fillRect(x, y, width, height);
*/