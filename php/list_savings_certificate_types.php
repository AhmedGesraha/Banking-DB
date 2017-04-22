<?php
	if (session_start())
	{
		if (array_key_exists('clientId', $_POST) || array_key_exists('client_id', $_SEESION))
		{
			if ($_SESSION['logged_in'] && ($_SESSION['login_type'] == 'm' || $_SESSION['login_type'] == 's' || $_SESSION['login_type'] == 'c'))
			{
				$query = "SELECT * FROM certificate_type";

				$connection = mysqli_connect("localhost", "root", "", "bank");
				
				$result = mysqli_query($connection, $query);
				foreach ($result as $certificate)
				{
					echo "(".$certificate['typeId'].",".$certificate['duration'].",".$certificate['rate'].",".$certificate['periodsperyear'].",".$certificate['currency'].")";
				}

				mysqli_close($connection);
			}
			else 		// dafuq?!
			{
				echo "Umm, how did you get here?";
			}
		}
	}
?>