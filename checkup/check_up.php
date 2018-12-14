<?php

session_start();
error_reporting(0);

if (!empty($_POST["radio"])) {
	
	$option = $_POST['radio'];

	$_SESSION['result'] = $_SESSION['result'] + $option;

	echo $_SESSION['result'];
		
}

?>