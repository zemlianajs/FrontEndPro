let typeOfTransformation,
    sentance = ``;

let ImportantWords = confirm(`Tell me three most important words 💚`);

if(ImportantWords){
    const countOfWords = 3;
    let words = ``;
    for(let i=1; i<=countOfWords; i++){
        do{
            words = prompt(`Enter word #${i}`);
            if(words) {
                words = words.replaceAll(` `, ``); 
                for(let i=0; i<words.length; i++){
                    let letter = words[i];
                    if(!isNaN(letter)){
                    words = false;
                    break;
                    }
                }
            }
        } while(!words);
        console.log(`Word #${i}: ${words}`);
        do{
            typeOfTransformation = prompt(`Choose type of transformation for "${words}" uppercase|lowercase|capitalize`, `uppercase`);
            if(typeOfTransformation) typeOfTransformation = typeOfTransformation.replaceAll(` `, ``);
        } while (!(typeOfTransformation === `uppercase` || typeOfTransformation === `lowercase` || typeOfTransformation === `capitalize`));
            console.log(`Transform type for word #${i}: ${typeOfTransformation}`);
            switch(typeOfTransformation){
            case `uppercase`:
                words = words.toUpperCase();
                break;
            case `lowercase`:
                words = words.toLowerCase();
                break;
            case `capitalize`:
                words = words[0].toUpperCase() + words.slice(1).toLowerCase();
                break
        };
        console.log(`Transformed word #${i}: ${words}`);
        sentance += words;        
        sentance += i === countOfWords ? `!` : ` `;   
        console.log(`Sentance: ${sentance}`);
    };
console.log(`******`);
}
console.log(sentance);

