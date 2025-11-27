const scrollBox = document.querySelector('.feedback-scroll');

scrollBox.addEventListener('mouseenter', () => {
  scrollBox.style.animationPlayState = 'paused';
});

scrollBox.addEventListener('mouseleave', () => {
  scrollBox.style.animationPlayState = 'running';
});

const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

const letters = "01ﾊﾐﾑｱｳｴｵｶｷｸｹｺ01010101ｻｼｽｾ01010101010ｿﾀ101ﾂﾃﾄﾅﾆ010101ﾇﾈﾉAﾊﾋNﾌﾍﾎAﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
const fontSize = 16;
canvas.style.opacity = '0.3';
let columns;
let drops = [];
let colors = ['#00ff88', '#ff4466', '#00ccff', '#ffaa00'];

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
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    
    // Random color selection with primary green being most common
    const colorIndex = Math.random() < 0.7 ? 0 : Math.floor(Math.random() * colors.length);
    ctx.fillStyle = colors[colorIndex];

    ctx.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.98) {
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

