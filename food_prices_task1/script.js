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
    
    month = new Date().getMonth();
    month++;   

    captionString = captionString.replace('≠', '-').replace('<ВИВІД ПОТОЧНОГО ДНЯ>', new Date().getDate()).replace('<ВИВІД ПОТОЧНОГО МІСЯЦЯ>', month)
                    .replace('<ВИВІД ПОТОЧНОГО РОКУ>',  year = new Date().getFullYear());

    resultStr = `Final price for`;
    equals = `=`;
    currency = `UAH`;
    finalStr = `Final price for all products`;

    calculateApplePrice = +(((applePrice - (applePrice * appleSalePercent / 100)) * appleCount).toFixed(2));
    finalApple = `${resultStr} ${appleCount} ${apple} ${equals} ${(calculateApplePrice).toFixed()} ${currency}`;

    calculateOrangePrice = +(((orangePrice - (orangePrice * orangeSalePercent / 100)) * orangeCount).toFixed(2));
    finalOrange = `${resultStr} ${orangeCount} ${orange} ${equals} ${(calculateOrangePrice).toFixed()} ${currency}`;

    calculateKiwiPrice = +(((kiwiPrice + (kiwiPrice * kiwiCountryPercent / 100)) * kiwiCount).toFixed(2));
    finalKiwi = `${resultStr} ${kiwiCount} ${kiwi} ${equals} ${(calculateKiwiPrice).toFixed()} ${currency}`;

    calculateFinalPrice = calculateApplePrice + calculateOrangePrice + calculateKiwiPrice;
    allFinalPrice = finalStr + equals + calculateFinalPrice;

    captionString = `${captionString.slice(0)} 
                    
${finalApple}
${finalOrange}
${finalKiwi}

${allFinalPrice} ${currency}`;

console.log(captionString);