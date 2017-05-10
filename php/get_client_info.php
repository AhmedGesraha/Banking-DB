<?php
	if (session_start())
	{
		if (array_key_exists('clientId', $_POST) || array_key_exists('client_id', $_SESSION))
		{
			if (array_key_exists('logged_in', $_SESSION) && $_SESSION['logged_in'])
			{
				$cid = "";
				if ($_SESSION['login_type'] == 'c')
					$cid = $_SESSION['client_id'];
				else
					$cid = $_POST['clientId'];

				$query = "SELECT * FROM client WHERE id='".$cid."'";

				$connection = mysqli_connect("localhost", "root", "", "bank");
				
				$result = mysqli_query($connection, $query);
				
				$result = mysqli_fetch_assoc($result);

				echo "<b>Client ID: </b>".$result['id']."<br><br>";
				echo "<b>First name: </b>".$result['fname']."<br>";
				echo "<b>Last name: </b>".$result['lname']."<br>";
				echo "<b>Date of birth: </b>".$result['dateOfBirth']."<br><br>";
				echo "<b>Address: </b>".$result['address']."<br>";
				echo "<b>Phone number: </b>".$result['phone']."<br>";
				echo "<b>Salary: </b>".$result['salary']."<br>";

				mysqli_close($connection);
			}
			else 		// dafuq?!
			{
				echo "uh-oh";
			}
		}
	}
?>