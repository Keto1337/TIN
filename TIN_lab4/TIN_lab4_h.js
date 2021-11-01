var getSecondGreatestLowest = function findSecondGreatestLowestNumbers(arr)
{
	arr.sort(function(x, y)
			{
			return x - y;
			});
	var unique_arr = [arr[0]];
	var result = [];
	  
	for (let i = 1; i < arr.length; i++)
	{
		if (arr[i - 1] !== arr[i])
		{
		  unique_arr.push(arr[i]);
		}
	}
	
	//console.log(unique_arr);
	result.push(unique_arr[1], unique_arr[unique_arr.length - 2]);
	return result.join(',');
}

console.log(getSecondGreatestLowest([4,2,1,3,5]));
console.log(getSecondGreatestLowest([4,2,2,1,5,1,3,5]));