// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = true;

//CONSTANTS (action types)
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO';
const REDO = 'REDO';

const initialState = {
    currentValue: 0,
    futureValues: [],
    previousValues: []
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                currentValue: state.currentValue + action.amount,
                futureValues: [],
                previousValues: [state.currentValue, ...state.previousValues]
            });
        //no need for break, return tells it to stop running
        case DECREMENT:
            return Object.assign({}, state, {
                currentValue: state.currentValue - action.amount,
                futureValues: [],
                previousValues: [state.currentValue, ...state.previousValues]
            });
        case UNDO:
            return Object.assign({}, state, {
                currentValue: state.previousValues[0],
                futureValues: [state.currentValue, ...state.futureValues],
                previousValues: state.previousValues.slice(1, state.previousValues.length)
            });
        case REDO:
            return Object.assign({}, state, {
                currentValue: state.futureValues[0],
                futureValues: state.futureValues.slice(1, state.futureValues.length),
                previousValues: [state.currentValue, ...state.previousValues]
            });
        default:
            return state;
    }
    return state
}

//Action Creators
export const increment = amount => ({
    amount,
    type: INCREMENT
});

export const decrement = amount => ({
    amount,
    type: DECREMENT
});

export const undo = amount => ({
    type: UNDO
});

export const redo = amount => ({
    type: REDO
})