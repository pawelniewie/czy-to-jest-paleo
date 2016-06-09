// ------------------------------------
// Constants
// ------------------------------------
export const FIND_FOOD = 'FIND_FOOD';

// ------------------------------------
// Actions
// ------------------------------------
export function findFood(value = '') {
  return {
    type: FIND_FOOD,
    payload: value
  }
}

export const actions = {
  findFood
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FIND_FOOD]: (state, action) => ({
    ...state,
    whatFood: action.payload
  })
};

export const Answer = {
  Yes: 'Yes',
  No: 'No',
  Maybe: 'Maybe'
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  foods: [
    {
      "question": "Czy Anchois są Paleo?",
      "answer": "Yes",
      "todo": false
    }
  ],
  whatFood: ''
};

export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state
}
