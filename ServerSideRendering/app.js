const express = require("express")
const path = require("path")
const app = express()
const PORT = 8000
app.set("view engine","ejs")
app.set("views","views")

// to read encoded data
app.use(express.urlencoded({extended:true}))
app.use(express.json())

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
    // console.log(req.query)
    res.status(200).render("Register",{title:"Registration Page"})
})

// user register post 
const fs = require("fs")
const bcrypt = require("bcrypt")

app.post("/register",async(req,res)=>{
    const {name,email,password,confirmPassword} = req.body
    if(password!==confirmPassword)
    {
        return res.status(400).send("Passwords do not match")
    }
    const fileName = "userList.csv"
    
    // create header once
    if(!fs.existsSync(fileName)){
        fs.writeFileSync(fileName,"Name,Email,PasswordHash\n")
    }

    // Hash Password
    const hashPassword = await bcrypt.hash(password,10)

    const row = `${name},${email},${hashPassword}\n`

    fs.appendFile(fileName,row,(error)=>{
        error?console.log(error):console.log("User registered successfully")
    })
    res.redirect("/login")
})


app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`https://localhost:${PORT}`)
})