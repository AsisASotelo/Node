const startupDebugger = require("debug")("app:startup");
const dbDebugger = require('debug')('app:db');
const config = require("config");
const morgan = require("morgan");
const helmet = require('helmet');
const Joi = require("@hapi/joi");
const logger = require('./middleware/logger');
const courses=require('./routes/courses')
const home = require('./routes/home')
const express = require("express");
const app = express();

app.set("view engine",'pug')
app.set("views","./views")



console.log(`NODE_ENV = ${process.env.NODE_ENV}`)
console.log(`app = ${app.get('env')}`)

//Activate JSON

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/',home)
app.use('/api/courses',courses)
app.use(helmet())

console.log("Application Name: " + config.get('name'));
console.log("Mail Server: "  + config.get('mail.host'));
console.log("Mail Password: "  + config.get('mail.password'));

if(app.get('env') === 'development') {
    app.use(morgan('tiny'))
    startupDebugger('Morgan Enabled .... ') // This is a message from debug
    
}

//Debug Work

dbDebugger('Connected to the Database ...');





// CREATING A MIDDLEWARE FUNCTION

app.use(function(req, res, next){
    console.log("Logging ...")
    next();
})



// App's HTTP Request



// Takes two arguments 
// This req object has a lot of useful properties
// These properties are found in the express api documentation

// Here the server returns the entire course array.


// Multiple Parameters 

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params)
})



// PORT

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on Port ${port} ...`)
});