<?php
	if (session_start())
	{
		if (array_key_exists('clientId', $_POST) && array_key_exists('currency', $_POST) && array_key_exists('max', $_POST) && array_key_exists('pin', $_POST))
		{
			$pin = hash('sha256', $_POST['pin'], false);
			if (array_key_exists('logged_in', $_SESSION) && array_key_exists('login_type', $_SESSION) && $_SESSION['logged_in'] && ($_SESSION['login_type'] == 's' || $_SESSION['login_type'] == 'm'))
			{
				$insert_query = "INSERT INTO credit_card(max, currency, pin, id) VALUES(".$_POST['max'].",'".$_POST['currency']."','".$pin."','".$_POST['clientId']."')";

				$connection = mysqli_connect("localhost", "root", "", "bank");
				
				mysqli_query($connection, $insert_query);
				if (mysqli_affected_rows($connection) >= 1)
				{
					echo "<b>Card number: </b>".mysqli_insert_id($connection);
				}
				else 			// insert failed
				{
					echo 3;
				}

				mysqli_close($connection);
			}
			else 		// dafuq?!
			{
				echo "Ba dum tss!";
			}
		}
		else 		// failed to get required input parameters
		{
			echo 2;
		}
	}
	else 		// failed to start session
	{
		echo 1;
	}
?>