<?php

	if (session_start())

	{

		if (array_key_exists('clientId', $_POST) && array_key_exists('fname', $_POST) && array_key_exists('lname', $_POST) && array_key_exists('dateOfBirth', $_POST))

		{

			if (array_key_exists('logged_in', $_SESSION) && array_key_exists('login_type', $_SESSION) && $_SESSION['logged_in'] && ($_SESSION['login_type'] == 's' || $_SESSION['login_type'] == 'm'))

			{

				$check_query = "SELECT * from client WHERE id='".$_POST['clientId']."'";


				$insert_query = "INSERT INTO client(id, dateOfBirth, fname, lname) VALUES('".$_POST['clientId']."', '".$_POST['dateOfBirth']."', '".$_POST['fname']."', '".$_POST['lname']."')";


				$connection = mysqli_connect("localhost", "root", "", "bank");

				
$result = mysqli_query($connection, $check_query);

				if(mysqli_affected_rows($connection) == 0)		// client doesn't exist

				{

					$result = mysqli_query($connection, $insert_query);

					if (mysqli_affected_rows($connection) == 1)

					{

						echo 0;


						if (array_key_exists('address', $_POST))

						{

							$query = "UPDATE client SET address='".$_POST['address']."' WHERE id='".$_POST['clientId']."'";

							
							mysqli_query($connection, $query);

						}


						if (array_key_exists('phone', $_POST))

						{

							$query = "UPDATE client SET phone='".$_POST['phone']."' WHERE id='".$_POST['clientId']."'";

							
							mysqli_query($connection, $query);

						}


						if (array_key_exists('salary', $_POST))

						{

							$query = "UPDATE client SET salary='".$_POST['salary']."' WHERE id='".$_POST['clientId']."'";

							
							mysqli_query($connection, $query);

						}

					}

					else 			// insert failed

					{

						echo 4;

					}

				}

				else 			// client already exists

				{

					echo 1;

				}


				mysqli_close($connection);

			}

			else 		// dafuq?!

			{

				echo "dude, GTFO!";

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