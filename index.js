var http = require('http')
var proxiedHttp = require('proxywrap').proxy(http)
var express = require('express')
var app = express()
var srv = proxiedHttp.createServer(app);
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

srv.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
