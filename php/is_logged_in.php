<?php
	if (session_start() && array_key_exists('logged_in', $_SESSION) && $_SESSION['logged_in'])
	{
		echo $_SESSION['login_type'];
	}
	else
	{
		echo 0;
	}
?>