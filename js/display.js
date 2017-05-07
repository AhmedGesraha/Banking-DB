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
	$.ajax({
		type: "POST",
		url : "php/is_logged_in.php",
		success: function(result){
			if(result == 'c' || result == 't')
				$("#body").html("<div class=\"col-sm-7\"><button type=\"button\" class=\"btn btn-info btn-lg\" id=\"list_savings\">List Savings Accounts</button></div><div class=\"col-sm-offset-1 col-sm-3\"><button type=\"button\" class=\"btn btn-info btn-lg\" id=\"list_checking\">List Checking Accounts</button></div>");
			else
				$("#body").html("<table class=\"table\"><thead><tr><td><button type=\"button\" class=\"btn btn-info btn-lg\" id=\"list_savings\">List Existing Savings Accounts</button></td><td><button type=\"button\" class=\"btn btn-info btn-lg\" id=\"create_savings\">Create New Savings Account</button></td></tr></thead><tr><td><button type=\"button\" class=\"btn btn-info btn-lg\" id=\"list_checking\">List Existing Checking Accounts</button></td><td><button type=\"button\" class=\"btn btn-info btn-lg\" id=\"create_checking\">Create New Checking Account</button></td></tr></table>");
		}
	});
	$("#title").html("Profile > Accounts");
	$("#header").html("Accounts");
});

$("#Debit_Credit").click(function(){
	$("#body").html("<div class=\"col-sm-7\"><button type=\"button\" class=\"btn btn-info btn-lg\" id=\"create_debit\">Create New Debit Card</button></div><div class=\"col-sm-offset-1 col-sm-3\"><button type=\"button\" class=\"btn btn-info btn-lg\" id=\"create_credit\">Create New Credit Card</button></div>");
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
	$("#body").html("<h3><b>Deposit</b></h3><br><div class='form-group'><label>Account No</label><input type='text' class='form-control' id='accountNo' placeholder='Account Number' required></div><div class='form-group'><label>Amount</label><input type='text' class='form-control' id='amount' placeholder='Amount to be deposited' required></div><div class='form-group'><label>Type</label><select class='form-control' id='type'><option value='s'>Savings</option><option value='c'>Checking</option></select></div><h4><small id='error_div' style='color:red'></small></h4><div class='col-sm-1'><button type='submit' id='deposit' class='btn btn-info'>Deposit</button></div>");
	$("#title").html("Profile > Deposit");
	$("#header").html("Deposit");
});

$("#Withdraw").click(function(){
	$("#body").html("<h3><b>Withdraw</b></h3><br><div class='form-group'><label>Account No</label><input type='text' class='form-control' id='accountNo' placeholder='Account Number' required></div><div class='form-group'><label>Amount</label><input type='text' class='form-control' id='amount' placeholder='Amount to be withdrawn' required></div><div class='form-group'><label>Type</label><select class='form-control' id='type'><option value='s'>Savings</option><option value='c'>Checking</option></select></div><h4><small id='error_div' style='color:red'></small></h4><div class='col-sm-1'><button type='submit' id='withdraw' class='btn btn-info'>Withdraw</button></div>");
	$("#title").html("Profile > Withdraw");
	$("#header").html("Withdraw");
});

$("#Check").click(function(){
	$("#body").html("<h3><b>Redeem Check</b></h3><br><div class='form-group'><label>Check No</label><input type='text' class='form-control' id='checkNo' placeholder='Check number' required></div><div class='form-group'><label>Account No</label><input type='text' class='form-control' id='accountNo' placeholder='Account number' required></div><div class='form-group'><label>Writing Date</label><input type='date' class='form-control' id='writingDate' required></div><div class='form-group'><label>Amount</label><input type='text' class='form-control' id='amount' placeholder='Amount to be withdrawn' required></div><div class='form-group'><label>First Name</label><input type='text' class='form-control' id='redeemerFname' placeholder='First name of redeemer' required></div><div class='form-group'><label>Last Name</label><input type='text' class='form-control' id='redeemerLname' placeholder='Last name of redeemer' required></div><h4><small id='error_div' style='color:red'></small></h4><div class='col-sm-1'><button type='submit' id='redeem' class='btn btn-info'>Redeem</button></div>");
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
});

