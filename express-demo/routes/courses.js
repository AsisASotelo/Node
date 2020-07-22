const express = require("express");
const router = express.Router();



//Courses Array

const courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
]

router.get("/", (req, res) => {
    res.send(courses)

})

//Here the server returns a unique course array.

router.get('/:id', (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(! course) return res.status(404).send('The course with the given ID was not found.');

    res.send(course);
 
})


// Handling HTTP Posts With Validation
router.post('/', (req,res) => {

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

router.put('/:id',(req,res) => {
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

router.delete('/:id', (req,res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(! course) return res.status(404).send('The course with the given ID was not found.');
 

    // Delete part

    const index = courses.indexOf(course);
    courses.splice(index,1)
    res.send(course)

})

module.exports = router;