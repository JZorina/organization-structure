var express = require('express');
var router = express.Router();
var mysql= require('mysql');

router.post('/', function(req, res, next) {
    var id =req.body.id;
    req.getConnection(function(error, conn) {
        conn.query('SELECT users.firstName,users.lastName,users.image, position.position, concat( manager.firstname,\' \',manager.lastName) as manager FROM users left join position on users.positionId=position.id left join hierarchy as h on h.EmpId=users.id left join users as manager on manager.id=h.ManagerId where users.id=?',[id]
        ,function(err, rows, fields) {
        if (err) 
        {
            console.log(err);
            res.send({'success':false,'message':'Could not connect to db'});
        } 
        else 
        {
            console.log(rows);
            if(!rows[0].manager)
                rows[0].manager="-";
            ret = JSON.stringify(rows);
            res.send(ret);
        }
    });
  })
});
module.exports = router;
