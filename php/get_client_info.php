<?php
	if (session_start())
	{
		if (array_key_exists('clientId', $_POST) || array_key_exists('client_id', $_SEESION))
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

				echo "(".$result['id'].",".$result['status'].",".$result['dateOfBirth'].",".$result['username'].",".$result['address'].",".$result['phone'].",".$result['salary'].",".$result['fname'].",".$result['lname'].")";

				mysqli_close($connection);
			}
			else 		// dafuq?!
			{
				echo "uh-oh";
			}
		}
	}
?>