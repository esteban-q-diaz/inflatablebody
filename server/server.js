const express = require('express')

const cors = require('cors')
const PORT = 8080
const bodyParser = require('body-parser')

const app = express()

app.use(cors())

// create application/json parser
app.use(bodyParser.urlencoded({ extended: false}))

// create application/x-www-form-urlencoded parser
app.use(bodyParser.json())

app.post('/post', function (req, res) {
  res.status(200).send('worked')
})

app.listen(PORT, (err) => {
  if (err) {
    alert(err)
  } else {
    console.log(`server running on localhost:${PORT}`)
  }
})