var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

window.addEventListener("click", randomLines)
// var i = 1;
// while(i*10 < canvas.width+1){
//     c.beginPath();
//     c.moveTo(i*10,0);
//     c.lineTo(i*10, canvas.height);
//     c.strokeStyle = 'green';
//     c.stroke();
//     i++;
// }

// var j = 1;
// while(j*10 < canvas.width+1){
//     c.beginPath();
//     c.moveTo(0,j*10);
//     c.lineTo(canvas.width, j*10);
//     c.stroke();
//     j++;
// }

var colors = ['red','maroon', 'yellow', 'olive', 'lime', 'green', 'aqua', 'teal', 'blue', 'navy', 'fuchsia', 'purple'];
function randomLines(){

    for(var k = 0; k<130; k++){
        c.beginPath();
        c.moveTo(35*k*k*Math.random(),26*k*k*Math.random());
        c.lineTo(50*k*Math.random(), 11*k*Math.random());
        c.strokeStyle = colors[Math.floor(12*Math.random())];
        c.stroke();
        k++;
    }
}

// randomLines();

// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400, 500);
// c.lineTo(0,400);
// c.lineTo(400,0);
// c.lineTo(-2,0);
// c.strokeStyle = 'red';
// c.stroke();


// c.beginPath();
// c.moveTo(900,300);
// c.lineTo(800,300);
// c.lineTo(900, 500);
// c.lineTo(400,300);
// c.lineTo(800,0);
// c.closePath();
// c.strokeStyle = 'blue';
// c.stroke();





