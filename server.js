require("dotenv").config()
const express = require("express")
const server = express()
const PORT = process.env.PORT
const path = require("path")

server.use(express.json())
server.use((req, res, next) => {
  console.log(`${req.method} request made on ${req.url} - ${new Date()}`)
  next()
})
server.use(express.static(path.join(__dirname, 'test')))


server.get("/", (req, res) => {
  res.send("My Week 2 API!")
})

server.post("/user", (req, res) => {
  if(!req.body.name || !req.body.email){
    res.status(400).json({Error: "Please make sure that both name and email fields are present >:("})
  }
  else{
    res.status(200).send(`Hello, ${req.body.name}!`)
  }
})

server.get("/user/:id", (req, res) => {
  res.send(`User ${req.params.id} profile`)
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})