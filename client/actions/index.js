export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const ADD_FILTER = 'ADD_FILTER'

export function receiveTransactionsAction(transactions) {
  return {
    type: RECEIVE_TRANSACTIONS,
    payload: transactions,
  }
}

export function getCategoriesAction() {
  return {
    type: GET_CATEGORIES,
  }
}

export function addFilterAction(filter) {
  return {
    type: ADD_FILTER,
    payload: filter,
  }
}
