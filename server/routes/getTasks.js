var express = require('express');
var router = express.Router();
var mysql= require('mysql');



router.post('/', function(req, res, next) {
  var ret = req.body.id;
  req.getConnection(function(error, conn) {
    conn.query('SELECT distinct t.*,DATE_FORMAT(assignDate, "%d-%m-%y") AS assignDate,DATE_FORMAT(dueDate, "%d-%m-%y") AS dueDate FROM task t, user_task u where u.taskId=t.id and u.userid=?',[ret],function(err, rows, fields) {
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
