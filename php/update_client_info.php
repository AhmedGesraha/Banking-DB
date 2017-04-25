<?php
	if (session_start())
	{
		if (array_key_exists('clientId', $_POST))
		{
			if (array_key_exists('logged_in', $_SESSION) && array_key_exists('login_type', $_SESSION) && $_SESSION['logged_in'] && ($_SESSION['login_type'] == 's' || $_SESSION['login_type'] == 'm'))
			{
				$check_query = "SELECT * from client WHERE id='".$_POST['clientId']."'";

				$connection = mysqli_connect("localhost", "root", "", "bank");
				
				$result = mysqli_query($connection, $check_query);
				if(mysqli_num_rows($result) == 1)		// client exists
				{
					$successful = true;

					if (array_key_exists('address', $_POST))
					{
						$query = "UPDATE client SET address='".$_POST['address']."' WHERE id='".$_POST['clientId']."'";
						
						mysqli_query($connection, $query);
						if (mysqli_affected_rows($connection) != 1)
							$successful = false;
					}

					if (array_key_exists('phone', $_POST))
					{
						$query = "UPDATE client SET phone='".$_POST['phone']."' WHERE id='".$_POST['clientId']."'";

						mysqli_query($connection, $query);
						if (mysqli_affected_rows($connection) != 1)
							$successful = false;
					}

					if (array_key_exists('salary', $_POST))
					{
						$query = "UPDATE client SET salary='".$_POST['salary']."' WHERE id='".$_POST['clientId']."'";

						mysqli_query($connection, $query);
						if (mysqli_affected_rows($connection) != 1)
							$successful = false;
					}

					if ($successful)
					{
						echo 0;
					}
					else		// update failed
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
				echo "NO";
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