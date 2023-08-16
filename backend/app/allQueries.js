var express = require("express");
let bodyParser = require("body-parser");
let mongodb = require("mongodb");


let mongodbClient = mongodb.MongoClient;

let allQueries = express.Router().get("/", (req, res) => {
  mongodbClient.connect("mongodb://localhost", function (err, client) {
    if (err) throw err;
    var db = client.db("bank");
    db.collection("query").find({}).toArray((err, result) =>{
      if (err) throw err;
      res.json(result);
      client.close();
    });
  });
});

module.exports = allQueries;