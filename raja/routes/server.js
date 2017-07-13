var express = require('express');
var bodyParser =  require('body-parser');
var mongoose = require('mongoose');
var config = "mongodb://localhost:27017/employees";
mongoose.connect(config)
        .connection
            .on('connected',function(){
                console.log("Successfully Connected to "+config)
            })
            .on('error', function(err){
                console.log("some error "+err)
            })
var app =  express();
var port = 5000;
app.get('/', function(req, res){
    res.send("Hello Vidya Sagar");
});

var router = require('./routes')

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api/employees', router);

app.listen(port, function(){
    console.log("Server is running on port"+port);
})