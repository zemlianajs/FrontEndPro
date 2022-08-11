let valueHamburger = 10;
let valueCheeseburger = 15;
let valueDoubleCheese = 5;
let smallPotato = 10;
let middlePotato = 15;
let bigPotato = 20;
let valueKetchup = 2;
let valueMayonnaise = 3;

let value = 0;

let Bulka = prompt(`Would you like Humburger or Cheeseburger?`);
if (Bulka) Bulka = Bulka.replaceAll(` `, ``).toLowerCase();

if (Bulka === `cheeseburger`){	
	value += valueCheeseburger;

	let cheese = confirm(`Would you like to add double cheese?`);
	if (cheese) value += valueDoubleCheese;
} else {
	Bulka = `hamburger`;
	value += valueHamburger;
}; 

let Potato = confirm(`Would you like potato?`);
let sizePotato;
if (Potato) {
	sizePotato = prompt(`Choose potato size: small/middle/big`);
	if (sizePotato) sizePotato = sizePotato.replaceAll(` `, ``).toLowerCase();
	if (sizePotato === `middle`) {
		value += middlePotato;
	} else if (sizePotato === `big`){
		value += bigPotato;
	} else {
		sizePotato = `small`;
		value += smallPotato;
	} 
} 

let Sauce = confirm(`Would you like sauce?`);	
let chooseSauce;
if (Sauce) {
	chooseSauce = prompt(`Choose sauce: ketchup/mayonnaise`);
	if (chooseSauce) chooseSauce = chooseSauce.replaceAll(` `, ``).toLowerCase();
	if (chooseSauce === `mayonnaise`){
		value += valueMayonnaise;
	} else {
		chooseSauce = `ketchup`;
		value += valueKetchup;
	} 
} 

document.write(`<h2>Your order:</h2>
<ul>
    <li>Bulka 🍔: ${Bulka} </li>
    ${Potato ? `<li>Potato 🍟: ${sizePotato} </li>` : ``}
    ${Potato ? `<li>Sauce 🧂: ${chooseSauce} </li>` : ``}
</ul>
<p>Price: $${value}`);


