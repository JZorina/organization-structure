var express = require('express');
var router = express.Router();
var mysql= require('mysql');


router.get('/', function(req, res, next) {
    var ret = [];
    req.getConnection(function(error, conn) {
      if(error)
        console.log(error);
      conn.query('SELECT users.id,users.firstName,users.lastName , position.position FROM users INNER join position on users.positionId=position.id',function(err, rows, fields) {
        //if(err) throw err
        if (err) 
        {
          console.log(err);
          res.send({'success':false,'message':'Could not connect to db'});
        } 
        else 
        {
          ret = JSON.stringify(rows);
          res.send(ret);
          console.log(ret);     
        }
      })
    })
});

module.exports = router;
