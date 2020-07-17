const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Cors = require('cors');
const form = require('./routes/form')
const {MONGOURI} = require('./config/key')
const app = express()
app.use(Cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


mongoose.connect(MONGOURI,{
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useCreateIndex: true,
});
mongoose.connection.on('connected',()=>{
    console.log("connected to mongodb yeah..")
});

mongoose.connection.on('error',(err)=>{
    console.log("error during connection" ,err)
});

const PORT = process.env.PORT || 5000;

app.use('/',form)


app.listen(PORT,()=>{console.log(`Server is running on ${PORT}`)})