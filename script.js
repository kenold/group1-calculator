/*	Group 1 - Team Members
	Luis Aguiar, Yunier Alvarez, Phillip Asmani, and Kenold Beauplan
*/

function calculate(sign)
{	
	var firstNumber = parseInt(prompt("First Number"));
	var secondNumber = parseInt(prompt("Second Number"));
	
	if(isNaN(firstNumber)|| isNaN(secondNumber))
	{
		alert("Invalid number, try again...");
		calculate(sign);
	}
	else 
	{
		switch(sign) 
		{
			case 'add': 
			var total = firstNumber + secondNumber;
			alert(firstNumber + " + " + secondNumber + " = " + total);
			break;
			
			case 'subtract': 
			var total = firstNumber - secondNumber;
			alert(firstNumber + " - " + secondNumber + " = " + total);
			break;
			
			case 'multiply': 
			var total = firstNumber * secondNumber;
			alert(firstNumber + " * " + secondNumber + " = " + total);
			break;
			
			case 'divide': 
			var total = firstNumber / secondNumber;
			alert(firstNumber + " / " + secondNumber + " = " + total);
			break;
		}
	}
}	