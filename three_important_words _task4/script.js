let ImportantWords;
let words = ``;
let countOfWords = 1;
let typeOfTransformation;
let userAnver

ImportantWords = confirm(`Tell me three most important words 💚`);

if(ImportantWords){
    for(; countOfWords<=3; countOfWords++, words+=countOfWords){
        words = prompt(`Enter word #${countOfWords}`);
        if(words) words = words.replaceAll(` `, ``); 
        console.log(`Word #${countOfWords}: ${words}`);
        typeOfTransformation = prompt(`Choose type of transformation for "${words}" uppercase|lowercase|capitalize`, `uppercase`);
        if(typeOfTransformation === `uppercase`) words = words.toUpperCase();
        if(typeOfTransformation === `lowercase`) words = words.toLowerCase();
        if(typeOfTransformation === `capitalize`) words = words[0].toUpperCase() + words.slice(1).toLowerCase();
        console.log(`Transform type for word #${countOfWords}: ${typeOfTransformation}`)
        console.log(`Transformed word #${countOfWords}: ${words}`)
    }
}




