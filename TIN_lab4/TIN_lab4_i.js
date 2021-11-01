var getCoins = function convertMoneyToCoins(money, coins) 
{
	if (money === 0) 
	{
		return [];
	} 
	else
	{
		if (money >= coins[0]) 
		{
			let left = (money - coins[0]);
			return [coins[0]].concat(convertMoneyToCoins(left, coins));
		} 
		else
		{
			coins.shift();
			return convertMoneyToCoins(money, coins);
		}
	}
} 
console.log(getCoins(46, [25, 10, 5, 2, 1]));