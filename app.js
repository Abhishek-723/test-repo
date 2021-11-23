const express = require('express');
const app = express();
const Routes = require('./Routes/router');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Auth = require('./Routes/auth');

dotenv.config();

const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded( {extended: false}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

require('./passport')(passport);

mongoose.connect('mongodb://localhost:27017/gAuth', {
    useNewUrlParser: true,
}, () => {
    console.log('connected to the db');
})

app.use(passport.initialize());
app.use(passport.session());
app.use('/', Routes);
app.use('/auth', Auth);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})