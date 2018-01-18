function setup (){
  createCanvas (655,180);
  background(169,169,169);
}

function draw(){
  if (mouseIsPressed){
    fill(0);
  }else{
    fill(255);
  }
  ellipse(mouseX,mouseY, 20,20);
}
