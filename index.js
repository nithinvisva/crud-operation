const express = require('express')
const record = require('./routes/record')
const router = require('./routes/users')
const mongoose = require('mongoose')
const cors = require('cors')
const auth= require('./middleware/auth')
var app = express()
//Route
app.use(cors({
    origin: "http://localhost:4200"
})
)
app.use('/record',auth.auth, record);
app.use('/users', router);
//MongoDB connection
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})
//Server
app.listen(8000,function(){
  console.log('Server is Up')
})