var express = require('express');
var router = express.Router();
var mysql= require('mysql');

router.post('/', function(req, res, next) {
    var report=req.body.report;
    var date=req.body.date;
    var id=req.body.id;
    req.getConnection(function(error, conn) {
        conn.query("INSERT INTO report (date,text) VALUES (?,?)",
        [date,report],function(err, rows, fields) {
            if (err) 
            {
                console.log(err);
                res.send({'success':false,'message':'Could not insert report to DB'});
            }
            else {
                var reportId=rows.insertId;
                req.getConnection(function(error, conn) {
                    conn.query('SELECT ManagerId from hierarchy where EmpId=? ',[id]
                    ,function(err, rows, fields) {
                    if (err){
                        console.log(err); 
                        res.send({'success':false,'message':'Could not select manger id from DB'});
                    }else 
                    {
                        managerId = JSON.parse(JSON.stringify(rows[0].ManagerId)); 
                        req.getConnection(function(error, conn) {
                            conn.query("INSERT INTO user_report (reportId,reporterId,managerId) VALUES (?,?,?)",
                            [reportId,id,managerId],function(err, rows, fields) {
                            if (err){
                                console.log(err); 
                                res.send({'success':false,'message':'Could not save to user-report to DB'});
                            }else 
                                res.send({'success':true,'message':'report saved successfully '}); 
                            })})
                        }
                    })})
                }
            })
            if(error)
                console.log('couldn`t establish connection');
            })
        });

    

module.exports = router;
