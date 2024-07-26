/**
 * Opens menu overlay and fixes document body in place so it won't scroll
 * while the overlay is open.
 */
function toggleMenuOverlay() {
  const body = document.querySelector('body');
  const overlay = document.querySelector('.menu-overlay');

  overlay.classList.toggle('menu-overlay--is-open');
  body.classList.toggle('overflow-hidden');
}
