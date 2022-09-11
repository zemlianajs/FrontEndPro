const products = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
];

let copiedProducts = [];

function getPrice( products, seasonFunc ){
    let sumOfProducts = 0;
    
    for(let i=0; i<products.length; i++){
        sumOfProducts += products[i][1]
    }

    return typeof seasonFunc === `function` ? seasonFunc (sumOfProducts) : sumOfProducts.toFixed(2);
}
function summerValue(value){
	let result = value*0.8;
	return result.toFixed(2);
}

function winterValue(value){
	let result = value*2;
	return result.toFixed(2);
}

console.log(`Sum of products ${getPrice( products )}`);
console.log(`Sum of products in summer season ${getPrice( products, summerValue )}`);
console.log(`Sum of products in winter season ${getPrice( products, winterValue )}`);
