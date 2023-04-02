import { ActionType } from './action.type'

export const setTheme = (theme) => {
  return {
    type: ActionType.SET_THEME,
    payload: theme,
  }
}
