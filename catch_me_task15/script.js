let block = document.querySelector(`.block`);

block.style.top = 0;
block.style.left = 0;

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomColor = () => {
    let colors = [];
    for(let i=0; i<=2; i++){
        colors.push(random(0, 255));
    }

    return `rgb(${colors.join(`,`)})`
};

const changeBlockColor = setInterval(() => block.style.backgroundColor = getRandomColor(), 500);

const blockMoving = setInterval(() => {

    let bodyWidth = document.body.offsetWidth - block.clientWidth;
    let bodyHeight = document.body.offsetHeight - block.clientHeight;

    block.style.top = `${random(0, bodyHeight)}px`;

    block.style.left = `${random(0, bodyWidth)}px`;

}, 1000)


