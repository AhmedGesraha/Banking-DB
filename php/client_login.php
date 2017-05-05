<?php

	if (array_key_exists('username', $_POST) && array_key_exists('password', $_POST))
	{
		
		$password = hash('sha256', $_POST['password'], false);


		$query = "SELECT * FROM client WHERE username='".$_POST['username']."' AND password='".$password."'";

		
		$connection = mysqli_connect("localhost", "root", "", "bank");

		$result = mysqli_query($connection, $query);


		if(mysqli_num_rows($result) == 1)		// username and password are valid
		
		{
			
			$result = mysqli_fetch_assoc($result);


			if (session_start())

			{

				$_SESSION['logged_in'] = true;

				$_SESSION['login_type'] = 'c';

				$_SESSION['client_id'] = $result['id'];		// save the clientId for later rquests


				echo 0;

			}

			else 		// session error

			{

				echo 3;

			}

		}

		else 		// query error

		{

			echo 2;

		}


		mysqli_close($connection);

	}

	else 		// input parameter error

	{

		echo 1;

	}

?>