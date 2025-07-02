import express from "express"
const app=express();
app.get("/signup",(req,res)=>{
    res.send("hi there")
})
app.get("/signin",(req,res)=>{
    res.send("hi there")
})
app.get("/chats",(req,res)=>{
    res.send("hi there")
})
app.listen(8080)