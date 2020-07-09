const express = require("express");
const app = express();


// App's HTTP Request

app.get("/", (req, res) => {

    res.send("Hello World"); // This function is called a route handler

})

// Takes two arguments 
// This req object has a lot of useful properties
// These properties are found in the express api documentation

// We set up a listener on a port
app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3, 4])

})

//Here the 

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
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