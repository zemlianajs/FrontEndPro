const sports = [
    ['🤺', 'fencing'],
    ['⛸', 'figure skating'],
    ['⛷', 'skier'],
    ['🏂', 'snowboarder'],
    ['🏌', 'golfing'],
    ['🚣', 'rowing boat'],
    ['🏊', 'swimming'],
    ['🤸', 'gymnastics'],
    ['🤾', 'handball']
];

const winners = [
    ['fencing', '🥇', 'fr'],
    ['fencing', '🥈', 'it'],
    ['fencing', '🥉', 'us'],

    ['figure skating', '🥇', 'ca'],
    ['figure skating', '🥈', 'fr'],
    ['figure skating', '🥉', 'us'],

    ['skier', '🥇', 'no'],
    ['skier', '🥈', 'us'],
    ['skier', '🥉', 'fr'],

    ['snowboarder', '🥇', 'us'],
    ['snowboarder', '🥈', 'jp'],
    ['snowboarder', '🥉', 'au'],

    ['golfing', '🥇', 'gb'],
    ['golfing', '🥈', 'se'],
    ['golfing', '🥉', 'us'],

    ['rowing boat', '🥇', 'us'],
    ['rowing boat', '🥈', 'ml'],
    ['rowing boat', '🥉', 'ro'],

    ['swimming', '🥇', 'us'],
    ['swimming', '🥈', 'gb'],
    ['swimming', '🥉', 'au'],

    ['gymnastics', '🥇', 'it'],
    ['gymnastics', '🥈', 'fr'],
    ['gymnastics', '🥉', 'ua'],

    ['handball', '🥇', 'dk'],
    ['handball', '🥈', 'ke'],
    ['handball', '🥉', 'de'],
];

const olympic = ['🔵', '⚫', '🔴', '🟡', '🟢'];
// Європа — синій, Африка — чорний, Америка — червоний, Азія — жовтий, Австралія — зелений

const continents = [
    ['fr', 'Europe'],
    ['it', 'Europe'],
    ['us', 'America'],
    ['ca', 'America'],
    ['no', 'Europe'],
    ['jp', 'Asia'],
    ['au', 'Oceania'],
    ['gb', 'Europe'],
    ['se', 'Europe'],
    ['ro', 'Europe'],
    ['ua', 'Europe'],
    ['dk', 'Europe'],
    ['de', 'Europe'],
    ['ke', 'Africa'],
    ['ml', 'Africa']
];

const flags = [
    ['fr', '🇫🇷'],
    ['it', '🇮🇹'],
    ['us', '🇺🇸'],
    ['ca', '🇨🇦'],
    ['no', '🇳🇴'],
    ['jp', '🇯🇵'],
    ['au', '🇦🇺'],
    ['gb', '🇬🇧'],
    ['se', '🇸🇪'],
    ['ro', '🇷🇴'],
    ['ua', '🇺🇦'],
    ['dk', '🇩🇰'],
    ['de', '🇩🇪'],
    ['ke', '🇰🇪'],
    ['ml', '🇲🇱']
];

function getTableOfWinnersSports(){
    let TRs = [];
    let TDs = [];
for (let tr = 0; tr <= sports.length; tr++) {

    TDs = [];
    for (let td = 0; td <= olympic.length; td++) {

        if (tr === 0) {
            if (td === 0) {
                TDs.push(`<td></td>`)
            } else {
                TDs.push(`<td>${olympic[td - 1]}</td>`)
            }
        } else {
            if (td === 0) {
                TDs.push(`<td>${sports[tr - 1][0]}</td>`)
            } else {
                let winnersText = getWinners(tr - 1, td - 1);
                TDs.push(`<td>${winnersText}</td>`)
            }
        }

    }

    
}
return TRs.push(`<table><tr>${TRs.join('')}</tr></table>`)
}


function getWinners(sportIndex, olympicIndex) {

    let continent = getContinent(olympicIndex);

    let continentCountries = getCountries(continent);

    let sportName = getSportName(sportIndex);

    let winnersArr = [];
    for (let i = 0; i < winners.length; i++) {
        if (winners[i][0] === sportName && continentCountries.indexOf(winners[i][2]) > -1) {
            winnersArr.push(getFlag(winners[i][2]), winners[i][1])
        }
    }

    return winnersArr.join(` - `);
}
function getContinent(olympicIndex) {
    //let continent;

    switch (olympic[olympicIndex]) {
        case '🔵':
            continent = 'Europe'
            break;
        case '⚫':
            continent = 'Africa'
            break;
        case '🔴':
            continent = 'America'
            break;
        case '🟡':
            continent = 'Asia'
            break;
        case '🟢':
            continent = 'Oceania'
            break;
    }

    return continent;
}

function getCountries(continent) {
    let countries = [];

    for (let i = 0; i < continents.length; i++) {
        if (continents[i][1] === continent) {
            countries.push(continents[i][0])
        }
    }

    return countries;
}


function getSportName(sportIndex) {
    return sports[sportIndex][1];
}
console.log(getSportName())

function getFlagOfCountry(country) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i][0] === country) {
            return flags[i][1];
        }
    }
}
console.log(getFlag(`no`))

document.write(getTableOfWinnersSports());