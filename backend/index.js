const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/index');

const app = express();

const PORT = 5001;

app.use(express.json());
// app.use(bodyParser.json())
app.use(cors());
app.use('/v1', router);

const dbURI = 'mongodb+srv://dheerajsharma2709:Dheeraj%40123@paytmcluster.m4hrpwq.mongodb.net/'
mongoose.connect(dbURI)
    .then((result)=>{
        console.log('connected to database')
    })
    .catch((err)=> console.log('error is ', err))

app.listen(PORT, console.log("App running on ", PORT))
