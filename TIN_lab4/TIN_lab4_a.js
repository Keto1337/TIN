var fact = function factorialRecurs(x) 
{
	if (x === 0)
	{
		return 1;
	}
	return x * factorialRecurs(x-1);	 
}
console.log("Recursive:" + fact(5));

fact = function factorialIter(x)
{
	let result = 1;
	if (x > 1) {
		for (let i = 1; i <= x; i++) {
			result = result * i;
		}
		return result;
	}
	else {
		return "x has to be positive";
	}
}
		
console.log("Iterative:" + fact(5));