const express = require("express")
const path = require("path")
const app = express()
const PORT = 8000

app.set("view engine","ejs")
app.set("views","views")

// serve public folder as static
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.render("index",{title:"Homepage",message:"Hello from ejs"})
})
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`https://localhost:${PORT}`)
})