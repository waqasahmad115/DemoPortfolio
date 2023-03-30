import { ActionType } from './action.type'

export const setTheme = (theme) => {
  console.log('action', theme)
  return {
    type: ActionType.SET_THEME,
    payload: theme,
  }
}
