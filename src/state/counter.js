// ACTION TYPES
const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';
const REDO = 'REDO';
const UNDO = 'UNDO';

// INITIAL STATE
let initialState = {
    currentValue: null,
    futureValue: [],
    previousValue: []
}

// ACTION CREATORS
export function decrement(amount) {
    return {
        type: DECREMENT,
        amount
    }
}

export function increment(amount) {
    return {
        type: INCREMENT,
        amount
    }
}

export function redo() {
    return {
        type: REDO
    }
}

export function undo() {
    return {
        type: UNDO
    }
}

// REDUCER
export default function counter (state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                currentValue: state.currentValue + action.amount,
                futureValue: [],
                previousValue: [ state.currentValue, ...state.previousValue ]
            }
        case DECREMENT:
            return {
                currentValue: state.currentValue - action.amount,
                futureValue: [],
                previousValue: [ state.currentValue, ...state.previousValue ]
            }
        case REDO:
            return {
                currentValue: state.futureValue[0],
                futureValue: state.futureValue.slice(1, state.futureValue.length),
                previousValue: [state.currentValue, ...state.previousValue]
            }
        case UNDO:
            return {
                currentValue: state.previousValue[0],
                futureValue: [state.currentValue, ...state.futureValue],
                previousValue: state.previousValue.slice(1, state.previousValue.length)
            }
        default:
            return state
    }
}