const weddingDate = new Date('2027-06-13T11:30:00+05:30');

window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 500);
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  initScratchCard();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

document.getElementById('openInvitation').addEventListener('click', () => {
  document.getElementById('invitation').scrollIntoView({ behavior: 'smooth' });
});

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;
  const ids = ['days', 'hours', 'minutes', 'seconds'];
  if (diff <= 0) {
    ids.forEach(id => document.getElementById(id).textContent = '00');
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  [days, hours, minutes, seconds].forEach((v, i) => {
    document.getElementById(ids[i]).textContent = String(v).padStart(2, '0');
  });
}

function initScratchCard() {
  const card = document.getElementById('scratchCard');
  const canvas = document.getElementById('scratchCanvas');
  const button = document.getElementById('revealButton');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  let drawing = false;

  function resize() {
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const rect = card.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#b99b73';
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = 'rgba(255,255,255,.22)';
    for (let x = -rect.height; x < rect.width; x += 14) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + rect.height, rect.height); ctx.strokeStyle = 'rgba(255,255,255,.12)'; ctx.stroke();
    }
    ctx.fillStyle = '#fff4df';
    ctx.font = '600 12px Montserrat';
    ctx.textAlign = 'center';
    ctx.fillText('SCRATCH HERE', rect.width / 2, rect.height / 2 + 5);
  }

  function scratch(x, y) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath(); ctx.arc(x, y, 25, 0, Math.PI * 2); ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  }

  function position(e) {
    const rect = canvas.getBoundingClientRect();
    const point = e.touches ? e.touches[0] : e;
    return { x: point.clientX - rect.left, y: point.clientY - rect.top };
  }

  function percentCleared() {
    const w = canvas.width, h = canvas.height;
    const data = ctx.getImageData(0, 0, w, h).data;
    let transparent = 0;
    for (let i = 3; i < data.length; i += 4) if (data[i] < 80) transparent++;
    return transparent / (w * h) * 100;
  }

  function finish() {
    card.classList.add('revealed');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  canvas.addEventListener('pointerdown', e => { drawing = true; const p = position(e); scratch(p.x, p.y); });
  canvas.addEventListener('pointermove', e => { if (!drawing) return; const p = position(e); scratch(p.x, p.y); if (percentCleared() > 55) finish(); });
  window.addEventListener('pointerup', () => drawing = false);
  button.addEventListener('click', finish);
  window.addEventListener('resize', resize);
  resize();
}
