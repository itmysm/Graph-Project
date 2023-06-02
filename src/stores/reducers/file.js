// I found this structure from this video: https://youtu.be/fn9Y76Naw_U && https://github.com/erikras/ducks-modular-redux

export const NEW_FILE = 'graph/file/NEW_FILE'
export const DEL_FILE = 'graph/file/DELETE_FILE'

const initialState = {
  id: new Date().getTime(),
  isFileUploaded: false,
  isFileSizeToBig: false,
  isExtensionValid: false,
  reference: null,
}

export default function fileReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_FILE:
      return {
        ...state,
        id: new Date().getTime(),
        isFileUploaded: true,
        reference: action.payload
      }
      break;

    case DEL_FILE:
      return {
        id: new Date().getTime(),
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
