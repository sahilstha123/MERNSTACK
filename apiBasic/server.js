const express = require("express")
const app = express()
const PORT = 8000
// app.use(express.urlencoded({extended:true}))
app.use(express.json())

let fakeDB = [
    {
        id: 1,
        fName: "Sahil",
        lName: "Shrestha"
    },
    {
        id: 2,
        fName: "Dhanu",
        lName: "Shrestha"
    },
]
app.get("/", (req, res) => {
    console.log(req.query)
    res.status(200).json({
        message: "Succesfully connected to Postman",
        users: fakeDB
    })
})
// Put method
app.put("/:id", (req, res) => {
    console.log(req.body, req.headers.authorization)
    const id = Number(req.params.id)
    const {fName, lName} = req.body
    const userIndex = fakeDB.findIndex((users)=>users.id==id)
    if(userIndex === -1)
    {
        return res.status(404).json({
            message:"User not found"
        })
    }
    fakeDB[userIndex]={
        id:id,
        fName,
        lName
    }
    res.status(200).json({
        message: "User Updated Successfully",
        users:fakeDB[userIndex]
    })
})
app.post("/", (req, res) => {
    fakeDB.push(req.body)
    console.log(req.body)
    res.status(200).json({
        message: "post method"
    })
})
app.delete("/:id", (req, res) => {
    console.log(req.params)

    const id = Number(req.params.id)

    const initialLength = fakeDB.length

    fakeDB = fakeDB.filter((users)=>users.id!==id)

    if(fakeDB.length === initialLength)
    {
        return res.status(404).json({
            message:"User not found"
        })
    }
    res.status(200).json({
        message: "users deleted succcessfully",
        users:fakeDB
    })

})

app.listen(PORT, (error) => {
    error ? console.log(error) :
        console.log(`server is running at localhost:${PORT}`)
})