const express = require('express');
const router = express.Router();

const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/restaurant';

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log('I am here.');

    console.log(JSON.stringify(req.body));

    mongoClient.connect(url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            // Get the documents collection
            const collection = db.collection('reviews');

            //Create some reservations
            const reserve = {
                name: req.body.name,
                date: req.body.date,
                time: req.body.time,
                noOfPeople: req.body.noOfPeople
            };

            // Insert some reservations
            collection.insert([reserve], function(err, result) {
                if (err) {
                    res.send({
                        success: false,
                        message: err
                    });
                } else {
                    res.send({
                        success: true,
                        message: 'Reserved successfully'
                    });
                }
                // do some work here with the database.
                //Close connection
                db.close();
            });
        }
    });
});

module.exports = router;