const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 3001
app.get('/', (req, res) => {
    console.log("Someone is trying to access the home page")
    res.send(`Hello World! I am running on http://localhost:${port}`)
})
app.listen(port, () => {
    console.log(`Server started at ${port}`)
})