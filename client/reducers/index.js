import { combineReducers } from 'redux'
import transactionsListReducer from './transactionsListReducer'
import categoriesReducer from './categoriesReducer'

export default combineReducers({
  transactionsList: transactionsListReducer,
  categories: categoriesReducer,
})
