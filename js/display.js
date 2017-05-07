$(document).ready(function(){
	$.ajax({
		type: "POST",
		url : "php/is_logged_in.php",
		success: function(result){
			if(result == 0)
			{
				$("#page_contents").hide();
				$("#login").show();
			}
			else
			{
				$("#page_contents").show();
				$("#login").hide();
			}

			if(result == 'c')
			{	
				$("#Update").hide();
				$("#Create_Account").hide();
				$("#Signup").hide();
				$("#Loans").hide();
				$("#Debts").hide();
				$("#Deposit").hide();
				$("#Withdraw").hide();
				$("#Check").hide();
				$("#create").hide();
			}
			else if(result == 't')
			{
				$("#Update").hide();
				$("#Create_Account").hide();
				$("#Signup").hide();
				$("#Debit_Credit").hide();
				$("#Loans").hide();
				$("#Debts").hide();
				$("#History").hide();
				$("#create").hide();
			}
			else if(result == 's')
			{
				$("#History").hide();
				$("#Deposit").hide();
				$("#Withdraw").hide();
				$("#Check").hide();
			}
		}
	});
});


$("#Home").click(function(){
	$("#title").html("Profile > Home");
	$("#header").html("Home");
});

$("#Update").click(function(){
	$("#title").html("Profile > Update Info");
	$("#body").html("<h3><b>Update Info</b></h3><br><div class='form-group'><label>ID</label><input type='text' class='form-control' id='ID' placeholder='SSN of client' required></div><div class='form-group'><label>Address</label><input type='text' class='form-control' id='Address' placeholder='New address'></div><div class='form-group'><label>Phone No.</label><input type='text' class='form-control' id='Phone' placeholder='New phone #'></div><div class='form-group'><label>Salary</label><input type='text' class='form-control' id='Salary' placeholder='New salary'></div><h4><small id='error_div' style='color:red'></small></h4><br><div class='col-sm-4'><button type='button' class='btn btn-info' id='update'>Update</button></div>");
	$("#header").html("Update Info");
});

$("#Create_Account").click(function(){
	$("#body").html("<h3><b>Create Account</b></h3><div class='form-group'><br><label>Client ID</label><input type='text' class='form-control' id='Client_id' placeholder='SSN of client' required></div><div class='form-group'><label>Username</label><input type='text' class='form-control' id='Username' placeholder='Username' required></div><div class='form-group'><label>Password</label><input type='password' class='form-control' id='Password' placeholder='Password' required></div><h4><small id='error_div' style='color:red'></small></h4><div class='col-sm-1'><button type='submit' id='Online_Signup' class='btn btn-info'>Sign up</button></div>");
	$("#title").html("Profile > Create Master Account");
	$("#header").html("Create Account");
});

$("#Signup").click(function(){
	$("#title").html("Profile > Signup");
	$("#body").html("<h3><b>Sign up</b></h3><br><div class='form-group'><label>First Name</label><input type='text' class='form-control' id='First_Name' placeholder='First name' required></div><div class='form-group'><label>Last Name</label><input type='text' class='form-control' id='Last_Name' placeholder='Last name' required></div><div class='form-group'><label>Date of Birth</label><input type='date' max='1999-12-31' class='form-control' id='DoB' required></div><div class='form-group'><label>ID</label><input type='text' class='form-control' id='ID' placeholder='SSN of client' required></div><div class='form-group'><label>Address (optional)</label><input type='text' class='form-control' id='Address' placeholder='Address'></div><div class='form-group'><label>Phone No. (optional)</label><input type='text' class='form-control' id='Phone' placeholder='Phone #'></div><div class='form-group'><label>Salary (optional)</label><input type='text' class='form-control' id='Salary' placeholder='Salary'></div><h4><small id='error_div' style='color:red'></small></h4><br><div class='col-sm-4'><button type='button' class='btn btn-info' id='signup'>Sign up</button></div>");
	$("#header").html("Signup");
});

$("#Accounts").click(function(){
	$("#body").html("<table class=\"table\"><thead><tr><td><button type=\"button\" class=\"btn btn-info btn-lg\" id=\"list_savings\">List Existing Savings Accounts</button></td><td><button type=\"button\" class=\"btn btn-info btn-lg\" id=\"create_savings\">Create New Savings Account</button></td></tr></thead><tr><td><button type=\"button\" class=\"btn btn-info btn-lg\" id=\"list_checking\">List Existing Checking Accounts</button></td><td><button type=\"button\" class=\"btn btn-info btn-lg\" id=\"create_checking\">Create New Checking Account</button></td></tr></table>");
	$("#title").html("Profile > Accounts");
	$("#header").html("Accounts");
});

$("#Debit_Credit").click(function(){
	$("#body").html("<h3><b>Create Account</b></h3><div class='form-group'><br><label>Client ID</label><input type='text' class='form-control' id='Client_id' placeholder='SSN of client' required></div><div class='form-group'><label>Username</label><input type='text' class='form-control' id='Username' placeholder='Username' required></div><div class='form-group'><label>Password</label><input type='password' class='form-control' id='Password' placeholder='Password' required></div><h4><small id='error_div' style='color:red'></small></h4><div class='col-sm-1'><button type='submit' id='Online_Signup' class='btn btn-info'>Sign up</button></div>");
	$("#title").html("Profile > Debit & Credit Cards");
	$("#header").html("Debit & Credit Cards");
});

