
let allLines = document.getElementsByClassName('leader-line');
console.log(allLines.length)
for (let i = 0; i < allLines.length; i++) {
	allLines.item(i).style.opacity = '0';
}
let showQuestion = (id_question) => {
	let question = document.getElementById(`q_${id_question}`);
	question.style.opacity = '1';
	question.style.visibility = 'visible';
	let lines;
	for (let i = 0; i < questions[id_question - 1].answers.length; i++) {
		// answer = document.getElementById(`a_${id_question}_${i + 1}`);
		// answer.style.opacity = '1';
		console.log(i);
		lines = document.getElementById(`l_a_${id_question}_${i + 1}`);
		lines.style.opacity = '1';
	}
}

// START QUIZ
showQuestion(1);


