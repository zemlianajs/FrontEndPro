const sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
    ];
function consoleArr (array){
    for(let i=0; i<array.length; i++){
    array[i] = array[i].join(`: `);
    console.log(array[i]);
};
}

let summer_sports = sports.slice(5);
let winter_sports = sports.slice(0, 5);

let fruits = [];
fruits = fruits.concat(summer_sports.splice(2, 2), winter_sports.splice(2, 1));

console.log(`***Winter sports***`);
array = consoleArr (winter_sports);
console.log(`***Summer sports***`);
array = consoleArr (summer_sports);
console.log(`***Fruits***`);
array = consoleArr (fruits);