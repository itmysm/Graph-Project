async function setLocation() {
  const ip = await getIP()
  localStorage.setItem('userInfo', JSON.stringify(await getInfo(ip)))
} // here we set these information into local storage and use them in other components

async function getIP() {
  const ip: string = await fetch('https://api.dnslab.ir/ip')
    .then(res => res.json())
    .then(data => data.iPv4)

  return ip
} // get user IP address

async function getInfo(ip: string) {
  const apiKey = { apiKey: 'qwBgIC9NCOeHbW28Tg7k9pPKKedxn9PZ' }

  const result: object = await fetch('https://api.apilayer.com/ip_to_location/' + ip,
    { headers: apiKey })
    .then(res => res.json())
    .then(data => data)

  return result
} // get user location info

export { setLocation }

