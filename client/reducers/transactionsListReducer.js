import { APPLY_FILTER, RECEIVE_TRANSACTIONS } from '../actions'

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
    default:
      return state
  }
}

export default transactionsListReducer
