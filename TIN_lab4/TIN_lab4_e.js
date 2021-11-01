var longest = function findLongestWordInString(str)
{
	var words = str.split(" ");
	var longest = words[0];
		
	if (words.length === 1) return longest;

	for (let i = 1; i < words.length; i++) 
	{
		if (words[i].length > longest.length)
		longest = words[i];
	}
	return longest;
}

console.log(longest('one two three four five six seven'));