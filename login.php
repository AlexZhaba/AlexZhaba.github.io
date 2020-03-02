<?php 
		if ($_COOKIE['user'] == ""):
	?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>login</title>
	<link rel="stylesheet" href="login_style.css">
</head>
<body>
	<div class="wrapper-login">
		<form action="check.php" method="post" class="form-block">
			<input type='text' name='login' placeholder="login"/>
			<input type='text' name='password' placeholder="password"/>
			<button type='submit'>Войти</button>
		</form>
	</div>
</body>
</html>
<?php else:
		header('Location: /admin.php');
	?>
<?php endif; ?>