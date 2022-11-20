const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
const dbURI = `mongodb://${host}/travlr`;
const readLine = require('readline');

mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout( () => mongoose.connect(dbURI, {
        userNewUrlParser: true,
        useCreateIndex: true
    }), 1000)
}

mongoose.connection.on('connected', () => {
});

mongoose.connection.on('error', err => {
});

mongoose.connection.on('disconnected', () => {
});

if (process.platform === 'win32'){
}

const gracefulShutdown = (msg, callback) => {
};

//For nodemon restart
process.once('SIGUSR2', () => {
});

//For app termination
process.on('SIGINT', () => {
});

//For Heroku app termination
process.on('SIGTERM', () => {
});

connect();

//bring in the Mongoose schema
require('./travlr');