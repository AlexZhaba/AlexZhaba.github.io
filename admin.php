<?php 
	if ($_COOKIE['user'] != ""):
	
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>quiz</title>
	<script src="leader-line.min.js"></script>
	<script defer src='mainScript.js'></script>
	<script defer src='lines.js'></script>
	<link rel="stylesheet" href="style.css">
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script>
	  <?php
			$file = file_get_contents('questionsFile.json');
			// print_r($file);
			$questions = json_decode($file, true);
			// print_r($questions);
			// unse?t($file);
			// print($questions)
		?>
		window.questions = <?php print_r($file) ?>
		<?php 
			unset($file);
		?>
  </script>
<body>
	<div id='main-container'>
		
	</div>
</body>
</html>
<?php else:
	header('Location: /login.php')
?>

<?php
	endif;
?>