<?php
	
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel='stylesheet' href='indexStyle.css'>
</head>
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
<script src="leader-line.min.js"></script>
<script src='src/IndexScript.js' defer></script>
<script src='lines.js' defer></script>
<script src='src/index_quiz.js' defer></script>
<body>
	<div class="main-wrapper">
		<header>
		</header>
		<section id="quiz-wrapper">
		</section>
		<footer>
		</footer>
	</div>
</body>
</html>
