import { getUserFiltersAPI } from '../apis'

export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'
export const APPLY_FILTER = 'APPLY_FILTER'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const ADD_FILTER = 'ADD_FILTER'
export const EDIT_FILTER = 'EDIT_FILTER'
export const DELETE_FILTER = 'DELETE_FILTER'
export const MODAL_ADD = 'MODAL_ADD'
export const MODAL_EDIT = 'MODAL_EDIT'
export const MODAL_HIDE = 'MODAL_HIDE'
export const MODAL_CSV = 'MODAL_CSV'
export const RECEIEVE_USER_FILTERS = 'RECEIEVE_USER_FILTERS'
export const RECEIVE_USER_CATEGORIES = 'RECEIVE_USER_CATEGORIES'

export function receiveTransactionsAction(transactions) {
  return {
    type: RECEIVE_TRANSACTIONS,
    payload: transactions,
  }
}

export function applyFilterAction(code, category) {
  return {
    type: APPLY_FILTER,
    payload: { code, category },
  }
}

export function getCategoriesAction() {
  return {
    type: GET_CATEGORIES,
  }
}

export function addFilterAction(code, category) {
  return {
    type: ADD_FILTER,
    payload: { code, category },
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

export function modalAddAction(code) {
  return {
    type: MODAL_ADD,
    payload: code,
  }
}

export function modalEditAction(code) {
  return {
    type: MODAL_EDIT,
    payload: code,
  }
}

export function hideModalAction() {
  return {
    type: MODAL_HIDE,
  }
}

export function showCsvModalAction() {
  return {
    type: MODAL_CSV,
  }
}

export function receiveFiltersAction(filters) {
  return {
    type: RECEIEVE_USER_FILTERS,
    payload: filters,
  }
}

export const receieveUserFiltersThunk = (uuid) => async (dispatch) => {
  const userFilters = await getUserFiltersAPI(uuid)
  if (userFilters) {
    dispatch(receiveFiltersAction(userFilters))
  }
}

export function receieveUserCategoriesAction(categories) {
  return {
    type: RECEIVE_USER_CATEGORIES,
    payload: categories,
  }
}
