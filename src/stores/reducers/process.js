export const START = 'graph/process/START'
export const CHECK_EXTENSION = 'graph/process/CHECK_EXTENSION'
export const CHECK_STRUCTURE = 'graph/process/CHECK_STRUCTURE'
export const DETECT_APP = 'graph/process/DETECT_APP'
export const DESTROY_OPERATION = 'graph/process/DESTROY_OPERATION'

const initialState = {
  step: 0,
  app: null,
  isValidExtension: null,
  isValidStructure: null,
  loading: false,
}

export default function proccessReducer(state = initialState, action) {
  switch (action.type) {
    case START:
      return {
        ...state,
        step: 0,
        loading: true
      }
      break;

    case CHECK_EXTENSION:
      return {
        ...state,
        step: 1,
        isValidExtension: action.payload
      }
      break;

    case CHECK_STRUCTURE:
      return {
        ...state,
        step: 2,
        isValidStructure: action.payload.isValidStructure,
        app: action.payload.app
      }
      break;

    case DETECT_APP:
      return {
        ...state,
        step: 3,
        app: action.payload
      }
      break;

    case DESTROY_OPERATION:
      return {
        step: 0,
        app: null,
        isValidExtension: null,
        isValidStructure: null,
        loading: false,
      }
      break;

    default:
      return state;
  }
}

export const checkExtensionResult = (status) => ({
  type: CHECK_EXTENSION,
  payload: status,
})

/*
step 1 => start
step 2 => checking extension
step 3 => checking file content 
step 4 => transition file content to a valid format 
step 5 =? 
*/