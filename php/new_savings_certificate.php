<?php
	if (session_start())
	{
		if (array_key_exists('clientId', $_POST) && array_key_exists('certTypeId', $_POST) && array_key_exists('amount', $_POST))
		{
			if ($_SESSION['logged_in'] && ($_SESSION['login_type'] == 's' || $_SESSION['login_type'] == 'm'))
			{
				$insert_query = "";
				if (array_key_exists('accountNum', $_POST))
					$insert_query = "INSERT INTO savings_certificate(amount, typeId, id, accountNum) VALUES(".$_POST['amount'].", ".$_POST['certTypeId'].", ".$_POST['clientId'].", ".$_POST['accountNum'].")";
				else
					$insert_query = "INSERT INTO savings_certificate(amount, typeId, id) VALUES(".$_POST['amount'].", ".$_POST['certTypeId'].", ".$_POST['clientId'].")";

				$connection = mysqli_connect("localhost", "root", "", "bank");
				
				mysqli_query($connection, $insert_query);
				if (mysqli_affected_rows($conection) >= 1)
				{
					echo 0;
				}
				else 			// insert failed
				{
					echo 3;
				}

				mysqli_close($connection);
			}
			else 		// dafuq?!
			{
				echo "Oh, that's weird...";
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