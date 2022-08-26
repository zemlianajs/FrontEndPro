const hero = ['Ivan'];
const native = ['York','Of'];
const destination = ['Poltava','In'];

let rainbow = [...destination, ...native, ...hero].reverse();

let removedFirst = rainbow.shift(),
    addFirst  = rainbow.unshift(`Richard`),
    addRainbow = rainbow.splice(3, 0, `Gave`, `Battle`),
    removed = rainbow.pop(),
    addLast = rainbow.push(`Vain`); 
    
console.log(rainbow);

for(let i = 0; i<rainbow.length; i++){
    let colors;
    switch (rainbow[i]){
        case `Richard`:
            colors = "#C2272D";
            break;
        case `Of`:
            colors = "#F8931F";
            break;
        case `York`:
            colors = "#FFFF01";
            break;
        case `Gave`:
            colors = "#009245";
            break;
        case `Battle`:
            colors = "#0193D9";
            break;
        case `In`:
            colors = "#0C04ED";   
            break;
        case `Vain`:
            colors = "#612F90"; 
            break;      
        }
    document.write(`<div class="rainbow">
                <div style= "margin-bottom: 20px; border-radius: 50%; width: 50px; height: 50px; background-color: ${colors};"></div>
                <span>${rainbow[i]}</span>
    </div>`)
}


