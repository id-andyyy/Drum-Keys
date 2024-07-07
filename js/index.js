document.addEventListener('keydown', playSound);
document.addEventListener('keyup', bringOriginalStyle);

const keyNode = document.querySelectorAll('.item');
keyNode.forEach((key) => key.addEventListener('mousedown', playSound));
keyNode.forEach((key) => key.addEventListener('mouseup', bringOriginalStyle));

function playSound(event) {
  const keyCode = event.code ?? event.target.closest('.item').getAttribute('data-key');
  const audioNode = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audioNode) return;
  audioNode.currentTime = 0;
  audioNode.play();
  const itemNode = document.querySelector(`.item[data-key="${keyCode}"]`);
  itemNode.classList.add('item_active');
}

function bringOriginalStyle(event) {
  const keyCode = event.code ?? event.target.closest('.item').getAttribute('data-key');
  const itemNode = document.querySelector(`.item[data-key="${keyCode}"]`);
  if (!itemNode) return;
  itemNode.classList.remove('item_active');
}