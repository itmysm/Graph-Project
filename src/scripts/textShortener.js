function textShortener (text, lengthLimit = 12, type = 'normal') {
  let finalText
  const extension = text.match(/[^\\.]+$/)[0]

  if (type === 'normal' && text.length > lengthLimit) {
    finalText = text.substr(0, lengthLimit)
    // eslint-disable-next-line no-return-assign, no-unused-vars
    return finalText.replace(/\s+$/, '') + '...' + extension
  } else {
    return text
  }
}

export { textShortener }
