var express = require('express');
var router = express.Router();
var mysql= require('mysql');

router.post('/', function(req, res, next) {
  var ret = req.body.id;
  req.getConnection(function(error, conn) {
    conn.query('SELECT r.*,concat(us.firstName, \'  \' ,us.lastName) as emp FROM report r, user_report u left join users as us on id=u.reporterId and u.managerId=? WHERE u.reportId=r.id and u.managerId=?',[ret,ret],function(err, rows, fields) {
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
