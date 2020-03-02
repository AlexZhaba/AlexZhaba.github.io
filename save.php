<?php
	// $object = json_decode($_POST['params'], true); 
	// header('Location: /login.php')
	// print_r($object)
	// $file = file_get_contents('questionsFile.json');
	file_put_contents('questionsFile.json', $_POST['params']);
	echo "Сохранение успешно"
	// header('Location: /login.php');
?>