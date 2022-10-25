function countMessages (data) {
  const messages = { all: [] }

  data.messages.forEach(msg => {
    messages.all.push(msg)
    messages[msg.name] === undefined ? messages[msg.name] = [msg] : messages[msg.name].push(msg)
  })

  return messages
}

export { countMessages }
