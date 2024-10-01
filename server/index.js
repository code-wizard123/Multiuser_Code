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

//Routes
app.use('/auth', require('./routes/auth'));
app.use('/interview', require('./routes/interview'));
app.use('/interviewer', require('./routes/interviewer'));

//Socket Logic
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log("Socket connected", socket.id);

    socket.on('meet:join', ({ meetId }) => {
        io.to(meetId).emit("user:joined", { socketId: socket.id });
        socket.join(meetId);
        io.to(socket.id).emit('meet:join', { meetId });
    });

    socket.on('call:user', ({ to, offer }) => {
        io.to(to).emit('incoming:call', { from: socket.id, offer });
    });

    socket.on("call:accepted", ({ to, ans }) => {
        io.to(to).emit('call:accepted', { from: socket.id, ans });
    });

    socket.on('peer:nego:needed', ({ to, offer }) => {
        io.to(to).emit('peer:nego:needed', { from: socket.id, offer });
    });

    socket.on('peer:nego:done', ({ to, ans }) => {
        io.to(to).emit('peer:nego:final', { from: socket.id, ans });
    });
})

//Database Connection
mongoose.connect(process.env.MONGO_URI).then(() => {
    server.listen(process.env.PORT || 5000, () => console.log('\x1b[36mSERVER RUNNING: http://localhost:5000\x1b[0m'));
}).catch(err => console.log(err));