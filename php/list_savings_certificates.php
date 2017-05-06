<?php
	if (session_start())
	{
		if (array_key_exists('clientId', $_POST) || array_key_exists('client_id', $_SEESION))
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
				
				$result = mysqli_query($connection, $query);
				
				foreach ($result as $certificate)
				{
					echo "(".$certificate['certificateNum'].",".$certificate['startDate'].",".$certificate['duration'].",".$certificate['amount'].",".$certificate['rate'].",".$certificate['periodsPerYear'].",".$certificate['currency'].",".$certificate['accountNum'].")";
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