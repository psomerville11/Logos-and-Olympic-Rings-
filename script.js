// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

// Extra practice: https://cdn.glitch.com/20b95798-6f01-45c6-8fc7-a706c95d44a9%2Flogos.jpg?v=1512863797321

function setup() {
  //code only runs once here
  createCanvas(800, 600);
}
//olympic rings
function draw() {
  //Code here runs continously
  background(220);

  stroke("blue");
  strokeWeight(5);
  noFill();
  circle(80, 45, 30);

  stroke("yellow");
  noFill();
  circle(110, 70, 30);

  stroke("black");
  noFill();
  circle(150, 45, 30);

  stroke("green");
  noFill();
  circle(180, 74, 30);

  stroke("red");
  noFill();
  circle(220, 48, 30);

  //microsoft logo
  stroke(246, 83, 20);
  fill(246, 83, 20);
  rect(50, 300, 45, 45);

  stroke(124, 187, 0);
  fill(124, 187, 0);
  rect(109, 300, 45, 45);

  stroke(0, 161, 241);
  fill(0, 161, 241);
  rect(50, 355, 45, 45);

  stroke(255, 187, 0);
  fill(255, 187, 0);
  rect(109, 355, 45, 45);

  //mastercard logo
  stroke("red");
  fill("red");
  circle(300, 350, 45);

  stroke("orange");
  fill("orange");
  circle(369, 350, 45);

  stroke("orange");
  strokeWeight(5);
  line(316, 315, 345, 315);
  line(316, 325, 345, 325);
  line(316, 335, 345, 335);
  line(316, 345, 345, 345);
  line(316, 355, 345, 355);
  line(316, 365, 345, 365);
  line(316, 375, 345, 375);

  stroke("red");
  strokeWeight(5);
  line(316, 320, 345, 320);
  line(316, 330, 345, 330);
  line(316, 340, 345, 340);
  line(316, 350, 345, 350);
  line(316, 360, 345, 360);
  line(316, 370, 345, 370);
  line(316, 380, 345, 380);
  
 //triangle logo
  stroke('red')
  fill('red')
  triangle(40,525,90,445,85,500)
//triangle2
  stroke('orange')
  fill('orange')
  triangle(90,500,95,445,130,525)
//triangle3
  stroke('blue')
  fill('blue')
  triangle(40,540,85,515,85,540)
//triangle 4
  stroke('green')
  fill('green')
  triangle(85,540,85,515,130,540)
}
