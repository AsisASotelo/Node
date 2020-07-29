const mongoose = require('mongoose')



mongoose.connect("mongodb://localhost/playground", {
        useNewUrlParser: true,
        useUnifiedTopology:true
    
    
    })
    .then(()=>console.log('Connected to MongoDB ...'))
    .catch(err=>console.error("Could not connect to MongoDB",err))





    const courseSchema = new mongoose.Shema({
        name:String,
        author:String,
        tag:[String],
        date:{ type:Date,default: Date.now},
        isPublished:Boolean
    
    })

    const Course = mongoose.model('Course',courseSchema);

    const course = new Course({

    });





