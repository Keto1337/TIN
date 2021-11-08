var Student = function(firstName, lastName, id, grades) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.id = id;
	this.grades = grades;
	
	this.displayInfo = function() {
		let gradesSum = 0;
		for (var i = 0; i < this.grades.length; i++) {
			gradesSum += this.grades[i];
		}
		
		let gradesAvg = gradesSum / i;
		
		console.log("first name: " + this.firstName);
		console.log("last name: " + this.lastName);
		console.log("grade average: " + gradesAvg);
	}
}

var student1 = new Student('Illia', 'Zviezdin', 0, [5, 4, 5, 4, 4])
student1.displayInfo();