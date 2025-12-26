const express = require("express")
const path = require("path")
const app = express()
const PORT = 8000

app.set("view engine","ejs")
app.set("views","views")

// serve public folder as static
app.use(express.static(path.join(__dirname,"public")))

// Home page Controller
app.get("/",(req,res)=>{
    res.render("home",{title:"Homepage",message:"Hello from ejs"})
})


// user login page controller
app.get("/login",(req,res)=>{
    res.render("Login",{title:"Login Page"})
})


// user register page controller
app.get("/register",(req,res)=>{
    res.status(200).render("Register",{title:"Registration Page"})
})
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`https://localhost:${PORT}`)
})