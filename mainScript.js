var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Header = function Header(_ref) {
    var setQuestions = _ref.setQuestions;

    var handleNewQuestion = function handleNewQuestion() {
        var testQ = [].concat(_toConsumableArray(window.questions));
        testQ.push({
            id: testQ.length + 1,
            text: "\u0432\u043E\u043F\u0440\u043E\u0441" + (testQ.length + 1),
            x: 0,
            y: 0,
            answers: [{
                id: 1,
                text: "ответ_1",
                next_question_id: null
            }]
        });
        // console.log(setQuestions)
        window.questions = [].concat(_toConsumableArray(testQ));
        setQuestions(testQ);
    };
    var handleSave = function handleSave(event) {
        console.log('save');
        // console.log($.ajax);
        // event.preventDefault();
        $.ajax({
            url: "save.php",
            type: "POST",
            // dataType: "json",
            data: "params=" + JSON.stringify(window.questions),
            success: function success(response) {
                alert(response);
            }
        });
    };
    return React.createElement(
        "header",
        null,
        React.createElement(
            "div",
            { className: "" },
            React.createElement(
                "div",
                { className: "button-new-question", onClick: function onClick(event) {
                        return handleNewQuestion(event);
                    } },
                "\u041D\u043E\u0432\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441"
            ),
            "\u0410\u0434\u043C\u0438\u043D-\u043F\u0430\u043D\u0435\u043B\u044C",
            React.createElement(
                "div",
                { className: "" },
                React.createElement(
                    "form",
                    { action: "exit.php", method: "post" },
                    React.createElement(
                        "button",
                        { className: "exit-header", type: "submit" },
                        "\u0412\u044B\u0445\u043E\u0434"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "save-header" },
                React.createElement(
                    "div",
                    { onClick: function onClick() {
                            return handleSave();
                        } },
                    "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
                )
            )
        )
    );
};

var QuestionAndAnswer = function QuestionAndAnswer(_ref2) {
    var id = _ref2.id,
        text = _ref2.text,
        x = _ref2.x,
        y = _ref2.y,
        answers = _ref2.answers,
        set_modal_id_question = _ref2.set_modal_id_question;

    var refQAA = React.createRef();

    var _React$useState = React.useState(id),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        id_ = _React$useState2[0],
        setId = _React$useState2[1];

    var _React$useState3 = React.useState(answers),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        answers_ = _React$useState4[0],
        setAnswers = _React$useState4[1];

    var _React$useState5 = React.useState(text),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        text_ = _React$useState6[0],
        setText = _React$useState6[1];

    var _React$useState7 = React.useState(x),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        x_ = _React$useState8[0],
        setX = _React$useState8[1];

    var _React$useState9 = React.useState(y),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        y_ = _React$useState10[0],
        setY = _React$useState10[1];

    var _React$useState11 = React.useState(null),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        mouseX = _React$useState12[0],
        setMouseX = _React$useState12[1];

    var _React$useState13 = React.useState(null),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        mouseY = _React$useState14[0],
        setMouseY = _React$useState14[1];

    var _React$useState15 = React.useState(false),
        _React$useState16 = _slicedToArray(_React$useState15, 2),
        drag = _React$useState16[0],
        setDrag = _React$useState16[1];

    var _React$useState17 = React.useState(answers.map(function (e, key) {
        return React.createElement(
            "div",
            { className: "answer", id: "a_" + id_ + "_" + e.id, key: key },
            " ",
            e.text
        );
    })),
        _React$useState18 = _slicedToArray(_React$useState17, 2),
        answerJSX_ = _React$useState18[0],
        setAnswerJSX = _React$useState18[1];

    React.useEffect(function () {
        setId(id);
        setX(x);
        setY(y);
        setText(text);
        console.log('NEW_ ANSWER = ', answers);
        setAnswers(answers);
        setAnswerJSX(answers.map(function (e, key) {
            return React.createElement(
                "div",
                { className: "answer", id: "a_" + id_ + "_" + e.id, key: key },
                " ",
                e.text
            );
        }));
    }, [id, text, answers]);

    React.useEffect(function () {
        // setAnswerJSX(answers.map((e, key) => {
        //     return <div className='answer' id={`a_${id}_${e.id}`} key    ={key}> {e.text}</div>
        // }));
        refQAA.current.style.left = x_ + "px";
        refQAA.current.style.top = y_ + "px";
        console.log('lines = ', lines);
        // for (key in nextLines) {
        //     console.log(nextLines[key])
        //     nextLines[key].position()
        // }
        // for (key in lines) {
        //     lines[key].position()
        // }
        setTimeout(function () {
            for (key in nextLines) {
                console.log(nextLines[key]);
                nextLines[key].position();
            }
            for (key in lines) {
                lines[key].position();
            }
        }, 50);
        // for (let i = 0; i < answers.length; i++) {
        //     lines[`a_${id}_${answers[i].id}`].position();
        //     if (answers[i].next_question_id != null) {
        //         console.log(`next_${id}_${answers[i].id}_to_${answers[i].next_question_id}`)
        //         nextLines[`next_${id}_${answers[i].id}_to_${answers[i].next_question_id}`].position()
        //     }
        // }
    }, [x_, y_, text, answers]);
    var handleMouseDown = function handleMouseDown(event) {
        event.persist();
        event.stopPropagation();
        setDrag(true);
        setMouseX(event.pageX);
        setMouseY(event.pageY);
        console.log('event = ', event);
    };
    var handleMouseMove = function handleMouseMove(event) {
        event.persist();
        event.stopPropagation();
        if (drag) {
            var dx = event.pageX - mouseX;
            var dy = event.pageY - mouseY;
            setMouseX(event.pageX);
            setMouseY(event.pageY);
            setX(x_ + dx);
            setY(y_ + dy);
            console.log(window.questions[id - 1]);

            window.questions[id - 1].x = x_ + dx;
            window.questions[id - 1].y = y_ + dy;
            //console.log(marginLeft, marginRight)

            console.log(x, ' ', y);
        }
    };
    var handleMouseUp = function handleMouseUp(event) {
        event.stopPropagation();
        setDrag(false);
    };
    return React.createElement(
        "div",
        { className: "question-and-answer-wrapper", ref: refQAA, id: "q_" + id_, onMouseDown: function onMouseDown(event) {
                return event.stopPropagation();
            } },
        React.createElement(
            "div",
            { className: "question-and-answer",
                onMouseDown: function onMouseDown(event) {
                    return handleMouseDown(event);
                },
                onMouseMove: function onMouseMove(event) {
                    return handleMouseMove(event);
                },
                onMouseUp: function onMouseUp(event) {
                    return handleMouseUp(event);
                },
                onMouseOver: function onMouseOver(event) {
                    return setDrag(false);
                }
            },
            React.createElement(
                "div",
                { className: "question-block" },
                text_
            ),
            React.createElement(
                "div",
                { className: "answer-block" },
                answerJSX_
            )
        ),
        React.createElement(
            "div",
            { className: "setting-block", onClick: function onClick(event) {
                    set_modal_id_question(id_);
                } },
            React.createElement("img", { src: "https://image.flaticon.com/icons/svg/2099/2099058.svg" })
        )
    );
};

var Editor = function Editor(_ref3) {
    var set_modal_id_question = _ref3.set_modal_id_question,
        questions = _ref3.questions;

    // alert('hello')
    // React.useEffect(() => {
    //     for (key in nextLines) {
    //         nextLines[key].position()
    //     }
    //     for (key in lines) {
    //         lines[key].position()
    //     }
    var _React$useState19 = React.useState(null),
        _React$useState20 = _slicedToArray(_React$useState19, 2),
        x_ = _React$useState20[0],
        setX = _React$useState20[1];

    var _React$useState21 = React.useState(null),
        _React$useState22 = _slicedToArray(_React$useState21, 2),
        y_ = _React$useState22[0],
        setY = _React$useState22[1];

    var _React$useState23 = React.useState(false),
        _React$useState24 = _slicedToArray(_React$useState23, 2),
        drag = _React$useState24[0],
        setDrag = _React$useState24[1];

    var _React$useState25 = React.useState(null),
        _React$useState26 = _slicedToArray(_React$useState25, 2),
        mouseX = _React$useState26[0],
        setMouseX = _React$useState26[1];

    var _React$useState27 = React.useState(null),
        _React$useState28 = _slicedToArray(_React$useState27, 2),
        mouseY = _React$useState28[0],
        setMouseY = _React$useState28[1];

    var refEditor = React.createRef();
    var handleMouseDown = function handleMouseDown(event) {
        event.persist();
        event.stopPropagation();
        setDrag(true);
        setMouseX(event.pageX);
        setMouseY(event.pageY);
    };
    var handleMouseMove = function handleMouseMove(event) {
        event.persist();
        event.stopPropagation();
        if (drag) {
            if (x_ + event.pageX - mouseX <= 0) {
                var dx = event.pageX - mouseX;
                setMouseX(event.pageX);
                setX(x_ + dx);
            }
            if (y_ + event.pageY - mouseY <= 0) {
                var dy = event.pageY - mouseY;
                setMouseY(event.pageY);
                setY(y_ + dy);
            }
            //console.log(marginLeft, marginRight)

            // console.log(x, ' ', y)
        }
    };
    var handleMouseUp = function handleMouseUp(event) {
        event.stopPropagation();
        setDrag(false);
    };

    var _React$useState29 = React.useState(questions.map(function (e, key) {
        console.log(e);
        return React.createElement(QuestionAndAnswer, Object.assign({}, e, {
            key: key,
            set_modal_id_question: set_modal_id_question
        }));
    })),
        _React$useState30 = _slicedToArray(_React$useState29, 2),
        questionsJSX = _React$useState30[0],
        setQuestionsJSX = _React$useState30[1];

    React.useEffect(function () {
        console.log(x_, '|||||', y_);
        if (x_ != null & y_ != null) {
            refEditor.current.style.marginLeft = x_ + "px";
            refEditor.current.style.marginTop = y_ + "px";
            window.editor_x_ = x_;
            window.editor_y_ = y_;
            var linesInDOM = document.getElementsByClassName('leader-line');
            for (key in nextLines) {
                console.log(nextLines[key]);
                nextLines[key].position();
            }
            for (key in lines) {
                lines[key].position();
            }
            console.log('SADJFKLSJDLKFJKLSDFJKLSKLDFJSLDKJFLKJSDLKFJKL');
            // for (let i = 0; i < linesInDOM.length; i++) {
            //     linesInDOM[i].style.marginLeft = `${x_}px`
            //     linesInDOM[i].style.marginTop = `${y_}px`
            // }
        }
    }, [x_, y_, questions]);
    React.useEffect(function () {
        console.log('QUESTIONS RERENDER ', questions);
        setQuestionsJSX(questions.map(function (e, key) {
            return React.createElement(QuestionAndAnswer, Object.assign({}, e, {
                key: key,
                set_modal_id_question: set_modal_id_question
            }));
        }));
    }, [questions]);
    console.log('RERENDER_MAIN_QUESTIONS ', questionsJSX);
    // alert('hello')
    return React.createElement(
        "div",
        { className: "editor-wrapper",
            onMouseDown: function onMouseDown(event) {
                return handleMouseDown(event);
            },
            onMouseMove: function onMouseMove(event) {
                return handleMouseMove(event);
            },
            onMouseUp: function onMouseUp(event) {
                return handleMouseUp(event);
            }
        },
        React.createElement(
            "div",
            { className: "editor-container", ref: refEditor },
            questionsJSX
        )
    );
};

var ModalWindow = function ModalWindow(_ref4) {
    var id_question = _ref4.id_question,
        set_modal_id_question = _ref4.set_modal_id_question,
        setQuestions = _ref4.setQuestions,
        setNewAnswersCount = _ref4.setNewAnswersCount,
        setUpdatedAnswerId = _ref4.setUpdatedAnswerId;

    console.log(id_question);

    var _React$useState31 = React.useState(null),
        _React$useState32 = _slicedToArray(_React$useState31, 2),
        questionText = _React$useState32[0],
        setQuestionText = _React$useState32[1];

    var _React$useState33 = React.useState(null),
        _React$useState34 = _slicedToArray(_React$useState33, 2),
        answersSettings = _React$useState34[0],
        setAnswersSettings = _React$useState34[1];

    var _React$useState35 = React.useState(null),
        _React$useState36 = _slicedToArray(_React$useState35, 2),
        answersSettingsJSX = _React$useState36[0],
        setAnswersSettingsJSX = _React$useState36[1];

    var _React$useState37 = React.useState(null),
        _React$useState38 = _slicedToArray(_React$useState37, 2),
        ansCount = _React$useState38[0],
        setAnsCount = _React$useState38[1];

    var text_ref = React.createRef();
    var handleAnswerClick = function handleAnswerClick(answer_id, updatedText) {
        console.log('answers_settings', answersSettings, ' ');
        var testAnswer = [].concat(_toConsumableArray(answersSettings));
        testAnswer[answer_id - 1].text = updatedText;
        setAnswersSettings(testAnswer);
    };
    React.useEffect(function () {
        console.log('setquestion ', id_question);
        if (id_question != null) {
            setQuestionText(window.questions[id_question - 1].text);
            setAnsCount(0);
            // console.log('||||||||||||||', window.questions[id_question - 1].answers)
            setAnswersSettings(window.questions[id_question - 1].answers); //handleAnswerClick(e.id, event.target.value)
            // console.log('||||||||||||||', window.questions[id_question - 1].answers)
            // setAnswersJSX(window.questions[id_question - 1].answers.map((e, key) => {
            //     return <div className='answer-element-block'>
            //             <input type='text' value={e.text} onChange={(event) => handleAnswerClick(e.id, event.target.value)}/>
            //         </div>
            // }))
        }
    }, [id_question]);
    var handleClickNextQuestionId = function handleClickNextQuestionId(answer_id, new_next_question_id) {
        var testAnswer = [].concat(_toConsumableArray(answersSettings));
        // alert(new_next_question_id)
        if (Number(new_next_question_id) == 0 || Number(new_next_question_id) > window.questions.length) {
            testAnswer[answer_id - 1].next_question_id = null;
        } else {
            testAnswer[answer_id - 1].next_question_id = Number(new_next_question_id);
        }
        // console.log(answerSettings)
        setAnswersSettings(testAnswer);
    };
    React.useEffect(function () {
        // alert('rere')
        if (answersSettings != null) setAnswersSettingsJSX(answersSettings.map(function (e, key) {
            return React.createElement(
                "div",
                { className: "answer-element-block", key: key },
                React.createElement("input", { type: "text", value: e.text, onChange: function onChange(event) {
                        return handleAnswerClick(e.id, event.target.value);
                    } }),
                React.createElement(
                    "div",
                    { className: "answer-option-block" },
                    React.createElement(
                        "div",
                        { className: "option-next-question-id" },
                        "next_question_id:",
                        React.createElement("input", { className: "next_question_id",
                            onChange: function onChange(event) {
                                return handleClickNextQuestionId(e.id, event.target.value);
                            }, defaultValue: e.next_question_id != null ? e.next_question_id : "" })
                    )
                )
            );
        }));
    }, [id_question, answersSettings]);
    var handleOkButton = function handleOkButton() {
        // console.log(questions)
        var newQuestions = [].concat(_toConsumableArray(window.questions));
        console.log('new_question = ', newQuestions);
        newQuestions[id_question - 1].text = questionText;
        console.log('new_answers = ', answersSettings);
        newQuestions[id_question - 1].answers = answersSettings;
        setQuestions(newQuestions);
        setUpdatedAnswerId(id_question);
        setNewAnswersCount(ansCount);
        set_modal_id_question(null);
    };
    var handleAddAnswer = function handleAddAnswer() {
        var testAnswer = [].concat(_toConsumableArray(answersSettings));
        setAnsCount(ansCount + 1);
        // alert('hello')

        testAnswer.push({
            id: answersSettings.length + 1,
            text: "Ответ",
            next_question: null
        });
        // lines[`a_${id_question}_${answersSettings.length + 1}`] = new LeaderLine(
        // )
        setAnswersSettings(testAnswer);
    };
    var handleDeleteAnswer = function handleDeleteAnswer() {
        var testQuestion = [].concat(_toConsumableArray(window.questions));
        console.log(testQuestion);
        testQuestion.splice(id_question - 1, 1);
        for (var i = 0; i < testQuestion.length; i++) {
            if (testQuestion[i].id > id_question) testQuestion[i].id--;
            for (var j = 0; j < testQuestion[i].answers.length; j++) {
                // console.log(testQuestion[i].answers)
                if (testQuestion[i].answers[j].next_question_id == id_question) {
                    // console.log(testQuestion[i].answers[j].next_question_id)
                    testQuestion[i].answers[j].next_question_id = null;
                } else if (testQuestion[i].answers[j].next_question_id > id_question) testQuestion[i].answers[j].next_question_id--;
            }
        }
        console.log(testQuestion);
        setQuestions(testQuestion);
        set_modal_id_question(null);
        // alert('ESDJFKLSDFJKL');
    };
    // console.log('setQuestions = ', setQuestions)
    if (id_question == null || questionText == null) {
        return React.createElement("div", null);
    } else {
        return React.createElement(
            "div",
            { className: "modal_window",
                onClick: function onClick(event) {
                    return event.persist();
                }
            },
            React.createElement(
                "div",
                { className: "head-setting" },
                "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
            ),
            React.createElement(
                "div",
                { className: "delete-answer", onClick: function onClick() {
                        return handleDeleteAnswer();
                    } },
                "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
            ),
            React.createElement(
                "div",
                { className: "setting_id_question" },
                React.createElement(
                    "span",
                    null,
                    "ID:    ",
                    id_question
                )
            ),
            React.createElement(
                "div",
                { className: "wrapper-content-setting" },
                React.createElement(
                    "div",
                    { className: "input_setting_block" },
                    React.createElement(
                        "div",
                        null,
                        "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430"
                    ),
                    React.createElement("input", { className: "input_setting", ref: text_ref, type: "text", value: questionText, onChange: function onChange(event) {
                            return setQuestionText(event.target.value);
                        } })
                ),
                React.createElement(
                    "div",
                    { className: "answer-setting-block" },
                    React.createElement(
                        "div",
                        { className: "answer-setting-head" },
                        "\u041E\u0442\u0432\u0435\u0442\u044B:"
                    ),
                    answersSettingsJSX,
                    React.createElement(
                        "div",
                        { className: "setting-add-answer" },
                        React.createElement(
                            "div",
                            { onClick: function onClick() {
                                    return handleAddAnswer();
                                } },
                            "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442"
                        )
                    )
                ),
                React.createElement("div", null),
                React.createElement(
                    "div",
                    { className: "ok-button-block" },
                    React.createElement(
                        "div",
                        { className: "ok-button-setting", onClick: function onClick() {
                                return handleOkButton();
                            } },
                        "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"
                    )
                )
            )
        );
    }
};
var ModalWindowShadow = function ModalWindowShadow(_ref5) {
    var id_question = _ref5.id_question,
        set_modal_id_question = _ref5.set_modal_id_question;

    if (id_question == null) {
        return React.createElement("div", null);
    } else {
        return React.createElement("div", { className: "modal-wrapper",
            onClick: function onClick(event) {
                return set_modal_id_question(null);
            }
        });
    }
};
var MainContainer = function MainContainer() {
    var _React$useState39 = React.useState(null),
        _React$useState40 = _slicedToArray(_React$useState39, 2),
        modal_id_question = _React$useState40[0],
        set_modal_id_question = _React$useState40[1];

    var _React$useState41 = React.useState(window.questions),
        _React$useState42 = _slicedToArray(_React$useState41, 2),
        questions = _React$useState42[0],
        setQuestions = _React$useState42[1];

    var _React$useState43 = React.useState(null),
        _React$useState44 = _slicedToArray(_React$useState43, 2),
        newAnswersCount = _React$useState44[0],
        setNewAnswersCount = _React$useState44[1];

    var _React$useState45 = React.useState(null),
        _React$useState46 = _slicedToArray(_React$useState45, 2),
        updatedAnswerId = _React$useState46[0],
        setUpdatedAnswerId = _React$useState46[1];

    console.log('mem');
    React.useEffect(function () {
        window.questions = questions;
        console.log('QUESTIONSSDFSDF = ', questions);
        setTimeout(function () {
            setAllLines();
        }, 100);
        console.log('RERENDER_MAIN_CONTAINER ', questions);
    }, [questions]);
    React.useEffect(function () {
        console.log(newAnswersCount);
        console.log(updatedAnswerId);
        setTimeout(function () {
            // if ((updatedAnswerId != null)&(document.getElementById(`a_${updatedAnswerId}_${q.length}`) != null)) {
            // setAllLines();
            if (newAnswersCount != null) {
                console.log('SDHFJKSDHFJSHDFJ');
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
    }, [updatedAnswerId, newAnswersCount]);
    console.log('rerender');
    return React.createElement(
        "div",
        null,
        React.createElement(Header, {
            setQuestions: setQuestions
        }),
        React.createElement(Editor, { set_modal_id_question: set_modal_id_question, questions: questions }),
        React.createElement(ModalWindow, { id_question: modal_id_question,
            set_modal_id_question: set_modal_id_question,
            setQuestions: setQuestions,
            setNewAnswersCount: setNewAnswersCount,
            setUpdatedAnswerId: setUpdatedAnswerId
        }),
        React.createElement(ModalWindowShadow, { id_question: modal_id_question, set_modal_id_question: set_modal_id_question })
    );
};

var domContainer = document.querySelector('#main-container');
ReactDOM.render(React.createElement(MainContainer, null), domContainer);