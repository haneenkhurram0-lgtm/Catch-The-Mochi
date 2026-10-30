let ghost;
let score = 0;
let duration = 30;
let startTime;
let state = 'start';
let spawnEvery = 60;
function setup() {
  createCanvas(500, 400);
  spawnGhost();
}
function draw() {
  background("#FFC0CB");

  if (state === 'start') {
    textAlign(CENTER, CENTER);
    fill("#800080");
    textSize(35);
    text('Catch Our Mochi', width / 2, height / 2);
    return;
  }
fill("#008000");
  rect(0, 350, 800, 60);
  if (state === 'over') {
    textAlign(CENTER, CENTER);
    fill("#800080");
    textSize(35);
    text('KHEL KHATAM BETA\nScore: ' + score + '\nAGAINN!!!', width / 2, height / 2);
    return;
  }

   let elapsed = (millis() - startTime) / 1000;
  let timeLeft = max(0, duration - elapsed);
  if (timeLeft <= 0) {
    state = 'over';
    return;
  }
  if (frameCount % spawnEvery === 0) spawnGhost();
  drawGhost(ghost.x, ghost.y);

  textAlign(LEFT, TOP);
  fill("#E75480");
  textSize(20);
  text('Score: ' + score, 12, 10);
  textAlign(RIGHT, TOP);
  text('Time: ' + ceil(timeLeft), width - 12, 10);
}
function mousePressed() {
  if (state === 'start' || state === 'over') {
    state = 'play';
    score = 0;
    startTime = millis();
    spawnGhost();
    return;
  }
  if (dist(mouseX, mouseY, ghost.x, ghost.y) < 30) {
    score++;
    spawnGhost();
  }
}
function spawnGhost() {
  ghost = { x: random(40, width - 40), y: random(40, height - 40) };
}

function drawGhost(x, y) {
  noStroke();
  fill("#DAB1DA", 2, 23);
  ellipse(x, y, 120, 120);
  fill(20);
  ellipse(x - 19, y - 5, 20);
  ellipse(x + 19, y - 5, 20);
  fill(255)
  ellipse(x - 19, y - 7, 6);
  ellipse(x + 19, y - 7, 6);
  
  fill("#FF0000");
  arc(x+ 2, y+ 20, 30, 10, 100, 200, CHORD);
}