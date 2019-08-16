let express = require('express');
let app = express();
app.get('/', function (req, res) {
    console.log('Hello World');
    res.send('Hello World');
});
app.get("/wiki/:keyword/fit2095:id", function (req,res) {
    console.log(req.url);
    console.log(req.params);
}) // anyvalue after wiki is parameter

app.get("/report",function (req,res) {
    console.log(req.url);
    console.log(req.query);

    console.log("name is " + req.query.name);
});
app.get('/time', function (req, res) {
    let d = new Date();
    let msg = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    res.send(msg);
});
app.get('/date', function (req, res) {
    let d = new Date();
    let msg = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
    res.send(msg);
});

// app.post("/calc", function(req,res){

// });
app.listen(8080);












// let http = require('http');

// http.createServer(function (req,res) {
//     if(req.method==="GET"){
//         if (req.url==="/") {
            
//         }

//     }else if (req.method==="POST"){

//     }
// }).listen(8888)