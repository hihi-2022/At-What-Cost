import { ADD_FILTER } from '../actions'

function filtersReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case ADD_FILTER:
      return [...state, payload]
    default:
      return state
  }
}

export default filtersReducer
