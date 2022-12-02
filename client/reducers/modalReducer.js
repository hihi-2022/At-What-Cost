import { MODAL_ADD, MODAL_EDIT, MODAL_HIDE } from '../actions'

const initialState = {
  isAdd: false,
  isEdit: false,
  code: ""
}

function modalReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case MODAL_ADD:
      return { isAdd: true, isEdit: false, code: payload }
    case MODAL_EDIT:
      return { isAdd: false, isEdit: true, code: payload}
    case MODAL_HIDE:
      return initialState
    default:
      return state
  }
}

export default modalReducer
