const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

const costumeRoutes = require("./src/routes/costumes")
app.use("/costumes", costumeRoutes)

const tagRoutes = require("./src/routes/tags")
app.use("/tags", tagRoutes)

app.use((err, req, res, next) => {
  
  const status = err.status || 500
  const message = err.message || "Internal server error"
  res.status(status).json({ message })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Resource not found' }})
})

const listener = () =>  console.log(`Reading you 5 x 5 on port ${port} yo!!`)
app.listen(port, listener)

module.exports = app
