<?php
	setcookie("user", $_COOKIE['user'], time() - 60 * 60 * 24, "/");
	header('Location: /login.php');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>

    </head>
    <body>

    </body>
</html>