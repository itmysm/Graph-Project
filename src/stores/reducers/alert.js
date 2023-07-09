// I found this structure from this video: https://youtu.be/fn9Y76Naw_U && https://github.com/erikras/ducks-modular-redux

export const NEW_ALERT = 'graph/alert/NEW_ALERT'
export const DEL_ALERT = 'graph/alert/DEL_ALERT'
export const DEL_ALERT_BY_ID = 'graph/alert/DEL_ALERT_BY_ID'

const initialState = {
  alerts: []
}

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, { ...action.payload, id: new Date().getTime() }]
      }
      break;

    case DEL_ALERT:
      return {
        ...state,
        alerts: [state.alerts.slice(1)]
      }
      break;

    case DEL_ALERT_BY_ID:
      return {
        ...state,
        alerts: state.alerts.filter((alert) => alert.id !== action.payload.id)
      }
      break;
    default:
      return state;
  }
}

// actions
export const fetchNewFile = (alert) => ({
  type: NEW_ALERT,
  payload: alert,
});

export const deleteFile = () => ({
  type: DEL_ALERT,
});
