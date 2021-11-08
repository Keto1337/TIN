var Student = function(firstName, lastName, id, grades) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.id = id;
	this.grades = grades || [];
	
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

var student1 = new Student('Illia', 'Zviezdin', 0, [5, 4, 5, 4, 4]);
//student1.displayInfo();

function StudentExtended(firstName, lastName, id, grades, courses) {
	this.base = Student;
	this.base(firstName, lastName, id, grades);
	this.courses = courses || [];
}
StudentExtended.prototype = new Student;

function createStudentsExtended() {
	var studentExtended1 = new StudentExtended('John', 'Smith', 1, [2, 3, 4, 5], ["APBD", "PPJ", "TIN", "BYT"]);
	var studentExtended2 = new StudentExtended('John2', 'Smith2', 2, [5, 3], ["TIN", "BYT"]);
	var studentExtended3 = new StudentExtended('John3', 'Smith3', 3);
	
	return [studentExtended1, studentExtended2, studentExtended3];
}

var studentsExtended = createStudentsExtended();

for (let i = 0; i < studentsExtended.length; i++) {
	studentsExtended[i].displayInfo();
}



