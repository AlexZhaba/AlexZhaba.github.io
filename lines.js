var questions = window.questions;
var lines = {};
var nextLines = {};
window.editor_x_ = 0;
window.editor_y_ = 0;
var setAllLines = () => {
    questions = window.questions;
        for (key in nextLines) {
            console.log(nextLines[key])
            nextLines[key].remove()
        }
        for (key in lines) {
            lines[key].remove()
        }
    console.log('-------------------------------')
    nextLines = {}
    lines = {}
    // for (key )
    // lines = {};
    // nextLines = {};
    for (var i = 0; i < questions.length; i++) {
        // lines[i] = [];
        for (var j = 0; j < questions[i].answers.length; j++) {
            console.log('|')
            console.log(`q_${questions[i].id}`)
            console.log(`a_${questions[i].id}_${questions[i].answers[j].id}`)
            lines[`a_${questions[i].id}_${questions[i].answers[j].id}`] = new LeaderLine(
                document.getElementById(`q_${questions[i].id}`),
                document.getElementById(`a_${questions[i].id}_${questions[i].answers[j].id}`)
            )
            if (questions[i].answers[j].id == 2) {
                lines[`a_${questions[i].id}_${questions[i].answers[j].id}`].setOptions ({
                    color: "#d6d6d6",
                    size: 2,
                    startSocketGravity : 33, 
                    endSocketGravity: 48, 
                    endPlug: "behind",
                    endSocket: 'left'
                })
            } else {
                lines[`a_${questions[i].id}_${questions[i].answers[j].id}`].setOptions ({
                    color: "#d6d6d6",
                    size: 2,
                    startSocketGravity : 40, 
                    endSocketGravity: 53, 
                    endPlug: "behind",
                    endSocket: 'left'
                })
            }
            var svgLines = document.getElementsByClassName('leader-line')[document.getElementsByClassName('leader-line').length - 1];
            console.log(svgLines)
            svgLines.id = `l_a_${questions[i].id}_${questions[i].answers[j].id}`;
            if (questions[i].answers[j].next_question_id != null) {
                console.log('-----------------------')
                console.log(document.getElementById(`a_${questions[i].id}_${questions[i].answers[j].id}`))
                console.log(questions[i].answers[j].next_question_id)
                nextLines[`next_${questions[i].id}_${questions[i].answers[j].id}_to_${questions[i].answers[j].next_question_id}`] = new LeaderLine(
                    document.getElementById(`a_${questions[i].id}_${questions[i].answers[j].id}`),
                    document.getElementById(`q_${questions[i].answers[j].next_question_id}`)
                )
                nextLines[`next_${questions[i].id}_${questions[i].answers[j].id}_to_${questions[i].answers[j].next_question_id}`].setOptions ({
                    color: "#d6d6d6",
                    size: 2,
                    // endPlug: "behind",
                    startSocket: "right",
                    endSocket: 'left'
                })
                svgLines = document.getElementsByClassName('leader-line')[document.getElementsByClassName('leader-line').length - 1];
                svgLines.id = `next_${questions[i].id}_${questions[i].answers[j].id}_to_${questions[i].answers[j].next_question_id}`;
                // svgLines.style.marginLeft = window.editor_x_;
                // svgLines.style.marginTop = window.editor_y_;
                console.log('nextLines = ', nextLines)
            }
            // svgLines.style.left = '200px';
            console.log(svgLines)
        }
    }
}
setAllLines();
console.log(lines)