let activeAnswer = {};
var lineQ1ToA1 = new LeaderLine(
    document.getElementById('q1'),
    document.getElementById('q1-a1')
);

var lineQ1ToA2 = new LeaderLine(
    document.getElementById('q1'),
    document.getElementById('q1-a2')
);
var lineA1ToQ2 = new LeaderLine(
	document.getElementById('q1-a1'),
    document.getElementById('q2')
)
lineA1ToQ2.setOptions({
    	color: "#d6d6d6",
    	size: 2,
    	startPlug: "disc",
    	startPlugColor: '#d6d6d6',
  		startPlugOutlineColor: '#FFFFFF',
  		startPlugOutlineSize: 1,
  		startPlugSize: 2,
  		hide : true,
    });
var lineA2ToQ3 = new LeaderLine(
		document.getElementById('q1-a2'),
    	document.getElementById('q3')
	)
lineA2ToQ3.setOptions({
    	color: "#d6d6d6",
	    size: 2,
	    startPlug: "disc",
	    startPlugColor: '#d6d6d6',
	  	startPlugOutlineColor: '#FFFFFF',
	  	startPlugOutlineSize: 1,
	  	startPlugSize: 2,
	  	hide : true,
    })
lineA1ToQ2.hide();
lineA2ToQ3.hide();
lineQ1ToA1.color = '#d6d6d6';
lineQ1ToA1.size = 2; 
lineQ1ToA1.path = 'magnet';
lineQ1ToA1.endPlug = 'behind';
lineQ1ToA2.color = '#d6d6d6';
lineQ1ToA2.size = 2; 
lineQ1ToA2.endPlug = 'behind';
lineQ1ToA2.startSocketGravity = 45;
lineQ1ToA2.endSocketGravity = 45;

function handleAnswerClick(idAnswerButton, idAnswer, nextIdQuestion) {
	document.getElementById(idAnswerButton).remove()
	switch (idAnswer) {
		case "q1-a1": 
			// alert('ya')
			console.log(nextIdQuestion)
			setTimeout(function() {
				document.getElementById('wrapper-quiz').style.transform = 'translateX(-300px)';			
				allLine = document.getElementsByClassName('leader-line');
				for (var i = 0; i < allLine.length; i++) {
					console.log(allLine[i])
					allLine[i].style.transition = '0.5s transform ease-in-out';
					allLine[i].style.transform = 'translateX(-300px)';
				}
				// lineA1ToQ2.position();
			}, 501)
			document.getElementById(nextIdQuestion).style.opacity = '1';
			lineA1ToQ2.show(['draw']);
			break;
		case "q1-a2":
			console.log(nextIdQuestion)
			setTimeout(function() {
				document.getElementById('wrapper-quiz').style.transform = 'translate(-300px, -150px)';			
				allLine = document.getElementsByClassName('leader-line');
				for (var i = 0; i < allLine.length; i++) {
					console.log(allLine[i])
					allLine[i].style.transition = '0.5s all ease-in-out';
					allLine[i].style.transform = 'translate(-300px, -150px)';
				}
				// lineA1ToQ2.position();
			}, 501)
			document.getElementById(nextIdQuestion).style.opacity = '1';
			lineA2ToQ3.show(['draw']);
			break;
		default:
			alert('SOME PROBLEMS WITH ID = ' + idAnswer)
			break;
	}
}

