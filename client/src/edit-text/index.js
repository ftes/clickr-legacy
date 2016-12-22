export const EDIT = 'clicker-xbee/edit-text/EDIT'
export const SAVE = 'clicker-xbee/edit-text/SAVE'

/**
 * Two hierarchy levels in one reducer, because on SAVE the
 * `list` state is set dependent on the `edit` state.
 */
export default function reducer(state = {}, action) {
  switch (action.type) {
  case SAVE:
    return {
      ...state,
      editKey: undefined,
      text: undefined,
    }
  case EDIT:
    return {
      ...state,
      editKey: action.editKey,
      text: action.text,
    }
  default: return state
  }
}

export function edit(editKey, text) {
  return { type: EDIT, editKey, text }
}

export function save(editKey, text, cancelled=false) {
  return { type: SAVE, editKey, text, cancelled }
}

export function isForMe(action, keyPrefix) {
  return action.editKey.startsWith(keyPrefix) && ! action.cancelled
}