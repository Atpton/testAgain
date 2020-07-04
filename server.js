const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const path = require('path');
app.get("/",(req,res)=>{
    res.send("Hello word");
});

app.get("/dashboard",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

http.createServer(app).listen(port,()=>{
    console.log("Create Server port : "+port);
});
