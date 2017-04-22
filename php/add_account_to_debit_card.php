<?php
	if (session_start())
	{
		if (array_key_exists('cardNum', $_POST) && array_key_exists('accountNum', $_POST) && array_key_exists('accountType', $_POST))
		{
			if ($_SESSION['logged_in'] && ($_SESSION['login_type'] == 's' || $_SESSION['login_type'] == 'm'))
			{
				$check_query = "";
				if ($_POST['accountType'] == 's')
					$check_query = "SELECT * from savings_account WHERE accountNum='".$_POST['accountNum']."'";
				else if ($_POST['accountType'] == 'c')
					$check_query = "SELECT * from checking_account WHERE accountNum='".$_POST['accountNum']."'";

				$connection = mysqli_connect("localhost", "root", "", "bank");
				
				$result = mysqli_query($connection, $check_query);
				if(mysqli_num_rows($result) == 1)		// account exists
				{
					$check_query = "SELECT * from debit_card WHERE cardNum='".$_POST['cardNum']."'";
					$result = mysqli_query($connection, $check_query);
					if(mysqli_num_rows($result) == 1)		// card exists
					{
						$query = "";
						if ($_POST['accountType'] == 's')
							$query = "UPDATE savings_account SET cardNum='".$_POST['cardNum']."' WHERE accountNum='".$_POST['accountNum']."'";
						else if ($_POST['accountType'] == 'c')
							$query = "UPDATE checking_account SET cardNum='".$_POST['cardNum']."' WHERE accountNum='".$_POST['accountNum']."'";

						mysqli_query($connection, $query);
						if (mysqli_affected_rows($connection) == 1)
							echo 0;
						else 			// update error
							echo 5;
					}
					else 			// no such card
					{
						echo 4
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
				echo "I am busy right now, come back later";
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