import { MODAL_ADD, MODAL_EDIT, MODAL_HIDE } from '../actions'

const initialState = {
  isAdd: false,
  isEdit: false,
}

function modalReducer(state = initialState, action) {
  const { type } = action

  switch (type) {
    case MODAL_ADD:
      return { ...state, isAdd: true }
    case MODAL_EDIT:
      return { ...state, isEdit: true }
    case MODAL_HIDE:
      return initialState
    default:
      return state
  }
}

export default modalReducer
