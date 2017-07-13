var express = require('express');
var router = express.Router();
var Employee = require('./model')
router.get('/', function(req, res){
    Employee.getEmployees(function(err,employees){
        if(err) throw err;
        res.json(employees);
    });
    //res.send("Hello Router...");
})

router.post('/', function(req, res){
    var newEmployee = {
        name:req.body.name,
        position:req.body.position,
        department:req.body.department,
        salary:req.body.salary
    }
    Employee.addEmployee(newEmployee, function(err,employee){
        if(err) throw err;
        res.json(employee);
    });
    //res.send("Hello Router...");
})

router.put('/:_id', function(req, res){

    var update = {
        name:req.body.name,
        position:req.body.position,
        department:req.body.department,
        salary:req.body.salary
    }
    Employee.updateEmployee(req.param._id,update, function(err,employee){
        if(err) throw err;
        res.json(employee);
    });
    //res.send("Hello Router...");
})
router.delete('/:_id', function(req, res){

    
    Employee.deleteEmployee(req.param._id, function(err,employee){
        if(err) throw err;
        res.json(employee);
    });
    //res.send("Hello Router...");
})
router.get('/:_id', function(req, res){

    
    Employee.getEmployee(req.param._id, function(err,employee){
        if(err) throw err;
        res.json(employee);
    });
    //res.send("Hello Router...");
})
module.exports =  router;