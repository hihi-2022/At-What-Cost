import { MODAL_ADD, MODAL_EDIT, MODAL_HIDE } from '../actions'

const initialState = {
  isAdd: false,
  isEdit: false,
}

function modalReducer(state = initialState, action) {
  const { type } = action

  switch (type) {
    case MODAL_ADD:
      return { isAdd: true, isEdit: false }
    case MODAL_EDIT:
      return { isAdd: false, isEdit: true }
    case MODAL_HIDE:
      return initialState
    default:
      return state
  }
}

export default modalReducer
