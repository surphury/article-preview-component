const $shareButton = document.getElementById('shareButton'),
$footerMenu = document.getElementById('cardMenu');

document.body.addEventListener('click',(e) => {
    if(!e.target.classList.contains('card__menu--hidden',))
        $footerMenu.classList.add('card__menu--hidden');
},true);

$shareButton.addEventListener('click',() => $footerMenu.classList.toggle('card__menu--hidden'));