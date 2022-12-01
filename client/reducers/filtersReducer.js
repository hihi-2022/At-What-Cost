import { ADD_FILTER, DELETE_FILTER, EDIT_FILTER } from '../actions'

function filtersReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case ADD_FILTER:
      return [...state, payload]
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
      const { code, category } = payload
      return [...state].filter((item) => {
        return !(item.code === code && item.category === category)
      })
    }
    default:
      return state
  }
}

export default filtersReducer
