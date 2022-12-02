export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const ADD_FILTER = 'ADD_FILTER'
export const EDIT_FILTER = 'EDIT_FILTER'
export const DELETE_FILTER = 'DELETE_FILTER'
export const MODAL_ADD = 'MODAL_ADD'
export const MODAL_EDIT = 'MODAL_EDIT'
export const MODAL_HIDE = 'MODAL_HIDE'

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

export function modalAddAction() {
  return {
    type: MODAL_ADD,
  }
}

export function modalEditAction() {
  return {
    type: MODAL_EDIT,
  }
}

export function hideModalAction() {
  return {
    type: MODAL_HIDE,
  }
}
