const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

function getInfo(array, tittleOfArr){
    let table = [],
        tittle = [],
        tbody = [];
    tittle.push(`<caption>${tittleOfArr} info</caption>`); 
    for(let i = 0; i < array.length; i++){
        let innerArray = array[i],
            column = [];
        column.push(`<td>${innerArray[0]}</td><td>${innerArray[1]}</td><td>${innerArray[2]}</td>`);
        tbody.push(`<tr>${column.join(``)}</tr>`)
    }
    table.push(`<table>${tittle.join(``)} ${tbody.join(``)} </table>`)
    return document.write(`${table.join(``)}`)
}
      
getInfo (animals, `Animals`);
getInfo (food, `Food`);

