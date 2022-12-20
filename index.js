var morgan = require('morgan')
const express = require('express')
const app = express()
const port = 3000

app.use(morgan('combined'))
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
