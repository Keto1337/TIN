var isPalendrome = function palendrome(str) 
			{ 
				let reverse = str.split("").reverse().join("");
				return (str === reverse);
			};

console.log(isPalendrome('ssddss'));
console.log(isPalendrome('ssdxss'));