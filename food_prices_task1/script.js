let captionString = `Food prices ≠ <ВИВІД ПОТОЧНОГО ДНЯ>.<ВИВІД ПОТОЧНОГО МІСЯЦЯ>.<ВИВІД ПОТОЧНОГО РОКУ>`,
    
    apple = `🍎`,
    applePrice = 10,
    appleCount = 3,
    appleSalePercent = 7,

    orange = `🍊`,
    orangePrice = 12,
    orangeCount = 2,
    orangeSalePercent = 3,

    kiwi = `🥝`,
    kiwiPrice = 15,
    kiwiCount = 10,
    kiwiCountryPercent = 10;;
    
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

    captionString = `Food prices ≠ ${day}.${month}.${year}`.replaceAll('≠', '-');

let resultStr = `Final price for`;
let equals = `=`;
let currency = `UAH`;
let finalStr = `Final price for all products`;

let calculateApplePrice = +(((applePrice - (applePrice * appleSalePercent / 100)) * appleCount).toFixed(2));
let finalApple = `${resultStr} ${appleCount} ${apple} ${equals} ${(calculateApplePrice).toFixed()} ${currency}`;

let calculateOrangePrice = +(((orangePrice - (orangePrice * orangeSalePercent / 100)) * orangeCount).toFixed(2));
let finalOrange = `${resultStr} ${orangeCount} ${orange} ${equals} ${(calculateOrangePrice).toFixed()} ${currency}`;

let calculateKiwiPrice = +(((kiwiPrice + (kiwiPrice * kiwiCountryPercent / 100)) * kiwiCount).toFixed(2));
let finalKiwi = `${resultStr} ${kiwiCount} ${kiwi} ${equals} ${(calculateKiwiPrice).toFixed()} ${currency}`;

let calculateFinalPrice = calculateApplePrice + calculateOrangePrice + calculateKiwiPrice;
    allFinalPrice = finalStr + equals + calculateFinalPrice;

    captionString = `${captionString.slice(0)}
                    
${finalApple}
${finalOrange}
${finalKiwi}

${allFinalPrice} ${currency}`;

console.log(captionString);