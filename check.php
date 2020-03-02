<?php
	$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
	$password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);
	if ($login == 'admin' && ($password == "admin")) {
		setcookie("user", $login, time() + 60 * 60 * 24, "/");
		header('Location: /admin.php');
	} else {
		echo "Неверный пароль или логин";
	}
?>