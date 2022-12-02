export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'
export const APPLY_FILTER = 'APPLY_FILTER'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const ADD_FILTER = 'ADD_FILTER'
export const EDIT_FILTER = 'EDIT_FILTER'
export const DELETE_FILTER = 'DELETE_FILTER'

export function receiveTransactionsAction(transactions) {
  return {
    type: RECEIVE_TRANSACTIONS,
    payload: transactions,
  }
}

export function applyFilterAction(code, category) {
  return {
    type: APPLY_FILTER,
    payload: { code, category }
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

export function editFilterAction(code, category) {
  return {
    type: EDIT_FILTER,
    payload: { code, category },
  }
}

export function deleteFilterAction(code) {
  return {
    type: DELETE_FILTER,
    payload: { code },
  }
}
