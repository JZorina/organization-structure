var express = require('express');
var router = express.Router();
var mysql= require('mysql');

router.post('/', function(req, res, next) {
    var task=req.body.task;
    var assignDate=req.body.assignDate;
    var dueDate=req.body.dueDate;
    var empId=req.body.empId;

    req.getConnection(function(error, conn) {
        conn.query("INSERT INTO task (task,assignDate,dueDate) VALUES (?,?,?)",
        [task,assignDate,dueDate],function(err, rows, fields) {
            if (err) 
            {
                console.log(err);
                res.send({'success':false,'message':'Could not insert task to DB'});
            }
            else 
            {
                var taskId=rows.insertId;
                req.getConnection(function(error, conn) {
                    conn.query("INSERT INTO user_task (userid,taskId) VALUES (?,?)",
                    [empId,taskId],function(err, rows, fields) {
                    if (error){
                        console.log(err); 
                        res.send({'success':false,'message':'Could not save to user-task in DB'});
                    }else 
                        res.send({'success':true,'message':'task saved successfully '}); 
                    })})
                }
            })
            if(error)
                console.log('couldn`t establish connection');
            })
        });
module.exports = router;
