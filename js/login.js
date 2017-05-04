$("#employee_login").click(function(){
	var username = $("#employee_username").val();
	var password = $("#employee_password").val();
	if(username == "" || password == "")
	$.ajax({
		type: "POST",
		url : "../php/employee_login.php",
		data: {"password":password},
		success: function(result){
			if(result == 0 || result == 1 || result == 2)
				location.href = "home.html";
			else if(result == 3)
				$("#error_div").html("Both username and password are required");
			else if(result == 4)
				$("#error_div").html("Wrong or illegal username or password, try again");
			else if(result == 5)
				$("#error_div").html("Session error");
		}
	});
	else
	$.ajax({
		type: "POST",
		url : "../php/employee_login.php",
		data: {"username":username,"password":password},
		success: function(result){
			if(result == 0 || result == 1 || result == 2)
				location.href = "home.html";
			else if(result == 3)
				$("#error_div").html("Both username and password are required");
			else if(result == 4)
				$("#error_div").html("Wrong or illegal username or password, try again");
			else if(result == 5)
				$("#error_div").html("Session error");
		}
	});
});

$("#client_login").click(function(){
	var username = $("#username").val();
	var password = $("#password").val();
	if(username == "" || password == "")
	$.ajax({
		type: "POST",
		url : "../php/client_login.php",
		data: {"password":password},
		success: function(result){
			if(result == 1)
				$("#error_div").html("Both username and password are required");
			else if(result == 2)
				$("#error_div").html("Wrong or illegal username or password, try again");
			else if(result == 3)
				$("#error_div").html("Session error");
			else
				location.href = "home.html";
		}
	});
	else
	$.ajax({
		type: "POST",
		url : "../php/client_login.php",
		data: {"username":username,"password":password},
		success: function(result){
			if(result == 1)
				$("#error_div").html("Both username and password are required");
			else if(result == 2)
				$("#error_div").html("Wrong or illegal username or password, try again");
			else if(result == 3)
				$("#error_div").html("Session error");
			else
				location.href = "home.html";
		}
	});
});