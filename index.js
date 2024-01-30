const express = require('express')
const path = require('path')

const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signup.html'))
})

app.listen(5000)