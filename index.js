var http = require( 'http' )
var proxiedHttp = require( 'findhit-proxywrap' ).proxy( http )
var morgan = require('morgan')
const express = require('express')
const app = express()
const port = 3000

//var srv = proxiedHttp.createServer(app)

app.use(morgan('combined'))
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
app.get('*', (req, res) => {
  res.send('Hello World!')
})

srv.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
