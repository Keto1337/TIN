class Student {
	constructor(firstName, lastName, id, grades) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.id = id;
		this.grades = grades || [];
	}
	
	displayInfo() {		
		console.log("first name: " + this.firstName);
		console.log("last name: " + this.lastName);
		console.log("grade average: " + this.averageGrade);
	}
	
	get averageGrade() {
		let gradesSum = 0;
		for (var i = 0; i < this.grades.length; i++) {
			gradesSum += this.grades[i];
		}
		
		let gradesAvg = gradesSum / i;
		return gradesAvg;
	}
	
	get fullName() {
		return this.firstName + " " + this.lastName;
	}
	
	set fullName(name) {
		let fullName = name.split(" ");
		this.firstName = fullName[0];
		this.lastName = fullName[1];
	}
}

var student1 = new Student('Illia', 'Zviezdin', 0, [5, 4, 5, 4, 4]);
console.log(student1.fullName);
student1.fullName = 'NieIllia NieZviezdin';
console.log(student1.fullName + "\n");

student1.displayInfo();
