const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

const letters = "01"; // You can expand: "01ﾊﾐﾑｱ"
const fontSize = 16;
canvas.style.opacity = '0.4'; // from 1 (default) to 0.2 or 0.3
let columns;
let drops = [];

// Initialize canvas & drops
function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);

  ctx.font = `${fontSize}px monospace`;
  ctx.fillStyle = "#0F0";
}

function draw() {
  // Semi-transparent black background for fade effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  requestAnimationFrame(draw);
}

// Handle resize properly
window.addEventListener("resize", () => {
  init();
});

// Initialize & start
init();
draw();

