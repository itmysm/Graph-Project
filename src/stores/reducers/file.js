// I found this structure from this video: https://youtu.be/fn9Y76Naw_U && https://github.com/erikras/ducks-modular-redux

export const NEW_FILE = 'graph/file/NEW_FILE'
export const DEL_FILE = 'graph/file/DELETE_FILE'

const initialState = {
  isFileUploaded: false,
  isFileSizeToBig: false,
  isExtensionValid: false,
  reference: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_FILE:
      return {
        ...state,
        isFileUploaded: true,
        reference: action
      }
      break;

    case DEL_FILE:
      return {
        isFileUploaded: false,
        isFileSizeToBig: false,
        isExtensionValid: false,
        reference: null
      }
      break;

    default:
      return state;
  }
}

// actions
export const fetchNewFile = (file) => ({
  type: NEW_FILE,
  payload: file,
});

export const deleteFile = () => ({
  type: DEL_FILE,
});
