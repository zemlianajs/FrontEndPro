let dataOfChildren  = [];

const getFile = file => {
    const request = new XMLHttpRequest();
    request.open(`GET`, file);
    request.send();

    request.addEventListener(`readystatechange`, () => {
        if(request.readyState === 4 && request.status===200 && request.status<400){
            receivedData(JSON.parse(request.response));
        }
    })
    
}

let data = getFile(`./data.json`);
let data2 = getFile(`./data2.json`);

const receivedData = obj => {
    let receivedArr = [];
    receivedArr = (Object.values(obj))
            .forEach(item => item
                .forEach(item => dataOfChildren.push(item)));
}

console.log(dataOfChildren)  




