let tramonto;

function preload() {
  tramonto = loadImage("image.jpg");
}


function setup() {
  createCanvas(400, 400);
  background(160,0,0);

  let x;
  let y;


  for (let i=0; i<100; i = i + 1) {
    x = random(300);
    y = random(300);
    image(tramonto, x, y, 50, 50);
  }
}