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
    kiwiCountryPercent = 10;

    captionString = captionString.replace('≠', '-');
    day = new Date().getDate();
    month = new Date().getMonth();
    month++; 
    year = new Date().getFullYear();

    final = 'Final price for '
    equals = ' = '
    currency = ' UAH '

    calculateApplePrice = Number(((applePrice - (applePrice * appleSalePercent / 100)) * appleCount).toFixed(2));
    finalApple = final + appleCount + ' ' + apple + equals + (calculateApplePrice).toFixed() + currency;
   
    calculateOrangePrice = Number(((orangePrice - (orangePrice * orangeSalePercent / 100)) * orangeCount).toFixed(2));
    finalOrange = final + orangeCount + ' ' + orange + equals + (calculateOrangePrice).toFixed() + currency;  

    calculateKiwiPrice = Number(((kiwiPrice + (kiwiPrice * kiwiCountryPercent / 100)) * kiwiCount).toFixed(2));
    finalKiwi = final + kiwiCount + ' ' + kiwi + equals + (calculateKiwiPrice).toFixed() + currency;

    calculateFinalPrice = calculateApplePrice + calculateOrangePrice + calculateKiwiPrice;
    allFinalPrice = 'Final price for all products' + equals + calculateFinalPrice;

    captionString = captionString.slice(0, 14) + day + '.' + month + '.' + year 
                    + '\n' 
                    + '\n' + finalApple 
                    + '\n' + finalOrange 
                    + '\n' + finalKiwi
                    + '\n'
                    + '\n' + allFinalPrice + currency;

console.log(captionString);