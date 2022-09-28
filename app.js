const express= require('express');
const path =require('path');
const app=express();
app.get("",(req,res)=>{

    res.send("<h1>This is my first Express Server</h1>");

});

app.get("/index",(req,res)=>{

    res.sendFile(path.join(__dirname,'index.html'));
});

app.get("/home",(req,res)=>{

    res.sendFile(path.join(__dirname,'home.html'));
});

app.get("/content",(req,res)=>{

    res.sendFile(path.join(__dirname,'content.html'));
});

app.get("/about",(req,res)=>{

    res.sendFile(path.join(__dirname,'about.html'));
});

app.listen(3000,()=>{
    console.log('Server is starting up at port:3000');
})