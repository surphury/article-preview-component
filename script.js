const $shareButton = document.getElementById('shareButton'),
$footerMenu = document.getElementById('cardMenu');
$shareButton.addEventListener('click',() => $footerMenu.classList.toggle('card__menu--hidden'))