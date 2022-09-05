const sports = [
    ['🤺','fencing'],
    ['⛸','figure skating'],
    ['⛷','skier'],
    ['🏂','snowboarder'],
    ['🏌','golfing'],
    ['🚣','rowing boat'],
    ['🏊','swimming'],
    ['🤸','gymnastics'],
    ['🤾','handball']
];

const winners = [
    ['fencing','🥇','fr'],
    ['fencing','🥈','it'],
    ['fencing','🥉','us'],

    ['figure skating','🥇','ca'],
    ['figure skating','🥈','fr'],
    ['figure skating','🥉','us'],

    ['skier','🥇','no'],
    ['skier','🥈','us'],
    ['skier','🥉','fr'],

    ['snowboarder','🥇','us'],
    ['snowboarder','🥈','jp'],
    ['snowboarder','🥉','au'],

    ['golfing','🥇','gb'],
    ['golfing','🥈','se'],
    ['golfing','🥉','us'],

    ['rowing boat','🥇','us'],
    ['rowing boat','🥈','ml'],
    ['rowing boat','🥉','ro'],

    ['swimming','🥇','us'],
    ['swimming','🥈','gb'],
    ['swimming','🥉','au'],

    ['gymnastics','🥇','it'],
    ['gymnastics','🥈','fr'],
    ['gymnastics','🥉','ua'],

    ['handball','🥇','dk'],
    ['handball','🥈','ke'],
    ['handball','🥉','de'],
];

const olympic = ['🔵','⚫','🔴','🟡','🟢'];
// Європа — синій, Африка — чорний, Америка — червоний, Азія — жовтий, Австралія — зелений

const continents = [
    ['fr','Europe'],
    ['it','Europe'],
    ['us','America'],
    ['ca','America'],
    ['no','Europe'],
    ['jp','Asia'],
    ['au','Oceania'],
    ['gb','Europe'],
    ['se','Europe'],
    ['ro','Europe'],
    ['ua','Europe'],
    ['dk','Europe'],
    ['de','Europe'],
    ['ke','Africa'],
    ['ml','Africa']
];

const flags = [
    ['fr','🇫🇷'],
    ['it','🇮🇹'],
    ['us','🇺🇸'],
    ['ca','🇨🇦'],
    ['no','🇳🇴'],
    ['jp','🇯🇵'],
    ['au','🇦🇺'],
    ['gb','🇬🇧'],
    ['se','🇸🇪'],
    ['ro','🇷🇴'],
    ['ua','🇺🇦'],
    ['dk','🇩🇰'],
    ['de','🇩🇪'],
    ['ke','🇰🇪'],
    ['ml','🇲🇱']
];

function getTableOfWinnersSports() {
    TRs = [];
    for(let tr = 0; tr < sports.length; tr++){
        
        TDs = [];
        for(let td = 0; td < olympic.length; td++){
        TDs.push(`<td></td>`)
            
        if(tr===0){
            TRs.push(`<td>${olympic[td]}</td>`);
        } 
        }
        
        TRs.push(`<tr><td>${sports[tr][0]}</td>${TDs.join(``)}</tr>`)
    }
    
    return `<table><td></td>${TRs.join(``)}</table>`
}
arrayOfResults = [];

for(let i = 0; i<winners.length; i++){
    arrayOfResults.push(winners[i])
} 


function getResultOfWinners ( kindOfSports, getColorOfContinent ){   ///['figure skating','🥈','fr'], => ['⛸','🥈','fr', '🔵']
  
    for(let i = 0; i<arrayOfResults.length; i++){
        
        if (kindOfSports === arrayOfResults[i][0]){
            arrayOfResults[i].unshift(`${getKindOfSports()}`)

        }
        console.log(arrayOfResults[i])
    }
}


function getKindOfSports (kindOfSports) {
    let sportsIcon;
    for(let i=0; i<sports.length; i++){
    if (kindOfSports === sports[i][1]){
        sportsIcon = sports[i][0];
        return sportsIcon;
    }
    }
}
console.log(getKindOfSports ('figure skating'))

function getColorOfContinent ( ContinentOfCountry ) { 
    let colorOfContinent;
        switch (ContinentOfCountry) {
            case 'Europe':
                colorOfContinent = '🔵'
                break;
            case 'Africa':
                colorOfContinent = '⚫'
                break;
            case 'America':
                colorOfContinent = '🔴'
                break;
            case 'Asia':
                colorOfContinent = '🟡'
                break;
            case 'Oceania':
                colorOfContinent = '🟢'
                break;
        }
    return colorOfContinent;
}

function getContinentOfCountry (country) {
    for (let i = 0; i < continents.length; i++) {
        if (continents[i][0] === country) {
            return continents[i][1]
        }
    }
}

function getFlagOfCountry(country) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i][0] === country) {
            return flags[i][1];
        }
    }
}

document.write(getTableOfWinnersSports())