function addRecord() {
	var emailId = document.getElementById("email");
	var ageId = document.getElementById("age");
	var emailRowId = document.getElementById("mandatory").getElementsByClassName("email")[0];
	var ageRowId = document.getElementById("mandatory").getElementsByClassName("age")[0];
	
	emailRowId.style.backgroundColor = "white";
	ageRowId.style.backgroundColor = "white";	
	
	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId.value))){
		emailRowId.style.backgroundColor = "yellow";
	}
	
	if (ageId.value.length == 0) {
		ageRowId.style.backgroundColor = "yellow";
	}
	
	var tableId = document.getElementById("rows");
	var row = tableId.insertRow(1);
	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	
	cell1.innerHTML = emailId.value;
	cell2.innerHTML = ageId.value;
}