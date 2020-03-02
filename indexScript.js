var DEFAULT_SCALE_X = 400;
var DEFAULT_SCALE_Y = 200;

var G_X = 0;
var G_Y = 0;

var wrapper = document.getElementById('quiz-wrapper');
var answers = void 0;
var handleClickAnswer = function handleClickAnswer(question_id, answer_id) {
	// alert(question_id)
	if (questions[question_id - 1].answers[answer_id - 1].next_question_id == null) alert('Конец квиза. Тут должна быть форма!');

	//DELETING BUTTONS
	var buttons = document.getElementsByClassName('button_' + question_id);
	console.log(buttons);
	while (buttons.length != 0) {
		for (var i = 0; i < buttons.length; i++) {
			console.log('button = ', buttons.item(i));
			buttons.item(i).remove();
		}
	}
	//OTHER 
	document.getElementById('next_' + question_id + '_' + answer_id + '_to_' + window.questions[question_id - 1].answers[answer_id - 1].next_question_id).style.opacity = '1';
	setTimeout(function () {
		document.getElementById('quiz-wrapper').style.transform = 'translate(' + (G_X + (window.questions[question_id - 1].x - questions[questions[question_id - 1].answers[answer_id - 1].next_question_id - 1].x)) + 'px, \n\t\t' + (G_Y + (window.questions[question_id - 1].y - questions[questions[question_id - 1].answers[answer_id - 1].next_question_id - 1].y)) + 'px)';
		G_X += window.questions[question_id - 1].x - questions[questions[question_id - 1].answers[answer_id - 1].next_question_id - 1].x;
		G_Y += window.questions[question_id - 1].y - questions[questions[question_id - 1].answers[answer_id - 1].next_question_id - 1].y;
		var allLines = document.getElementsByClassName('leader-line');
		console.log(allLines);
		for (var _i = 0; _i < allLines.length; _i++) {
			// allLines.item(i).style.transform = `translate(${(window.questions[question_id - 1].x - questions[questions[question_id - 1].answers[answer_id - 1].next_question_id - 1].x)}px, 
			// ${(window.questions[question_id - 1].y - questions[questions[question_id - 1].answers[answer_id - 1].next_question_id - 1].y)}px)`;
			allLines.item(_i).style.transform = 'translate(' + G_X + 'px, ' + G_Y + 'px)';
			// allLines.item(i).style.transform = `translateX(${(window.questions[question_id - 1].x - questions[questions[question_id - 1].answers[answer_id - 1].next_question_id - 1].x)}px)`;		
			// allLines.item(i).style.opacity = '1';
		}
	}, 501);
	showQuestion(window.questions[question_id - 1].answers[answer_id - 1].next_question_id);
};
document.getElementById('quiz-wrapper').style.marginTop = DEFAULT_SCALE_Y + 'px';
document.getElementById('quiz-wrapper').style.marginLeft = DEFAULT_SCALE_X + 'px';
for (var i = 0; i < questions.length; i++) {
	answers = "";
	for (var j = 0; j < questions[i].answers.length; j++) {
		answers += '<div class=\'answer\' id=a_' + (i + 1) + '_' + (j + 1) + '>\n\t\t\t\t\t\t' + questions[i].answers[j].text + '\n\t\t\t\t\t\t<div class=\'quiz-answer-button button_' + (i + 1) + '\' onclick="handleClickAnswer(' + (i + 1) + ', ' + (j + 1) + ')">\n\t\t\t\t\t\t\t<img src="https://image.flaticon.com/icons/svg/1417/1417434.svg" alt="">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>';
	}
	wrapper.innerHTML += '<div class=\'question-and-answer-wrapper\' id=q_' + (i + 1) + ' style="margin-left: ' + questions[i].x + 'px; margin-top: ' + questions[i].y + 'px; opacity: 0; visibility: hidden">\n    <div class=\'question-and-answer\'>\n        <div class=\'question-block\'>\n            ' + questions[i].text + '\n        </div>\n        <div class=\'answer-block\'>\n            ' + answers + '\n        </div>\n    </div>\n    </div>';
}