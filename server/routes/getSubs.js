var express = require('express');
var router = express.Router();
var mysql= require('mysql');



router.post('/', function(req, res, next) {
  var ret = req.body.id;
  req.getConnection(function(error, conn) {
    conn.query('SELECT concat(us.firstName, \' \' , us.lastName) as emp, p.position, us.id FROM users as us left join hierarchy as h on h.ManagerId=? left join position as p on p.id=us.positionId where us.id=h.EmpId',[ret],function(err, rows, fields) {
      if (err) 
      {
        console.log(err);
        res.send({'success':false,'message':'Could not connect to db'});

      } 
      else 
      {
        ret = JSON.stringify(rows);
        res.send(ret);
      }
    })
  })
});
module.exports = router;
