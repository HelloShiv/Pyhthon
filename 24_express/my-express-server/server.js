const express = require("express");
const app = express();

app.get("/",function(request, response){
    response.send("<h1>Hello</h1>")
});

app.get("/about",function (req,res){
    res.send("<h1>I am HelloShiv , What about you!! </h1>");
})

app.get("/contact",function(req,res){
    res.send("<h1>I am not sharing the information</h1>");
})


app.listen(3000,function (){
    console.log("Server started");
})