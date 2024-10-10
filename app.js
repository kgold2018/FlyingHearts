document.addEventListener('mousemove', (event) => {
    let x = event.offsetX;
    let y = event.offsetY;

    const body = document.querySelector('body');
    const heart = document.createElement('span');

    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let random = Math.random() *300
    let size = Math.random() * random;

    heart.style.width = size + 'px';
    heart.style.height = size + 'px';

    body.appendChild(heart);

    setTimeout( function () {
        heart.remove()
    },  2500)



});