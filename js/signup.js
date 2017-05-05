$("body").on("click", "#signup", function() {
	var fname = $("#First_Name").val();
	var lname = $("#Last_Name").val();
	var dateOfBirth = $("#DoB").val();
	var clientId = $("#ID").val();
	var address = $("#Address").val();
	var phone = $("#Phone").val();
	var salary = $("#Salary").val();
	if(fname == "" || lname == "" || clientId == "" || dateOfBirth == "")
		$("#error_div").html("Some required fields aren't filled");
	else
	$.ajax({
		type: "POST",
		url : "../php/new_client.php",
		data: {"fname":fname,"lname":lname,"dateOfBirth":dateOfBirth,"clientId":clientId,"address":address,"phone":phone,"salary":salary},
		success: function(result){
			if(result == 1)
				$("#error_div").html("Client already exists");
			else if(result == 2)
				$("#error_div").html("Session error");
			else if(result == 3)
				$("#error_div").html("Some required fields aren't filled");
			else if(result == 4)
				$("#error_div").html("Unexpected error");
			else
				location.href = "home.html";
		}
	});
});

$("body").on("click", "#Online_Signup", function() {
	var clientId = $("#Client_id").val();
	var username = $("#Username").val();
	var password = $("#Password").val();
	if(clientId == "" || username == "" || password == "")
		$("#error_div").html("All fields are required");
	else
	$.ajax({
		type: "POST",
		url : "../php/client_signup.php",
		data: {"clientId":clientId,"username":username,"password":password},
		success: function(result){
			if(result == 1)
				$("#error_div").html("Username taken");
			else if(result == 2)
				$("#error_div").html("Already signed up");
			else if(result == 3)
				$("#error_div").html("No such client");
			else if(result == 4)
				$("#error_div").html("Session error");
			else if(result == 5)
				$("#error_div").html("All fields are required");
			else if(result == 6)
				$("#error_div").html("Unexpected error");
			else
				location.href = "home.html";
		}
	});
});