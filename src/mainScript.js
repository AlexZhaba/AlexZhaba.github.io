
let Header = ({setQuestions}) => {
    let handleNewQuestion = () => {
        let testQ = [...window.questions];
        testQ.push({
            id: testQ.length + 1,
            text: `вопрос${testQ.length + 1}`,
            x: 0,
            y: 0,
            answers: [
                {
                    id: 1,
                    text: "ответ_1",
                    next_question_id: null
                }
            ]
        })
        // console.log(setQuestions)
        window.questions = [...testQ];
        setQuestions(testQ)
    }
    let handleSave = (event) => {
        console.log('save')
        // console.log($.ajax);
        // event.preventDefault();
        $.ajax({
            url: "save.php",
            type: "POST",
            // dataType: "json",
            data: "params=" + JSON.stringify(window.questions),
            success: (response) => {
                alert(response)
            },
        });
    }
    return (
        <header>
		    <div className="">
			    <div className='button-new-question' onClick={(event) => handleNewQuestion(event)}>
				    Новый вопрос 
			    </div>
			    Админ-панель 		
                <div className="">
                    <form action='exit.php' method='post'>  
                        <button className='exit-header' type='submit'>Выход</button>
                    </form>
                </div>
                <div className='save-header'>
                    <div onClick={() => handleSave()}>
                        Сохранить
                    </div>
                </div>
		    </div>
	    </header>
    )
}

let QuestionAndAnswer = ({id, text, x, y, answers, set_modal_id_question}) => {
    let refQAA = React.createRef();
    let [id_, setId] = React.useState(id);
    let [answers_, setAnswers] = React.useState(answers);
    let [text_, setText] = React.useState(text);
    let [x_, setX] = React.useState(x)
    let [y_, setY] = React.useState(y)
    let [mouseX, setMouseX] = React.useState(null);
    let [mouseY, setMouseY] = React.useState(null);
    let [drag, setDrag] = React.useState(false);
    let [answerJSX_, setAnswerJSX] = React.useState(answers.map((e, key) => {
        return <div className='answer' id={`a_${id_}_${e.id}`} key={key}> {e.text}</div>
    }))
    React.useEffect(() => {
        setId(id)
        setX(x)
        setY(y)
        setText(text)
        console.log('NEW_ ANSWER = ', answers)
        setAnswers(answers)
        setAnswerJSX(answers.map((e, key) => {
            return <div className='answer' id={`a_${id_}_${e.id}`} key={key}> {e.text}</div>
        }))
    },[id, text, answers])

    React.useEffect(() => {
        // setAnswerJSX(answers.map((e, key) => {
        //     return <div className='answer' id={`a_${id}_${e.id}`} key    ={key}> {e.text}</div>
        // }));
        refQAA.current.style.left = `${x_}px`;
        refQAA.current.style.top = `${y_}px`;
        console.log('lines = ', lines);
        // for (key in nextLines) {
        //     console.log(nextLines[key])
        //     nextLines[key].position()
        // }
        // for (key in lines) {
        //     lines[key].position()
        // }
        setTimeout(() => {
            for (key in nextLines) {
                console.log(nextLines[key])
                nextLines[key].position()
            }
            for (key in lines) {
                lines[key].position()
            }
    
        }, 50)
        // for (let i = 0; i < answers.length; i++) {
        //     lines[`a_${id}_${answers[i].id}`].position();
        //     if (answers[i].next_question_id != null) {
        //         console.log(`next_${id}_${answers[i].id}_to_${answers[i].next_question_id}`)
        //         nextLines[`next_${id}_${answers[i].id}_to_${answers[i].next_question_id}`].position()
        //     }
        // }
    
    },[x_, y_, text, answers]);
    let handleMouseDown = (event) => {
        event.persist();
        event.stopPropagation()
        setDrag(true);
        setMouseX(event.pageX);
        setMouseY(event.pageY);
        console.log('event = ', event) 
     }
    let handleMouseMove = (event) => {
        event.persist();
        event.stopPropagation()
        if (drag) {
            let dx = event.pageX - mouseX;
            let dy = event.pageY - mouseY;
            setMouseX(event.pageX);
            setMouseY(event.pageY);
            setX(x_ + dx)
            setY(y_ + dy)
            console.log(window.questions[id - 1])

            window.questions[id - 1].x = x_ + dx;
            window.questions[id - 1].y = y_ + dy;
            //console.log(marginLeft, marginRight)

            console.log(x, ' ', y)
        }
    }
    let handleMouseUp = (event) => {
        event.stopPropagation()
        setDrag(false);
    }
    return (
        <div className='question-and-answer-wrapper' ref={refQAA} id={`q_${id_}`} onMouseDown={(event) => event.stopPropagation()}>
            <div className='question-and-answer'
                onMouseDown = {(event) => handleMouseDown(event)}
                onMouseMove = {(event) => handleMouseMove(event)}
                onMouseUp =   {(event) => handleMouseUp(event) }
                onMouseOver = {(event) => setDrag(false)}
            >
                <div className='question-block'>
                    {text_}
                </div>
                <div className='answer-block'>
                    {answerJSX_}
                </div>
            </div>
            <div className='setting-block' onClick={(event) => {set_modal_id_question(id_)}}>
                    <img src='https://image.flaticon.com/icons/svg/2099/2099058.svg'/>
                </div>
        </div>
    )
}

