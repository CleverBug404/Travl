const mongoose = require('mongoose');
const readLine = require('readline');
const host = process.env.DB_HOST || '127.0.0.1:27017'
let dbURI = `mongodb://${host}/travlr`;


mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout( () => mongoose.connect(dbURI, {
        userNewUrlParser: true,
        useCreateIndex: true
    }), 1000)
}

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

if (process.platform === 'win32'){
    const rl = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        process.emit("SIGINT");
    })
}

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

//For nodemon restart
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () =>{
        process.kill(process.pid, 'SIGUSR2');
    });
});

//For app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

//For Heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

connect();

//bring in the Mongoose schema
require('./models/travlr');