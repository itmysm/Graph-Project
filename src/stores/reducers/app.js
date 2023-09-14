// I found this structure from this video: https://youtu.be/fn9Y76Naw_U && https://github.com/erikras/ducks-modular-redux

export const NEW_SETTINGS = 'graph/app/NEW_SETTINGS'

const initialState = {
  theme: 'null',
  lang: null,
  locale: null
}

export default function appSettingsReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_SETTINGS:
      changeSettings(state, action)
      return {
        ...state,
        ...action.payload
      }
      break;
    default:
      return state;
  }
}

function changeSettings(state, action) {
  const newSettings = {
    ...state,
    ...action.payload
  }

  console.log(state, action);
  localStorage.setItem('settings', JSON.stringify(newSettings))
  updateDocumentAttributes(newSettings)
}

function updateDocumentAttributes(settings) {
  document
    .querySelector("body")
    .setAttribute("dir", settings.locale === "fa" ? "rtl" : "ltr");
  document.querySelector("html").setAttribute("data-theme", settings.theme);
}