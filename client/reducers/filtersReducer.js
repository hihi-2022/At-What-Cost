import {
  ADD_FILTER,
  DELETE_FILTER,
  EDIT_FILTER,
  RECEIEVE_USER_FILTERS,
} from '../actions'

function filtersReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case ADD_FILTER:
      if (state.find((item) => item.code === payload.code)) {
        return state
      } else {
        return [...state, payload]
      }
    case EDIT_FILTER: {
      const { code: editCode } = payload
      return [...state].map((item) => {
        const { code } = item
        if (code === editCode) {
          return payload
        }
        return item
      })
    }
    case DELETE_FILTER: {
      const { code } = payload
      return [...state].filter((item) => {
        return item.code !== code
      })
    }
    case RECEIEVE_USER_FILTERS:
      return payload
    default:
      return state
  }
}

export default filtersReducer
