const express = require("express")
const app = express()
const PORT = 8000

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Succesfully connected to Postman"
    })
})

app.listen(PORT, (error) => {
    error ? console.log(error) :
        console.log(`server is running at localhost:${PORT}`)
})