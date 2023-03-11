const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
	const num3 = Number(tokens[3]);
	const num4 = Number(tokens[4]);
	const num5 = Number(tokens[5]);


console.log(mathSymbol)
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)



if (mathSymbol === "+"){
	console.log(num1 + num2 + num3 + num4 + num5)
}
if (mathSymbol === "-"){
	console.log(num1 - num2 - num3 - num4 - num5)
}
if (mathSymbol === "*"){
	console.log(num1 * num2 * num3 * num4 * num5)
}
if (mathSymbol === "/"){
	console.log(num1 / num2 / num3 / num4 / num5)
}
if (mathSymbol === "%"){
	console.log(Math.sqrt(num1))
}

	// This line closes the connection to the command line interface.
	reader.close()

});