var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight

var c = canvas.getContext('2d');

var x, y, random;
for(var i = 0; i<100;i++){
    random = Math.random();
    x = i*random*200; 
    y = i*random*50;
    if(i%3 == 0){
        c.fillStyle = 'blue';
    }
    else if(i%2 == 0){
        c.fillStyle = 'orange';
    }
    else{
        c.fillStyle = 'red';
    }
    c.fillRect(x, y, 5*i,10*i);
}
