const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber)
{
    const image = new Image();
    if(imgNumber === 1){
        image.src = '/images/2.png';
    }
    else{
        image.src = `/images/${imgNumber + 1}.jpg`
    }
    image.classList.add("bgImage")
    body.appendChild(image);

    body.prepend(image);

    //image.addEventListener("loadend", handleImgLoad);
    
}

function init()
{
    const randomNumber = Math.floor(Math.random()*IMG_NUMBER);
    paintImage(randomNumber);
}

init();