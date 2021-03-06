import React from 'react';
import { connect } from 'react-redux';
import generateId from './generate-id';

let QuizQuestionButton = (props) => 
    <button
        className='button'
        onClick={ event => {
            event.preventDefault();
            props.dispatch({
                type: props.actionType,
                id: generateId(),
                question: props.question,
                answer: props.answer,
                incorrect1: props.incorrect1,
                incorrect2: props.incorrect2,
                incorrect3: props.incorrect3
            });
            props.clearState();
        }}
    >{props.label}</button>

export default connect(
    state => ({newQuiz: state.newQuiz})
)(QuizQuestionButton);