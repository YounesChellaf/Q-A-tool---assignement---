import {ADD_QUESTION,DELETE_ALL_QUESTIONS,DELETE_QUESTION,EDIT_QUESTION} from './index'
const getQuestions = () => {
    return {
        type : 'GET_QUESTIONS'
    }
}
const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        payload: question
    }
}

const deleteAllQuestions = () => {
    return {
        type: DELETE_ALL_QUESTIONS,
    }
}

const deleteQuestion = (question) => {
    return {
        type: DELETE_QUESTION,
        payload: question
    }
}
const editQuestion = (prevQuestion,question) => {
    return {
        type: EDIT_QUESTION,
        payload: {
            prevQuestion,
            question
        }
    }
}

export  {
    addQuestion,
    deleteQuestion,
    editQuestion,
    deleteAllQuestions
}