//Module Imports
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes use
app.use('/auth', require('./routes/auth'));

//Database Connection
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(5000, () => console.log('\x1b[36m', "Server running: http://localhost:5000", '\x1b[0m'));
}).catch(err => console.log(err));