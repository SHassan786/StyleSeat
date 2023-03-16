const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const customerRouter = require('./customer/routes');
const salonRouter = require('./salon/routes');
const serviceRouter = require('./service/routes');
const shiftRouter = require('./shift/routes');
const bookingRouter = require('./booking/routes')
require('dotenv').config()
// console.log(process.env)

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.use("/customer", customerRouter);
app.use("/salon", salonRouter);
app.use("/service", serviceRouter);
app.use("/shift", shiftRouter);
app.use("/booking", bookingRouter);


app.listen(process.env.PORT, ()=> {
    console.log("app is working")
})