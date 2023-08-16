const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Customer = new Schema({

   customerId: {
      type: Number
   },
   email: {
      type: String
   },
   AccountNo: {
      type: Number
   },
   currentBalance: {
      type: Number
   },
   location:{
    type: String
   }
}, {
   collection: 'bankCustomers'
})
module.exports = mongoose.model('Customer', Customer)