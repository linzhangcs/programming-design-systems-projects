var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true,
});

r.rect(0, 0, 800, 720)
  .fill(255)
  .stroke(255)

r.triangle(150, 500, 300, 630, 600, 200)
  .fill(0)

r.ellipse(200, 590, 300, 300)
  .fill(0)
  .stroke(0)

r.draw();
