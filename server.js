const http = require('http');
const express = require('express');
var app = express();
var port =process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("Hello word");
});
http.createServer(app).listen(port,()=>{
    console.log("Create Server port : "+port);
});
