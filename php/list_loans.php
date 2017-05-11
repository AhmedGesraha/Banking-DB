<?php
	if (session_start())
	{
		if (array_key_exists('clientId', $_POST) || array_key_exists('client_id', $_SESSION))
		{
			if ((array_key_exists('logged_in', $_SESSION) && array_key_exists('login_type', $_SESSION) && $_SESSION['logged_in'] && ($_SESSION['login_type'] == 'm' || $_SESSION['login_type'] == 's' || $_SESSION['login_type'] == 'c')))
			{
				$cid = "";
				if ($_SESSION['login_type'] == 'c')
					$cid = $_SESSION['client_id'];
				else
					$cid = $_POST['clientId'];

				$query = "SELECT * FROM loan WHERE id='".$cid."'";

				$connection = mysqli_connect("localhost", "root", "", "bank");
				
				echo 
					"<table class='table'>".
						"<thead>".
							"<tr>".
								"<th class='col-sm-1'>Loan number</th>".
								"<th class='col-sm-1'>Amount</th>".
								"<th class='col-sm-1'>Rate</th>".
								"<th class='col-sm-1'>Paid</th>".
								"<th class='col-sm-1'>Start date</th>".
								"<th class='col-sm-1'>End date</th>".
							"</tr>".
						"</thead>"
					;


				$result = mysqli_query($connection, $query);
				
				foreach ($result as $loan)
				{
					echo "<tr>";
					echo "<td>".$loan['loanNum']."</td>";
					echo "<td>".$loan['amount']."</td>";
					echo "<td>".($loan['rate']*100)."%</td>";
					echo "<td>".$loan['paid']."</td>";
					echo "<td>".$loan['startDate']."</td>";
					echo "<td>".$loan['endDate']."</td>";
					echo "</tr>";
				}

				mysqli_close($connection);
			}
			else 		// dafuq?!
			{
				echo ";(";
			}
		}
	}
?>