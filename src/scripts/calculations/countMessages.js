function countMessages (data) {
  const messages = { all: [] }

  data.messages.forEach(msg => {
    const app = JSON.parse(localStorage.getItem('temporaryInfoFile'))
    if (app.application === 'telegram') {
      messages[msg.from] === undefined ? messages[msg.from] = [msg] : messages[msg.from].push(msg)
    } else if (app.application === 'whatsapp' || app.application === 'instagram') {
      messages[msg.name] === undefined ? messages[msg.name] = [msg] : messages[msg.name].push(msg)
    }

    messages.all.push(msg) // this is for count all messages
  })

  return getLength(messages)
}

function getLength (messages) {
  Object.keys(messages).forEach(key => {
    messages[key] = messages[key].length
  })

  return messages
}

export { countMessages }
