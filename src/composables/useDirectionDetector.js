export default function (systemLanguage) {
  return useState('directionDetector', () => {
    const rtlLanguages = ['fa-FA']
    // const ltrLanguages = ['en-US', 'en-En']
    return rtlLanguages.map(x => x === systemLanguage ? 'rtl' : 'ltr')
  })
}
