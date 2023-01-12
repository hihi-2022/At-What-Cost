import { ADD_CUSTOM_CATEGORY, GET_CATEGORIES } from '../actions'

const selectRandomColor = () => {
  return `#${Number(Math.floor(Math.random() * 0x1000000)).toString(16)}`
}

const initialState = {
  list: [
    'Food & Drink',
    'Housing',
    'Transportation',
    'Vehicle',
    'Life & Entertainment',
    'Shopping',
    'Investments',
    'Income',
    'Transfer',
  ],
  colourMap: {
    'Food & Drink': '#f69301',
    Housing: '#2c993e',
    Transportation: '#8e01e6',
    Vehicle: '#e500b3',
    'Life & Entertainment': '#37a6cc',
    Shopping: '#4c5efe',
    Investments: '#f51a1c',
    Income: '#257f61',
    Transfer: '#848074',
  },
}

function categoriesReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_CATEGORIES:
      return state
    case ADD_CUSTOM_CATEGORY: {
      const exists = state.list.find((item) => item === payload)
      if (exists) {
        return state
      } else {
        return {
          ...state,
          list: [...state.list].concat(payload),
          colourMap: { ...state.colourMap, [payload]: selectRandomColor() },
        }
      }
    }
    default:
      return state
  }
}

export default categoriesReducer
