import { MODAL_ADD, MODAL_EDIT, MODAL_HIDE, MODAL_CSV } from '../actions'

const initialState = {
  isAdd: false,
  isEdit: false,
  code: "",
  isCsv: false,
}

function modalReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case MODAL_ADD:
      return { isAdd: true, isEdit: false, code: payload.code, sign: payload.sign }
    case MODAL_EDIT:
      return { isAdd: false, isEdit: true, code: payload.code, sign: payload.sign }
    case MODAL_CSV: 
      return { isAdd: true, isEdit: false, code: payload, isCsv: true }
    case MODAL_HIDE:
      return initialState
    default:
      return state
  }
}

export default modalReducer
