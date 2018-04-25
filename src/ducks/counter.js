// ACTION TYPES
const INCREMENT = 'INCREMENT';

// INITIAL STATE
let initialState = {
    currentValue: 0
}

// ACTION CREATORS
export function increment() {
    return {
        type: INCREMENET,
        payload: currentValue + 1
    }
}

// REDUCER
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}