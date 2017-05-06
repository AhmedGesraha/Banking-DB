<?php
	if (session_start())
	{
		if (array_key_exists('clientId', $_POST) && array_key_exists('currency', $_POST))
		{
			if (array_key_exists('logged_in', $_SESSION) && array_key_exists('login_type', $_SESSION) && $_SESSION['logged_in'] && ($_SESSION['login_type'] == 's' || $_SESSION['login_type'] == 'm'))
			{
				$check_query = "SELECT * from client WHERE id='".$_POST['clientId']."'";

				$insert_query = "INSERT INTO savings_account(currency, id) VALUES('".$_POST['currency']."', '".$_POST['clientId']."')";

				$connection = mysqli_connect("localhost", "root", "", "bank");
				
				$result = mysqli_query($connection, $check_query);
				if(mysqli_num_rows($result) == 1)		// client exists
				{
					$result = mysqli_query($connection, $insert_query);
					if (mysqli_affected_rows($connection) == 1)
					{
						echo 0;
					}
					else 			// insert failed
					{
						echo 4;
					}
				}
				else 			// no such client
				{
					echo 1;
				}

				mysqli_close($connection);
			}
			else 		// dafuq?!
			{
				echo "nice try... ha ha ha";
			}
		}
		else 		// failed to get required input parameters
		{
			echo 3;
		}
	}
	else 		// failed to start session
	{
		echo 2;
	}
?>