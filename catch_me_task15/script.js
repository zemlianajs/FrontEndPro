const block = document.querySelectorAll(`.block`);

console.dir(block)

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomColor = () => {
    let colors = [];
    for(let i=0; i<=2; i++){
        colors.push(getRandomIntInclusive(0, 255));
    }

    return `rgb(${colors.join(`,`)})`;
}


block.forEach(item => {
    setInterval(() => item.style.backgroundColor = getRandomColor(), 500);
});