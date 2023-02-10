const express =require('express')
const app = express()

function mymiddleware  (req,res,next){
    console.log("hi this is middleware")
    next()
}

app.use(mymiddleware)

app.get("/",mymiddleware,(req,res) =>{
    res.send("hi this is the GET Request")
})
app.get('/test',mymiddleware,(req,res) =>{
    res.send("This is Test Url")
})

app.post("/",(req,res) =>{
    res.send("hi this is the POST Request")
})

app.put("/",(req,res)=>{
    res.send("hi this is the PUT Request")
})


app.delete("/",(req,res)=>{
    res.send("hi this is the DELETE Request")
})




const PORT = 3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))