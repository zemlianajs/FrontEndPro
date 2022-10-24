dataOfChildren = [];

const getFile = (file, callbackFunc) => {
    const xhr = new XMLHttpRequest();
    xhr.open(`GET`, file);
    xhr.send();

    xhr.addEventListener(`readystatechange`, () => {
        if(xhr.readyState === 4 && xhr.status===200 && xhr.status<400){
            if (typeof callbackFunc === `function`) callbackFunc(JSON.parse(xhr.response));
        }
    })
    
}
const receivedData = obj => Object
    .values(obj)
    .forEach(item => item
        .forEach(item => dataOfChildren.push(item)));

console.log(dataOfChildren);

getFile(`./data.json`, receivedData);
getFile(`./data2.json`, receivedData);
