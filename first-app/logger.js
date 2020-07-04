const EventEmitter = require('events'); // This stores a class
// const emitter = new EventEmitter(); // Class is like Human, Object is John

var url = 'http://mylogger.io/log'

class Logger extends EventEmitter{ // This is a method
    
    log(message){
        console.log(message);
        this.emit("messageLogged",{id:1,url:"https://"})
    }
}


module.exports=Logger