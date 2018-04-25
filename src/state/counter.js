// ACTION TYPES
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// INITIAL STATE
let initialState = {
    currentValue: 0
}

// ACTION CREATORS
export function increment(amount) {
    return {
        type: INCREMENT,
        amount
    }
}

export function decrement(amount) {
    return {
        type: DECREMENT,
        amount
    }
}

// REDUCER
export default function counter (state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {currentValue: state.currentValue + action.amount}
        case DECREMENT:
            return {currentValue: state.currentValue - action.amount}
        default:
            return state
    }
}