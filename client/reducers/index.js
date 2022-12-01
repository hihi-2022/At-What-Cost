import { combineReducers } from 'redux'
import transactionsListReducer from './transactionsListReducer'

export default combineReducers({
  transactionsList: transactionsListReducer,
})
