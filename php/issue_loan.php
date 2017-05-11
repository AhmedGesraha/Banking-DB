<?php
	if (session_start())
	{
		if (array_key_exists('clientId', $_POST) && array_key_exists('amount', $_POST) && array_key_exists('guaranteeList', $_POST))
		{
			if (array_key_exists('logged_in', $_SESSION) && array_key_exists('login_type', $_SESSION) && $_SESSION['logged_in'] && ($_SESSION['login_type'] == 's' || $_SESSION['login_type'] == 'm'))
			{
				$insert_query = "INSERT INTO loan(amount, id) VALUES(".$_POST['amount'].",'".$_POST['clientId']."')";

				$connection = mysqli_connect("localhost", "root", "", "bank");
				
				$success = true;

				mysqli_query($connection, $insert_query);
				if (mysqli_affected_rows($connection) == 1)
				{
					$loanNum = mysqli_insert_id($connection);
					$guarantee = json_decode($_POST['guaranteeList']);

					foreach ($guarantee as $certificateNum)
					{
						$query = "INSERT INTO guaranteed_by (certificateNum, loanNum) VALUES (".$certificateNum.",".$loanNum.")";
						mysqli_query($connection, $query);
						if (mysqli_affected_rows($connection) != 1)
							$success = false;
					}
				}
				else
				{
					$success = false;
				}

				if ($success)
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
				echo "-_-";
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