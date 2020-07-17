const config = require("config")
const morgan = require("morgan")
const helmet = require('helmet')
const Joi = require("@hapi/joi")
const logger = require('./logger')
const express = require("express");
const app = express();

console.log(`NODE_ENV = ${process.env.NODE_ENV}`)
console.log(`app = ${app.get('env')}`)

//Activate JSON

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(helmet())

console.log("Application Name: " + config.get('name'));
console.log("Mail Server: "  + config.get('mail.host'));
console.log("Mail Password: "  + config.get('mail.password'));

if(app.get('env') === 'development') {
    app.use(morgan('tiny'))
    console.log("Using Morgan")
    
}




// CREATING A MIDDLEWARE FUNCTION

app.use(function(req, res, next){
    console.log("Logging ...")
    next();
})



//Courses Array

const courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
]
// App's HTTP Request

app.get("/", (req, res) => {

    res.send("Hello World"); // This function is called a route handler

})

// Takes two arguments 
// This req object has a lot of useful properties
// These properties are found in the express api documentation

// Here the server returns the entire course array.
app.get("/api/courses", (req, res) => {
    res.send(courses)

})

//Here the server returns a unique course array.

app.get('/api/courses/:id', (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(! course) return res.status(404).send('The course with the given ID was not found.');

    res.send(course);
 
})


// Handling HTTP Posts With Validation
app.post('/api/courses', (req,res) => {

    const {error} = validateCourse(req.body);

    if(error) return  res.status(400).send(result.error);
        //400 Bad Request
       
        


   

    
    const course= {
        id:courses.length +1,
        name:req.body.name,        
    };

    courses.push(course);
    res.send(course); // This helps us know that the object has been set.

});


// Handling Updates to Our Resources with PUT

app.put('/api/courses/:id',(req,res) => {
    // Look up the Course
    // If not existing, 404, otherwise validated 
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(! course) return res.status(404).send('The course with the given ID was not found.');
    

    //Validate
    
   const result = validateCourse(req.body);
   const {error} = validateCourse(req.body);

    if(error) return res.status(400).send(result.error);
        //400 Bad Request
       
    

    //If invalid, return 400 - Bad Reqeust
    // Return the updated Course
    course.name = req.body.name;
    res.send(course);

});

function validateCourse(course){
    const schema =Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);

}

//Hanling Delete Requests

app.delete('/api/courses/:id', (req,res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(! course) return res.status(404).send('The course with the given ID was not found.');
 

    // Delete part

    const index = courses.indexOf(course);
    courses.splice(index,1)
    res.send(course)

})

// Multiple Parameters 

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params)
})



// PORT

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on Port ${port} ...`)
});