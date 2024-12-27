const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 500;
const colors = ['#ffffff', '#ffdd57', '#ff7eb3', '#57d6ff', '#a57dff', '#ff5757', '#7eff57', '#57ffd6'];

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    color: colors[Math.floor(Math.random() * colors.length)]
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    ctx.fillStyle = star.color;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function updateStars() {
  stars.forEach(star => {
    star.x += star.dx;
    star.y += star.dy;

    if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
  });
}

function handleMouseMove(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  stars.forEach(star => {
    const dx = star.x - mouseX;
    const dy = star.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 150) {
      star.dx += dx * 0.001;
      star.dy += dy * 0.001;
    }
  });
}


function animate() {
  drawStars();
  updateStars();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener('mousemove', handleMouseMove);

//  Õﬁﬁ „‰ ’Õ… «·»Ì«‰«  «·„œŒ·…
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // „‰⁄ ≈—”«· «·‰„Ê–Ã

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    alert('Ì—ÃÏ ≈œŒ«· «”„ «·„” Œœ„ Êﬂ·„… «·„—Ê—');
    return;
  }

  // ≈—”«· «·„” Œœ„ ≈·Ï ·ÊÕ… «· Õﬂ„ »⁄œ «· Õﬁﬁ
  window.location.href = "dashboard.html";
});
