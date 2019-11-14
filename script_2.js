number ="";
number = prompt("De quel nombre veux-tu calculer le factoriel?");
function factor(inputNumber) {
	let fact = 1;
	if (inputNumber ===0) {
		return fact;
	}
	else {
	for(let count = 1; count <= inputNumber; count++ ) {
		fact = fact * count;}
		return fact
	}
}
console.log("Le résultat est "+factor(number));


