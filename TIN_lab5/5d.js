var Student = function(firstName, lastName, id, grades) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.id = id;
	this.grades = grades || [];
	
	this.getInfo = function() {		
		console.log("first name: " + this.firstName);
		console.log("last name: " + this.lastName);
		console.log("grade average: " + this.getAverageGrade());
	}
	
	this.getAverageGrade = function() {
		let gradesSum = 0;
		for (var i = 0; i < this.grades.length; i++) {
			gradesSum += this.grades[i];
		}
		
		let gradesAvg = gradesSum / i;
		return gradesAvg;
	}
	
	this.getFullName = function() {
		return this.firstName + " " + this.lastName;
	}
	
	this.setFullName = function(firstName, lastName) {
		this.firstName = firstName || "";
		this.lastName = lastName || "";
	}
}

var student1 = new Student('Illia', 'Zviezdin', 0, [5, 4, 5, 4, 4]);
console.log(student1.getFullName());
student1.setFullName('NieIllia', 'NieZviezdin');
console.log(student1.getFullName() + "\n");

student1.getInfo();
