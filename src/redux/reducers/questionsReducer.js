import {ADD_QUESTION,DELETE_ALL_QUESTIONS,DELETE_QUESTION,EDIT_QUESTION} from '../actions'
const initialState = {
    qAndA : [
        {
            id: 1,
            question: 'Will I have a black Studocu t-shirt ?',
            answer: 'Sorry for that, we have just white color in the stock',
        },
    ]
};

const questionReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_QUESTION :
            return {
            ...state,
                qAndA: [...state.qAndA, action.payload],
        };
        case DELETE_ALL_QUESTIONS:
            return {
                qAndA: []
            };
        case EDIT_QUESTION:
            const index = state.qAndA.indexOf(action.payload.prevQuestion);
            state.qAndA[index] = action.payload.question;
            return {
                ...state,
                qAndA: [...state.qAndA],
            };
        case DELETE_QUESTION:
            const questionIndex = state.qAndA.indexOf(action.payload);
            state.qAndA.splice(questionIndex, 1);
            return {
                ...state,
                qAndA: [...state.qAndA],
            };
        default:
            return state
    }
}

export default questionReducer;