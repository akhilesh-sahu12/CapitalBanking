let express = require('express');
let bodyParser = require('body-parser');
var cors = require('cors');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use("/allCustomers", require('./allCustomers'));
app.use("/login", require('./login'));
app.use("/register", require('./register'));
app.use("/update", require('./update'));
app.use("/delete", require('./delete'));
app.use("/history", require('./history'));
app.use("/getAllHistory", require('./getAllHistory'));
app.use("/id", require('./id'));
app.use("/query", require('./query'));
app.use("/allQueries", require('./allQueries'));

app.listen(3000);
console.log("Server started on port 3000");