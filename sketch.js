function setup() {
 createCanvas (1000,750);
}

function draw() {
  background(64,25,255);
  noStroke();

for (var x = 50; x < width; x += 80) {
  for (var y = 50; y < height; y += 80) {
  fill(random(255),random(255),random(255));
  circle(x, y,70);
  }
}
}
