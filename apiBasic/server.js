const express = require("express")
const app = express()
const PORT = 8000

app.listen(PORT, (error) => {
    error ? console.log(error) :
        console.log(`server is running at localhost:${PORT}`)
})