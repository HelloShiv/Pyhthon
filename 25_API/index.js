const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({exteded:true}));


app.get("/",function(req,res) {
   res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    console.log(req.body.cityName);
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + req.body.cityName +"&appid=db05746efc82e5cf81c89eb725dced43&units=metric";
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            // const temp = weatherData.main.temp;
            // const temp = weatherData.main.temp;
            const icon = weatherData.weather[0].icon;
            const detail = weatherData.weather[0].description;
            const iconUrl = "https://openweathermap.org/img/wn/"+icon + "@2x.png";
            console.log(weatherData.weather[0].main);
            // res.write("<h2>"+detail+"</h2>");
            res.write("<p>Hello there</p>");
            // console.log(weatherData.weather[0].description);
            res.write("<h1>Temprature of " + weatherData.name + " is :" + weatherData.main.temp +"<br/>"+weatherData.weather[0].description +"</h1> ");
            res.write("<img src=" + iconUrl +">");
        })


    })
});

app.listen(3000,function(res,req){
    console.log("Server Started");
});


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

 // res.send("Server has started");
    // const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=db05746efc82e5cf81c89eb725dced43";
    // https.get(url,function(response){
    //     console.log(response.statusCode);
    //     response.on("data",function(data){
    //         const weatherData = JSON.parse(data);
    //         const temp = weatherData.main.temp;
    //         const icon = weatherData.weather[0].icon;
    //         const iconUrl = "https://openweathermap.org/img/wn/"+icon + "@2x.png";
    //         // console.log(weatherData);
    //         console.log(weatherData.weather[0].main);
    //         res.write("<p>Hello there</p>");
    //         res.write("<h1>Temprature of " + weatherData.name + " is :" + temp +"</h1> ");
    //         res.write("<img src=" + iconUrl +">");
    //     })
    // })