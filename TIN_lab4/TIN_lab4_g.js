var getType = function getTypeOfArgument(x) 
{
	return typeof x;
}

var myObject = new getType();

console.log(getType(21));
console.log(getType('21'));
console.log(getType(myObject));
console.log(getType(getType));