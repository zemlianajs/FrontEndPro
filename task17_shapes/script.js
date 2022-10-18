const element = document.querySelector(`#element`);
const renderShape = document.querySelector(`#renderShape`);
const shape = document.querySelector(`#shape`);
const checkedColor = document.querySelector(`#color`);

renderShape.addEventListener(`submit`, e => {
    e.preventDefault();    
    element.className = `${shape.value}`
    element.style.background = checkedColor.value; 
})


