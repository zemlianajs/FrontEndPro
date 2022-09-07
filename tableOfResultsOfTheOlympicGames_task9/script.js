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
        TDs.push(`<td>${getResultOfWinners ( sports[tr][0], olympic[td] )}</td>`)
            
        if(tr===0){
            TRs.push(`<td>${olympic[td]}</td>`);
        } 
        }
        
        TRs.push(`<tr><td>${sports[tr][0]}</td>${TDs.join(``)}</tr>`)
    }
    
    return `<table><td></td>${TRs.join(``)}</table>`
}

function getResultOfWinners ( sportsIcon, colorOfContinent ){   
    let kindOfSports = getKindOfSports (sportsIcon);
    let continentOfCountry = getColorOfContinent ( colorOfContinent );    
    let resultOfWinners = [];

    for (let i=0; i<winners.length; i++){
        let winnersKindOfSports = winners[i][0];
        let gong = winners[i][1];
        if (winnersKindOfSports === kindOfSports &&  continentOfCountry === getContinentOfCountry (winners[i][2])){
            resultOfWinners.push(getFlagOfCountry(winners[i][2]), `-`, gong)
        }
    }
    return resultOfWinners.join(` `)    
}

function getKindOfSports (sportsIcon) {
    let kindOfSports;
    for(let i=0; i<sports.length; i++){
    if (sportsIcon === sports[i][0]){
        kindOfSports = sports[i][1];
        return kindOfSports;
    }
    }
}

function getContinentOfCountry (country) {
    for (let i = 0; i < continents.length; i++) {
        if (continents[i][0] === country) {
            return continents[i][1]
        }
    }
}

function getColorOfContinent ( colorOfContinent ) { 
    let continentOfCountry;
        switch (colorOfContinent) {
        case '🔵':
            continentOfCountry = 'Europe' 
            break;
        case '⚫':
            continentOfCountry = 'Africa'
            break;
        case '🔴':
            continentOfCountry = 'America'
            break;
        case '🟡':
            continentOfCountry = 'Asia'
            break;
        case '🟢':
            continentOfCountry = 'Oceania'
            break;
    }

    return continentOfCountry;
}

function getFlagOfCountry(country) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i][0] === country) {
            return flags[i][1];
        }
    }
}

document.write(getTableOfWinnersSports())