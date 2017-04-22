<?php
	if (session_start())
	{
		if (array_key_exists('clientId', $_POST) || array_key_exists('client_id', $_SEESION))
		{
			if ($_SESSION['logged_in'])
			{
				$cid = "";
				if (array_key_exists('clientId', $_POST))
					$cid = $_POST['clientId'];
				else
					$cid = $_SESSION['client_id'];

				$query = "SELECT * FROM savings_account WHERE id='".$cid."'";

				$connection = mysqli_connect("localhost", "root", "", "bank");
				
				$result = mysqli_query($connection, $query);
				foreach ($result as $account)
				{
					echo "(".$account['accountnum'].",".$account['currency'].",".$account['rate'].",".$account['balance'].",".$account['available'].",".$account['active'].",".$account['issuedate'].",".$account['cardnum'].")";
				}

				mysqli_close($connection);
			}
			else 		// dafuq?!
			{
				echo "oops, I made a boom boom";
			}
		}
	}
?>