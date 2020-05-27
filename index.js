
// server.js
 
const WebSocket = require('ws')
 
const wss = new WebSocket.Server({ port: 8080 })
 
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
  })
  const person = {
    name: 'aaa'
  };
  
  const me = Object.assign(person);
  console.log(typeof me)
  ws.send(me)

})
