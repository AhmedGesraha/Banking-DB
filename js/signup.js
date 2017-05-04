$("#signup").click(function(){
	var fname = $("#First_Name").val();
	var lname = $("#Last_Name").val();
	var dateOfBirth = $("#DoB").val();
	var clientId = $("#ID").val();
	var address = $("#Address").val();
	var phone = $("#Phone").val();
	var salary = $("#Salary").val();
	if(fname == "" || lname == "" || clientId == "" || dateOfBirth == "")
	$.ajax({
		type: "POST",
		url : "../php/new_client.php",
		data: {"lname":lname,"dateOfBirth":dateOfBirth,"clientId":clientId,"address":address,"phone":phone,"salary":salary},
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
			else if(result == "dude, GTFO!")
				$("#error_div").html("dude, a7a");
			else
				location.href = "home.html";
		}
	});
});

$("#Online_Signup").click(function(){
	var username = $("").val();
	var password = $("").val();
	$.ajax({
		type: "POST",
		url : "../php/client_signup.php",
		data: {
	});
});