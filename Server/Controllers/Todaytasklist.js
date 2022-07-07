const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const ToDo = require('../Model/todo.model');
const CurrentDate = require('../Common/CurrentDate');
var moment = require('moment-timezone');



router.get('/todaytask', async (req, res) => {
    try {

        
        var date = moment(new Date).format("YYYYMMDD");
        var start = moment(date).format();
        var end = moment(start).add( 1,'days');
       
        const today= ToDo.find({"date": {"$gte": start, "$lt": end}}).exec(function (err, data) {
            if (err) {
              console.log('error');
            } else {
              //console.log(data);
              res.status(200).send({data:data})
            }
          });

    } catch (err) {
        console.log(err);
    }
})

module.exports = router;