let express = require('express');
let app = express();

app.get('/add/:no1/:no2', function(req,res){
    let n1=parseInt(req.params.no1)//params is object generate by express
    let n2=parseInt(req.params.no2)

    let result = n1 + n2
    res.send("the out put is " + result)
});

app.get('/sub', function(req,res){
    let n1=parseInt(req.params.no1)//params is object generate by express
    let n2=parseInt(req.params.no2)

    let result = n1 - n2
    res.send("the out put is " + result)
})     //no parameter, work with querystring
//8080/sub?no1=10&no2=4

app.listen(8080)

