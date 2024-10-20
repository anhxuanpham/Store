const express = require('express');
const home = require('./routes/home.js');
const path = require('path');
const register = require('./routes/register.js');
const mongoose = require('mongoose');

// Updated Mongoose connection using Promises
mongoose.connect('mongodb://localhost:27017/store')
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log('Database connection failed');
        console.error(err);
    });

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', home);
app.use('/register', register);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});