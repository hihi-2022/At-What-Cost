import { GET_CATEGORIES } from '../actions'

const initialState = [
  'Food & Drink',
  'Housing',
  'Transportation',
  'Vehicle',
  'Life & Entertainment',
  'Shopping',
  'Investments',
]

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
