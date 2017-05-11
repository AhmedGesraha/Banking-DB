<?php
	if (session_start())
	{
		if (array_key_exists('loanNum', $_POST) && array_key_exists('amount', $_POST))
		{
			if (array_key_exists('logged_in', $_SESSION) && array_key_exists('login_type', $_SESSION) && $_SESSION['logged_in'] && ($_SESSION['login_type'] == 's' || $_SESSION['login_type'] == 'm'))
			{
				$update_query = "UPDATE loan SET paid=paid+".$_POST['amount']." WHERE loanNum=".$_POST['loanNum'];

				$connection = mysqli_connect("localhost", "root", "", "bank");
				
				mysqli_query($connection, $update_query);
				if (mysqli_affected_rows($connection) == 1)
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
				echo "...";
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