$("#body").on("click", "#list_savings", function() {
	$.ajax({
		type: "POST",
		url : "php/is_logged_in.php",
		success: function(result){
			if(result == 'c')
				$.ajax({
					type: "POST",
					url : "php/list_savings_accounts.php",
					success: function(result){
						if(result == 1)
							$("#error_div").html("No such client");
						else
							$("#body").html(result);
					}
				});
			else
				$("#body").html("<h3><b>Savings Accounts Listing</b></h3><br><div class='form-group'><label>ID</label><input type='text' class='form-control' id='clientId' placeholder='SSN of client' required></div><h4><small id='error_div' style='color:red'></small></h4><br><div class='col-sm-4'><button type='button' class='btn btn-info' id='search_savings'>Confirm</button></div>");
		}
	});
	$("#title").append(" > Savings Account Listing");
});

$("#body").on("click", "#list_checking", function() {
	$.ajax({
		type: "POST",
		url : "php/is_logged_in.php",
		success: function(result){
			if(result == 'c')
				$.ajax({
					type: "POST",
					url : "php/list_checking_accounts.php",
					success: function(result){
						if(result == 1)
							$("#error_div").html("No such client");
						else
							$("#body").html(result);
					}
				});
			else
				$("#body").html("<h3><b>Checking Accounts Listing</b></h3><br><div class='form-group'><label>ID</label><input type='text' class='form-control' id='clientId' placeholder='SSN of client' required></div><h4><small id='error_div' style='color:red'></small></h4><br><div class='col-sm-4'><button type='button' class='btn btn-info' id='search_checking'>Confirm</button></div>");
	$("#title").append(" > Checking Account Listing");
});

$("#body").on("click", "#search_savings", function() {
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

$("#body").on("click", "#search_checking", function() {
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
	$("#body").html("<h3><b>Create Savings Account</b></h3><br><div class='form-group'><label>ID</label><input type='text' class='form-control' id='clientId' placeholder='SSN of client' required></div><label>Currency</label><select class='form-control' id='currency'><option value='USD'>US Dollar</option><option value='EGP'>EG Pound</option><option value='EUR'>EU Euro</option><option value='KWD'>KW Dinar</option></select></div><h4><small id='error_div' style='color:red'></small></h4><br><div class='col-sm-4'><button type='button' class='btn btn-info' id='savings_create'>Create</button></div>");
	$("#title").append(" > Savings Account Creation");
});

$("#body").on("click", "#create_checking", function() {
	$("#body").html("<h3><b>Create Checking Account</b></h3><br><div class='form-group'><label>ID</label><input type='text' class='form-control' id='clientId' placeholder='SSN of client' required></div><label>Currency</label><select class='form-control' id='currency'><option>US Dollar</option><option>EG Pound</option><option>EU Euro</option><option>KW Dinar</option></select></div><h4><small id='error_div' style='color:red'></small></h4><br><div class='col-sm-4'><button type='button' class='btn btn-info' id='checking_create'>Create</button></div>");
	$("#title").append(" > Checking Account Creation");	
});

$("#body").on("click", "#savings_create", function() {
	var clientId = $("#clientId").val();
	var currency = $("#currency").val();
	if(clientId == "")
		$("#error_div").html("Client's SSN is required");
	else
	$.ajax({
		type: "POST",
		url : "php/create_savings_account.php",
		data: {"clientId":clientId,"currency":currency},
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

$("#body").on("click", "#checking_create", function() {
	var clientId = $("#clientId").val();
	var currency = $("#currency").val();
	if(clientId == "" || currency == "")
		$("#error_div").html("Client's SSN is required");
	else
	$.ajax({
		type: "POST",
		url : "php/create_checking_account.php",
		data: {"clientId":clientId,"currency":currency},
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

$("#body").on("click", "#create_debit", function() {
	$("#body").html("<h3><b>Create Debit Card</b></h3><br><div class='form-group'><br><label>Client ID</label><input type='text' class='form-control' id='ID' placeholder='SSN of client' required></div><div class='form-group'><label>PIN</label><input type='password' class='form-control' id='PIN' placeholder='PIN' required></div><h4><small id='error_div' style='color:red'></small></h4><div class='col-sm-1'><button type='submit' id='debit_create' class='btn btn-info'>Create</button></div>");
});

$("#body").on("click", "#create_credit", function() {
	$("#body").html("<h3><b>Create Credit Card</b></h3><br><div class='form-group'><br><label>Client ID</label><input type='text' class='form-control' id='ID' placeholder='SSN of client' required></div><div class='form-group'><label>PIN</label><input type='password' class='form-control' id='PIN' placeholder='PIN' required></div><h4><select class='form-control' id='currency'><option>US Dollar</option><option>EG Pound</option><option>EU Euro</option><option>KW Dinar</option></select></div><div class='form-group'><br><label>Maximum Limit</label><input type='number' min='1000' class='form-control' id='max' placeholder='Maximum amount held' required></div><small id='error_div' style='color:red'></small></h4><div class='col-sm-1'><button type='submit' id='credit_create' class='btn btn-info'>Create</button></div>");
});

$("#body").on("click", "#debit_create", function() {
	var clientId = $("#ID").val();
	var pin = $("#PIN").val();
	if(clientId == "" || pin == "")
		$("#error_div").html("Both fields are required");
	else
	$.ajax({
		type: "POST",
		url : "php/issue_debit_card.php",
		data: {"clientId":clientId,"pin":pin},
		success: function(result){
			if(result == 1)
				$("#error_div").html("Session error");
			else if(result == 2)
				$("#error_div").html("Both fields are required");
			else if(result == 3)
				$("#error_div").html("Unexpected error");
			else if(result == 4)
				$("#error_div").html("No such client");
			else
				location.href="home.html";
		}
	});
});

$("#body").on("click", "#credit_create", function() {
	var clientId = $("#ID").val();
	var currency = $("#currency").val();
	var pin = $("#PIN").val();
	var max = $("#max").val();
	if(clientId == "" || pin == "" || max == "")
		$("#error_div").html("All fields are required");
	else
	$.ajax({
		type: "POST",
		url : "php/issue_credit_card.php",
		data: {"clientId":clientId,"currency":currency,"pin":pin,"max":max},
		success: function(result){
			if(result == 1)
				$("#error_div").html("Session error");
			else if(result == 2)
				$("#error_div").html("All fields are required");
			else if(result == 3)
				$("#error_div").html("Unexpected error");
			else if(result == 4)
				$("#error_div").html("No such client");
			else
				location.href="home.html";
		}
	});
});

$("#body").on("click", "#deposit", function() {
	var accountNum = $("#accountNo").val();
	var accountType = $("#type").val();
	var amount = $("#amount").val();
	console.log(accountNum);
	console.log(accountType);
	console.log(amount);
	if(accountNum == "" || amount == "")
		$("#error_div").html("All fields are required");
	else
	$.ajax({
		type: "POST",
		url : "php/deposit.php",
		data: {"accountNum":accountNum,"accountType":accountType,"amount":amount},
		success: function(result){
			if(result == 1)
				$("#error_div").html("Session error");
			else if(result == 2)
				$("#error_div").html("All fields are required");
			else if(result == 3)
				$("#error_div").html("No such account");
			else if(result == 4)
				$("#error_div").html("Unexpected error");
			//else
				//location.href="home.html";
		}
	});
});

$("#body").on("click", "#withdraw", function() {
	var accountNum = $("#accountNo").val();
	var accountType = $("#type").val();
	var amount = $("#amount").val();
	if(accountNum == "" || amount == "")
		$("#error_div").html("All fields are required");
	else
	$.ajax({
		type: "POST",
		url : "php/withdraw.php",
		data: {"accountNum":accountNum,"accountType":accountType,"amount":amount},
		success: function(result){
			if(result == 1)
				$("#error_div").html("Session error");
			else if(result == 2)
				$("#error_div").html("All fields are required");
			else if(result == 3)
				$("#error_div").html("No such account");
			else if(result == 4)
				$("#error_div").html("Not enough balance");
			else if(result == 5)
				$("#error_div").html("Unexpected error");
			else
				location.href="home.html";
		}
	});
});

$("#body").on("click", "#redeem", function() {
	var checkNum = $("#checkNo").val();
	var accountNum = $("#accountNo").val();
	var amount = $("#amount").val();
	var writingDate = $("#writingDate").val();
	var redeemerFname = $("#redeemerFname").val();
	var redeemerLname = $("#redeemerLname").val();
	if(checkNum == "" || redeemerFname == "" || redeemerLname == "" || writingDate == "" || accountNum == "" || amount == "")
		$("#error_div").html("All fields are required");
	else
	$.ajax({
		type: "POST",
		url : "php/redeem_check.php",
		data: {"checkNum":checkNum,"accountNum":accountNum,"amount":amount,"writingDate":writingDate,"redeemerFname":redeemerFname,"redeemerLname":redeemerLname},
		success: function(result){
			if(result == 1)
				$("#error_div").html("Session error");
			else if(result == 2)
				$("#error_div").html("All fields are required");
			else if(result == 3)
				$("#error_div").html("No such account");
			else if(result == 4)
				$("#error_div").html("Not enough balance");
			else if(result == 5)
				$("#error_div").html("Unexpected error");
			else
				location.href="home.html";
		}
	});
});