import { GET_CATEGORIES, RECEIVE_USER_CATEGORIES } from '../actions'

const initialState = {
  list: [
    'Food & Drink',
    'Housing',
    'Transportation',
    'Vehicle',
    'Life & Entertainment',
    'Shopping',
    'Investments',
    'Income',
    'Transfer',
  ],
  colourMap: {
    'Food & Drink': '#f69301',
    Housing: '#2c993e',
    Transportation: '#8e01e6',
    Vehicle: '#e500b3',
    'Life & Entertainment': '#37a6cc',
    Shopping: '#4c5efe',
    Investments: '#f51a1c',
    Income: '#257f61',
    Transfer: '#848074',
  },
}

function categoriesReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_CATEGORIES:
      return state
    case RECEIVE_USER_CATEGORIES:
      return {
        ...state,
        list: [...state.list].concat(payload),
        colourMap: { ...state.colourMap, [payload]: '#000000' },
      }
    default:
      return state
  }
}

export default categoriesReducer
