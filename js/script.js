const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const block = document.querySelector('.block');
const audio = new Audio("../assets/negative_beeps-6008.mp3")

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loopPipe = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (
        pipePosition <= 120 && pipePosition > 0 &&
        marioPosition < 80
        ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        audio.play()

        clearInterval(loop);

    }

}, 12);

const loopBlock = setInterval(() => {

    console.log('loop')

    const blockPosition = block.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (
        blockPosition <= 120 && blockPosition > 0 &&
        marioPosition < 80
        ) {

        block.style.animation = 'none';
        block.style.left = `${blockPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        audio.play()

        clearInterval(loop);

    }

}, 18);

document.addEventListener('mousedown', jump);