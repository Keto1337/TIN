var myTelephone = {
	model: 'iPhone',
	series: '2PX3987',
	yearOfProduction: 2010,
	displayModel: function() {
		console.log(this.model);
	},
	displaySeries: function() {
		console.log(this.series);
	},
	displayYearOfProduction() {
		console.log(this.yearOfProduction);
	}
};

myTelephone.displayModel();
myTelephone.displaySeries();
myTelephone.displayYearOfProduction();

	
function displayAll(telephone) {
	console.log("property name: " + telephone.model + " type: " + typeof telephone.model);
	console.log("property name: " + telephone.series + " type: " + typeof telephone.series);
	console.log("property name: " + telephone.yearOfProduction + " type: " + typeof telephone.yearOfProduction);
}

displayAll(myTelephone);