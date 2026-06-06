// Echoes in Bloom — main.js

// ── Curiosity accordion ──
function toggleCuriosity(item) {
  const expanded = item.nextElementSibling;
  const isOpen = expanded.classList.contains('open');
  // close all
  document.querySelectorAll('.cx').forEach(el => el.classList.remove('open'));
  // open this one if it wasn't already open
  if (!isOpen) expanded.classList.add('open');
}

// make toggleCuriosity available globally (called inline from HTML)
window.toggleCuriosity = toggleCuriosity;
