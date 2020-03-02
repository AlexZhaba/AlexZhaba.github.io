const DEFAULT_SCALE_X = 400;
const DEFAULT_SCALE_Y = 200;

let G_X = 0;
let G_Y = 0;

let wrapper = document.getElementById('quiz-wrapper');
let answers;
let handleClickAnswer = (question_id, answer_id) => {
	// alert(question_id)
	if (questions[question_id - 1].answers[answer_id - 1].next_question_id == null) alert('Конец квиза. Тут должна быть форма!')

	//DELETING BUTTONS
	let buttons = document.getElementsByClassName(`button_${question_id}`);
	console.log(buttons)
	while (buttons.length != 0) {
		for (let i = 0; i < buttons.length; i++) {
			console.log('button = ', buttons.item(i))
			buttons.item(i).remove();
		}
	}
	//OTHER 
	document.getElementById(`next_${question_id}_${answer_id}_to_${window.questions[question_id - 1].answers[answer_id - 1].next_question_id}`).style.opacity = '1';
	setTimeout(() => {
		document.getElementById('quiz-wrapper').style.transform = `translate(${ G_X + (window.questions[question_id - 1].x - questions[questions[question_id - 1].answers[answer_id - 1].next_question_id - 1].x)}px, 
		${G_Y + (window.questions[question_id - 1].y - questions[questions[question_id - 1].answers[answer_id - 1].next_question_id - 1].y)}px)`;
		G_X += window.questions[question_id - 1].x - questions[questions[question_id - 1].answers[answer_id - 1].next_question_id - 1].x;
		G_Y += window.questions[question_id - 1].y - questions[questions[question_id - 1].answers[answer_id - 1].next_question_id - 1].y;
		let allLines = document.getElementsByClassName('leader-line');
		console.log(allLines);
		for (let i = 0; i < allLines.length; i++) {
			// allLines.item(i).style.transform = `translate(${(window.questions[question_id - 1].x - questions[questions[question_id - 1].answers[answer_id - 1].next_question_id - 1].x)}px, 
			// ${(window.questions[question_id - 1].y - questions[questions[question_id - 1].answers[answer_id - 1].next_question_id - 1].y)}px)`;
			allLines.item(i).style.transform = `translate(${G_X}px, ${G_Y}px)`;
			// allLines.item(i).style.transform = `translateX(${(window.questions[question_id - 1].x - questions[questions[question_id - 1].answers[answer_id - 1].next_question_id - 1].x)}px)`;		
			// allLines.item(i).style.opacity = '1';
		}
	}, 501)
	showQuestion(window.questions[question_id - 1].answers[answer_id - 1].next_question_id);
}
document.getElementById('quiz-wrapper').style.marginTop = `${DEFAULT_SCALE_Y}px`;
document.getElementById('quiz-wrapper').style.marginLeft = `${DEFAULT_SCALE_X}px`;
for (let i = 0; i < questions.length; i++) {
	answers = "";
	for (let j =  0; j < questions[i].answers.length; j++) {
		answers += `<div class='answer' id=a_${i + 1}_${j + 1}>
						${questions[i].answers[j].text}
						<div class='quiz-answer-button button_${i + 1}' onclick="handleClickAnswer(${i + 1}, ${j + 1})">
							<img src="https://image.flaticon.com/icons/svg/1417/1417434.svg" alt="">
						</div>
					</div>`
	}
    wrapper.innerHTML += 
    `<div class='question-and-answer-wrapper' id=q_${i + 1} style="margin-left: ${questions[i].x}px; margin-top: ${questions[i].y}px; opacity: 0; visibility: hidden">
    <div class='question-and-answer'>
        <div class='question-block'>
            ${questions[i].text}
        </div>
        <div class='answer-block'>
            ${answers}
        </div>
    </div>
    </div>`;
}