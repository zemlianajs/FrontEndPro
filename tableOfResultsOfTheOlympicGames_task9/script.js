const sports = [
    ['๐คบ','fencing'],
    ['โธ','figure skating'],
    ['โท','skier'],
    ['๐','snowboarder'],
    ['๐','golfing'],
    ['๐ฃ','rowing boat'],
    ['๐','swimming'],
    ['๐คธ','gymnastics'],
    ['๐คพ','handball']
];

const winners = [
    ['fencing','๐ฅ','fr'],
    ['fencing','๐ฅ','it'],
    ['fencing','๐ฅ','us'],

    ['figure skating','๐ฅ','ca'],
    ['figure skating','๐ฅ','fr'],
    ['figure skating','๐ฅ','us'],

    ['skier','๐ฅ','no'],
    ['skier','๐ฅ','us'],
    ['skier','๐ฅ','fr'],

    ['snowboarder','๐ฅ','us'],
    ['snowboarder','๐ฅ','jp'],
    ['snowboarder','๐ฅ','au'],

    ['golfing','๐ฅ','gb'],
    ['golfing','๐ฅ','se'],
    ['golfing','๐ฅ','us'],

    ['rowing boat','๐ฅ','us'],
    ['rowing boat','๐ฅ','ml'],
    ['rowing boat','๐ฅ','ro'],

    ['swimming','๐ฅ','us'],
    ['swimming','๐ฅ','gb'],
    ['swimming','๐ฅ','au'],

    ['gymnastics','๐ฅ','it'],
    ['gymnastics','๐ฅ','fr'],
    ['gymnastics','๐ฅ','ua'],

    ['handball','๐ฅ','dk'],
    ['handball','๐ฅ','ke'],
    ['handball','๐ฅ','de'],
];

const olympic = ['๐ต','โซ','๐ด','๐ก','๐ข'];
// ะะฒัะพะฟะฐ โ ัะธะฝัะน, ะััะธะบะฐ โ ัะพัะฝะธะน, ะะผะตัะธะบะฐ โ ัะตัะฒะพะฝะธะน, ะะทัั โ ะถะพะฒัะธะน, ะะฒัััะฐะปัั โ ะทะตะปะตะฝะธะน

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
    ['fr','๐ซ๐ท'],
    ['it','๐ฎ๐น'],
    ['us','๐บ๐ธ'],
    ['ca','๐จ๐ฆ'],
    ['no','๐ณ๐ด'],
    ['jp','๐ฏ๐ต'],
    ['au','๐ฆ๐บ'],
    ['gb','๐ฌ๐ง'],
    ['se','๐ธ๐ช'],
    ['ro','๐ท๐ด'],
    ['ua','๐บ๐ฆ'],
    ['dk','๐ฉ๐ฐ'],
    ['de','๐ฉ๐ช'],
    ['ke','๐ฐ๐ช'],
    ['ml','๐ฒ๐ฑ']
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
            resultOfWinners.push(`${getFlagOfCountry(winners[i][2])} - ${gong}`)
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
        case '๐ต':
            continentOfCountry = 'Europe' 
            break;
        case 'โซ':
            continentOfCountry = 'Africa'
            break;
        case '๐ด':
            continentOfCountry = 'America'
            break;
        case '๐ก':
            continentOfCountry = 'Asia'
            break;
        case '๐ข':
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

// function renderThead(){
//     let THs = [];

//     for(let i=0; i<olympic.length; i++){
//         THs.push(`<th>${olympic[i]}</th>`);
//     }
    
//     return `<thead>
//         <tr>
//             <th></th>
//             ${THs.join(``)}
//         </tr>
//     </thead>`;
// }

// function getWinnersBySport(sport){
//     let currentWinners = [];
//     for(let i=0; i<winners.length; i++){
//         if(winners[i][0] === sport)
//             currentWinners.push(winners[i]);
//     }
//     return currentWinners;
// }

// function getContinentByCountry(coutry){
//     for(let i=0; i<continents.length; i++){
//         if(continents[i][0] === coutry)
//             return continents[i][1];
//     }
// }

// function getFlagByCountry(coutry){
//     for(let i=0; i<flags.length; i++){
//         if(flags[i][0] === coutry)
//             return flags[i][1];
//     }
// }

// function renderTbody(){
//     let TRs = [];

//     for(let i=0; i<sports.length; i++){
//         let Asia = [], America = [], Europe = [], Oceania = [], Africa = [];

//         let sportIcon = sports[i][0],
//             sportName = sports[i][1];

//         let currentWinners = getWinnersBySport(sportName);
//         console.log(currentWinners);

//         let renderedWinners = [];
//         for(let i=0; i<currentWinners.length; i++){
//             let countryAbbr = currentWinners[i][2],
//                 countryMedal = currentWinners[i][1],
//                 currentContinent = getContinentByCountry(countryAbbr),
//                 countryFlag = getFlagByCountry(countryAbbr);

//             let rendered = `<div>${countryFlag} โ ${countryMedal}</div>`;

//             switch(currentContinent){
//                 case `Asia`:
//                     Asia.push(rendered);
//                     break;
//                 case `America`:
//                     America.push(rendered);
//                     break;
//                 case `Europe`:
//                     Europe.push(rendered);
//                     break;
//                 case `Oceania`:
//                     Oceania.push(rendered);
//                     break;
//                 case `Africa`:
//                     Africa.push(rendered);
//                     break;
//             }
//         }

//         TRs.push(`<tr>
//             <td>${sportIcon}</td>
//             <td>${Europe.join(``)}</td>
//             <td>${Africa.join(``)}</td>
//             <td>${America.join(``)}</td>
//             <td>${Asia.join(``)}</td>
//             <td>${Oceania.join(``)}</td>
//         </tr>`);
//     }

//     return `<tbody>${TRs.join(``)}</tbody>`
// }

// function renderTable(){
//     return `<table>
//         ${renderThead()}
//         ${renderTbody()}
//     </table>`
// }

// document.write(renderTable());