$("#Loans").click(function(){
	$("#body").html();
	$("#title").html("Profile > Loans");
	$("#header").html("Loans");
});

$("#History").click(function(){
	$("#title").html("Profile > History");
	$("#header").html("History");
});

$("#Deposit").click(function(){
	$("#title").html("Profile > Deposit");
	$("#header").html("Deposit");
});

$("#Withdraw").click(function(){
	$("#title").html("Profile > Withdraw");
	$("#header").html("Withdraw");
});

$("#Check").click(function(){
	$("#title").html("Profile > Check Conversion");
	$("#header").html("Check Conversion");
});

$("#Savings_Cert").click(function(){
	$("#title").html("Profile > Savings Certificates");
	$("#header").html("Savings Certificates");
});

$("#Logout").click(function(){
	$.ajax({
		type: "POST",
		url : "php/logout.php"
	});
	$("#page_contents").hide();
	$("#login").show();
	//location.href="login.html";
});

$("#body").on("click", "#list_savings", function() {
	$("#body").html("<div class='form-group'><label>ID</label><input type='text' class='form-control' id='clientId' placeholder='SSN of client' required></div><h4><small id='error_div' style='color:red'></small></h4><br><div class='col-sm-4'><button type='button' class='btn btn-info' id='search'>Confirm</button></div>");
	$("#title").append(" > Savings Account Listing");
});

$("#body").on("click", "#list_checking", function() {
	$("#body").html("<div class='form-group'><label>ID</label><input type='text' class='form-control' id='clientId' placeholder='SSN of client' required></div><h4><small id='error_div' style='color:red'></small></h4><br><div class='col-sm-4'><button type='button' class='btn btn-info' id='search1'>Confirm</button></div>");
	$("#title").append(" > Checking Account Listing");
});

$("#body").on("click", "#search", function() {
	var clientId = $("#clientId").val();
	$.ajax({
		type: "POST",
		url : "php/list_savings_accounts.php",
		data: {"clientId" : clientId},
		success: function(result){
			if(result == 1)
				$("#error_div").html("No such client");
			else
				$("#body").html(result);
		}
	});
});

$("#body").on("click", "#search1", function() {
	var clientId = $("#clientId").val();
	$.ajax({
		type: "POST",
		url : "php/list_checking_accounts.php",
		data: {"clientId" : clientId},
		success: function(result){
			if(result == 1)
				$("#error_div").html("No such client");
			else
				$("#body").html(result);
		}
	});
});

$("#body").on("click", "#create_savings", function() {
	$("#body").html("<div class='form-group'><label>ID</label><input type='text' class='form-control' id='clientId' placeholder='SSN of client' required></div><label>ID</label><select class='form-control' id='currency'><option>US Dollar</option><option>EG Pound</option><option>EU Euro</option><option>KW Dinar</option></select></div><h4><small id='error_div' style='color:red'></small></h4><br><div class='col-sm-4'><button type='button' class='btn btn-info' id='create'>Create</button></div>");
	$("#title").append(" > Savings Account Creation");
});

$("#body").on("click", "#create_checking", function() {
	$("#body").html("<div class='form-group'><label>ID</label><input type='text' class='form-control' id='clientId' placeholder='SSN of client' required></div><label>ID</label><select class='form-control' id='currency'><option>US Dollar</option><option>EG Pound</option><option>EU Euro</option><option>KW Dinar</option></select></div><h4><small id='error_div' style='color:red'></small></h4><br><div class='col-sm-4'><button type='button' class='btn btn-info' id='create1'>Create</button></div>");
	$("#title").append(" > Checking Account Creation");	
});

$("#body").on("click", "#create", function() {
	var clientId = $("#clientId").val();
	if(clientId == "")
		$("#error_div").html("Client's SSN is required");
	else
	$.ajax({
		type: "POST",
		url : "php/create_savings_account.php",
		data: {"clientId" : clientId,"currency" : currency},
		success: function(result){
			if(result == 1)
				$("#error_div").html("No such client");
			else if(result == 2)
				$("#error_div").html("Session error");
			else if(result == 3)
				$("#error_div").html("Client's SSN is required");
			else if(result == 4)
				$("#error_div").html("Unexpected error");
			else
				location.href="home.html";
		}
	});
});

$("#body").on("click", "#create1", function() {
	var clientId = $("#clientId").val();
	var currency = $("#currency").val();
	if(clientId == "")
		$("#error_div").html("Client's SSN is required");
	else
	$.ajax({
		type: "POST",
		url : "php/create_checking_account.php",
		data: {"clientId" : clientId,"currency" : currency},
		success: function(result){
			if(result == 1)
				$("#error_div").html("No such client");
			else if(result == 2)
				$("#error_div").html("Session error");
			else if(result == 3)
				$("#error_div").html("Client's SSN is required");
			else if(result == 4)
				$("#error_div").html("Unexpected error");
			else
				location.href="home.html";
		}
	});
});