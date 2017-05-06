<?php

	if (session_start())
	{

		if (array_key_exists('clientId', $_POST) && array_key_exists('username', $_POST) && array_key_exists('password', $_POST))

		{
<<<<<<< HEAD
			if (array_key_exists('logged_in', $_SESSION) && array_key_exists('login_type', $_SESSION) && $_SESSION['logged_in'] && ($_SESSION['login_type'] == 's' || $_SESSION['login_type'] == 'm'))
=======

			if ($_SESSION['logged_in'] && ($_SESSION['login_type'] == 's' || $_SESSION['login_type'] == 'm'))
			
>>>>>>> origin/master
			{

				$check_query = "SELECT * from client WHERE username='".$_POST['username']."'";


				$password = hash('sha256', $_POST['password'], false);

				$signup_query = "UPDATE client SET username='".$_POST['username']."', password='".$password."' WHERE id='".$_POST['clientId']."'";


				$connection = mysqli_connect("localhost", "root", "", "bank");

				
$result = mysqli_query($connection, $check_query);

				if(mysqli_num_rows($result) == 0)		// client with same username doesn't exist
				
				{

					$check_query = "SELECT * from client WHERE id='".$_POST['clientId']."'";

					$result = mysqli_query($connection, $check_query);

					if (mysqli_num_rows($result) == 1)				// client exists

					{
						$result = mysqli_fetch_assoc($result);
<<<<<<< HEAD
=======

>>>>>>> origin/master
						if ($result['username'] == null)
						{

							mysqli_query($connection, $signup_query);
<<<<<<< HEAD
							if (mysqli_affected_rows($connection) == 1)
=======

							if (mysqli_affected_rows($conection) == 1)
>>>>>>> origin/master
							{

								echo 0;

							}

							else 			// signup failed
							
							{

								echo 6;
							}

						}

						else 			// already signed up
						
						{

							echo 2;

						}

					}

					else 			// no such client
					
{
						echo 3;

					}

				}

				else 			// username already exists

				{

					echo 1;

				}


				mysqli_close($connection);

			}

			else 		// dafuq?!

			{

				echo "wtf?";

			}

		}

		else 		// failed to get required input parameters

		{
			echo 5;

		}

	}

	else 		// failed to start session

	{

		echo 4;

	}

?>