// The Path Module

// The OS Module


// The File System Module 

const fs = require('fs')
var dirList = fs.readdirSync('./') // The Synchronous Function

var dirLista = fs.readdir('./', function (err, files) {

    // Here in the body we check if the function got an err or files back
    // Only one will have a value
    if (err) {
        console.log('Error', err);

    } else console.log("The Asynchronous Method : ", files)
})


console.log(`The Synchronous Method : ${dirList}`)


// The Events Module

const EventEmitter = require('events'); // This stores a class
const emitter = new EventEmitter(); // Class is like Human, Object is John

//Register a Listener

emitter.on('MessageLogged', (arg) => { // This is the object argument passed by the emmiter
    console.log("Listener Called");
    console.log(arg)
})

//Raise an Event 

emitter.emit('MessageLogged',{id:1, url:"http://"}) // Make a noise, produce -signalling that event has happened 

// Raise: logging (data:message)

emitter.on('Logging', (arg)=>{
    console.log(arg)
})

emitter.emit('Logging',{id:1234, url:"http://"})