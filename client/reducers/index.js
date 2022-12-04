import { combineReducers } from 'redux'
import transactionsListReducer from './transactionsListReducer'
import categoriesReducer from './categoriesReducer'
import filtersReducer from './filtersReducer'
import modalReducer from './modalReducer'

export default combineReducers({
  transactionsList: transactionsListReducer,
  categories: categoriesReducer,
  filter: filtersReducer,
  modal: modalReducer,
})
