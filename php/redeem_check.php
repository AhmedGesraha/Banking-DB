<?php
	if (session_start())
	{
		if (array_key_exists('checkNum', $_POST) && array_key_exists('accountNum', $_POST) && array_key_exists('writingDate', $_POST) && array_key_exists('amount', $_POST) && array_key_exists('redeemerFname', $_POST) && array_key_exists('redeemerLname', $_POST))
		{
			if ($_SESSION['logged_in'] && ($_SESSION['login_type'] == 't' || $_SESSION['login_type'] == 'm'))
			{
				$check_query = "SELECT * from checking_account WHERE accountNum=".$_POST['accountNum'];

				$connection = mysqli_connect("localhost", "root", "", "bank");

				$result = mysqli_query($connection, $check_query);
				if (mysqli_num_rows($result) == 1)
				{
					$result = mysqli_fetch_assoc($result);
					if ($result['available'] >= $_POST['amount'])
					{
						$insert_query = "INSERT INTO check(checkNum, accountNum, redeemer_fname, redeemer_lname, writingdate, amount) VALUES(".$_POST['checkNum'].",'".$_POST['accountNum']."','".$_POST['redeemerFname']."','".$_POST['redeemerLname']."','".$_POST['writingDate']."',".$_POST['amount'].")";

						$update_query = "UPDATE checking_account SET balance=balance-".$_POST['amount'].",available=available-".$_POST['amount']." WHERE accountNum='".$_POST['accountNum']."'";

						$success = true;
				
						mysqli_query($connection, $insert_query);
						if (mysqli_affected_rows($conection) != 1)
						{
							$success = false;
						}
						
						mysqli_query($connection, $update_query);
						if (mysqli_affected_rows($conection) != 1)
						{
							$success = false;
						}

						if ($success)
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
				echo "OH MY GOD, NO!";
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