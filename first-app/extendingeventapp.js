const EventEmitter = require('events')
const emitter = new EventEmitter();

//Register Listener 





const Logger = require('./logger');
const logger = new Logger();


// Register a listener with initiated class

logger.on('messageLogged', (arg)=> {
    console.log("Listener Called",arg)
});

// You must call the class method to call the object method

logger.log("message")

