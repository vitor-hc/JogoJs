const dino = document.querySelector('.dino');
let isjumping = false;
let position = 0;
const background = document.querySelector('.backgr')
function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isjumping) {
            jump();
        }
    }
}
function jump() {
   
    isjumping = true;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);


            let downInterval = setInterval(() => {
                if (position <= 0) {

                    clearInterval(downInterval);
                    isjumping = false;

                }
                else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);

        } else {
            position += 20
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() 
{
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;


    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);
    let leftInterval = setInterval(() => 
    {

        if (cactusPosition < -60)
        {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }
        else if (cactusPosition > 0 && cactusPosition < 60&&position<60)
        {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="gameover"> Fim de Jogo </h1>';
        }
        else
        {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }

    
    }, 20);
    setTimeout(createCactus, randomTime);
}
createCactus();
document.addEventListener('keyup', handleKeyUp);