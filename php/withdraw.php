<?php
	if (session_start())
	{
		if (array_key_exists('accountNum', $_POST) && array_key_exists('accountType', $_POST) && array_key_exists('amount', $_POST))
		{
			if ($_SESSION['logged_in'] && ($_SESSION['login_type'] == 't' || $_SESSION['login_type'] == 'm'))
			{
				$check_query = "";
				if ($_POST['accountType'] == 'c')
					$check_query = "SELECT * from checking_account WHERE accountNum=".$_POST['accountNum'];
				else if ($_POST['accountType'] == 's')
					$check_query = "SELECT * from savings_account WHERE accountNum=".$_POST['accountNum'];

				$connection = mysqli_connect("localhost", "root", "", "bank");

				$result = mysqli_query($connection, $check_query);
				if (mysqli_num_rows($result) == 1)
				{
					$result = mysqli_fetch_assoc($result);
					if ($result['available'] >= $_POST['amount'])
					{
						$update_query = "";
						if ($_POST['accountType'] == 'c')
							$update_query = "UPDATE checking_account SET balance=balance-".$_POST['amount'].",available=available-".$_POST['amount']." WHERE accountNum='".$_POST['accountNum']."'";
						else if ($_POST['accountType'] == 's')
							$update_query = "UPDATE savings_account SET balance=balance-".$_POST['amount'].",available=available-".$_POST['amount']." WHERE accountNum='".$_POST['accountNum']."'";

						mysqli_query($connection, $update_query);
						if (mysqli_affected_rows($conection) == 1)
						{
							echo 0;
						}
						else
						{
							echo 5;
						}
					}
					else 		// not enough balance
					{
						echo 4;
					}
				}
				else 			// no such account
				{
					echo 3;
				}

				mysqli_close($connection);
			}
			else 		// dafuq?!
			{
				echo "DEMACIA!!";
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