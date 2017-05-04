$("#Home").click(function(){
	location.href="home.html";
});

$("#Update").click(function(){
	location.href="update.html";
});

$("#Signup").click(function(){
	location.href="signup.html";
});

$("#Accounts").click(function(){
	location.href="accounts.html";
});

$("#Debit_Credit").click(function(){
	location.href="debitCredit.html";
});

$("#Debts").click(function(){
	location.href="debts.html";
});

$("#History").click(function(){
	location.href="history.html";
});

$("#Deposit").click(function(){
	location.href="deposit.html";
});

$("#Withdraw").click(function(){
	location.href="withdraw.html";
});

$("#Loans").click(function(){
	location.href="loans.html";
});

$("#Check").click(function(){
	location.href="check.html";
});

$("#Savings_Cert").click(function(){
	location.href="savingsCert.html";
});

$("#Employee").click(function(){
	location.href="employee_login.html";
});

$("#Client").click(function(){
	location.href="client_login.html";
});

$("#Logout").click(function(){
	$.ajax({
		type: "POST",
		url : "../php/logout.php"
	});
	location.href="login.html";
});