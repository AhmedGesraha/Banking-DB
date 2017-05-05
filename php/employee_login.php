<?php
	if (array_key_exists('username', $_POST) && array_key_exists('password', $_POST))
	{
		$password = hash('sha256', $_POST['password'], false);
		//$password = $_POST['password'];

		$query = "SELECT * FROM employee WHERE username='".$_POST['username']."' AND password='".$password."'";

		$connection = mysqli_connect("localhost", "root", "", "bank");
		$result = mysqli_query($connection, $query);

		if(mysqli_num_rows($result) == 1)		// username and password are valid
		{
			$result = mysqli_fetch_assoc($result);

			if (session_start())
			{
				$_SESSION['logged_in'] = true;
				$_SESSION['login_type'] = $result['type'];		// save the login type to authenticate later requests
				
				if ($result['type'] == 'm')
					echo 0;
				else if ($result['type'] == 's')
					echo 1;
				else if ($result['type'] == 't')
					echo 2;
				else
					echo 4;

			}
			else 		// session error
			{
				echo 5;
			}
		}
		else 		// query error
		{
			echo 4;
		}

		mysqli_close($connection);
	}
	else 		// input parameter error
	{
		echo 3;
	}
?>