let Editor = ({set_modal_id_question, questions}) => {
    // alert('hello')
    // React.useEffect(() => {
    //     for (key in nextLines) {
    //         nextLines[key].position()
    //     }
    //     for (key in lines) {
    //         lines[key].position()
    //     }
    // }, [])
    let [x_, setX] = React.useState(null)
    let [y_, setY] = React.useState(null)
    let [drag, setDrag] = React.useState(false);
    let [mouseX, setMouseX] = React.useState(null)
    let [mouseY, setMouseY] = React.useState(null)
    let refEditor = React.createRef()
    let handleMouseDown = (event) => {
        event.persist();
        event.stopPropagation()
        setDrag(true);
        setMouseX(event.pageX);
        setMouseY(event.pageY);
     }
    let handleMouseMove = (event) => {
        event.persist();
        event.stopPropagation()
        if ((drag)) {
            if ((x_ + event.pageX - mouseX <= 0)) {
                let dx = event.pageX - mouseX;
                setMouseX(event.pageX);
                setX(x_ + dx)
            }
            if (y_ + event.pageY - mouseY <= 0) {
                let dy = event.pageY - mouseY;
                setMouseY(event.pageY);
                setY(y_ + dy)
            }
            //console.log(marginLeft, marginRight)

            // console.log(x, ' ', y)
        }
    }
    let handleMouseUp = (event) => {
        event.stopPropagation()
        setDrag(false);
    }
    let [questionsJSX, setQuestionsJSX] = React.useState(questions.map((e, key) => {
        console.log(e)
        return <QuestionAndAnswer {...e} 
            key={key} 
            set_modal_id_question={set_modal_id_question}
        />
    }));
    React.useEffect(() => {
        console.log(x_, '|||||', y_)
        if ((x_ != null) & (y_ != null)) {
            refEditor.current.style.marginLeft = `${x_}px`;
            refEditor.current.style.marginTop = `${y_}px`;
            window.editor_x_ = x_;
            window.editor_y_ = y_;
            let linesInDOM = document.getElementsByClassName('leader-line')
            for (key in nextLines) {
                console.log(nextLines[key])
                nextLines[key].position()
            }
            for (key in lines) {
                lines[key].position()
            }
            console.log('SADJFKLSJDLKFJKLSDFJKLSKLDFJSLDKJFLKJSDLKFJKL')
            // for (let i = 0; i < linesInDOM.length; i++) {
            //     linesInDOM[i].style.marginLeft = `${x_}px`
            //     linesInDOM[i].style.marginTop = `${y_}px`
            // }
        }
    }, [x_, y_, questions])
    React.useEffect(() => {
        console.log('QUESTIONS RERENDER ', questions)
        setQuestionsJSX(questions.map((e, key) => {
            return <QuestionAndAnswer {...e} 
                key={key} 
                set_modal_id_question={set_modal_id_question}
            />
        }))
    },[questions])
    console.log('RERENDER_MAIN_QUESTIONS ', questionsJSX)
    // alert('hello')
    return (
        <div className='editor-wrapper' 
                onMouseDown = {(event) => handleMouseDown(event)}
                onMouseMove = {(event) => handleMouseMove(event)}
                onMouseUp =   {(event) => handleMouseUp(event) }
        >
            <div className='editor-container' ref={refEditor}>
                {/* <QuestionAndAnswer {...questions[0]}/> */}
                {questionsJSX}
            </div>
        </div>
    )
}

