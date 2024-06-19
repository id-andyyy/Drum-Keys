document.addEventListener('keydown', playSound);
document.addEventListener('keyup', returnOriginalStyle);

function playSound(event) {
  const audioNode = document.querySelector(`audio[data-key="${event.code}"]`);
  if (!audioNode) return;
  audioNode.currentTime = 0;
  audioNode.play();
  const itemNode = document.querySelector(`.item[data-key="${event.code}"]`);
  itemNode.classList.add('item_active');
}

function returnOriginalStyle(event) {
  const itemNode = document.querySelector(`.item[data-key="${event.code}"]`);
  if (!itemNode) return;
  itemNode.classList.remove('item_active');
}