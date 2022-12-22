import {
  APPLY_ALL_FILTERS,
  APPLY_FILTER,
  RECEIVE_TRANSACTIONS,
} from '../actions'

const initialState = []

function transactionsListReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_TRANSACTIONS:
      return payload
    case APPLY_FILTER: {
      const { code, category } = payload
      return state.map((item) => {
        if (item.code === code) {
          item.category = category
        }
        return item
      })
    }
    case APPLY_ALL_FILTERS: {
      const filterMap = {}
      for (let { code, category } of payload) {
        filterMap[code] = category
      }
      console.log(filterMap)
      return state.map((item) => {
        item.category = filterMap[item.code] || ''
        return item
      })
    }
    default:
      return state
  }
}

export default transactionsListReducer
