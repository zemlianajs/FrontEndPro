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

function getInfo(tittle, array){
    let table = [];
    for(let tr = 0; tr < array.length; tr++){
        let innerArray = array[tr],
            icon = innerArray[0],
            WhoWhat = innerArray[1],
            NameOrPrice = innerArray[2],
            column = [];        
        column.push(`<td>${icon}</td><td>${WhoWhat}</td><td>${NameOrPrice}</td>`);
        table.push(`<tr>${column.join(``)}</tr>`)
    }
    return document.write(`<table>
        <caption>${tittle}</caption>
        <tbody>${table}</tbody>
        </table>`)
}
      
getInfo (`Animals info`, animals);
getInfo (`Food info`, food);
