import { GET_CATEGORIES } from '../actions'

const initialState = {
  list: [
    'Food & Drink',
    'Housing',
    'Transportation',
    'Vehicle',
    'Life & Entertainment',
    'Shopping',
    'Investments',
  ],
  colourMap: {
    'Food & Drink': '#f69301',
    'Housing': '#2c993e',
    'Transportation': '#257f61',
    'Vehicle': '#e500b3',
    'Life & Entertainment': '#37a6cc',
    'Shopping': '#4c5efe',
    'Investments': '#f51a1c',
  }
}

function categoriesReducer(state = initialState, action) {
  const { type } = action

  switch (type) {
    case GET_CATEGORIES:
      return state
    default:
      return state
  }
}

export default categoriesReducer
