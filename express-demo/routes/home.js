const express = require('express');
const router = express.Router();



router.get("/", (req, res) => {

    res.render("index",{title: 'My Express App', message:'hello'})



    // res.send("Hello World"); // This function is called a route handler

})

module.exports = router;