const express = require("express");
const dbConnect = require("./config/db");
const path = require('path')

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'))
app.use(express.json());



// template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

dbConnect();

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
})