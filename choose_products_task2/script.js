let value = 0;

// let Bulka = prompt(`hamburger or cheeseburger`);

// if (Bulka) Bulka = Bulka.replaceAll(` `, ``).toLowerCase();

// if (Bulka === null || Bulka === `hamburger` || Bulka === ` ` || !Bulka.includes(`burger`) || !Bulka.startsWith(`cheese`, `hamb`)) {
// 	Bulka = `hamburger`;
// 	let valueHamburger = 10;
// 	value = value + valueHamburger;
// } else if (Bulka === `cheeseburger`){	
// 	let cheese = confirm(`Would you like to add double cheese?`);
// 	let valueCheeseburger = 15;
// 	value = value + valueCheeseburger;
// 	if (cheese) {
// 		let valueDoubleCheese = 5;
// 		value = value + valueDoubleCheese;
// 	} 
// } 

let Potato = confirm(`Would you like potato?`);

if (Potato) {
	let sizePotato = prompt(`Choose potato size: small/middle/big`);
	if (sizePotato) sizePotato = sizePotato.replaceAll(` `, ``).toLowerCase();
}
if (Potato === null || Potato === `small` || Potato === ` ` || !Potato.includes(`middle`, `big`))
	smallPotato = 10,
	middlePotato = 15,
	bigePotato = 20;

if (Potato) {
	sizePotato = prompt(`Choose potato size: small/middle/big`).replaceAll(` `, ``).toLowerCase();

} 	if (sizePotato === `middle`) {
		value = + middlePotato;
	} else if (sizePotato === `big`) {
		value = + bigePotato;
	}

// let Sauce = confirm(`Would you like sauce?`),	
// 	ketchup = 2,
// 	mayonnaise = 3;

// if (Sauce) {
// 	chooseSauce = prompt(`Choose sauce: ketchup/mayonnaise`).replaceAll(` `, ``).toLowerCase();
// } else {
// 	value = + ketchup;
// } if (Sauce === ketchup){
// 	value = + ketchup;
// } if (Sauce === mayonnaise){
// 	value = + mayonnaise;
// };
	



// document.write(`<h2>Your order:</h2>
// 	<ul>
// 	<li>Bulka 🍔: ${Bulka} </li>`);
if(Potato === true){
	document.write(`<li>Potato 🍟: ${sizePotato} </li>`);
}
if(Sauce === true){
	document.write(`<li>Sauce 🧂: ${chooseSauce} </li>`);
}
document.write(`</ul>`);

document.write(`<p>Price: $${value} </p>`);
