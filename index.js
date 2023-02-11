const express =require('express')
const uuid = require('uuid')
const app = express()

const  members = [{
    id:1,
    name:"John Doe",
    email:"john@gmail.com",
    status:'active'
}, {
    id:2,
    name:"Jane Doe",
    email:"jane@gmail.com",
    status:"inactive"
}, {
    id:3,
    name:"stevekruzz",
    email:"steve@gmail.com",
    status:'active'
}]

app.use(express.json())//Accept the json data

app.get("/showAllUser",(req,res) =>{
    res.status(200).json(members)
})
app.get("/showUser/:uid",(req,res) =>{
    const id = req.params.uid

    const user = members.filter(member => member.id === parseInt(id))
    user.length !==0 ? res.status(200).json(user) : res.status(200).json({msg:"User Not Found"})
    
})

app.post("/addUser/",(req,res) =>{
    const {name,email} = req.body
    const newMember = {
        id:uuid.v4(),
        email,
        name,
        status:"inactive"
    }
    members.push(newMember)
    res.status(200).json(members)
})




const PORT = 3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))