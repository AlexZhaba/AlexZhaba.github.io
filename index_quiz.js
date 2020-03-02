
var allLines = document.getElementsByClassName('leader-line');
console.log(allLines.length);
for (var i = 0; i < allLines.length; i++) {
	allLines.item(i).style.opacity = '0';
}
var showQuestion = function showQuestion(id_question) {
	var question = document.getElementById('q_' + id_question);
	question.style.opacity = '1';
	question.style.visibility = 'visible';
	var lines = void 0;
	for (var _i = 0; _i < questions[id_question - 1].answers.length; _i++) {
		// answer = document.getElementById(`a_${id_question}_${i + 1}`);
		// answer.style.opacity = '1';
		console.log(_i);
		lines = document.getElementById('l_a_' + id_question + '_' + (_i + 1));
		lines.style.opacity = '1';
	}
};

// START QUIZ
showQuestion(1);