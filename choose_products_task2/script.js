let value = 0;

let Bulka = prompt(`hamburger or cheeseburger`);
if (Bulka) Bulka = Bulka.replaceAll(` `, ``).toLowerCase();
if (Bulka === null || Bulka === `hamburger` || Bulka === ` ` || !Bulka.includes(`cheeseburger`)) {
	Bulka = `hamburger`;
	let valueHamburger = 10;
	value = value + valueHamburger;
} else if (Bulka === `cheeseburger`){	
	let cheese = confirm(`Would you like to add double cheese?`);
	let valueCheeseburger = 15;
	value = value + valueCheeseburger;
	Bulka = `cheeseburger`
	if (cheese) {
		let valueDoubleCheese = 5;
		value = value + valueDoubleCheese;
	} 
} 

let Potato = confirm(`Would you like potato?`);
let sizePotato = ``;
if (Potato) {
	sizePotato = prompt(`Choose potato size: small/middle/big`);
	if (sizePotato) sizePotato = sizePotato.replaceAll(` `, ``).toLowerCase();
	if (sizePotato === null || sizePotato === `small` || sizePotato === ` ` || !sizePotato.includes(`middle`) && !sizePotato.includes(`big`)){
		sizePotato = `small`;
		let smallPotato = 10;
		value = value + smallPotato;
	} else if (sizePotato === `middle`) {
		sizePotato = `middle`;
		let middlePotato = 15;
		value = value + middlePotato;
	} else if (sizePotato === `big`){
		sizePotato = `big`;
		let bigPotato = 20;
		value = value + bigPotato;
	}
} 

let Sauce = confirm(`Would you like sauce?`);	
let chooseSauce = ``;
if (Sauce) {
	chooseSauce = prompt(`Choose sauce: ketchup/mayonnaise`);
	if (chooseSauce) chooseSauce = chooseSauce.replaceAll(` `, ``).toLowerCase();
	if (chooseSauce === null || chooseSauce === `ketchup` || chooseSauce === ` ` || !chooseSauce.includes(`mayonnaise`)){
		chooseSauce = `ketchup`;
		let valueKetchup = 2;
		value = value + valueKetchup;
	} else if (chooseSauce === `mayonnaise`){
		chooseSauce = `mayonnaise`
		let valueMayonnaise = 3;
		value = value + valueMayonnaise;
	}
} 

document.write(`<h2>Your order:</h2>
	<ul>
	<li>Bulka 🍔: ${Bulka} </li>`);
if(Potato === true){
	document.write(`<li>Potato 🍟: ${sizePotato} </li>`);
}
if(Sauce === true){
	document.write(`<li>Sauce 🧂: ${chooseSauce} </li>`);
}
document.write(`</ul>`);

document.write(`<p>Price: $${value} </p>`);
