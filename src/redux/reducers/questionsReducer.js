import {ADD_QUESTION,DELETE_ALL_QUESTIONS,DELETE_QUESTION,EDIT_QUESTION} from '../actions'
const initialState = {
    qAndA : [
        {
            id: 1,
            question: 'The first question is how to add a question',
            answer: 'The answer is so easy : you can fill just the form below and then press add to my questions',
        },
    ]
};

const questionReducer = (state = initialState,action) => {
    switch (action.type){
        case 'GET_QUESTIONS':
            return state;
        case ADD_QUESTION :
            state.qAndA.push(action.payload);
            return { ...state };
        case DELETE_ALL_QUESTIONS:
            return [];
        case EDIT_QUESTION:
            const index = state.qAndA.indexOf(action.payload.prevQuestion);
            console.log(index)
            state.qAndA[index] = action.payload.question;
            console.log(state)
            return {...state};
        case DELETE_QUESTION:
            const questionIndex = state.qAndA.indexOf(action.payload);
            console.log(questionIndex);
            state.qAndA.splice(questionIndex, 1);
            return {...state};
        default:
            return state
    }
}

export default questionReducer;