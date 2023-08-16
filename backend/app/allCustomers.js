var express = require("express");
let bodyParser = require("body-parser");
let mongodb = require("mongodb");


let mongodbClient = mongodb.MongoClient;

let allCustomers = express.Router().get("/", (req, res) => {
  mongodbClient.connect("mongodb://localhost", function (err, client) {
    if (err) throw err;
    var db = client.db("bank");
    db.collection("bankCustomers").find({}).toArray((err, result) =>{
      if (err) throw err;
      res.json(result);
      client.close();
    });
  });
});
//   mongodbClient.connect("mongodb://localhost:27017/crud", (err, client) => {
//     if (err) {
//       throw err;
//     } else {

//         client.db('employee').find({}).toArray((err, emp) => {
//       //      if (err) {
//       //        throw err;
//       //      } else {
//       //        if (emp.length > 0) {
//       //         res.send(emp);
//       //       } else {var db = client.db('mytestingdb');
//       //         res.send({ message: "No Record(s) Found!!!" });
//       //       }
//       //     }
//       //   });
//       res.send({message: "connection successfully!"});
//     }
//   });
// });

module.exports = allCustomers;

//fetch.js;
//this file acting as module (fetch)
//login module accepts the from angular
//login module fetch from "mongodb" database
//let mongodb = require("mongodb");
//let talentsprint = mongodb.MongoClient;
// let login = require("express")
//   .Router()
//   .get("/", (req, res) => {
//     talentsprint.connect("mongodb://localhost:27017/crud", (err, db) => {
//       if (err) {
//         throw err;
//       } else {
//         db.collection("employee")
//           .find({})
//           .toArray((err, array) => {
//             if (err) throw err;
//             else {
//               if (array.length > 0) {
//                 res.send(array);
//               } else {
//                 res.send({ message: "Record Not Found..." });
//               }
//             }
//           });
//       }
//     });
//   });
// module.exports = login;
