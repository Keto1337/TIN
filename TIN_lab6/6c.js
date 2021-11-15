function validate() {
	var emailId = document.getElementById("email");
	var ageId = document.getElementById("age");
	var emailRowId = document.getElementById("mandatory").getElementsByClassName("email")[0];
	var ageRowId = document.getElementById("mandatory").getElementsByClassName("age")[0];
	
	emailRowId.style.backgroundColor = "white";
	ageRowId.style.backgroundColor = "white";	
	
	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId.value))){
		emailRowId.style.backgroundColor = "yellow";
		return false;
	}
	
	if (ageId.value.length == 0) {
		ageRowId.style.backgroundColor = "yellow";
		return false;
	}
	
	
	alert("Successful!");
	return true;
}