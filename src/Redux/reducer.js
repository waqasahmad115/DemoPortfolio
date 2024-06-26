import { ActionType } from './action.type'

const initialState = {
  theme: false,
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_THEME:
      return { ...state, theme: payload }

    default:
      return state
  }
}
