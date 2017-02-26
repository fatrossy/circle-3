function setup() {
  createCanvas(800,600);
  //background(255)
  noFill();
  angleMode(DEGREES);
  frameRate(12);
}

function draw() {
  var r=frameCount*3;
  var col1=color('#ea0043');
  var col2=color('#0fefca');
  translate(width/2,height/2);
  line(100,0,100*cos(frameCount*3),100*sin(frameCount*3));
  stroke(lerpColor(col1,col2,r/360));
}