let square = document.querySelector(".square");

square.style.left = 0;
square.style.top = 0;

const stepOfmoving = 10;

const showBEMC = () => {
    square.innerHTML = "БЕМС";
    setTimeout(() => square.innerHTML = ``, 2000);
}

const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
setInterval(() => square.style.backgroundColor = randomColor(), 2000);

const ArrowUpAction = () => {
    let currentPosition = square.offsetTop - stepOfmoving;

    if(currentPosition <= 0){
        square.style.top = `${parseInt(square.style.top) + (stepOfmoving*2)}px`;
        showBEMC();
    } else {
        square.style.top = `${parseInt(square.style.top) - stepOfmoving}px`;
    }
} 

const ArrowDownAction = () => {
    let bodyHeight = document.body.offsetHeight - square.clientHeight;
    let currentPosition = square.offsetTop + stepOfmoving;

    if(currentPosition >= bodyHeight){
        square.style.top = `${parseInt(square.style.top) - (stepOfmoving*2)}px`;
        showBEMC();
    } else {
        square.style.top = `${parseInt(square.style.top) + stepOfmoving}px`;
    }
}

const ArrowLeftAction = () => {
    let currentPosition = square.offsetLeft - stepOfmoving;

    if(currentPosition <= 0){
        square.style.left = `${parseInt(square.style.left) + (stepOfmoving*2)}px`;
        showBEMC();
    } else {
        square.style.left = `${parseInt(square.style.left) - stepOfmoving}px`;
    }
}

const ArrowRightAction = () => {
    let bodyWidth = document.body.offsetWidth - square.clientWidth;
    let currentPosition = square.offsetLeft + stepOfmoving;

    if(currentPosition >= bodyWidth){
        square.style.left = `${parseInt(square.style.left) - (stepOfmoving*2)}px`;
        showBEMC();
    } else {
        square.style.left = `${parseInt(square.style.left) + stepOfmoving}px`;
    }
}

const SpaceAction = () => {
    square.classList.add(`animated_space`);
    setTimeout(()=>square.classList.remove(`animated_space`), 500);
}

const CtrlAction = () => {
    square.classList.add(`animated_Ctrl`);
    setTimeout(()=>square.classList.remove(`animated_Ctrl`), 1000);
}

const ACTIONS = {
    17: CtrlAction,
    32: SpaceAction,
    37: ArrowLeftAction,
    38: ArrowUpAction,    
    39: ArrowRightAction,
    40: ArrowDownAction
}



document.addEventListener(`keydown`, e => ACTIONS[e.keyCode] && ACTIONS[e.keyCode]());

// const ACTIONS = {
//     17: () => {
//             square.classList.add(`animated_Ctrl`);
//             setTimeout(()=>square.classList.remove(`animated_Ctrl`), 1000)
//         },

//     32: () => {
//             square.classList.add(`animated_space`);
//             setTimeout(()=>square.classList.remove(`animated_space`), 500)
//         },

//     37: () => {
//             let currentPosition = square.offsetLeft - stepOfmoving;
        
//             if(currentPosition <= 0){
//                 square.style.left = `${parseInt(square.style.left) + (stepOfmoving*2)}px`;
//                 showBEMC();
//             } else {
//                 square.style.left = `${parseInt(square.style.left) - stepOfmoving}px`;
//             }
//         },

//     38: () => {
//             let currentPosition = square.offsetTop - stepOfmoving;
        
//             if(currentPosition <= 0){
//                 square.style.top = `${parseInt(square.style.top) + (stepOfmoving*2)}px`;
//                 showBEMC();
//             } else {
//                 square.style.top = `${parseInt(square.style.top) - stepOfmoving}px`;
//             }
//         },

//     39:  () => {
//             let bodyWidth = document.body.offsetWidth - square.clientWidth;
//             let currentPosition = square.offsetLeft + stepOfmoving;
        
//             if(currentPosition >= bodyWidth){
//                 square.style.left = `${parseInt(square.style.left) - (stepOfmoving*2)}px`;
//                 showBEMC();
//             } else {
//                 square.style.left = `${parseInt(square.style.left) + stepOfmoving}px`;
//             }
//         },

//     40: () => {
//             let bodyHeight = document.body.offsetHeight - square.clientHeight;
//             let currentPosition = square.offsetTop + stepOfmoving;
        
//             if(currentPosition >= bodyHeight){
//                 square.style.top = `${parseInt(square.style.top) - (stepOfmoving*2)}px`;
//                 showBEMC();
//             } else {
//                 square.style.top = `${parseInt(square.style.top) + stepOfmoving}px`;
//             }
//         }
// }


