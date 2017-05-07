<?php
	if (session_start())
	{
		if (array_key_exists('clientId', $_POST) || array_key_exists('client_id', $_SEESION))
		{
			if (array_key_exists('logged_in', $_SESSION) && $_SESSION['logged_in'])
			{
				$cid = "";
				if (array_key_exists('clientId', $_POST))
					$cid = $_POST['clientId'];
				else
					$cid = $_SESSION['client_id'];

				$query = "SELECT * FROM checking_account WHERE id='".$cid."'";

				$connection = mysqli_connect("localhost", "root", "", "bank");
				
				echo 
					"<table class='table'>".
						"<thead>".
							"<tr>".
								"<th class='col-sm-1'>Account number</th>".
								"<th class='col-sm-1'>Currency</th>".
								"<th class='col-sm-1'>Balance</th>".
								"<th class='col-sm-1'>Available balance</th>".
								"<th class='col-sm-1'>Active</th>".
								"<th class='col-sm-10'>Issue date</th>".
								"<th class='col-sm-1'>Linked debit card</th>".
							"</tr>".
						"</thead>"
					;

				$result = mysqli_query($connection, $query);
				foreach ($result as $account)
				{
					echo "<tr>";
					echo "<td>".$account['accountNum']."</td>";
					echo "<td>".$account['currency']."</td>";
					echo "<td>".$account['balance']."</td>";
					echo "<td>".$account['available']."</td>";
					echo "<td>".$account['active']."</td>";
					echo "<td>".$account['issueDate']."</td>";
					echo "<td>".$account['cardNum']."</td>";
					echo "</tr>";
				}

				mysqli_close($connection);
			}
			else 		// dafuq?!
			{
				echo "nope";
			}
		}
	}
?>