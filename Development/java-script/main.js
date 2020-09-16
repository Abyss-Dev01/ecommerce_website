//creating a new function register
function register(){
	//storing the input fields data into these vaiables
	var username = document.getElementById("userName");
	var password = document.getElementById("password");
	var fullname = document.getElementById("fullname");
	var address = document.getElementById("address");
	var email = document.getElementById("email");
	var phone = document.getElementById("phone");
	//checking if any of the input fields are empty and if its empty set the border color red and make the labe for invalid visible and also return false statement
	if(username.value.trim()==""){
		username.style.border="solid 3px red";
		document.getElementById("label_invalid").style.visibility="visible";
		return false;
	}
	else if(password.value.trim()==""){
		password.style.border="solid 3px red";
		document.getElementById("label_invalid").style.visibility="visible";
		return false;
	}
	else if(fullname.value.trim()==""){
		fullname.style.border="solid 3px red";
		document.getElementById("label_invalid").style.visibility="visible";
		return false;
	}
	else if(address.value.trim()=="" ){
		address.style.border="solid 3px red";
		document.getElementById("label_invalid").style.visibility="visible";
		return false;
	}
	else if(email.value.trim()==""){
		email.style.border="solid 3px red";
		document.getElementById("label_invalid").style.visibility="visible";
		return false;
	}
	else if(phone.value.trim()==""){
		phone.style.border="solid 3px red";
		document.getElementById("label_invalid").style.visibility="visible";
		return false;
	}
	//if the fields are not empty then set the borders to blue, return true statement and show alert
	else{
		username.style.border="solid 3px lightblue";
		password.style.border="solid 3px lightblue";
		fullname.style.border="solid 3px lightblue";
		address.style.border="solid 3px lightblue";
		email.style.border="solid 3px lightblue";
		phone.style.border="solid 3px lightblue";

		true;
		alert("successfully bought!");
	}
}

//creating a new function enquire
function enquire(){
	//storing the data from input fields into these variables
  var name = document.getElementById("name");
  var email_Address = document.getElementById("emailAddress");
  var phone_Number = document.getElementById("phoneNumber");
  var text_Area = document.getElementById("textArea");
	//checking if any of the input fields are empty and if its empty set the border color red and make the labe for invalid visible and also return false statement
  if(name.value.trim()==""){
		name.style.border="solid 3px red";
		document.getElementById("label_invalid").style.visibility="visible";
		return false;
	}
	else if(email_Address.value.trim()==""){
		emailAddress.style.border="solid 3px red";
		document.getElementById("label_invalid").style.visibility="visible";
		return false;
	}
	else if(phone_Number.value.trim()==""){
		phoneNumber.style.border="solid 3px red";
		document.getElementById("label_invalid").style.visibility="visible";
		return false;
	}
	else if(text_Area.value.trim()=="" ){
		textArea.style.border="solid 3px red";
		document.getElementById("label_invalid").style.visibility="visible";
		return false;
	}
	//if the fields are not empty then set the borders to blue, return true statement and show alert
  else{
    name.style.border="solid 3px lightblue";
		emailAddress.style.border="solid 3px lightblue";
		phoneNumber.style.border="solid 3px lightblue";
		textArea.style.border="solid 3px lightblue"
    true;
    alert("Thank you for your support.");
  }
}
