
function setup (){
  var placeholder =createCanvas (655,180);
  placeholder.parent('placeholder');
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
