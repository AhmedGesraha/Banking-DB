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

				$query = "SELECT * FROM (savings_certificate NATURAL JOIN certificate_type) WHERE id='".$cid."'";

				$connection = mysqli_connect("localhost", "root", "", "bank");
				
				echo 
					"<table class='table'>".
						"<thead>".
							"<tr>".
								"<th class='col-sm-1'>Certificate number</th>".
								"<th class='col-sm-1'>Start date</th>".
								"<th class='col-sm-1'>Duration</th>".
								"<th class='col-sm-1'>Amount</th>".
								"<th class='col-sm-1'>Rate</th>".
								"<th class='col-sm-10'>Periods per year</th>".
								"<th class='col-sm-1'>Linked account</th>".
							"</tr>".
						"</thead>"
					;


				$result = mysqli_query($connection, $query);
				
				foreach ($result as $certificate)
				{
					echo "<tr>";
					echo "<td>".$certificate['certificateNum']."</td>";
					echo "<td>".$certificate['startDate']."</td>";
					echo "<td>".$certificate['duration']." months</td>";
					echo "<td>".$certificate['amount']." ".$certificate['currency']."</td>";
					echo "<td>".($certificate['rate']*100)."%</td>";
					echo "<td>".$certificate['periodsPerYear']."</td>";
					echo "<td>".$certificate['accountNum']."</td>";
					echo "</tr>";
				}

				mysqli_close($connection);
			}
			else 		// dafuq?!
			{
				echo "please don't";
			}
		}
	}
?>