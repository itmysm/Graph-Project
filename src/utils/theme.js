export const toggleTheme = () => {
  let settings = JSON.parse(localStorage.getItem('settings'));
  let updatedSettings = {
    ...settings,
    theme: settings.theme === 'dark' ? 'light' : 'dark'
  }

  document.querySelector('html').setAttribute('data-theme', updatedSettings.theme)
  console.log(document.querySelector('html').getAttribute('data-theme'));
  localStorage.setItem('settings', JSON.stringify(updatedSettings));

  return updatedSettings
};
