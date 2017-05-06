$("body").on("click", "#update", function() {
	var formdata = new FormData();
	formdata.append("clientId",$("#ID").val());
	if($("#Address").val() != "")
		formdata.append("address",$("#Address").val());
	if($("#Phone").val() != "")
		formdata.append("phone",$("#Phone").val());
	if($("#Salary").val() != "")
		formdata.append("salary",$("#Salary").val());
	if($("#ID").val() == "")
		$("#error_div").html("Client SSN is required");
	else
	$.ajax({
		type: "POST",
		url : "../php/update_client_info.php",
		data: formdata,
  		processData: false,
	  	contentType: false,
		success: function(result){
			if(result == 1)
				$("#error_div").html("No such client");
			else if(result == 2)
				$("#error_div").html("Session error");
			else if(result == 3)
				$("#error_div").html("Client SSN is required");
			else if(result == 4)
				$("#error_div").html("Unexpected error");
			else
				location.href = "home.html";
		}
	});
});