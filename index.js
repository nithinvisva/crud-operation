const express = require('express')
const router = require('./routes/record')
const route = require('./routes/login')
const mongoose = require('mongoose')
const cors = require('cors')
var app = express()
//Route
app.use(cors({
    origin: "http://localhost:4200"
})
)
app.use('/record',router);
app.use('/login', route);
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