<?php
	if (session_start())
	{
		if (array_key_exists('logged_in', $_SESSION) && array_key_exists('login_type', $_SESSION) && $_SESSION['logged_in'] && ($_SESSION['login_type'] == 'm' || $_SESSION['login_type'] == 's' || $_SESSION['login_type'] == 'c'))
		{
			$query = "SELECT * FROM certificate_type";

			$connection = mysqli_connect("localhost", "root", "", "bank");
			
			$result = mysqli_query($connection, $query);
			foreach ($result as $certificate)
			{
				//echo "(".$certificate['typeId'].",".$certificate['duration'].",".$certificate['rate'].",".$certificate['periodsPerYear'].",".$certificate['currency'].")";
				
				echo "<option value='".$certificate['typeId']."'>".$certificate['currency'].", ".$certificate['duration']." months, ".($certificate['rate']*100)."%, ".$certificate['periodsPerYear']." periods/year </option>";

			}

			mysqli_close($connection);
		}
		else 		// dafuq?!
		{
			echo "Umm, how did you get here?";
		}
	}
?>