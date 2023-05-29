const initialState = {
  isFileUploaded: false,
  isFileSizeToBig: false,
  isExtensionValid: true,
  context: null,
}

const fileReducer = (state = initialState, action) => {
  switch (key) {
    case 'FETCH_NEW_FILE':
      return {
        ...state,
        context: action.payload,
        isFileUploaded: true
      }
      break;
  
    default:
      break;
  }
}