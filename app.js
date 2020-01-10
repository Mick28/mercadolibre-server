const express = require('express')
const port = 3000
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!!')
})

app.get('/api/items', function (req, res) {
  res.send('Query!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))