let ModalWindow = ({id_question, set_modal_id_question, setQuestions, setNewAnswersCount, setUpdatedAnswerId}) => {
    console.log(id_question)
    let [questionText, setQuestionText] = React.useState(null);
    let [answersSettings, setAnswersSettings] = React.useState(null);
    let [answersSettingsJSX, setAnswersSettingsJSX] = React.useState(null);
    let [ansCount, setAnsCount] = React.useState(null);
    let text_ref = React.createRef();
    let handleAnswerClick = (answer_id, updatedText) => {
        console.log('answers_settings', answersSettings,' ',)
        let testAnswer = [...answersSettings];
        testAnswer[answer_id - 1].text = updatedText;
        setAnswersSettings(testAnswer);
    }
    React.useEffect(() => {
        console.log('setquestion ', id_question )
        if (id_question != null) {
            setQuestionText(window.questions[id_question - 1].text);
            setAnsCount(0);
            // console.log('||||||||||||||', window.questions[id_question - 1].answers)
            setAnswersSettings(window.questions[id_question - 1].answers);//handleAnswerClick(e.id, event.target.value)
            // console.log('||||||||||||||', window.questions[id_question - 1].answers)
            // setAnswersJSX(window.questions[id_question - 1].answers.map((e, key) => {
            //     return <div className='answer-element-block'>
            //             <input type='text' value={e.text} onChange={(event) => handleAnswerClick(e.id, event.target.value)}/>
            //         </div>
            // }))
        }
    }, [id_question])
    let handleClickNextQuestionId = (answer_id, new_next_question_id) => {
        let testAnswer = [...answersSettings];
        // alert(new_next_question_id)
        if ((Number(new_next_question_id) == 0) || ( Number(new_next_question_id) > window.questions.length)){
            testAnswer[answer_id - 1].next_question_id = null;
        } else {
            testAnswer[answer_id - 1].next_question_id = Number(new_next_question_id);
        }
        // console.log(answerSettings)
        setAnswersSettings(testAnswer);
    }
    React.useEffect(() => {
        // alert('rere')
        if (answersSettings != null) setAnswersSettingsJSX(answersSettings.map((e, key) => {
            return <div className='answer-element-block' key={key}>
                    <input type='text' value={e.text} onChange={(event) => handleAnswerClick(e.id, event.target.value)}/>
                    <div className='answer-option-block'>
                        <div className='option-next-question-id'>
                            next_question_id:
                            <input className='next_question_id' 
                            onChange={(event) => handleClickNextQuestionId(e.id, event.target.value)} defaultValue={e.next_question_id != null ? e.next_question_id : ""}/>
                        </div>
                    </div>
                </div>
        }))
    }, [id_question, answersSettings])
    let handleOkButton = () => {
        // console.log(questions)
        let newQuestions = [...window.questions]; 
        console.log('new_question = ', newQuestions)
        newQuestions[id_question - 1].text = questionText;
        console.log('new_answers = ', answersSettings)
        newQuestions[id_question - 1].answers = answersSettings;
        setQuestions(newQuestions);
        setUpdatedAnswerId(id_question)
        setNewAnswersCount(ansCount);
        set_modal_id_question(null);
    }
    let handleAddAnswer = () => {
        let testAnswer = [...answersSettings];
        setAnsCount(ansCount + 1);
        // alert('hello')

        testAnswer.push({
            id: answersSettings.length + 1,
            text: "Ответ",
            next_question: null
        })
        // lines[`a_${id_question}_${answersSettings.length + 1}`] = new LeaderLine(
        // )
        setAnswersSettings(testAnswer)
    }  
    let handleDeleteAnswer = () => {
        let testQuestion = [...window.questions];
        console.log(testQuestion)
        testQuestion.splice(id_question - 1, 1);
        for (let i = 0; i < testQuestion.length; i++) {
            if (testQuestion[i].id > id_question) testQuestion[i].id--;
            for (let j = 0; j < testQuestion[i].answers.length; j++) {
                // console.log(testQuestion[i].answers)
                if (testQuestion[i].answers[j].next_question_id == id_question) {
                    // console.log(testQuestion[i].answers[j].next_question_id)
                    testQuestion[i].answers[j].next_question_id = null;
                } else if (testQuestion[i].answers[j].next_question_id > id_question) testQuestion[i].answers[j].next_question_id--;
            }
        }
        console.log(testQuestion)
        setQuestions(testQuestion)
        set_modal_id_question(null);
        // alert('ESDJFKLSDFJKL');
    }
    // console.log('setQuestions = ', setQuestions)
    if ((id_question == null) || (questionText == null)) {
        return (
            <div>
                
            </div>
        )
    } else {
        return (
                <div className="modal_window" 
                    onClick={(event) => event.persist()}
                >
                    <div className='head-setting'>
                        Настройки
                    </div>
                    <div className='delete-answer' onClick={() => handleDeleteAnswer()}>
                        Удалить
                    </div>
                    <div className="setting_id_question">
                        <span>ID:    {id_question}</span>
                    </div>
                    <div className="wrapper-content-setting">
                        <div className="input_setting_block">
                            <div>Название вопроса</div>
                            <input className="input_setting" ref={text_ref}type='text' value={questionText} onChange = {(event) => setQuestionText(event.target.value)}/>
                        </div>
                        <div className='answer-setting-block'>
                            <div className='answer-setting-head'>Ответы:</div>
                            {answersSettingsJSX}
                            <div className='setting-add-answer'>
                                <div onClick={() => handleAddAnswer()}>Добавить ответ</div>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                        <div className='ok-button-block'>
                            <div className='ok-button-setting' onClick={() => handleOkButton()}>Подтвердить</div>
                        </div>
                        
                    </div>
                </div>
            ) 
    }
}
let ModalWindowShadow = ({id_question, set_modal_id_question}) => {
    if (id_question == null) {
        return (
            <div>
                
            </div>
        )
    } else {
        return (
                <div className="modal-wrapper" 
                    onClick={(event) => set_modal_id_question(null)}   
                >
                </div>
            ) 
    }
}
let MainContainer = () => {
    let [modal_id_question, set_modal_id_question] = React.useState(null);
    let [questions, setQuestions] = React.useState(window.questions);
    let [newAnswersCount, setNewAnswersCount] = React.useState(null);
    let [updatedAnswerId, setUpdatedAnswerId] = React.useState(null);
    console.log('mem')
    React.useEffect(() => {
        window.questions = questions;
        console.log('QUESTIONSSDFSDF = ', questions)
        setTimeout(() => {
            setAllLines();
            
        }, 100)
        console.log('RERENDER_MAIN_CONTAINER ', questions)
    }, [questions]);
    React.useEffect(() => {
        console.log(newAnswersCount)
        console.log(updatedAnswerId)
        setTimeout(() => {
        // if ((updatedAnswerId != null)&(document.getElementById(`a_${updatedAnswerId}_${q.length}`) != null)) {
            // setAllLines();
            if (newAnswersCount != null) {
                console.log('SDHFJKSDHFJSHDFJ')
                // setAllLines();
                // let q = window.questions;
                // console.log(q[updatedAnswerId - 1].answers)
                // // alert('hello')
                // for (let i = q[updatedAnswerId - 1].answers.length - newAnswersCount; i < q[updatedAnswerId - 1].answers.length; i++) {
                //     console.log(i, 'ROFL')
                //     console.log(document.getElementById(`q_${updatedAnswerId}`))
                //     console.log(document.getElementById(`a_${updatedAnswerId}_${i}`))
                //     lines[`a_${updatedAnswerId}_${i + 1}`] = new LeaderLine(
                //         document.getElementById(`q_${updatedAnswerId}`),
                //         document.getElementById(`a_${updatedAnswerId}_${i + 1}`)
                //     )
                //     lines[`a_${updatedAnswerId}_${i + 1}`].setOptions ({
                //         color: "#d6d6d6",
                //         size: 2,
                //         startSocketGravity : 40, 
                //         endSocketGravity: 53, 
                //         endPlug: "behind",
                //         endSocket: 'left',
                //         startSocket: "right",
                //     })
                // }
                setNewAnswersCount(null);
                setUpdatedAnswerId(null);    
            }
        // }
    }, 100);
    }, [updatedAnswerId, newAnswersCount])
    console.log('rerender')
    return (
        <div>
            <Header
                setQuestions={setQuestions}
            />
            <Editor set_modal_id_question = {set_modal_id_question} questions={questions}/>
            <ModalWindow id_question={modal_id_question} 
                         set_modal_id_question = {set_modal_id_question} 
                         setQuestions={setQuestions}
                         setNewAnswersCount={setNewAnswersCount}
                         setUpdatedAnswerId={setUpdatedAnswerId}
                         />
            <ModalWindowShadow id_question={modal_id_question} set_modal_id_question = {set_modal_id_question}/>
        </div>
    )
}

const domContainer = document.querySelector('#main-container');
ReactDOM.render(<MainContainer/>, domContainer);