var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle="yellow";
ctx.fillRect(0, 0, 670, 575);
ctx.stroke()
 
 
var sc=1
 
//<!----------------------- Previous functions ------------------------------------->//
 
function plot(x,y,c){
 	ctx.beginPath();
 	ctx.moveTo(x[0]*sc,-y[0]*sc);
 	for (var i=1; i<x.length; i++) {
 		ctx.lineTo(x[i]*sc,-y[i]*sc);
	 }
 	ctx.closePath();
 	ctx.strokeStyle = c;
 	ctx.stroke();
}
//<!------------------------ Principal Functions ------------------------------------->//
 
var x = 50
var y = 50
 
for(i=0; i<7; i++){
	ctx.moveTo(50,50)
	ctx.arc(x +95*i,y,45,0,(Math.PI/180)*360,true);
	ctx.fillStyle="white";
	ctx.fill();
}
for(i=0; i<7; i++){
	ctx.moveTo(50,50)
	ctx.arc(x +95*i,y+95,45,0,(Math.PI/180)*360,true);
	ctx.fillStyle="white";
	ctx.fill();
}
 for(i=0; i<7; i++){
	ctx.moveTo(50,50)
	ctx.arc(x +95*i,y+95*2,45,0,(Math.PI/180)*360,true);
	ctx.fillStyle="white";
	ctx.fill();
}
for(i=0; i<7; i++){
	ctx.moveTo(50,50)
	ctx.arc(x +95*i,y+95*3,45,0,(Math.PI/180)*360,true);
	ctx.fillStyle="white";
	ctx.fill();
}
for(i=0; i<7; i++){
	ctx.moveTo(50,50)
	ctx.arc(x +95*i,y+95*4,45,0,(Math.PI/180)*360,true);
	ctx.fillStyle="white";
	ctx.fill();
}
for(i=0; i<7; i++){
	ctx.moveTo(50,50)
	ctx.arc(x +95*i,y+95*5,45,0,(Math.PI/180)*360,true);
	ctx.fillStyle="white";
	ctx.fill();
}
for(i=0; i<7; i++){
	ctx.moveTo(50,50)
	ctx.arc(x +95*i,y+95*6,45,0,(Math.PI/180)*360,true);
	ctx.fillStyle="white";
	ctx.fill();
}


//<!------------------------  Function 1------------------------------------->//