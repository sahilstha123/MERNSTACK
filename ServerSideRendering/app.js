import express from "express"
const app = express()
const PORT = 8000


app.get("/",(req,res)=>{
    res.status(200).send("This response is from the servers")
})
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`https://localhost:${PORT}`)
})