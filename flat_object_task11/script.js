const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
};

// function convert(object) {
//     for (let key in object) {
//       (typeof object[key] === 'object')
//         ? (convert(object[key]), delete object[key])
//         : obj[key] = object[key]
//     }
//     return object
// }




const convert = list => {
    let newObj = {};

    for (let key in list) {
        if(typeof list[key] === 'object'){
            Object.assign(newObj, convert(list[key]))
        } else{
            newObj[key] = list[key];
        }
    }
    return newObj;
}

console.log(convert(obj))