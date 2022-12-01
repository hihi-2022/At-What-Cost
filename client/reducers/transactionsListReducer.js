import { RECEIVE_TRANSACTIONS } from '../actions'

const initialState = []

function transactionsListReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_TRANSACTIONS:
      return payload
    default:
      return state
  }
}

export default transactionsListReducer
