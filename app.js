require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3008;
const http = require('http');
const https = require('https');

const { connectDB, conn } = require('./src/db/connection');
const User = require('./src/db/user')
const Activity = require('./src/db/activity');
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
var crypto = require('crypto');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);

connectDB();

const { consumerauth } = require('./src/middleware/consumerauth')
const { creatorauth } = require('./src/middleware/creatorauth')

const { LoginConsumer, LoginCreator, RegisterConsumer, RegisterCreator } = require('./src/controller/auth_controller');

app.post('/api/consumer/login', LoginConsumer);
app.post('/api/creator/login', LoginCreator);

app.post('/api/consumer/register', RegisterConsumer);
app.post('/api/creator/register', RegisterCreator);



server.listen(PORT, () => {
    console.log(`Express app listening to PORT ${PORT}`);
})