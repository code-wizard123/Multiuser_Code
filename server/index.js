//Module Imports
const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));

//Routes use
app.use('/auth', require('./routes/auth'));
app.use('/interviewer', require('./routes/interviewer'));

//Socket Logic
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

//Database Connection
mongoose.connect(process.env.MONGO_URI).then(() => {
    server.listen(process.env.PORT || 5000, () => console. log('\x1b[36mSERVER RUNNING: http://localhost:5000\x1b[0m'));
}).catch(err => console.log(err));